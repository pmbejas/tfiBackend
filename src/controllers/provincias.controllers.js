import { ProvinciasService } from "../services/services.index.js";

export const getProvincias = async (req, res) => {
    try {
        const provincias = await ProvinciasService.getProvincias();
        return res.status(provincias.responseCode).json({
      success: provincias.success,
      message: provincias.message,
      data: provincias.data ?? [],
    });
  } catch (error) {
    console.error("Error en getProvincias:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener provincias",
    });
  }
}