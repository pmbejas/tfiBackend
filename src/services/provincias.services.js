import { QueryTypes } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";

const { Provincias } = models;

export const getProvincias = async () => {
  const query = "SELECT * from provincias";
  try {
    const provincias = await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    if (provincias.length === 0) {
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
      data: provincias,
    };
  } catch (error) {
    console.error("Error en proveedorService.getProvincias:", error);
    throw error;
  }
};
