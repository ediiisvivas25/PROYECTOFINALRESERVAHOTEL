# 🏨 Sistema de Reserva de Habitaciones de Hotel

Aplicación móvil desarrollada con **Ionic + React**, que permite registrar y visualizar reservas de habitaciones usando una API REST simulada con **JSON Server**. Proyecto académico para la asignatura de Computación Distribuida.

---

## 🧩 Funcionalidades

- Registro de reservas de hotel
- Visualización de reservas cargadas
- Listado de habitaciones y horarios predeterminados
- API REST simulada con JSON Server
- Arquitectura distribuida cliente–servidor simulada

---

## ⚙️ Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📁 Estructura del Proyecto

reservas-hotel/
├── db.json → API REST simulada (habitaciones, horarios, reservas)
├── src/
│ ├── api/api.ts → Conexiones con la API REST
│ ├── pages/ → IngresoReserva.tsx y ListaReservas.tsx
│ ├── types/Reserva.ts → Tipado de datos
│ └── App.tsx → Navegación por tabs





---

## 🚀 Cómo ejecutar localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu_usuario/reservas-hotel.git
cd reservas-hotel

Instalar dependencias:
npm install

Iniciar JSON server:
npm run api

Iniciar la aplicación Ionic:
ionic serve


## 🗃️ Datos predeterminados

Habitaciones (GET /habitaciones)

[
  { "id": 1, "numero": "101", "tipo": "Individual" },
  { "id": 2, "numero": "102", "tipo": "Doble" },
  { "id": 3, "numero": "201", "tipo": "Suite" }
]

Horarios (GET /horarios)

[
  { "id": 1, "rango": "13:00 - 15:00" },
  { "id": 2, "rango": "15:00 - 17:00" },
  { "id": 3, "rango": "17:00 - 19:00" }
]


 