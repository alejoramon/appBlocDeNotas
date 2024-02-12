//Módulo de unificacion de archivos Control y consulta de notas

//Importamos los módulos de notas
import createNoteController from "./noteFunction/createNoteController.js";
import updateNoteController from "./noteFunction/updateNoteController.js";
import deleteNoteController from "./noteFunction/deleteNoteController.js";

//Importamos los módulos de consultas de notas
import getUserNoteDetailController from "./noteQuery/queryDetailController.js";
import getUserNoteController from "./noteQuery/queryTitleController.js";
import getUserNotesIdController from "./noteQuery/queryIdController.js";
//exportamos funciones a rutas (entries.routers.js)
export {
  createNoteController,
  updateNoteController,
  deleteNoteController,
  getUserNoteDetailController,
  getUserNoteController,
  getUserNotesIdController,
};
