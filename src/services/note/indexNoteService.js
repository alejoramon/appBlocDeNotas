// MÓDULO PRINCIPAL DE SERVICIOS DE NOTAS


// Importamos todas las funciones  con el servicio de nota
import { createNoteService } from './noteFunctionService/createNoteService.js';
import { updateNoteService } from './noteFunctionService/updateNoteService.js';
import { deleteNoteService } from './noteFunctionService/deleteNoteService.js';

import { getUserNoteByDetailService } from './noteQueryService/queryDetailService.js';
import { getUserNoteService } from './noteQueryService/queryTitleService.js';

//exportamos funciones a controllers (createNoteController.js,updetaNoteController.js y deleteNoteController.js)
export {createNoteService, updateNoteService, deleteNoteService,getUserNoteByDetailService, getUserNoteService}






