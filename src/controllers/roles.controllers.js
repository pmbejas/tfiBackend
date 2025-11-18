import { UserRolesService } from "../services/services.index.js";

export const getRoles = async (req, res) => {
    try {
        const roles = await UserRolesService.getRoles();
        return res.status(roles.responseCode).json({
      success: roles.success,
      message: roles.message,
      data: roles.data ?? [],
    });
  } catch (error) {
    console.error("Error en getusers:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener usuarios",
    });
  }
}

export const createRoles = async (req, res) => {
  try {
    const rol = req.body;
    const required = [
      "name",
    ];
    const missing = required.filter((campo) => !rol?.[campo]);
    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Faltan campos obligatorios: ${missing.join(", ")}`,
      });
    }

    const resultado = await UserRolesService.createRoles(rol);
    return res.status(resultado.responseCode).json(resultado);
  } catch (error) {
    console.error("Error:", error);
    return res.status(400).json({
      success: false,
      message: error.message || "Error al crear el rol",
    });
  }
};

export const getPermisosByRolId = async (req, res) => {
  try {
    const permisos = await UserRolesService.getPermisosByRolId(req.params.id);  
    return res.status(permisos.responseCode).json({
      success: permisos.success,
      message: permisos.message,
      data: permisos.data ?? [],
    });
  } catch (error) {
    console.error("Error en getPErmisosByRolId:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener los permisos del usuario",
    });
  }
};

export const updatePermisosByRolId = ( async (req, res) => {
  try {
    const permisos = await UserRolesService.updatePermisosByRolId(req.body);
    return res.status(permisos.responseCode).json({
      success: permisos.success,
      responseCode: permisos.responseCode,
      message: permisos.message,
      data: permisos.data ?? [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
})

export const deleteRolById = async (req, res) => {
  try {
    const resultado = await UserRolesService.deleteRolById(req.params.idRol);
    return res.status(resultado.responseCode).json(resultado);
  } catch (error) {
    console.error("Error en deleteRolById:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al eliminar el rol",
    });
  }
};
