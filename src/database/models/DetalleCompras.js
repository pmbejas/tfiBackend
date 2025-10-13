import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class DetalleCompras extends Model {}
DetalleCompras.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    idCompra: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Compras', key: 'id' } },
    productoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Productos', key: 'id' } },
    cantidad: { type: DataTypes.DECIMAL(7,2), allowNull: false },
    precioUnitario: { type: DataTypes.DECIMAL(10,2), allowNull: false },
},
{
    sequelize,
    modelName: "DetalleCompras",
    tableName: "detallecompras",
});

export default DetalleCompras;