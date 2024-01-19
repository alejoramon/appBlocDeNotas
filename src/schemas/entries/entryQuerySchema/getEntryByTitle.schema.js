//MÓDULO VALIDACIÓN DE VOTACIÓN DE ENTRADA

//Importamos joi (validacion y errores personalizados)import joi from 'joi'
import * as joiMsg from '../../../joi.error.messages.js'

const getEntryByTitle = joi.object({
  title: joi.number().required().messages(joiMsg)
})

export default getEntryByTitle
