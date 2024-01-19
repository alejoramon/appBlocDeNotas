// MÓDULO DE MODIFICACIÓN DE CATEGORIA

//NOTAS//
//Función modificamos la categoria
import {updateCategoryService} from '../../../services/category/indexCategoryService.js'; 

/**
 * Controlador para modificar una categoría por su ID.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
export const updateCategoryController = async (req, res) => {
    // Extraemos el ID de la categoría y el nuevo nombre de los parámetros del cuerpo de la solicitud
    const { id } = req.params;
    const { name } = req.body;

    try {
        const result = await updateCategoryService(id, name);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 'success',
                message: 'Categoría modificada correctamente.✅',
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Categoría no encontrada o ya modificada.🔴',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};
  
  //exportamos funciones a rutas (indexcategoryController.js, ira a entries.routers.js)
  export default updateCategoryController





