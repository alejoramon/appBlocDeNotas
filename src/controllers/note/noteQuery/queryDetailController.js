//MÓDULO DE FUNCIONAMIENTO DE CONSULTA DE NOTA POR DETALLE

//CONSULTAS//
//Función para obtener nota por detalle
import { getUserNoteByDetailService } from "../../../services/note/indexNoteService.js";
import dotenv from "dotenv";

dotenv.config();

const getUserNoteDetailController = async (req, res) => {
  try {
    // Obtenemos datos para su uso
    const userId = req.userId;
    const { detail } = req.body;

    // Utilizamos el servicio para obtener la nota por detalle y userId
    const noteData = await getUserNoteByDetailService(userId, detail);

    // Comprobamos si se encontró la nota
    if (!noteData || noteData.length === 0) {
      res.status(404).send({
        status: "error",
        message: "No se encontró la nota para este detalle y usuario.🔴",
      });
      return;
    }

    // Mostrar los detalles de la nota
    res.status(200).send({
      status: "ok",
      message: "Nota obtenida correctamente.✅",
      data: {
        id: noteData[0].id,
        detail: noteData[0].detail,
        title: noteData[0].title,
        text: noteData[0].text,
      },
    });
  } catch (error) {
    // Capturamos cualquier error que ocurra durante la consulta y enviamos una respuesta de error
    console.error("Error al consultar nota por detalle:", error.message);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al consultar nota por detalle.🔴",
    });
  }
};

export default getUserNoteDetailController;
