-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: tradyone
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `codigopostal` varchar(8) NOT NULL,
  `provinciaId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ciudades_prov` (`provinciaId`),
  CONSTRAINT `fk_ciudades_prov` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `cuit` varchar(11) NOT NULL,
  `condicionIvaId` int(11) NOT NULL,
  `observaciones` text DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cuit` (`cuit`),
  KEY `fk_clientes_iva` (`condicionIvaId`),
  CONSTRAINT `fk_clientes_iva` FOREIGN KEY (`condicionIvaId`) REFERENCES `condicioniva` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `proveedorId` int(11) NOT NULL,
  `nroRemito` varchar(8) DEFAULT NULL,
  `nroFactura` varchar(8) DEFAULT NULL,
  `totalCompra` decimal(10,2) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_compras_proveedor` (`proveedorId`),
  CONSTRAINT `fk_compras_proveedor` FOREIGN KEY (`proveedorId`) REFERENCES `proveedores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condicioniva`
--

DROP TABLE IF EXISTS `condicioniva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `condicioniva` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condicioniva`
--

LOCK TABLES `condicioniva` WRITE;
/*!40000 ALTER TABLE `condicioniva` DISABLE KEYS */;
/*!40000 ALTER TABLE `condicioniva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descuentoclientes`
--

DROP TABLE IF EXISTS `descuentoclientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descuentoclientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clienteId` int(11) NOT NULL,
  `porcentaje` decimal(5,0) NOT NULL DEFAULT 0,
  `observaciones` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_desc_cli` (`clienteId`),
  CONSTRAINT `fk_desc_cli` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descuentoclientes`
--

LOCK TABLES `descuentoclientes` WRITE;
/*!40000 ALTER TABLE `descuentoclientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `descuentoclientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallecompras`
--

DROP TABLE IF EXISTS `detallecompras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detallecompras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompra` int(11) NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad` int(4) NOT NULL DEFAULT 1,
  `precioUnitario` decimal(10,2) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_detcomp_producto` (`productoId`),
  KEY `fk_detcomp_compra` (`idCompra`),
  CONSTRAINT `fk_detcomp_compra` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_detcomp_producto` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallecompras`
--

LOCK TABLES `detallecompras` WRITE;
/*!40000 ALTER TABLE `detallecompras` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallecompras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalleventas`
--

DROP TABLE IF EXISTS `detalleventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalleventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idVenta` int(11) NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad` decimal(7,2) NOT NULL DEFAULT 1.00,
  `precioUnitario` decimal(10,2) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_detvent_producto` (`productoId`),
  KEY `fk_detvent_venta` (`idVenta`),
  CONSTRAINT `fk_detvent_producto` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`),
  CONSTRAINT `fk_detvent_venta` FOREIGN KEY (`idVenta`) REFERENCES `ventas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalleventas`
--

LOCK TABLES `detalleventas` WRITE;
/*!40000 ALTER TABLE `detalleventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalleventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicilioclientes`
--

DROP TABLE IF EXISTS `domicilioclientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domicilioclientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `linea1` varchar(50) NOT NULL,
  `linea2` varchar(50) DEFAULT NULL,
  `ciudadId` int(11) NOT NULL,
  `clienteId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_domicilioCliente_ciudad` (`ciudadId`),
  KEY `fk_domicilioCliente_cliente` (`clienteId`),
  CONSTRAINT `fk_domicilioCliente_ciudad` FOREIGN KEY (`ciudadId`) REFERENCES `ciudades` (`id`),
  CONSTRAINT `fk_domicilioCliente_cliente` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicilioclientes`
--

LOCK TABLES `domicilioclientes` WRITE;
/*!40000 ALTER TABLE `domicilioclientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `domicilioclientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicilioproveedores`
--

DROP TABLE IF EXISTS `domicilioproveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domicilioproveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `linea1` varchar(50) NOT NULL,
  `linea2` varchar(50) DEFAULT NULL,
  `ciudadId` int(11) NOT NULL,
  `proveedorId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_domprov_ciudad` (`ciudadId`),
  KEY `fk_domprov_proveedor` (`proveedorId`),
  CONSTRAINT `fk_domprov_ciudad` FOREIGN KEY (`ciudadId`) REFERENCES `ciudades` (`id`),
  CONSTRAINT `fk_domprov_proveedor` FOREIGN KEY (`proveedorId`) REFERENCES `proveedores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicilioproveedores`
--

LOCK TABLES `domicilioproveedores` WRITE;
/*!40000 ALTER TABLE `domicilioproveedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `domicilioproveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domiciliousuarios`
--

DROP TABLE IF EXISTS `domiciliousuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domiciliousuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `linea1` varchar(50) NOT NULL,
  `linea2` varchar(50) DEFAULT NULL,
  `ciudadId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_domiciliousuarios_usuarios` (`userId`),
  CONSTRAINT `fk_domiciliousuarios_usuarios` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domiciliousuarios`
--

LOCK TABLES `domiciliousuarios` WRITE;
/*!40000 ALTER TABLE `domiciliousuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `domiciliousuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(25) NOT NULL,
  `url` varchar(25) DEFAULT NULL,
  `icon` varchar(20) NOT NULL,
  `havelink` tinyint(1) NOT NULL,
  `parentId` int(11) DEFAULT NULL,
  `orden` tinyint(2) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'Home','/','Home',1,NULL,1,'2025-11-06 16:19:45','2025-11-06 16:44:34',NULL),(2,'Proveedores','/proveedores','Truck',0,NULL,2,'2025-11-06 16:20:11','2025-11-06 16:44:45',NULL),(3,'Listado','/proveedores/listado','',0,2,1,'2025-11-06 16:22:35','2025-11-06 22:09:50',NULL),(4,'Informes','/proveedores/informes','',0,2,2,'2025-11-06 16:23:23','2025-11-06 22:09:59',NULL),(5,'Produtos','/productos','PackageSearch',0,NULL,3,'2025-11-06 16:24:01','2025-11-06 16:45:04',NULL),(6,'Listado General','/productos/listado','',0,5,1,'2025-11-06 16:25:06','2025-11-06 16:45:07',NULL),(7,'Informes','/productos/informes','',0,5,2,'2025-11-06 16:25:06','2025-11-06 16:45:09',NULL),(8,'Categorias','/productos/categorias','',0,5,3,'2025-11-06 16:31:01','2025-11-06 16:45:11',NULL),(9,'Clientes','/clientes','BookUser',0,NULL,4,'2025-11-06 16:34:58','2025-11-06 16:46:36',NULL),(10,'Listado','/clientes/listado','',0,9,1,'2025-11-06 16:34:58','2025-11-06 16:45:26',NULL),(11,'Informes','/clientes/informes','',0,9,2,'2025-11-06 16:34:58','2025-11-06 16:45:29',NULL),(12,'Ventas','/ventas','BadgeDollarSign',0,NULL,5,'2025-11-06 16:40:01','2025-11-06 16:45:45',NULL),(13,'Nueva Venta','/ventas/nueva','',0,12,1,'2025-11-06 16:40:01','2025-11-06 16:45:49',NULL),(14,'Listado','/ventas/listado','',0,12,2,'2025-11-06 16:40:01','2025-11-06 16:45:51',NULL),(15,'Informes','/ventas/informes','',0,12,3,'2025-11-06 16:40:01','2025-11-06 16:45:54',NULL),(16,'Compras','/compras','ShoppingBasket',0,NULL,6,'2025-11-06 16:43:33','2025-11-06 16:45:58',NULL),(17,'Nueva Compra','/compras/nueva','',0,16,1,'2025-11-06 16:43:33','2025-11-06 16:46:00',NULL),(18,'Listado','/compras/listado','',0,16,2,'2025-11-06 16:43:33','2025-11-06 16:46:03',NULL),(19,'Informes','/compras/informes','',0,16,3,'2025-11-06 16:43:33','2025-11-06 16:46:06',NULL),(20,'Configuración','/settings','Settings',0,NULL,7,'2025-11-06 16:53:21','2025-11-06 17:09:07',NULL),(21,'Gestión de Cuentas','usuarios/gestionar','',0,20,1,'2025-11-06 16:53:21','2025-11-06 17:10:00',NULL),(22,'Seguridad','/usuarios/roles-permisos','',0,20,2,'2025-11-06 16:53:21','2025-11-07 07:23:52',NULL),(24,'Preferencias','/ajustes/preferencias','',0,20,4,'2025-11-06 22:09:09','2025-11-06 22:09:25',NULL);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passwordstate`
--

DROP TABLE IF EXISTS `passwordstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `passwordstate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passwordstate`
--

LOCK TABLES `passwordstate` WRITE;
/*!40000 ALTER TABLE `passwordstate` DISABLE KEYS */;
INSERT INTO `passwordstate` VALUES (1,'Activa',NULL,NULL,NULL),(2,'Bloqueada',NULL,NULL,NULL),(3,'Vencida',NULL,NULL,NULL),(4,'Reset',NULL,NULL,NULL);
/*!40000 ALTER TABLE `passwordstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permisos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `menuId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_permisos_usuarios` (`userId`),
  KEY `fk_permisos_menus` (`menuId`),
  CONSTRAINT `fk_permisos_menus` FOREIGN KEY (`menuId`) REFERENCES `menus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_permisos_usuarios` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (1,5,1,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(2,5,2,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(3,5,3,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(4,5,4,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(5,5,5,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(6,5,6,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(7,5,7,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(8,5,8,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(9,5,9,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(10,5,10,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(11,5,11,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(12,5,12,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(13,5,13,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(14,5,14,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(15,5,15,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(16,5,16,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(17,5,17,'2025-11-06 17:07:00','2025-11-06 19:45:11',NULL),(18,5,18,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(19,5,19,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(20,5,20,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(21,5,21,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(22,5,22,'2025-11-06 17:07:00','2025-11-06 17:07:00',NULL),(23,8,1,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(24,8,2,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(25,8,3,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(26,8,4,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(27,8,5,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(28,8,6,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(29,8,7,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(30,8,8,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(31,8,9,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(32,8,10,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(33,8,11,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(34,8,12,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(35,8,13,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(36,8,14,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(37,8,15,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(38,8,16,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(39,8,13,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(40,8,18,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(41,8,19,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(42,8,20,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(43,8,21,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(44,8,22,'2025-11-06 18:37:42','2025-11-06 18:37:42',NULL),(54,10,1,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(55,10,2,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(56,10,3,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(57,10,4,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(58,10,5,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(59,10,6,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(60,10,7,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(61,10,8,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(62,10,9,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(63,10,10,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(64,10,11,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(65,10,12,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(66,10,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(67,10,14,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(68,10,15,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(69,10,16,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(70,10,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(71,10,18,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(72,10,19,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(73,10,20,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(74,10,21,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(75,10,22,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(85,14,1,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(86,14,2,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(87,14,3,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(88,14,4,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(89,14,5,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(90,14,6,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(91,14,7,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(92,14,8,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(93,14,9,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(94,14,10,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(95,14,11,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(96,14,12,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(97,14,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(98,14,14,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(99,14,15,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(100,14,16,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(101,14,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(102,14,18,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(103,14,19,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(104,14,20,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(105,14,21,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(106,14,22,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(116,34,1,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(117,34,2,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(118,34,3,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(119,34,4,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(120,34,5,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(121,34,6,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(122,34,7,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(123,34,8,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(124,34,9,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(125,34,10,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(126,34,11,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(127,34,12,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(128,34,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(129,34,14,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(130,34,15,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(131,34,16,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(132,34,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(133,34,18,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(134,34,19,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(135,34,20,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(136,34,21,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(137,34,22,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(147,38,1,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(148,38,2,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(149,38,3,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(150,38,4,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(151,38,5,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(152,38,6,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(153,38,7,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(154,38,8,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(155,38,9,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(156,38,10,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(157,38,11,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(158,38,12,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(159,38,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(160,38,14,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(161,38,15,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(162,38,16,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(163,38,13,'2025-11-06 18:38:02','2025-11-06 18:38:02',NULL),(184,5,24,'2025-11-07 07:14:42','2025-11-07 07:14:42',NULL),(185,8,24,'2025-11-07 07:14:42','2025-11-07 07:14:42',NULL),(186,10,24,'2025-11-07 07:14:42','2025-11-07 07:14:42',NULL),(187,14,24,'2025-11-07 07:14:42','2025-11-07 07:14:42',NULL),(188,34,24,'2025-11-07 07:14:42','2025-11-07 07:14:42',NULL);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preferencias`
--

DROP TABLE IF EXISTS `preferencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preferencias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `darkMode` tinyint(1) NOT NULL,
  `profilePicture` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_preferencias_Usuarios` (`userId`),
  CONSTRAINT `fk_preferencias_Usuarios` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferencias`
--

LOCK TABLES `preferencias` WRITE;
/*!40000 ALTER TABLE `preferencias` DISABLE KEYS */;
INSERT INTO `preferencias` VALUES (1,5,1,NULL),(2,8,1,NULL),(3,10,1,NULL),(4,14,1,NULL),(5,34,0,NULL);
/*!40000 ALTER TABLE `preferencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `categoriaId` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precioUnitario` decimal(10,2) NOT NULL DEFAULT 0.00,
  `marcaId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_cat` (`categoriaId`),
  KEY `fk_productos_marca` (`marcaId`),
  CONSTRAINT `fk_productos_cat` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_productos_marca` FOREIGN KEY (`marcaId`) REFERENCES `marcas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `cuit` varchar(11) NOT NULL,
  `condicionIvaId` int(11) NOT NULL,
  `observaciones` text DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cuit` (`cuit`),
  KEY `fk_proveedores_iva` (`condicionIvaId`),
  CONSTRAINT `fk_proveedores_iva` FOREIGN KEY (`condicionIvaId`) REFERENCES `condicioniva` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockproductos`
--

DROP TABLE IF EXISTS `stockproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockproductos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productoId` int(11) NOT NULL,
  `actual` int(5) NOT NULL DEFAULT 0,
  `maximo` int(5) NOT NULL DEFAULT 0,
  `minimo` int(5) NOT NULL DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idSucursal` int(11) NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_stockproductos_sucursal` (`idSucursal`),
  KEY `fk_stockproductos_productos` (`productoId`),
  CONSTRAINT `fk_stockproductos_productos` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_stockproductos_sucursal` FOREIGN KEY (`idSucursal`) REFERENCES `sucursales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockproductos`
--

LOCK TABLES `stockproductos` WRITE;
/*!40000 ALTER TABLE `stockproductos` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sucursales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursales`
--

LOCK TABLES `sucursales` WRITE;
/*!40000 ALTER TABLE `sucursales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sucursales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonocliente`
--

DROP TABLE IF EXISTS `telefonocliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonocliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clienteId` int(11) NOT NULL,
  `numero` varchar(25) NOT NULL,
  `tipoTelefonoId` int(11) NOT NULL,
  `observaciones` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_telcli_cliente` (`clienteId`),
  KEY `fk_telcli_tipo` (`tipoTelefonoId`),
  CONSTRAINT `fk_telcli_cliente` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`),
  CONSTRAINT `fk_telcli_tipo` FOREIGN KEY (`tipoTelefonoId`) REFERENCES `tipotelefono` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonocliente`
--

LOCK TABLES `telefonocliente` WRITE;
/*!40000 ALTER TABLE `telefonocliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonocliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonoproveedores`
--

DROP TABLE IF EXISTS `telefonoproveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonoproveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proveedorId` int(11) NOT NULL,
  `numero` varchar(25) NOT NULL,
  `tipoTelefonoId` int(11) NOT NULL,
  `observaciones` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_telprov_proveedor` (`proveedorId`),
  KEY `fk_telprov_tipo` (`tipoTelefonoId`),
  CONSTRAINT `fk_telprov_proveedor` FOREIGN KEY (`proveedorId`) REFERENCES `proveedores` (`id`),
  CONSTRAINT `fk_telprov_tipo` FOREIGN KEY (`tipoTelefonoId`) REFERENCES `tipotelefono` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonoproveedores`
--

LOCK TABLES `telefonoproveedores` WRITE;
/*!40000 ALTER TABLE `telefonoproveedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonoproveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonousuarios`
--

DROP TABLE IF EXISTS `telefonousuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonousuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codArea` varchar(5) NOT NULL,
  `numero` varchar(8) NOT NULL,
  `codPais` varchar(3) NOT NULL,
  `idTipoTelefono` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `detededAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_telefonousuario_tipotelefono` FOREIGN KEY (`id`) REFERENCES `tipotelefono` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonousuarios`
--

LOCK TABLES `telefonousuarios` WRITE;
/*!40000 ALTER TABLE `telefonousuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonousuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipotelefono`
--

DROP TABLE IF EXISTS `tipotelefono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipotelefono` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipotelefono`
--

LOCK TABLES `tipotelefono` WRITE;
/*!40000 ALTER TABLE `tipotelefono` DISABLE KEYS */;
INSERT INTO `tipotelefono` VALUES (1,'Movil','2025-10-12 18:08:24','2025-10-12 18:08:24',NULL),(2,'Oficina','2025-10-12 18:08:24','2025-10-12 18:08:24',NULL),(3,'Casa','2025-10-12 18:08:50','2025-10-12 18:08:50',NULL);
/*!40000 ALTER TABLE `tipotelefono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userpasswords`
--

DROP TABLE IF EXISTS `userpasswords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userpasswords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `stateId` int(11) NOT NULL,
  `expirationDate` datetime NOT NULL,
  `resetToken` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userpasswords_state` (`stateId`),
  KEY `fk_userpasswords_user` (`userId`) USING BTREE,
  CONSTRAINT `fk_userpasswords_state` FOREIGN KEY (`stateId`) REFERENCES `passwordstate` (`id`),
  CONSTRAINT `fk_userpasswords_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userpasswords`
--

LOCK TABLES `userpasswords` WRITE;
/*!40000 ALTER TABLE `userpasswords` DISABLE KEYS */;
INSERT INTO `userpasswords` VALUES (1,5,'$2b$10$Y1sCaF.4I4XpkaVDU91OOefyimR01tm16Qm8k2.7FYWJDdedte7Ka',1,'2026-04-12 03:19:36',NULL,'2025-10-12 03:19:36','2025-10-12 03:19:36',NULL),(2,8,'$2b$10$Z./MOjqQekvV0hN0/LXKuup.FrKgLrTchhi.i9wEj2QPtsmnyTrTi',1,'2026-04-12 04:01:57',NULL,'2025-10-12 04:01:57','2025-10-12 04:01:57',NULL),(3,10,'$2b$10$WfuCeP8HwW/f/oFqNHKxpe/Qm/Qbb/io1U1kWdhMryVVWW.CWu2P6',1,'2026-04-12 04:29:39',NULL,'2025-10-12 04:29:40','2025-10-12 04:29:40',NULL),(7,14,'$2b$10$Ws9DGcbaSQVsUvBWiSlHaeVS29TXlbGo61Q017VKz6OAaoPOxi03O',1,'2026-04-12 04:44:16',NULL,'2025-10-12 04:44:16','2025-10-12 04:44:16',NULL),(16,34,'$2b$10$PYcA9JOtM2K.YYeSWTC/bOPyB3kgDqNS2o0QqM7H22bqjsFHMN/ei',1,'2026-05-05 04:33:31',NULL,'2025-11-05 04:33:31','2025-11-05 04:33:31',NULL),(20,38,'$2b$10$3ackJnN11KMony7BStUhH.sPAlojiTmguAAjWP8lF2OKircmAINNe',1,'2026-05-06 21:16:22',NULL,'2025-11-06 21:16:22','2025-11-06 21:16:22',NULL);
/*!40000 ALTER TABLE `userpasswords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userroles`
--

DROP TABLE IF EXISTS `userroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userroles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userroles`
--

LOCK TABLES `userroles` WRITE;
/*!40000 ALTER TABLE `userroles` DISABLE KEYS */;
INSERT INTO `userroles` VALUES (1,'Administrador','2025-10-12 02:33:55','2025-10-12 02:33:55',NULL),(2,'Vendedor','2025-10-12 02:33:55','2025-10-12 02:33:55',NULL),(6,'Administrativo','2025-10-12 02:34:25','2025-10-12 02:34:25',NULL),(8,'Compras','2025-10-12 02:39:32','2025-10-26 01:30:49',NULL);
/*!40000 ALTER TABLE `userroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userLastName` varchar(40) NOT NULL,
  `userName` varchar(40) NOT NULL,
  `userEmail` varchar(60) NOT NULL,
  `userBirthDate` date DEFAULT NULL,
  `userRole` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_roles` (`userRole`),
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`userRole`) REFERENCES `userroles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Bejas','Pablo Martin','pmbejas@gmail.com','1979-06-22',1,'2025-10-12 03:19:36','2025-11-06 17:13:29',NULL),(8,'Garlati','Alejo Gabriel','agarlati@gmail.com','2002-07-16',1,'2025-10-12 04:01:57','2025-11-06 17:13:40',NULL),(10,'Salas','Alejo Benjamin','asalas@gmail.com','2002-07-16',1,'2025-10-12 04:29:39','2025-11-06 17:13:48',NULL),(14,'Rosales Vazquez','Davi','drosales@gmail.com','2002-07-16',8,'2025-10-12 04:44:16','2025-11-06 17:14:01',NULL),(34,'Gomez Isa','Maria Florencia','mumi@gmail.com',NULL,2,'2025-11-05 04:33:31','2025-11-06 17:16:46','2025-11-05 04:51:40'),(38,'Gomez Isa','Maria Florencia','mumi@gmail.com',NULL,6,'2025-11-06 21:16:22','2025-11-06 21:16:22',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendedores`
--

LOCK TABLES `vendedores` WRITE;
/*!40000 ALTER TABLE `vendedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `clienteId` int(11) NOT NULL,
  `vendedorId` int(11) NOT NULL,
  `descuento` decimal(5,2) DEFAULT 0.00,
  `totalVenta` decimal(10,2) NOT NULL,
  `nroRemito` varchar(8) DEFAULT NULL,
  `nroFactura` varchar(8) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ventas_cliente` (`clienteId`),
  KEY `fk_ventas_vendedor` (`vendedorId`),
  CONSTRAINT `fk_ventas_cliente` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`),
  CONSTRAINT `fk_ventas_vendedor` FOREIGN KEY (`vendedorId`) REFERENCES `vendedores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-07  7:30:26
