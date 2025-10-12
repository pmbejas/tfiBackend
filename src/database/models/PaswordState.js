import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config.js";

class PasswordState extends Model {}
PasswordState.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(25), allowNull: false },
},
{
    sequelize,
    modelName: "PasswordState",
    tableName: "passwordstate",
});

export default PasswordState;