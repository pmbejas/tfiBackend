import { models, sequelize } from "../database/models/Relaciones.js";
const { Menus, Permisos } = models;
import { createMenuTree } from "../utilities/createMenuTree.js";

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