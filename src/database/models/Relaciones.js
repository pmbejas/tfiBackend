import { sequelize } from '../config.js';
import UserRoles from './UserRoles.js';
import Users from './Users.js';
import Passwords from './Passwords.js';
import PasswordState from './PasswordState.js';
import CondicionIva from './CondicionIva.js';
import Clientes from './Clientes.js';
import Proveedores from './Proveedores.js';
import TipoTelefonos from './TipoTelefonos.js';
import TelefonosClientes from './TelefonosClientes.js';
import TelefonosProveedores from './TelefonosProveedores.js';
import Provincias from './Provincias.js';
import Ciudades from './Ciudades.js';
import DomicilioProveedores from './DomicilioProveedores.js';
import DomicilioClientes from './DomicilioClientes.js';
import Vendedores from './Vendedores.js';
import Marcas from './Marcas.js';
import Categorias from './Categorias.js';
import Productos from './Productos.js';
import StockProductos from './StockProductos.js';
import Sucursales from './Sucursales.js';
import DescuentoClientes from './DescuentoClientes.js';
import Ventas from './Ventas.js';
import DetalleVentas from './DetalleVentas.js';
import Compras from './Compras.js';
import DetalleCompras from './DetalleCompras.js';

function aplicarRelaciones() {

 /* Definición de relaciones respecto a USERS y PASSWORD */

  Users.belongsTo(UserRoles, {
    foreignKey: 'userRole',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKUsersUserRoles'
  });

  Users.hasOne(Passwords, {
    foreignKey: 'userId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKUsersPasswords'
  });

  UserRoles.hasMany(Users, {
    foreignKey: 'userRole',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKUserRolesUsers'
  });

  Passwords.belongsTo(Users, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: 'FKPasswordsUsers'
  });

  Passwords.belongsTo(PasswordState, {
    foreignKey: 'stateId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKPasswordsPasswordState'
  });

  PasswordState.hasMany(Passwords, {
    foreignKey: 'stateId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKPasswordStatePasswords'
  });

   /* Definición de relaciones respecto a CLIENTES Y PROVEEDORES */
   
  Clientes.belongsTo(CondicionIva, {
    foreignKey: 'condicionIvaId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKClientesCondicionIva'
  });

  Clientes.hasMany(TelefonosClientes, {
    foreignKey: 'clienteId',
    sourceKey: 'id', 
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKClientesTelefonosClientes'
  });

  Clientes.hasMany(DomicilioClientes, {
    foreignKey: 'clienteId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKClientesDomicilioClientes'
  });

  Clientes.hasMany(DescuentoClientes, {
    foreignKey: 'clienteId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKClientesDescuentoClientes'
  });

  Clientes.hasMany(Ventas, {
    foreignKey: 'clienteId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKClientesVentas'
  });

  Proveedores.belongsTo(CondicionIva, {
    foreignKey: 'condicionIvaId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProveedoresCondicionIva'
  });

  Proveedores.hasMany(TelefonosProveedores, {
    foreignKey: 'proveedorId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKProveedoresTelefonosProveedores'
  });

  Proveedores.hasMany(DomicilioProveedores, {
    foreignKey: 'proveedorId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKProveedoresDomicilioProveedores'
  });

  Proveedores.hasMany(Compras, {
    foreignKey: 'proveedorId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProveedoresCompras'
  });

  CondicionIva.hasMany(Clientes, {
    foreignKey: 'condicionIvaId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKCondicionIvaClientes'
  });

  CondicionIva.hasMany(Proveedores, {
    foreignKey: 'condicionIvaId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKCondicionIvaProveedores'
  });

  TelefonosClientes.belongsTo(Clientes, {
    foreignKey: 'clienteId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKTelefonosClientesClientes'
  });

  TelefonosClientes.belongsTo(TipoTelefonos, {
    foreignKey: 'tipoTelefonoId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKTelefonosClientesTipoTelefonos'
  });

  DomicilioClientes.belongsTo(Ciudades, {
    foreignKey: 'ciudadId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKDomicilioClientesCiudades'
  });

  DomicilioClientes.belongsTo(Clientes, {
    foreignKey: 'clienteId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKDomicilioClientesClientes'
  });

  TelefonosProveedores.belongsTo(Proveedores, {
    foreignKey: 'proveedorId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKTelefonosProveedoresProveedores'
  });

  TelefonosProveedores.belongsTo(TipoTelefonos, {
    foreignKey: 'tipoTelefonoId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKTelefonosProveedoresTipoTelefonos'
  });

  DomicilioProveedores.belongsTo(Ciudades, {
    foreignKey: 'ciudadId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKDomicilioProveedoresCiudades'
  });

  DomicilioProveedores.belongsTo(Proveedores, {
    foreignKey: 'proveedorId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKDomicilioProveedoresProveedores'
  });

  TipoTelefonos.hasMany(TelefonosClientes, {
    foreignKey: 'tipoTelefonoId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKTipoTelefonosTelefonosClientes'
  });

  TipoTelefonos.hasMany(TelefonosProveedores, {
    foreignKey: 'tipoTelefonoId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKTipoTelefonosTelefonosProveedores'
  });

  Provincias.hasMany(Ciudades, {
    foreignKey: 'provinciaId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProvinciasCiudades'
  });

  Ciudades.belongsTo(Provincias, {
    foreignKey: 'provinciaId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKCiudadesProvincias'
  });

  Ciudades.hasMany(DomicilioProveedores, {
    foreignKey: 'ciudadId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKCiudadesDomicilioProveedores'
  });
  
  Ciudades.hasMany(DomicilioClientes, {
    foreignKey: 'ciudadId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKCiudadesDomicilioClientes'
  });

  DescuentoClientes.belongsTo(Clientes, {
    foreignKey: 'clienteId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKDescuentoClientesClientes'
  });

     /* Definición de relaciones respecto a PRODUCTOS */

  Productos.belongsTo(Categorias, {
    foreignKey: 'categoriaId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProductosCategorias'
  });

  Productos.belongsTo(Marcas, {
    foreignKey: 'marcaId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProductosMarcas'
  });

  Productos.hasMany(StockProductos, {
    foreignKey: 'productoId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKProductosStockProductos'
  });

  Productos.hasMany(DetalleVentas, {
    foreignKey: 'productoId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProductosDetalleVentas'
  });

    Productos.hasMany(DetalleCompras, {
    foreignKey: 'productoId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKProductosDetalleCompras'
  });

  StockProductos.belongsTo(Productos, {
    foreignKey: 'productoId',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKStockProductosProductos'
  });

  StockProductos.belongsTo(Sucursales, {
    foreignKey: 'idSucursal',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKStockProductosSucursales'
  });

  Categorias.hasMany(Productos, {
    foreignKey: 'categoriaId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKCategoriasProductos'
  });

  Marcas.hasMany(Productos, {
    foreignKey: 'marcaId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKMarcasProductos'
  });

  Sucursales.hasMany(StockProductos, {
    foreignKey: 'idSucursal',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKSucursalesStockProductos'
  });

     /* Definición de relaciones respecto a Ventas y Compras */

  Vendedores.hasMany(Ventas, {
    foreignKey: 'vendedorId',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKVendedoresVentas'
  });

  Ventas.belongsTo(Clientes, {
    foreignKey: 'clienteId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKVentasClientes'
  });

  Ventas.belongsTo(Vendedores, {
    foreignKey: 'vendedorId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKVentasVendedores'
  });
  
  Ventas.hasMany(DetalleVentas, {
    foreignKey: 'idVenta',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKVentasDetalleVentas'
  });
  
  DetalleVentas.belongsTo(Ventas, {
    foreignKey: 'idVenta',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKDetalleVentasVentas'
  });
  
  DetalleVentas.belongsTo(Productos, {
    foreignKey: 'productoId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKDetalleVentasProductos'
  });

  DetalleCompras.belongsTo(Compras, {
    foreignKey: 'idCompra',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKDetalleComprasCompras'
  });

  DetalleCompras.belongsTo(Productos, {
    foreignKey: 'productoId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKDetalleComprasProductos'
  });

  Compras.belongsTo(Proveedores, {
    foreignKey: 'proveedorId',
    targetKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    as: 'FKComprasProveedores'
  });

  Compras.hasMany(DetalleCompras, {
    foreignKey: 'idCompra',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'FKComprasDetalleCompras'
  });
 
} 


aplicarRelaciones();

export const models = {
  Users,
  UserRoles,
  Passwords,
  PasswordState,
  CondicionIva,
  Clientes,
  Proveedores,
  TipoTelefonos,
  TelefonosClientes,
  TelefonosProveedores,
  Provincias,
  Ciudades,
  DomicilioProveedores,
  DomicilioClientes,
  DescuentoClientes,
  Vendedores,
  Productos,
  Marcas,
  Categorias,
  StockProductos,
  Sucursales,
  Ventas,
  DetalleVentas,
  Compras,
  DetalleCompras
};

export { sequelize };