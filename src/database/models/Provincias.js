import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config.js";

class Provincias extends Model {}
Provincias.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
},
{
    sequelize,
    modelName: "Provincias",
    tableName: "provincias",
});

export default Provincias;