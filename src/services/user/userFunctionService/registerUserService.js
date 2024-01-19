//MÓDULO DE SERVICIOS DE FUNCIONAMIENTO DE REGISTRO DE USUARIO

// Importaciones necesarias
import bcrypt from 'bcrypt';
import getPool from '../../../db/getPool.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; 

dotenv.config();

// Función para registrar un nuevo usuario.
const register = async (email, password, userName) => {
  return new Promise(async (resolve, reject) => {
    // Hasheamos la contraseña.
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        reject('Error al hashear la contraseña🔴');
        return;
      }

      try {
        const pool = await getPool();

        // Conectamos a la base de datos y consultamos la inserción.
        const results = await pool.query(
          'INSERT INTO users (email, password, userName) VALUES (?, ?, ?)',
          [email, hash, userName]
        );

        // Generamos token JWT para el usuario registrado.
        const token = jwt.sign({ userId: results.insertId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        resolve({ userId: results.insertId, token });
      } catch (error) {
        console.error('Error al obtener el pool:', error);
        reject('Error interno del servidor🔴');
      }
    });
  });
};
  
//Exportamos funciones a controller (indexUserService.js, ira a registerController.js)
export default register
