import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class UserRoles extends Model {}
UserRoles.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(20), allowNull: false, unique: true },
},
{
    sequelize,
    modelName: "UserRoles",
    tableName: "userroles"
}
);

export default UserRoles;

