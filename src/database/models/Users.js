import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Users extends Model {}
Users.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userName: { type: DataTypes.STRING(40), allowNull: false },
    userMail: { type: DataTypes.STRING(60), allowNull: false, unique: true },
    userDate: { type: DataTypes.DATE, allowNull: false },
    userRole: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'UserRoles', key: 'id' } },
},
{
    sequelize,
    modelName: "Users",
    tableName: "users",
}
);


export default Users;