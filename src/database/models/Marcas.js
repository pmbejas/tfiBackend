import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Marcas extends Model {}
Marcas.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
},
{
    sequelize,
    modelName: "Marcas",
    tableName: "marcas"
});

export default Marcas;