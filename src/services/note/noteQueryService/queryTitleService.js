//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE CONSULTA DE NOTA POR TITULO


//CONSULTAS//
//Función para obtener nota por título
// Importamos la bd
import getPool from '../../../db/getPool.js';
import dotenv from 'dotenv';

dotenv.config();

// Función para obtener nota por título
export const getUserNoteService = async (userId, title) => {
  try {
    // Registra los valores recibidos
    console.log("Valor de userId recibido:", userId);
    console.log("Valor de title recibido:", title);

    // Conexión a la base de datos
    const pool = await getPool();

    // Consulta para obtener la nota por título y userId
    const [notasData] = await pool.query('SELECT id, title FROM notas WHERE userId = ? AND title = ?', [userId, title]);

    return notasData;
  } catch (error) {
    // Manejo de errores: registra el error y lanza una excepción
    console.error("Error al consultar notas por título:", error.message);
    throw new Error("Error interno del servidor al consultar notas por título, getUserNotesService.🔴");
  }
};
