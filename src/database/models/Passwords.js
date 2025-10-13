import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Passwords extends Model {}
Passwords.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
    password: { type: DataTypes.STRING(255), allowNull: false},
    stateId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'PasswordState', key: 'id' } },
    expirationDate: { type: DataTypes.DATE, allowNull: false },
    resetToken: { type: DataTypes.STRING(100), allowNull: true },
},
{
    sequelize,
    modelName: "Passwords",
    tableName: "userpasswords",
});

export default Passwords;