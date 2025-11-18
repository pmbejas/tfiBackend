import { QueryTypes } from "sequelize";
import { models, sequelize } from "../database/models/Relaciones.js";
const { Ventas, DetalleVentas, Productos } = models;

export const getVentas = async () => {
  const query = `SELECT * FROM ventas;`;
  try {
    const ventas = await sequelize.query(query, { type: QueryTypes.SELECT });
    if (ventas.length === 0) {
      return {
        success: false,
        responseCode: 204,
        message: "No Content",
        data: null,
      };
    }
    return {
      success: true,
      responseCode: 200,
      message: "Datos Encontrados",
      data: ventas,
    };
  } catch (error) {
    console.error("Error en ventasServices.getVentas:", error);
    throw error;
  }
};

export const getVentaById = async (ventaId) => {
  try {
    const venta = await Ventas.findByPk(ventaId, {
      include: [
        {
          model: DetalleVentas,
          as: "FKVentasDetalleVentas",
          required: true,
          attributes: ["id", "productoId", "cantidad", "precioUnitario"],

          where: { idVenta: ventaId },

          include: [
            {
              model: Productos,
              as: "FKDetalleVentasProductos", // usa el alias de tu relación
              attributes: ["name"], // acá traes el nombre del producto
            },
          ],
        },
      ],
      order: [["fecha", "ASC"]],
    });
    const ventaFinal = venta.toJSON();

    ventaFinal.detalleVentas = ventaFinal.FKVentasDetalleVentas.map(
      (detalle) => ({
        id: detalle.id,
        productoId: detalle.productoId,
        cantidad: detalle.cantidad,
        precioUnitario: detalle.precioUnitario,
        // 2) aplanar el nombre del producto
        productoNombre: detalle.FKDetalleVentasProductos?.name ?? null,
      })
    );

    delete ventaFinal.FKVentasDetalleVentas;
    if (!ventaFinal.length === 0) {
      return {
        success: false,
        responseCode: 204,
        message: "No Content",
        data: null,
      };
    }

    return {
      success: true,
      responseCode: 200,
      message: "Venta Encontrada",
      data: ventaFinal,
    };
  } catch (error) {
    console.error("Error en ventasService.getVentaById:", error);
    throw error;
  }
};

export const getVentastotalesVendedores = async () => {
  const query = `SELECT
                    CONCAT(vendedores.firstName, ' ', vendedores.lastName) AS nombreVendedor,
                    SUM(ventas.totalVenta) AS ventasTotales
                FROM ventas
                JOIN vendedores ON ventas.vendedorId = vendedores.id
                GROUP BY vendedores.id, vendedores.firstName, vendedores.lastName
                ORDER BY
                VentasTotales DESC;`;
  try {
    console.log("Consulta SQL que se enviará:", query);
    const ventas = await sequelize.query(query, { type: QueryTypes.SELECT });
    if (ventas.length === 0) {
      return {
        success: false,
        responseCode: 204,
        message: "No Content",
        data: null,
      };
    }
    return {
      success: true,
      responseCode: 200,
      message: "Datos Encontrados",
      data: ventas,
    };
  } catch (error) {
    console.error("Error en ventasServices.getVentas:", error);
    throw error;
  }
};
