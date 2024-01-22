//MÓDULO DE FUNCIONAMIENTO DE REGISTRO DE USUARIO

// Importamos las funciones del usuario.
import userService from "../../../services/user/indexUserService.js";
import newUserSchema from "../../../schemas/users/userFunctionSchema/newUser.schema.js";

// Controlador para registrar un nuevo usuario.
const registerController = async (req, res, next) => {
  // Validamos los datos de entrada con el esquema de Joi.
  const { error, value } = newUserSchema.validate(req.body); // Usamos el esquema para validar req.body

  // Si hay un error en la validación, enviamos una respuesta 400.
  if (error) {
    return res.status(400).send({
      status: "error",
      message: error.details[0].message, // Usamos el primer mensaje de error para simplificar.
    });
  }

  // Extraemos los datos validados.
  const { email, password, userName } = value;

  try {
    // Llamamos al servicio de registro desde el userService.
    const { userId, token } = await userService.register(
      email,
      password,
      userName
    );

    // Respuesta exitosa.
    res.status(201).send({
      status: "ok",
      message: "Usuario registrado exitosamente.✅",
      userId,
      token,
    });
  } catch (error) {
    // Manejo de errores.
    console.error("Error en el registro:", error);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor.🔴",
    });
  }
};

//Exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export default registerController;
