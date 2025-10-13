import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Ciudades extends Model {}
Ciudades.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    codigopostal: { type: DataTypes.STRING(8), allowNull: false },
    provinciaId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Provincias', key: 'id' } },
},
{
    sequelize,
    modelName: "Ciudades",
    tableName: "ciudades"
}
);

export default Ciudades;
