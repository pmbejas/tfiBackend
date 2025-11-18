import { VentasServices } from "../services/services.index.js";


export const getVentas = async (req, res) => {
    try {
        const ventas = await VentasServices.getVentas();
        return res.status(ventas.responseCode).json({
            success: true,
            data: ventas ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener productos',
        });
    }
}

export const getVentaById = async (req, res) => {
    try {
        if (!req.params.idVenta || req.params.idVenta < 0) {
            return res.status(400).json({
                success: false,
                message: 'El id de la venta es requerido',
            });
        }
        const venta = await VentasServices.getVentaById(req.params.idVenta);
        return res.status(venta.responseCode).json({
            success: true,
            data: venta ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener productos',
        });
    }
}