//MÓDULO PRINCIPAL DE SCHEMAS 

// Importamos todos los archivos 
//Entries
import newEntrySchema from './entries/entryFunctionSchema/newEntry.schema.js/index.js';
import updateEntrySchema from './entries/entryFunctionSchema/updateEntry.schema.js';
import getEntryById from './entries/entryQuerySchema/getEntryById.schema.js';
import getEntryByTitle from './entries/entryQuerySchema/getEntryByTitle.schema.js';

//Users
import newUserSchema from './users/userFunctionSchema/newUser.schema.js';
import loginuserSchema from './users/userFunctionSchema/loginUser.schema.js';
import validateUserSchema from './users/recover/validateUser.schema.js';
import editUserPasswordSchema from './users/recover/editUserPassword.schema.js';
import passwordRecoverSchema from './users/recover/passwordRecover.schema.js';


//Imágenes
//import imgSchema from './img/imgSchema.js';

//Error messages
import { errorMsg, errorMsgUsername, errorMsgPassword } from '../schemas/errorMsg/joi.error.messages.js';

// Exporta todos los esquemas
export default {
  newEntrySchema, 
  updateEntrySchema, 
  getEntryById, 
  getEntryByTitle, 
  newUserSchema, 
  loginuserSchema, 
  validateUserSchema, 
  editUserPasswordSchema, 
  passwordRecoverSchema, 
  errorMsg, 
  errorMsgUsername, 
  errorMsgPassword
};
