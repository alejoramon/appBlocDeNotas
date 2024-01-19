//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE CONSULTA DE NOTA POR DETALLE


//CONSULTAS//
//Función para obtener nota por detalle
// Importamos la bd
import getPool from '../../../db/getPool.js';
import dotenv from 'dotenv';

dotenv.config();

// Función para obtener nota por detalle
export const getUserNoteByDetailService = async (userId, detail) => {
  try {

       // Registra los valores recibidos
       console.log("Valor de userId recibido:", userId);
       console.log("Valor de title recibido:", detail);


    // Conexión a la base de datos
    const pool = await getPool();

    // Consulta para obtener la nota por detalle y userId
    const [noteData] = await pool.query('SELECT id, title, detail, text FROM notas WHERE userId = ? AND detail = ?', [userId, detail]);

    return noteData;
  } catch (error) {
    console.error("Error al consultar nota por detalle:", error.message);
    throw new Error("Error interno del servidor al consultar nota por detalle, getUserNoteByDetailService.🔴");
  }
};