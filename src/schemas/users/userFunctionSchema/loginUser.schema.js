//MÓDULO DE VALIDACIÓN DE INICIO DE SESION

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiMsg from '../../errorMsg/joi.error.messages.js';

const loginUserSchema = joi.object({
    email: joi.string().required().messages(joiMsg.errorMsg),
    password: joi.string().required().messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword})
});

export default loginUserSchema