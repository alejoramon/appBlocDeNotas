//MÓDULO DE VALIDACION DE REGISTRO

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import { errorMsg, errorMsgUsername, errorMsgPassword } from '../../errorMsg/joi.error.messages.js';


const newUserSchema = joi.object({
    email: joi.string().required().email().messages(errorMsg),
    userName: joi.string().min(3).max(30).required().messages({ ...errorMsg, ...errorMsgUsername }),
    password: joi.string().required().messages({ ...errorMsg, ...errorMsgPassword })
});

export default newUserSchema