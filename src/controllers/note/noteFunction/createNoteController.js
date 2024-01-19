//MÓDULO DE FUNCIONAMIENTO DE CREACIÓN DE NOTAS

// Importamos las funciones del modelo de notas
import { createNoteService } from "../../../services/note/indexNoteService.js";

//NOTAS//
//Función creamos la nota
const createNoteController = async (req, res) => {
  // Extraemos los datos de la solicitud
  const { title, detail, text, categoriaId } = req.body;
  const userId = req.userId;
  console.log("Createnotecontroller", userId);

  // Validamos que nos proporciono todos los campos necesarios
  if (!title || !detail || !text || !categoriaId) {
    return res.status(400).send({
      status: "error",
      message:
        "Todos los campos (title, text, categoriaId, detail) son requeridos.🔴",
    });
  }

  try {
    createNoteService(title, detail, text, categoriaId, userId).then(
      (noteId) => {
        res.status(201).send({
          status: "ok",
          message: "Nota creada exitosamente.✅",
          data: {
            id: noteId.notaId,
            title,
            detail,
            text,
            categoriaId,
            userId,
          },
        });
      }
    );
  } catch (error) {
    console.error("Error al crear la nota:", error);
    res.status(500).send({
      status: "error",
      message:
        "Error interno del servidor al crear la nota, createNoteController.🔴",
    });
  }
};

//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default createNoteController;
