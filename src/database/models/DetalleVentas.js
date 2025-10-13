import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class DetalleVentas extends Model {}
DetalleVentas.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    idVenta: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Ventas', key: 'id' } },
    productoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Productos', key: 'id' } },
    cantidad: { type: DataTypes.DECIMAL(7,2), allowNull: false },
    precioUnitario: { type: DataTypes.DECIMAL(10,2), allowNull: false },
},
{
    sequelize,
    modelName: "DetalleVentas",
    tableName: "detalleventas",
});

export default DetalleVentas;
