import { QueryTypes } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";

const { DomicilioUsuarios } = models;

export const getDomiciliosByUserId = async (userId) => {
  try {
    const domicilios = await DomicilioUsuarios.findAll({
        where: { userId },
    });
    if (domicilios.length === 0) {
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
      data: domicilios,
    };
  } catch (error) {
    console.error("Error en proveedorService.getDomiciliosByUserId:", error);
    throw error;
  }
};