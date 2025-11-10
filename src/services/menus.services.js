import { Op } from "sequelize";
import { models } from "../database/models/Relaciones.js";
import { createMenuTree } from "../utilities/createMenuTree.js";
const { Menus, Permisos } = models;

export const getMenus = async () => {
  try {
    const menus = await Menus.findAll({
      where: { deletedAt: null },
      order: [["orden", "ASC"]],
    });
    if (menus.length === 0) {
      return {
        success: false,
        responseCode: 204,
        message: "No Content",
        data: null,
      };
    }
    const menuTree = createMenuTree(menus);
    return {
      success: true,
      responseCode: 200,
      message: "Datos Encontrados",
      data: menuTree,
    };
  } catch (error) {
    console.error("Error en menusServices.getMenus:", error);
    throw error;
  }
};

export const getMenusByUserId = async (userId) => {
  try {
    const menus = await Menus.findAll({
      include: [
        {
          model: Permisos,
          as: "FKMenusPermisos",
          required: true,
          attributes: [],
          where: { userId },
        },
      ],
      order: [["orden", "ASC"]],
    });
    if (menus.length === 0) {
      return {
        success: false,
        responseCode: 204,
        message: "No Content",
        data: null,
      };
    }
    const filteredMenus = createMenuTree(menus);
    return {
      success: true,
      responseCode: 200,
      message: "Datos Encontrados",
      data: filteredMenus,
    };
  } catch (error) {
    console.error("Error en menusServices.getMenuByUserId:", error);
    throw error;
  }
};

export const getPermisosByUserId = async (userId) => {
  try {
    const permisos = await Permisos.findAll({
      where: { userId },
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

export const updatePermisosByUserId = async (datos) => {
  try {
    const userId = datos[0].userId;
    const respuesta = await getPermisosByUserId(userId);
    const permisosActuales = respuesta.data ? respuesta.data?.map((datos) => ({
      userId: datos.dataValues.userId,
      menuId: datos.dataValues.menuId,
    })) : [];

    const agregar = datos.filter(
      (dato) =>
        !permisosActuales.some(
          (permisoActual) =>
            permisoActual.menuId === dato.menuId &&
            permisoActual.userId === dato.userId
        )
    );

    const eliminar = permisosActuales.filter(
      (permisoActual) =>
        !datos.some(
          (dato) =>
            dato.menuId === permisoActual.menuId &&
            dato.userId === permisoActual.userId
        )
    );

    await Permisos.bulkCreate(
      agregar.map((elemento) => ({ userId, menuId: elemento.menuId })),
      {
        ignoreDuplicates: true,
      }
    );
    await Permisos.destroy({
      where: {
        [Op.or]: eliminar.map((elemento) => ({ userId: elemento.userId, menuId: elemento.menuId })),
      },
      force: true,
    });

    return {
      success: true,
      responseCode: 200,
      message: "Datos Actualizados",
      data: null,
    };
  } catch (error) {
    console.log(error.message);
  }
};
