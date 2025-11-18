import { QueryTypes } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";

const { TelefonosUsuarios } = models;

export const getTelefonoByUserId = async (userId) => {
  try {
    const telefono = await TelefonosUsuarios.findAll({ where: {userId}});

    console.log(telefono)

    if (telefono?.length === 0) {
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
      data: telefono,
    };
  } catch (error) {
    console.error("Error en proveedorService.getTelefonoByUserId:", error);
    throw error;
  }
};
