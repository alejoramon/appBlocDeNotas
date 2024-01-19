// MÓDULO DE CREACIÓN DE CATEGORIA

//CATEGORIAS//
//Función creamos la categoria
import {createCategoryService} from '../../../services/category/indexCategoryService.js'; 

/**
 * Controlador para crear una nueva categoría. 
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
export const createCategoryController = async (req, res) => {
    // Extraemos los datos de la solicitud
    const { name } = req.body;

    try {
        const result = await createCategoryService(name);
        
        res.status(201).send({
            status: 'ok',
            message: 'Categoría creada exitosamente.✅',
            data: result
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

//exportamos funciones a rutas (indexcategoryController.js, ira a entries.routers.js)
export default createCategoryController
