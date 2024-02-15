//MÓDULO DE FUNCIONAMIENTO DE SERVICIO BORRADO DE NOTAS

// Importamos la bd
import getPool from "../../../db/getPool.js";
import dotenv from "dotenv";

dotenv.config();

// Función eliminamos una nota de la base de datos
export const deleteNoteService = async (notasId) => {
  try {
    // Obtenemos una instancia del pool de conexiones
    const pool = await getPool();

    // Intentamos eliminar la nota de la base de datos
    pool.query("DELETE FROM notas WHERE id = ?", [notasId]);
  } catch (error) {
    // Capturamos cualquier error y lo rechazamos
    console.error("Error al intentar eliminar la nota:🔴", error);
    throw new Error(
      "Error interno del servidor al intentar eliminar la nota.🔴"
    );
  }
};
