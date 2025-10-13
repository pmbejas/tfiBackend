import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Compras extends Model {}
Compras.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    proveedorId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Proveedores', key: 'id' } },
    totalcompra: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    nroRemito: { type: DataTypes.STRING(8), allowNull: true },
    nroFactura: { type: DataTypes.STRING(8), allowNull: true }
},
{
    sequelize,
    modelName: "Compras",
    tableName: "compras",
});

export default Compras;