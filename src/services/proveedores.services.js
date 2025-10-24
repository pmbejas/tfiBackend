import { QueryTypes } from 'sequelize';

import { models, sequelize } from '../database/models/Relaciones.js';
const { Proveedores } = models;

export const getProveedores = async () => {
    const query = 'SELECT * FROM proveedores'; 
    try {
        const proveedores = await sequelize.query(
            query,
            { type: QueryTypes.SELECT }
        );
        if (proveedores.length === 0) {
            return { success: false, responseCode:204, message: 'No Content', data: null};
        }
        return { success: true, responseCode:204, message: 'Datos Encontrados', data: proveedores[0]};
        
    } catch (error) {
        console.error('Error en proveedorService.getProveedores:', error);
        throw error;
    }
} 
