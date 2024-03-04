//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE CONSULTA DE NOTA POR DETALLE

//CONSULTAS//
//Función para obtener nota por detalle
// Importamos la bd
import getPool from "../../../db/getPool.js";

// Función para obtener nota por detalle
export const getUserNotes = async (userId) => {
  try {
    // Conexión a la base de datos
    const pool = await getPool();

    // Consulta para obtener la nota por detalle y userId
    const [notesData] = await pool.query(
      `SELECT n.id, n.title, n.detail, n.text, n.categoriaId, c.name as categoriaName  FROM notas n 
      INNER JOIN categorias c ON n.categoriaId = c.Id WHERE n.userId = ?`,
      [userId]
    );

    return notesData;
  } catch (error) {
    console.error("Error al consultar las notas:", error.message);
    throw new Error("Error interno del servidor al consultar las notas.🔴");
  }
};
