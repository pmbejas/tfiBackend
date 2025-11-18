import { NoticiasService } from "../services/services.index.js";

export const getNoticias = async (req, res) => {
    try {
        const noticias = await NoticiasService.getNoticias();
        return res.status(noticias.responseCode).json({
      success: noticias.success,
      message: noticias.message,
      data: noticias.data ?? [],
    });
  } catch (error) {
    console.error("Error en getNoticias:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al obtener noticias",
    });
  }
}