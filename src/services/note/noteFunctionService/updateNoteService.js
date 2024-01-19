//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE MODIFICACION DE NOTAS

// Importamos la bd
import getPool from '../../../db/getPool.js';
import dotenv from 'dotenv';

dotenv.config();

// Función para actualizar una nota en la base de datos
export const updateNoteService = async (id, title, detail, text, categoriaId) => {
  try {
    const pool = await getPool();

    const [notaData] = await pool.query(
      'UPDATE notas SET title=?, detail=?, text=?, categoriaId=? WHERE id=?',
      [title, detail, text, categoriaId, id]
    );

    if (notaData.affectedRows === 0) {
      throw new Error("La nota no fue encontrada o no se pudo actualizar.🔴");
    }

    return { id: id, title, detail, text, categoriaId }; // Devolvemos los datos actualizados de la nota

  } catch (error) {
    console.error("Error al modificar la nota:", error);
    throw new Error("Error interno del servidor al modificar la nota, updateNoteService.🔴");
  }
};
