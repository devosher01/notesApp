# Proyecto de Gestión de Notas

Este proyecto consta de dos partes: el backend, desarrollado en Go, y el frontend, desarrollado en React con Vite.

## Estructura del Proyecto

### Frontend (Directorio: frontend)

La carpeta frontend contiene el código del cliente, desarrollado con React y Vite.



```plaintext
frontend/
├── Api
│   ├── auth.js
│   ├── config.js
│   └── notes.js
├── App.jsx
├── assets
│   ├── background.png
│   └── react.svg
├── components
│   ├── custom_input.jsx
│   ├── filter_category.jsx
│   ├── note_card.jsx
│   ├── note_form_card.jsx
│   └── tabs.jsx
├── index.css
├── main.jsx
├── pages
│   ├── LoginPage.jsx
│   ├── NotesPage.jsx
│   └── SignUpPage.jsx
└── private_route.jsx




## Despliegue del Frontend

Asegúrate de tener Node.js instalado en tu máquina. Abre una terminal en la carpeta frontend.

Ejecuta npm install para instalar las dependencias.
Ejecuta npm run dev para iniciar el servidor de desarrollo.

### Backend (Directorio: backend)

La carpeta backend contiene el código del servidor, desarrollado en Go.



plaintext
Copy code
backend/
├── go.mod
├── go.sum
├── main.go
├── pkg
│   ├── config
│   │   └── db.go
│   ├── controllers
│   │   ├── note_controller.go
│   │   └── user_controller.go
│   ├── middleware
│   │   └── auth.go
│   ├── models
│   │   ├── note.go
│   │   └── user.go
│   ├── repositories
│   │   ├── note_repositories.go
│   │   └── user_repository.go
│   └── services
│       ├── jwt_services.go
│       ├── note_services.go
│       └── user_services.go
└── tmp
    ├── build-errors.log
    └── main.exe
