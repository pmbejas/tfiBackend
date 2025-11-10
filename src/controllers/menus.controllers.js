import { MenusService } from "../services/services.index.js";

export const getMenus = async (req, res) => {
  try {
    const menus = await MenusService.getMenus();
    return res.status(menus.responseCode).json({
      success: menus.success,
      message: menus.message,
      data: menus.data ?? [],
    });
  } catch (error) {
    console.error("Error en getusers:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener usuarios",
    });
  }
};

export const getMenusByUserId = async (req, res) => {
  try {
    const menus = await MenusService.getMenusByUserId(req.params.id);
    return res.status(menus.responseCode).json({
      success: menus.success,
      message: menus.message,
      data: menus.data ?? [],
    });
  } catch (error) {
    console.error("Error en getusers:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener usuarios",
    });
  }
};

export const getPermisosByUserId = async (req, res) => {
  try {
    const permisos = await MenusService.getPermisosByUserId(req.params.id);  
    return res.status(permisos.responseCode).json({
      success: permisos.success,
      message: permisos.message,
      data: permisos.data ?? [],
    });
  } catch (error) {
    console.error("Error en getPErmisosByUserId:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener los permisos del usuario",
    });
  }
};

export const updatePermisosByUserId = (async (req, res) => {
  try {
    const permisos = await MenusService.updatePermisosByUserId(req.body);
    return res.status(permisos.responseCode).json({
      success: permisos.success,
      responseCode: permisos.responseCode,
      message: permisos.message,
      data: permisos.data ?? [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener los permisos del usuario",
    });
  }
})
