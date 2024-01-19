//MÓDULO DE FUNCIONAMIENTO DE LOGIN DE USUARIO

// Import de funcionamiento 
import userService from '../../../services/user/indexUserService.js';
import loginUserSchema from '../../../schemas/users/userFunctionSchema/loginUser.schema.js';

// Controlador para logear un usuario.
const loginController = async (req, res) => {
   // Validamos los datos de entrada con el esquema de Joi.
  const { error, value } = loginUserSchema.validate(req.body);// Usamos el esquema para validar req.body

   // Si hay un error en la validación, enviamos una respuesta 400.
  if (error) {
    return res.status(400).send({
      status: 'error',
      message: error.details[0].message // Usamos el primer mensaje de error para simplificar.
    });
  }

  // Extraemos los datos validados.
  const { email, password } = value;

  try {
    // Llamamos al servicio de registro desde el userService
    const { userId, token } = await userService.login(email, password);

    // Respuesta exitosa.
    res.status(200).send({
      status: 'ok',
      message: 'Inicio de sesión exitoso.✅',
      userId,
      token
    });
  } catch (error) {
     // Manejo de errores.
    console.error('Error en el inicio de sesión:', error);
    res.status(500).send({
      status: 'error',
      message: 'Error interno del servidor al iniciar sesión.🔴'
    });
  }
};

export default loginController;
