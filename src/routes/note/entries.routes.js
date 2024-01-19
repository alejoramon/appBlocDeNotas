//MÓDULO DE ENDPOINTS DE NOTAS 

//Importamos módulos de funciones 
import express from 'express';
import { getCategoriesController, createCategoryController, updateCategoryController, deleteCategoryController } from '../../controllers/category/indexCategoriesController.js';
import { createNoteController, updateNoteController, deleteNoteController,getUserNoteDetailController, getUserNoteController} from '../../controllers/note/indexNoteController.js';
import validateAuth from '../../middleware/validateAuth.js'; //Validación de Token

const router = express.Router()

//Endpoint de los archivos(indexCategoryController.js y indexNoteController.js)

//Categorias
router.post('/categories', validateAuth, createCategoryController);                                                         //Crear categoria
router.put('/categories/:id', validateAuth, updateCategoryController);                                                      //Modificar categoria
router.delete('/categories/:id', validateAuth, deleteCategoryController);                                                   //Eliminar categoria

router.get('/categories',validateAuth, getCategoriesController);                                                            //Obtener listado categorias


//Notas
router.post('/notas', validateAuth, createNoteController);                                                                   //Crear nota 
router.put('/notas/:id', validateAuth, updateNoteController);                                                                //Modificar nota
router.delete('/notas/:id', validateAuth, deleteNoteController);                                                             //Eliminar nota

router.get('/notas/:id/:detail', validateAuth, getUserNoteDetailController);                                                             //Obtener nota por detalle
router.get('/notes/:title', validateAuth, getUserNoteController);                                                           //Obtener nota por título

//Exportamos rutas (index.routes.js)
export default router
