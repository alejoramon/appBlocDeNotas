// MÓDULO DE BORRADO DE CATEGORIA

//NOTAS//
//Función borramos la categoria
// Importamos el servicio
import {deleteCategoryService} from '../../../services/category/indexCategoryService.js';  

/**
 * Controlador para eliminar una categoría por su ID.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
export const deleteCategoryController = async (req, res) => {
    // Extraemos el ID de la categoría de los parámetros de la solicitud
    const { id } = req.params;

    try {
        const result = await deleteCategoryService(id);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 'success',
                message: 'Categoría eliminada correctamente.✅',
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Categoría no encontrada o ya eliminada.🔴',
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
export default deleteCategoryController






