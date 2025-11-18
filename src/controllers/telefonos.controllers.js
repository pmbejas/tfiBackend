import { TelefonosService } from "../services/services.index.js";

export const getTelefonoByUserId = async (req, res) => {
    try {
        const telefono = await TelefonosService.getTelefonoByUserId(req.params.id);
        return res.status(telefono.responseCode).json({
            success: true,
            data: telefono ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener telefono por ID de usuario',
        });
    }
}