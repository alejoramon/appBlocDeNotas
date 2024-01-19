//MÓDULO DE FUNCIONAMIENTO DE SERVICIO CREACIÓN DE NOTAS

//Importamos la bd
import getPool from '../../../db/getPool.js';
import dotenv from 'dotenv';

dotenv.config();

// Función crear una nueva nota 
export const createNoteService = async (title, detail, text, categoriaId, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Verificar el valor de userId antes de continuar
      console.log("Valor de userId recibido:", userId);

      // Comprobar si userId es un valor válido antes de continuar
      if (!userId || userId === null) {
        reject(new Error("El valor de userId no es válido.🔴"));
        return;
      }

      // Obtenemos una instancia del pool de conexiones
      const pool = await getPool();

      // Utilizamos await para esperar la resolución de la promesa devuelta por pool.query
      const [notaData] = await pool.query('INSERT INTO notas (title, detail, text, categoriaId, userId) VALUES (?, ?, ?, ?, ?)', [title, detail, text, categoriaId, userId]);

      // Devolvemos el ID de la nota insertada
      resolve({ notaId: notaData.insertId, notaData });

    } catch (error) {
      // En caso de error, lanzamos una excepción para manejarla en el código que llame a esta función
      console.error("Error al crear la nota:", error);
      reject(new Error("Error interno del servidor al crear la nota, createNoteService.🔴"));
    }
  }).catch(error => {
    console.error('Error no capturado:', error);
    throw error;  // Esto asegurará que el error se propague y se maneje adecuadamente
  });
};




