import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class CondicionIva extends Model {}
CondicionIva.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
},
{
    sequelize,
    modelName: "CondicionIva",
    tableName: "condicioniva"
});

export default CondicionIva;