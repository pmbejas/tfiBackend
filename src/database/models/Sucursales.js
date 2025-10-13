import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Sucursales extends Model {}
Sucursales.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(45), allowNull: false },
},
{
    sequelize,
    modelName: "Sucursales",
    tableName: "sucursales"
});

export default Sucursales;