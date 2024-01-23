// MÓDULO PARA EL MANEJO DE ERRORES

// Función middleware para manejar errores
const errorHandler = (error, req, res, next) => {
  console.error(error);
  return res.status(error.statusCode || 500).json({
    status: "error",
    message: error.statusCode
      ? error.message
      : "Ocurrió un error interno en el servidor.",
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
