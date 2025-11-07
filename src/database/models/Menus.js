import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Menus extends Model {}
Menus.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING(25), allowNull: false },
    url: { type: DataTypes.STRING(25), allowNull: true },
    icon: { type: DataTypes.STRING(20), allowNull: false },
    havelink: { type: DataTypes.BOOLEAN, allowNull: false },
    parentId: { type: DataTypes.INTEGER, allowNull: true },
    orden: { type: DataTypes.TINYINT, allowNull: false },
},
{
    sequelize,
    modelName: "Menus",
    tableName: "menus"
});

export default Menus;