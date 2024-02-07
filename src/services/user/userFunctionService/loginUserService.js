// MÓDULO DE FUNCIONAMIENTO DE SERVICIOS DE USUARIO

//Importamos
import bcrypt from "bcrypt";
import getPool from "../../../db/getPool.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Funcion para logear a un usuario.

const login = async (email, password) => {
  const pool = await getPool();

  // Buscar el usuario en la base de datos usando el email proporcionado.
  const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (user.length === 0) {
    const objError = new Error("Mail o contraseña incorrecta.🔴");
    objError.statusCode = 401;
    throw objError;
  }

  // Aseguramos que ambos argumentos sean cadenas.
  const match = await bcrypt.compare(
    String(password),
    String(user[0].password)
  );

  if (!match) {
    const objError = new Error("Mail o contraseña incorrecta.🔴");
    objError.statusCode = 401;
    throw objError;
  }

  // Generar un token JWT para el usuario autenticado.
  const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return { userId: user[0].id, token, userName: user[0].userName };
};

export default login;
