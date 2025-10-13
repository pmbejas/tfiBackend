import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class DomicilioClientes extends Model {}
DomicilioClientes.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
    linea1: { type: DataTypes.STRING(50), allowNull: false },
    linea2: { type: DataTypes.STRING(50), allowNull: true },
    ciudadId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Ciudades', key: 'id' } },
    clienteId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Clientes', key: 'id' } }
},
{
    sequelize,
    modelName: "DomicilioClientes",
    tableName: "domicilioclientes",
});

export default DomicilioClientes;