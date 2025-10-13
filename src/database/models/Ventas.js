import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Ventas extends Model {}
Ventas.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    clienteId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Clientes', key: 'id' } },
    vendedorId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Vendedores', key: 'id' } },
    descuento: { type: DataTypes.DECIMAL(5,2), allowNull: false },
    totalVenta: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    nroRemito: { type: DataTypes.STRING(8), allowNull: true },
    nroFactura: { type: DataTypes.STRING(8), allowNull: true }
},
{
    sequelize,
    modelName: "Ventas",
    tableName: "ventas",
});

export default Ventas;