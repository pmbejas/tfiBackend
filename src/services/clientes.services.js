import { QueryTypes } from 'sequelize';

import { models, sequelize } from '../database/models/Relaciones.js';
const { Clientes } = models;

export const getClientes = async () => {
    const query = `SELECT * FROM clientes;`; 
    try {
        const clientes = await sequelize.query(
            query,
            { type: QueryTypes.SELECT }
        );
        if (clientes?.length === 0) {
            return { success: false, responseCode:204, message: 'No Content', data: null};
        }
        return { success: true, responseCode:200, message: 'Datos Encontrados', data: clientes};
        
    } catch (error) {
        console.error('Error en clientesServices.getClientes:', error);
        throw error;
    }
} 

export const getClienteById = async (idCliente) => {
    const query = `SELECT * FROM clientes
                    WHERE clientes.id = :idCliente;`; 
    try {
        const cliente = await sequelize.query(
            query, { 
                replacements: { idCliente }, 
                type: QueryTypes.SELECT
            }
        );
        if (cliente?.length === 0) {
            return { success: false, responseCode:204, message: 'No Content', data: null};
        }
        return { success: true, responseCode:200, message: 'Datos Encontrados', data: cliente[0]};
        
    } catch (error) {
        console.error('Error en clientesServices.getClienteById:', error);
        throw error;
    }
} 