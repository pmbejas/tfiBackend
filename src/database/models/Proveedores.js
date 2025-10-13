import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Proveedores extends Model {}
Proveedores.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
    cuit: { type: DataTypes.STRING(11), allowNull: true },
    condicionIvaId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'CondicionIva', key: 'id' } },
    observaciones: { type: DataTypes.TEXT, allowNull: true }
},
{
    sequelize,
    modelName: "Proveedores",
    tableName: "proveedores",
});

export default Proveedores;