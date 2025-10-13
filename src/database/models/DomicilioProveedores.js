import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class DomicilioProveedores extends Model {}
DomicilioProveedores.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
    linea1: { type: DataTypes.STRING(50), allowNull: false },
    linea2: { type: DataTypes.STRING(50), allowNull: true },
    ciudadId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Ciudades', key: 'id' } },
    proveedorId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Proveedores', key: 'id' } }
},
{
    sequelize,
    modelName: "DomicilioProveedores",
    tableName: "domicilioproveedores",
});

export default DomicilioProveedores;