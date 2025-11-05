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