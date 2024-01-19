//Módulo de unificacion de archivos Control y consulta de categorias


// Importamos las funciones de consulta de categorías
import getCategoriesController from './categoryQuery/queryCategoriesController.js';

// Importamos las funciones de manipulación de categorías
import createCategoryController from './categoryFunction/createCategoryController.js';
import updateCategoryController from './categoryFunction/updateCategoryController.js';
import deleteCategoryController from './categoryFunction/deleteCategoryController.js';

// Exportamos funciones para rutas (entries.routers.js)
export { getCategoriesController, createCategoryController, updateCategoryController, deleteCategoryController }