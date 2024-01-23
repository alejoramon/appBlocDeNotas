//MÓDULO DE FUNCIONAMIENTO DE REGISTRO DE USUARIO

// Importamos las funciones del usuario.
import userService from "../../../services/user/indexUserService.js";
import newUserSchema from "../../../schemas/users/userFunctionSchema/newUser.schema.js";

// Controlador para registrar un nuevo usuario.
const registerController = async (req, res, next) => {
  try {
    // Validamos los datos de entrada con el esquema de Joi.
    const { error, value } = newUserSchema.validate(req.body); // Usamos el esquema para validar req.body

    // Si hay un error en la validación, enviamos una respuesta 400.
    if (error) {
      const objError = new Error(error.details[0].message); // Usamos el primer mensaje de error para simplificar.
      objError.statusCode = 400;
      throw objError;
    }

    // Extraemos los datos validados.
    const { email, password, userName } = value;

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
    next(error);
  }
};

//Exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export default registerController;
