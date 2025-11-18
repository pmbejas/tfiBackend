import { QueryTypes } from 'sequelize';

import { models, sequelize } from '../database/models/Relaciones.js';
const { Productos } = models;

export const getProductos = async () => {
    const query = `SELECT productos.*, marcas.name as marcaName, 
                        categorias.name as categoriaName
                        FROM productos
                        JOIN marcas ON productos.marcaId = marcas.id
                        JOIN categorias ON productos.categoriaId = categorias.id;`; 
    try {
        const productos = await sequelize.query(
            query,
            { type: QueryTypes.SELECT }
        );
        if (productos.length === 0) {
            return { success: false, responseCode:204, message: 'No Content', data: null};
        }
        return { success: true, responseCode:200, message: 'Datos Encontrados', data: productos};
        
    } catch (error) {
        console.error('Error en productosServices.getProductos:', error);
        throw error;
    }
} 
