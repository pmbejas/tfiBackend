import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class TipoTelefonos extends Model {}
TipoTelefonos.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(20), allowNull: false, unique: true },
},
{
    sequelize,
    modelName: "TipoTelefonos",
    tableName: "tipotelefono"
}
);

export default TipoTelefonos;
