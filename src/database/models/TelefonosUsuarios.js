import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config.js";

class TelefonosUsuarios extends Model {}
TelefonosUsuarios.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    numero: { type: DataTypes.STRING(15), allowNull: false },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
    },
    idTipoTelefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "TipoTelefonos", key: "id" },
    },
  },
  {
    sequelize,
    modelName: "TelefonosUsuarios",
    tableName: "telefonousuarios",
  }
);

export default TelefonosUsuarios;
