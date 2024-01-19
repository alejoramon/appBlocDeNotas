// MÓDULO PRINCIPAL DE SERVICIOS DE USUARIO

// Importamos todas las funciones  con el servicio de usuario

import register from './userFunctionService/registerUserService.js';
import login  from './userFunctionService/loginUserService.js';

const userServices = { register, login }
//exportamos funciones a controllers (registerController.js y loginController.js
export default userServices 



