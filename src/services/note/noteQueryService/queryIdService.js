//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE CONSULTA DE NOTA POR DETALLE

//CONSULTAS//
//Función para obtener nota por detalle
// Importamos la bd
import getPool from "../../../db/getPool.js";
import dotenv from "dotenv";

dotenv.config();

// Función para obtener nota por detalle
export const getUserNoteIdService = async (userId, id) => {
  try {
    // Registra los valores recibidos

    // Conexión a la base de datos
    const pool = await getPool();

    // Consulta para obtener la nota por detalle y userId
    const [noteData] = await pool.query(
      `SELECT n.id, n.title, n.detail, n.text, n.categoriaId, c.name as categoriaName FROM notas n
    INNER JOIN categorias c ON n.categoriaId = c.id
       WHERE n.userId = ? AND n.id = ?`,

      [userId, id]
    );

    return noteData;
  } catch (error) {
    console.error("Error al consultar nota por detalle:", error.message);
    throw new Error(
      "Error interno del servidor al consultar nota por detalle, getUserNoteByDetailService.🔴"
    );
  }
};
