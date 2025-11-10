import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Preferencias extends Model {}
Preferencias.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Users', key: 'id' } },
    darkMode: { type: DataTypes.BOOLEAN, allowNull: false, },
    profilePicture: { type: DataTypes.STRING(22), allowNull: true }
},
{
    sequelize,
    modelName: "Preferencias",
    tableName: "preferencias"
});

export default Preferencias;