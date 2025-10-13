import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class StockProductos extends Model {}
StockProductos.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    productoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Productos', key: 'id' } },
    idSucursal: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Sucursales', key: 'id' } },
    actual: { type: DataTypes.INTEGER(5), allowNull: false, defaultValue: 0 },
    minimo: { type: DataTypes.INTEGER(5), allowNull: false, defaultValue: 0 },
    maximo: { type: DataTypes.INTEGER(5), allowNull: false, defaultValue: 0 },
},
{
    sequelize,
    modelName: "StockProductos",
    tableName: "stockproductos"
});

export default StockProductos;