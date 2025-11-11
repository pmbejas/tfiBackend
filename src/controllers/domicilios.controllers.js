import { DomiciliosService } from "../services/services.index.js";

export const getDomiciliosByUserId = async (req, res) => {
    try {
        const domicilios = await DomiciliosService.getDomiciliosByUserId(req.params.id);
        return res.status(domicilios.responseCode).json({
            success: true,
            data: domicilios ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(domicilios.responseCode).json({
            success: false,
            message: 'Error interno al obtener domicilios',
        });
    }
}