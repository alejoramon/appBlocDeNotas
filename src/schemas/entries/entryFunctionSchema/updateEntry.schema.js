//MÓDULO VALIDACIÓN DE VOTACIÓN DE ENTRADA

//Importamos joi (validacion y errores personalizados)import joi from 'joi'
import * as joiMsg from '../../joi.error.messages.js'

const updateEntrySchema = joi.object({
  title: joi.string().required().messages(joiMsg), //Reglas para el titulo
  text: joi.string().required().messages(joiMsg), //Reglas para el texto
  detail: joi.string().required().messages(joiMsg), //Reglas para la descripcion
  category: joi.number().required().messages(joiMsg), //Reglas para la categoria
  id: joi.number().required()
})

export default updateEntrySchema
