# 📝 Todo API - Spring Boot (Almacenamiento en Memoria)

Una API REST sencilla para gestionar tareas ("todos") usando Spring Boot. Esta API utiliza almacenamiento en memoria, ideal para fines educativos o pruebas sin base de datos.

---

## 🚀 Requisitos

- Java 17+
- Maven 3.6+
- Postman (opcional, para pruebas)
- IDE (IntelliJ, VSCode, Eclipse, etc.)

---

## 📂 Estructura del Proyecto

```
.
├── HELP.md
├── README.md
├── mvnw
├── mvnw.cmd
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── example
    │   │           └── demo
    │   │               ├── Controller
    │   │               │   └── TodoController.java
    │   │               ├── DemoApplication.java
    │   │               └── Model
    │   │                   └── Todo.java
    │   └── resources
    │       ├── application.properties
    │       ├── static
    │       └── templates
    └── test
        └── java
            └── com
                └── example
                    └── demo
                        └── DemoApplicationTests.java

````

---

## 📦 Instalación y Ejecución

```bash
# Clona el proyecto
git clone https://github.com/tu-usuario/todo-api.git

# Entra al proyecto
cd todo-api

# Ejecuta la aplicación
./mvnw spring-boot:run
````

La API estará disponible en: `http://localhost:8080`

---

## 🛠️ Endpoints Disponibles

### ➕ Crear una nueva tarea

* **POST** `/todos`
* **Body (JSON):**

```json
{
  "texto": "Estudiar React",
  "completado": false
}
```

---

### 📋 Obtener todas las tareas

* **GET** `/todos`

---

### 🔍 Obtener una tarea por ID

* **GET** `/todos/{id}`

---

### ✏️ Actualizar una tarea

* **PUT** `/todos/{id}`
* **Body (JSON):**

```json
{
  "id": 1,
  "texto": "Estudiar React y JSX",
  "completado": true
}
```

---

### 🗑️ Eliminar una tarea

* **DELETE** `/todos/{id}`

---

## 💾 Almacenamiento

Esta API guarda las tareas en una lista en memoria (`List<Todo>`). Esto significa que **los datos se perderán** cuando se detenga la aplicación. No se usa base de datos.

---

## 📦 Dependencias Clave

* Spring Boot Starter Web
* Lombok 

---

## ✍️ Autor

Creado como parte de un taller básico de React + Spring Boot para mostrar la integración frontend/backend con llamadas HTTP.





