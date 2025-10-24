import { ProveedorService } from "../services/services.index.js";

export const getProveedores = async (req, res) => {
    try {
        const proveedores = await ProveedorService.getProveedores();
        return res.status(200).json({
            success: true,
            data: proveedores ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener proveedores',
        });
    }
}