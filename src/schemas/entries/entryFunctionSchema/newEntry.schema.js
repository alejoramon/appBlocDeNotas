//MÓDULO VALIDACION DE NUEVA ENTRADA 

//Importamos joi (validacion y errores personalizados)
import joi from 'joi'
import * as joiMsg from '../joi.error.messages.js'

//Exquema de validación para una nueva entrada.
const newEntrySchema = joi.object({
  title: joi.string().required().messages(joiMsg), //Reglas para el titulo
  text: joi.string().required().messages(joiMsg), //Reglas para el texto
  detail: joi.string().required().messages(joiMsg), //Reglas para la descripcion
  category: joi.number().required().messages(joiMsg) //Reglas para la categoria
})

export default newEntrySchema
