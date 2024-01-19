// MÓDULO DE FUNCIONAMIENTO DE SERVICIOS DE USUARIO

//Importamos
import bcrypt from 'bcrypt';
import getPool from '../../../db/getPool.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; 

dotenv.config();

//Funcion para logear a un usuario.

const login = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getPool();

      // Buscar el usuario en la base de datos usando el email proporcionado.
      const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

      console.log("Resultado de la consulta:", user);

      if ( user.length === 0) {
        reject('Usuario no encontrado.🔴');
        return;
      }

      // Aseguramos que ambos argumentos sean cadenas.
      const match = await bcrypt.compare(String(password), String(user[0].password));

      if (!match) {
        reject('Contraseña incorrecta.🔴');
        return;
      }
      //const tokeninfo = {id:user[0].id,};

      // Generar un token JWT para el usuario autenticado.
      const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, { expiresIn: '30d' });
      resolve({ userId: user[0].id, token });

    } catch (error) {
      console.error('Error al realizar el login:', error);
      reject('Error interno del servidor🔴');
    }
  }).catch(error => {
    // Manejar cualquier error no capturado aquí
    console.error('Error no capturado:', error);
    throw error;  // Esto asegurará que el error se propague y se maneje adecuadamente
  });
};

export default login;