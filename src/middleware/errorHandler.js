// MÓDULO PARA EL MANEJO DE ERRORES

// Función middleware para manejar errores
const errorHandler = (error, req, res, next) => {
  // Si el error proviene de jwt.verify, es un error de token no válido o expirado
  if (
    error.name === "JsonWebTokenError" ||
    error.name === "TokenExpiredError"
  ) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }

  // Otros tipos de errores
  // Si es un error 404 (ruta no encontrada)
  if (error.status === 404) {
    return res.status(404).json({
      status: "error",
      message: "NOT FOUND",
    });
  }

  // Errores no reconocidos o de otro tipo, responde genéricamente con el error 500
  return res.status(500).json({
    status: "error",
    message: error.message || "Ocurrió un error interno en el servidor",
  });
};

// Middleware para manejar rutas no encontradas (404)
const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    status: "error",
    message: "NOT FOUND",
  });
};

// Exportamos la gestión de errores (middleware) y el manejo de rutas no encontradas
export { errorHandler, notFoundHandler };
