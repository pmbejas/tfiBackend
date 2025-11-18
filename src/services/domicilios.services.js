import { QueryTypes } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";

const { TelefonosUsuarios } = models;

export const getDomiciliosByUserId = async (userId) => {
  const query = `SELECT du.*, c.name as nombreCiudad, p.id as provinciaId
                  FROM DomicilioUsuarios du
                  JOIN Ciudades c ON du.ciudadId = c.id
                  JOIN Provincias p ON c.provinciaId = p.id
                  WHERE userId = :userId`;
  try {
    const domicilios = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { userId },
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
