//MÓDULO REGLAS PARA CAMBIO CONTRASEÑA

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiMsg from '../../joi.error.messages.js';

const editUserPasswordSchema = joi.object({
    email: joi.string().email().required().messages(joiMsg.errorMsg),//Reglas para el correo
    recoverPassCode: joi.string().required().messages(joiMsg.errorMsg),//Reglas para la contraseña
    newPass:  joi.string().required().messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword})
});

export default editUserPasswordSchema