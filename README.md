# app_bloc_de_notas

## CARACTERÍSTICAS

- Registro y login de usuarios.
- Creación, modificación y eliminación de notas.
- Creación, modificación y eliminación de categorias.
- Categorización de notas.

## DEPENDENCIAS

    - express           (Agrega los módulos package.json y package-lock.json)    (El primero!!)
    - dotenv            (Acceder al archivo .env)
    - mysql12           (Manejador la base de datos)
    - jsonwebtoken      (Manejador el usuario)
    - bcrypt            (Encriptador)
    - joi               (Validador exquemas de datos)
    - cors              (middleware accesos)

## ENDPOINTS

- **USUARIOS**

  - **POST** Registro de usuario
  - **POST** Login de usuario

- **NOTAS**

  - **POST** Crea una nota
  - **PUT** Modifica una nota
  - **DELETE** Elimina una nota

- **CATEGORIAS**

  - **POST** Crea una categoria
  - **PUT** Modifica una categoria
  - **DELETE** Elimina una categoria

- **CONSULTAS**

  - **GET** Categorias / busqueda por id (lista total de categorias)

  - **GET** Notas / busqueda por detalle
  - **GET** Notas / busqueda por titulo

  - **GET** Notas / req.query
  - **GET** Notas / Devuelve notas por tipología
  - **GET** Notas / Devuelve notas por buscar palabra (o tipología)
  - **GET** Notas /Devuelve el detalle de la nota con id = id
