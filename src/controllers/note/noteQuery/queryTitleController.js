//MÓDULO DE FINCIONAMIENTO DE CONSULTA DE NOTA POR TÍTULO

//CONSULTAS//
//Función para obtener nota por título
// Importamos el servicio para obtener las notas de un usuario
import { getUserNoteService } from '../../../services/note/indexNoteService.js';
import dotenv from 'dotenv';

dotenv.config();

const getUserNoteController = async (req, res) => {
  try {
    const userId = req.userId;  
    const { title } = req.body; 

    const notas = await getUserNoteService(userId, title);
    
    if (notas.length === 0) {
      res.status(404).send({
        status: 'error',
        message: 'No se encontraron notas para este título y usuario.🔴'
      });
    } else {
      res.status(200).send({
        status: 'ok',
        message: 'Notas obtenidas correctamente.✅',
        data: {
          titles: title
        }
      });
    }
  } catch (error) {
    console.error('Error al consultar notas por título:', error.message);
    res.status(500).send({
      status: 'error',
      message: 'Error interno del servidor al consultar notas por título.🔴'
    });
  }
};

export default getUserNoteController;