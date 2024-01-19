//M´PDULO DE MANEJO DE ERRORES

// Importamos el módulo de ayuda para errores
import errorHelper from './errors.helper.js';

// Función para validar datos utilizando un esquema proporcionado y manejar errores
const validateHelper = async (schema, data) => {
  try {
    // Validamos los datos utilizando el esquema proporcionado
    await schema.validateAsync(data);
  } catch (error) {
    console.error(error);  
    
    // Llamamos a la función badRequestError del módulo helper y pasamos mensaje de error detallado 
    errorHelper.badRequestError(error?.details?.[0]?.message);
  }
}

// Exportamos a ()
export default validateHelper;