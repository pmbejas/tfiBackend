import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Vendedores extends Model {}
Vendedores.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(20), allowNull: false, unique: true },
},
{
    sequelize,
    modelName: "Vendedores",
    tableName: "vendedores"
}
);

export default Vendedores;
