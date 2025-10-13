import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Categorias extends Model {}
Categorias.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
},
{
    sequelize,
    modelName: "Categorias",
    tableName: "categorias"
});

export default Categorias;