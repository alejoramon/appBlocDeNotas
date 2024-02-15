//MÓDULO DE FUNCIONAMIENTO DE BORRADO DE NOTAS

//NOTAS//
//Función borrarmos una nota
// Importamos las funciones del modelo de notas
import { deleteNoteService } from "../../../services/note/indexNoteService.js";

// Controlador para eliminar una nota basada en su ID
const deleteNoteController = async (req, res) => {
  try {
    // Extraemos el ID de la nota y el ID del usuario de la solicitud
    const { id } = req.params;

    // Verificamos si se proporcionaron los IDs necesarios
    if (!id) {
      return res.status(400).json({
        error:
          "Se requieren ID de nota y ID de usuario para eliminar una nota.🔴",
      });
    }

    // Intentamos eliminar la nota utilizando el servicio
    const isDeleted = await deleteNoteService(id);

    return res
      .status(200)
      .json({ message: "La nota ha sido eliminada con éxito.✅" });
  } catch (error) {
    // En caso de un error, enviamos una respuesta de error al cliente
    console.error("Error al intentar eliminar la nota:🔴", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default deleteNoteController;
