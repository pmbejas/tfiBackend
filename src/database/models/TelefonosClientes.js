import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class TelefonosClientes extends Model {}
TelefonosClientes.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    numero: { type: DataTypes.STRING(15), allowNull: false },
    clienteId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Clientes', key: 'id' } },
    tipoTelefonoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'TipoTelefonos', key: 'id' } },
    observaciones: { type: DataTypes.STRING(100), allowNull: true }
},
{
    sequelize,
    modelName: "TelefonosClientes",
    tableName: "telefonocliente",
});

export default TelefonosClientes;