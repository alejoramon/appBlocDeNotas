// MÓDULO DE SERVICIO DE MODIFICACIÓN DE CATEGORIA

// Importamos la bd
import pool from '../../../db/getPool.js'; 

/**
 * Función para actualizar una categoría en la base de datos.
 * @param {number} categoryId - ID de la categoría a actualizar.
 * @param {string} name - Nuevo nombre para la categoría.
 * @returns {Promise<Object>} - Retorna una promesa con el resultado de la operación.
 */
const updateCategoryService = async (categoryId, name) => {
    try {
        // Actualizamos la categoría por su ID
        const result = await pool.query('UPDATE categorias SET name = ? WHERE id = ?', [name, categoryId]);
        return result;
    } catch (error) {
        console.error('Error al modificar la categoría:', error);
        throw new Error('Error interno del servidor al modificar la categoría.');
    }
};

export default updateCategoryService