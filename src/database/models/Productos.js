import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Productos extends Model {}
Productos.init ({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(25), allowNull: false },
    categoriaId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Categorias', key: 'id' } },
    marcaId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Marcas', key: 'id' } },
    precioUnitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 },
    descripcion: { type: DataTypes.TEXT, allowNull: true },
},
{
    sequelize,
    modelName: "Productos",
    tableName: "productos"
});

export default Productos;