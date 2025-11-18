export const getNoticias = async () => {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      responseCode: 500,
      message: "NEWS_API_KEY no configurada",
      data: null,
    };
  }

  const url = `https://newsdata.io/api/1/latest?apikey=pub_b6c1ecee5a9d4972be6654d1b5265fb5&country=ar&category=business,technology`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return {
        success: false,
        responseCode: res.status,
        message: "Error al obtener noticias desde NewsData",
        data: null,
      };
    }

    const json = await res.json();

    if (json.status !== "success") {
      return {
        success: false,
        responseCode: 502,
        message: json.message || "Error en respuesta de NewsData",
        data: null,
        raw: json,
      };
    }
    const noticias = Array.isArray(json.results) ? json.results : [];

    return {
      success: true,
      responseCode: 200,
      message: "Datos Encontrados",
      data: noticias,
    };
  } catch (error) {
    console.error("Error en proveedorService.getNoticias:", error);
    throw error;
  }
};
