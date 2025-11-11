import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class PermisosRoles extends Model {}
PermisosRoles.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    rolId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Roles', key: 'id' } },
    menuId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Menus', key: 'id' } },
},
{
    sequelize,
    modelName: "PermisosRoles",
    tableName: "permisosroles"
});

export default PermisosRoles;