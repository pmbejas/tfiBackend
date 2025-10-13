import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class DescuentoClientes extends Model {}
DescuentoClientes.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    clienteId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Clientes', key: 'id' } },
    porcentaje: { type: DataTypes.DECIMAL(5,2), allowNull: false },
    observaciones: { type: DataTypes.STRING(100), allowNull: true }
},
{
    sequelize,
    modelName: "DescuentoClientes",
    tableName: "descuentoclientes",
});

export default DescuentoClientes;