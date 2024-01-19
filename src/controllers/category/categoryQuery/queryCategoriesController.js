//MÚDULO DE FUNCIONAMIENTO DE OBTENCION DEL LISTADO DE CATEGORIAS

// Importamos el servicio
import { fetchCategories } from "../../../services/category/indexCategoryService.js";

//BUSQUEDA CATEGORIAS//
//Función obtenemos listado de gategorias
const getCategoriesController = async (req, res) => {
  try {
    const categories = await fetchCategories();

    // Enviamos respuesta con el listado de categorías
    res.status(200).send({
      status: "ok",
      message: "Listado categorías. ✅",
      data: categories,
    });
  } catch (error) {
    // Enviamos un error 500 en caso de error interno del servidor
    res.status(500).send({
      status: "error",
      message:
        error.message || "Error interno del servidor al obtener categorías.🔴",
    });
  }
};

//exportamos funciones a rutas (entries.routes.js)
export default getCategoriesController;
