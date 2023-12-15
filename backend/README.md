# Backend Server

Este proyecto es una API RESTful construida con Go y Gin que proporciona funcionalidades de autenticación y gestión de notas. Utiliza GORM como ORM para interactuar con la base de datos PostgreSQL.

## Tabla de contenidos

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Ejecución con Docker](#ejecución-con-docker)

## Descripción

Este proyecto es una API RESTful que permite a los usuarios registrarse, iniciar sesión y gestionar notas. La API está construida con Go y utiliza el framework Gin para manejar las solicitudes HTTP. La autenticación se realiza mediante tokens JWT. Utiliza GORM, un ORM para Go, para interactuar con la base de datos PostgreSQL.

## Instalación

Para instalar y configurar el proyecto, primero clona el repositorio. Luego, instala las dependencias con `go mod download`. Asegúrate de tener una instancia de PostgreSQL en ejecución y configura la cadena de conexión en el archivo `config/db.go`.

## Uso

Para iniciar la API, ejecuta `go run main.go`. La API estará disponible en [http://localhost:8080](http://localhost:8080). Puedes utilizar herramientas como Postman o curl para enviar solicitudes a la API.

## Contribución

Las contribuciones son bienvenidas. Para contribuir, por favor, crea una fork del repositorio, realiza tus cambios y envía una solicitud de extracción. Asegúrate de que tus cambios no rompen ninguna funcionalidad existente.

## Ejecución con Docker

Este proyecto se puede ejecutar fácilmente con Docker y Docker Compose. Esto creará contenedores para el servidor y la base de datos, lo que facilitará la gestión de las dependencias y el entorno de ejecución.

Para construir y ejecutar los contenedores, utiliza el siguiente comando:

```bash
docker-compose up --build
