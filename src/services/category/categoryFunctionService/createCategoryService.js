// MÓDULO DE SERVICIO CREACIÓN DE CATEGORIA

// Importamos la bd
import pool from "../../../db/getPool.js";

/**
 * Función para crear una nueva categoría en la base de datos.
 * @param {string} name - Nombre de la categoría a crear.
 * @returns {Promise<Object>} - Retorna una promesa con el resultado de la operación.
 */

const createCategoryService = async (name) => {
  // Obtenemos el pool
  const pool = await getPool();
  // Verificamos si el nombre de la categoría ya existe en la base de datos
  const existingCategory = await pool.query(
    "SELECT * FROM categorias WHERE name = ?",
    [name]
  );

  if (existingCategory && existingCategory.length > 0) {
    throw new Error("La categoría ya existe.");
  }

  // Insertamos la nueva categoría en la base de datos
  const result = await pool.query("INSERT INTO categorias(name) VALUES (?)", [
    name,
  ]);
  return result;
};

export default createCategoryService;
