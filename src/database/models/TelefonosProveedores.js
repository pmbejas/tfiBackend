import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class TelefonosProveedores extends Model {}
TelefonosProveedores.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    numero: { type: DataTypes.STRING(15), allowNull: false },
    proveedorId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Proveedores', key: 'id' } },
    tipoTelefonoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'TipoTelefonos', key: 'id' } },
    observaciones: { type: DataTypes.STRING(100), allowNull: true }
},
{
    sequelize,
    modelName: "TelefonosProveedores",
    tableName: "telefonoproveedores",
});

export default TelefonosProveedores;