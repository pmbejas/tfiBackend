import { Sequelize } from 'sequelize';
import config from '../config.js';

export const sequelize = new Sequelize(
    config.database_name,
    config.database_user,
    config.database_pass,
  {
    host: config.database_host,
    port: config.database_port || 3306,
    dialect: config.database_dialect || 'mysql',
    logging: config.database_logging === 'true' ? console.log : false,
    define: {
      timestamps: false, // controlaremos timestamps a mano
      underscored: false,
      freezeTableName: true,
    }
  }
);

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Se ha conectado al servidor de Base de Datos MariaDB');
  } catch (e) {
    console.error('Error de conexión:', e.message);
  }
}

