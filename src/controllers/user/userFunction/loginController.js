//MÓDULO DE FUNCIONAMIENTO DE LOGIN DE USUARIO

// Import de funcionamiento
import userService from "../../../services/user/indexUserService.js";
import loginUserSchema from "../../../schemas/users/userFunctionSchema/loginUser.schema.js";

// Controlador para logear un usuario.
const loginController = async (req, res, next) => {
  try {
    // Validamos los datos de entrada con el esquema de Joi.
    const { error, value } = loginUserSchema.validate(req.body); // Usamos el esquema para validar req.body

    // Si hay un error en la validación, enviamos una respuesta 400.
    if (error) {
      const objError = new Error(error.details[0].message); // Usamos el primer mensaje de error para simplificar.
      objError.statusCode = 400;
      throw objError;
    }

    // Extraemos los datos validados.
    const { email, password } = value;

    // Llamamos al servicio de registro desde el userService
    const { userId, userName, token } = await userService.login(
      email,
      password
    );

    // Respuesta exitosa.
    res.status(200).send({
      status: "ok",
      message: "Inicio de sesión exitoso.✅",
      userId,
      token,
      userName,
    });
  } catch (error) {
    // Manejo de errores.
    next(error);
  }
};

export default loginController;
