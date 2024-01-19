//MÓDULO DE FUNCIONAMIENTO DE SERVICIO BORRADO DE NOTAS


// Importamos la bd
import getPool from '../../../db/getPool.js';
import dotenv from 'dotenv';

dotenv.config();

// Función eliminamos una nota de la base de datos
export const deleteNoteService = async (notasId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Obtenemos una instancia del pool de conexiones
      const pool = await getPool();
      
      // Intentamos eliminar la nota de la base de datos
      pool.query(
        'DELETE FROM notas WHERE id = ? AND userId = ?',
        [notasId, userId],
        (error, results) => {
          if (error) {
            // Si hay un error al ejecutar la consulta, lo rechazamos
            reject(error);
          } else if (results.affectedRows > 0) {
            // Si se afectaron filas, la nota se eliminó con éxito
            resolve(true);
          } else {
            // Si no se afectaron filas, la nota no se eliminó o el usuario no tiene permiso
            resolve(false);
          }
        }
      );
    } catch (error) {
      // Capturamos cualquier error y lo rechazamos
      console.error("Error al intentar eliminar la nota:🔴", error);
      reject(new Error("Error interno del servidor al intentar eliminar la nota.🔴"));
    }
  });
};