import { sequelize } from '../config.js';
import UserRoles from './UserRoles.js';
import Users from './Users.js';
import Passwords from './Passwords.js';

function aplicarRelaciones() {
  Users.belongsTo(UserRoles, {
    foreignKey: 'userRole',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'userRol'
  });

  Users.hasOne(Passwords, {
    foreignKey: 'userId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'userPassword'
  });

  UserRoles.hasMany(Users, {
    foreignKey: 'userRole',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'users'
  });

  Passwords.belongsTo(Users, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: 'passwordUser'
  });
} 

aplicarRelaciones();

export const models = {
  Users,
  UserRoles
};

export { sequelize };