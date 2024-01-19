// MÓDULO DE SERVICIO DE BORRADO DE CATEGORIA

// Importamos la bd
import pool from '../../../db/getPool.js'; 

/**
 * Función para eliminar una categoría de la base de datos por su ID.
 * @param {number} categoryId - ID de la categoría a eliminar.
 * @returns {Promise<Object>} - Retorna una promesa con el resultado de la operación.
 */
const deleteCategoryService = async (categoryId) => {
    try {
        // Eliminamos la categoría por su ID
        const result = await pool.query('DELETE FROM categorias WHERE id = ?', [categoryId]);
        return result;
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        throw new Error('Error interno del servidor al eliminar la categoría.');
    }
};

export default deleteCategoryService