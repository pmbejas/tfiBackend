import { QueryTypes, Op } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";
import PermisosRoles from "../database/models/PermisosRoles.js";
const { UserRoles, } = models;

export const getRoles = async () => {
    try {
        const roles = await UserRoles.findAll();
        console.log(roles);
        if (roles) {
            return {
                success: true,
                responseCode: 200,
                message: "Datos Encontrados",
                data: roles,
            }
        } else {
            return {
                success: true,
                responseCode: 204,
                message: "Datos NO Encontrados",
                data: null,
            }
        }
    } catch (error) {
        console.error("Error en roles.services.getRoles:", error);
        throw error;
    }
}

export const createRoles = async (name) => {
  try {
    if (!name) throw new Error("Faltan campos obligatorios")    
    const nuevoRol = await UserRoles.create(name);
    return {
      success: true,
      responseCode: 201,
      message: "Rol creado correctamente",
      data: nuevoRol.get({ plain: true }),
    };
  } catch (error) {
    console.error("error en roles.services.createRoles:", error);
    throw error;
  }
};


export const getPermisosByRolId = async (rolId) => {
  try {
    const permisos = await PermisosRoles.findAll({
      where: { rolId },
    });
    if (permisos.length === 0) {
      return {
        success: false,
        responseCode: 204,
        message: "No Content",
        data: null,
      };
    }
    return {
      success: true,
      responseCode: 200,
      message: "Datos Encontrados",
      data: permisos,
    };
  } catch (error) {
    console.error("Error en menusServices.getPermisosByUserId:", error);
    throw error;
  }
};

export const updatePermisosByRolId = async (datos) => {
  try {
    const rolId = datos[0].rolId;
    const respuesta = await getPermisosByRolId(rolId);
    const permisosActuales = respuesta.data ? respuesta.data?.map((datos) => ({
      rolId: datos.dataValues.rolId,
      menuId: datos.dataValues.menuId,
    })) : [];
    const agregar = datos.filter(
      (dato) =>
        !permisosActuales.some(
          (permisoActual) =>
            permisoActual.menuId === dato.menuId &&
            permisoActual.rolId === dato.rolId
        )
    );
    const eliminar = permisosActuales.filter(
      (permisoActual) =>
        !datos.some(
          (dato) =>
            dato.menuId === permisoActual.menuId &&
            dato.rolId === permisoActual.rolId
        )
    );

    await PermisosRoles.bulkCreate(
      agregar.map((elemento) => ({ rolId, menuId: elemento.menuId })),
      {
        ignoreDuplicates: true,
      }
    );
    await PermisosRoles.destroy({
      where: {
        [Op.or]: eliminar.map((elemento) => ({ rolId: elemento.rolId, menuId: elemento.menuId })),
      },
      force: true,
    });

    return {
      success: true,
      responseCode: 200,
      message: "Permisos Actualizados",
      data: null,
    };

  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRolById = async (rolId) => {
  try {
    const resultado = await UserRoles.destroy({
      where: { id: rolId },
      force: true,
    });
    if (resultado === 0) {
      return {
        success: false,
        responseCode: 404,
        message: "Rol no encontrado",
        data: null,
      };
    }
    return {
      success: true,
      responseCode: 200,
      message: "Rol eliminado correctamente",
      data: null,
    };
  } catch (error) {
    console.error("Error en roles.services.deleteRolById:", error); 
    throw error;
  }
}

