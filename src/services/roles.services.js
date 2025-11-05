import { QueryTypes } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";
const { UserRoles } = models;

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
        console.error("Error en rolesServices.getRoles:", error);
        throw error;
    }
}


