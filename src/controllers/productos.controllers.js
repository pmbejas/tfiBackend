import { ProductosService } from "../services/services.index.js";


export const getProductos = async (req, res) => {
    try {
        const productos = await ProductosService.getProductos();
        return res.status(productos.responseCode).json({
            success: true,
            data: productos ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener productos',
        });
    }
}