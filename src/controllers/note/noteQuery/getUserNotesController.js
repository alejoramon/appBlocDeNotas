import { getUserNoteByDetailService } from "../../../services/note/indexNoteService.js";
import { getUserNotes } from "../../../services/note/noteQueryService/getUserNotes.js";

const getUserNotesController = async (req, res) => {
  try {
    // Obtenemos datos para su uso
    const userId = req.userId;

    // Utilizamos el servicio para obtener la nota por detalle y userId
    const notes = await getUserNotes(userId);

    // Mostrar los detalles de la nota
    res.status(200).send({
      status: "ok",
      message: "Notas obtenidas correctamente.✅",
      data: notes,
    });
  } catch (error) {
    // Capturamos cualquier error que ocurra durante la consulta y enviamos una respuesta de error
    console.error("Error al consultar las notas por detalle:", error.message);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al consultar nota.🔴",
    });
  }
};

export default getUserNotesController;
