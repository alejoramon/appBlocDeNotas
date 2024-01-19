//MÓDULO DE FUNCIONAMIENTO DE MODIFICACION DE NOTAS

//NOTAS//
//Función creamos una nota
//Importamos las funciones del modelo de notas
import { updateNoteService } from "../../../services/note/indexNoteService.js";

// Controlador para actualizar una nota basada en su ID
const updateNoteController = async (req, res) => {
  const { id, title, detail, text, categoriaId } = req.body;

  // Validamos que se proporcionen todos los campos necesarios
  if (!id || !title || !detail || !text || !categoriaId) {
    return res.status(400).send({
      status: "error",
      message:
        "Todos los campos (id, title, detail, text, categoriaId) son requeridos para actualizar.🔴",
    });
  }

  try {
    const updatedNote = await updateNoteService(
      id,
      title,
      detail,
      text,
      categoriaId
    );

    res.status(200).send({
      status: "ok",
      message: "Nota modificada exitosamente.✅",
      data: updatedNote,
    });
  } catch (error) {
    console.error("Error al modificar la nota:", error);
    res.status(500).send({
      status: "error",
      message:
        "Error interno del servidor al modificar la nota, updateNoteController.🔴",
    });
  }
};

//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default updateNoteController;
