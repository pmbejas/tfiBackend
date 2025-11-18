import { ClientesService } from "../services/services.index.js";


export const getClientes = async (req, res) => {
    try {
        const clientes = await ClientesService.getClientes();
        return res.status(clientes.responseCode).json({
            success: true,
            data: clientes ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener productos',
        });
    }
}

export const getClienteById = async (req, res) => {
    try {
        if (!req.params.idCliente || req.params.idCliente < 0) {
            return res.status(400).json({
                success: false,
                message: 'El id del cliente es requerido',
            });
        }
        const cliente = await ClientesService.getClienteById(req.params.idCliente);
        return res.status(cliente.responseCode).json({
            success: true,
            data: cliente ?? [],
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener productos',
        });
    }
}