import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Permisos extends Model {}
Permisos.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Users', key: 'id' } },
    menuId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Menus', key: 'id' } },
},
{
    sequelize,
    modelName: "Permisos",
    tableName: "permisos"
});

export default Permisos;