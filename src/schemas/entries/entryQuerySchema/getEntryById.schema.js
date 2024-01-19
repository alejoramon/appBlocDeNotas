//MÓDULO VALIDACIÓN DE VOTACIÓN DE ENTRADA

//Importamos joi (validacion y errores personalizados)import joi from 'joi'
import * as joiMsg from '../../../joi.error.messages.js'

const getEntryById = joi.object({
  noteId: joi.number().required().messages(joiMsg)
})

export default getEntryById
