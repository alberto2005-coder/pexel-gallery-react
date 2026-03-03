# 📸 Pexels Image Gallery - React + TypeScript

Beautiful image gallery powered by the Pexels API, built with React, TypeScript, and Vite.

---

## 🌐 Language / Idioma

- [Español (Spanish)](#español)
- [English](#english)

---

<a name="español"></a>
# 🇪🇸 Español

## 📋 Índice
1. [Descripción](#descripción-es)
2. [Tecnologías](#tecnologías-es)
3. [Instalación](#instalación-es)
4. [Configuración](#configuración-es)
5. [Uso](#uso-es)
6. [Estructura del Proyecto](#estructura-es)

<a name="descripción-es"></a>
### 1. Descripción
Esta aplicación es una galería de imágenes dinámica que permite buscar y visualizar fotografías de alta calidad utilizando la API de Pexels. Implementa patrones modernos de React como Hooks personalizados, Adapters para limpiar la data de la API, y TanStack Query para la gestión del estado asíncrono.

<a name="tecnologías-es"></a>
### 2. Tecnologías
- **React 19**
- **TypeScript**
- **Vite** (Build Tool)
- **TanStack Query (React Query)** (Gestión de datos)
- **React Router Dom** (Navegación)
- **CSS Modules / Vanilla CSS**

<a name="instalación-es"></a>
### 3. Instalación
Para instalar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/pexel-gallery-react.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd pexel-gallery-react
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

<a name="configuración-es"></a>
### 4. Configuración
Para que la aplicación funcione, necesitas una clave de API de Pexels.

1. Crea un archivo `.env` en la raíz del proyecto.
2. Añade tu clave de la siguiente manera:
   ```env
   VITE_PEXELS_API_KEY=tu_clave_aqui
   ```
   *Puedes usar `.env.example` como referencia.*

<a name="uso-es"></a>
### 5. Uso
Inicia el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

<a name="estructura-es"></a>
### 6. Estructura del Proyecto
- `src/api`: Llamadas directas a la API de Pexels.
- `src/adapters`: Transformación de los datos crudos de la API a interfaces del dominio.
- `src/hooks`: Lógica reutilizable y gestión de datos con React Query.
- `src/components`: Componentes visuales de la galería.

---

<a name="english"></a>
# 🇺🇸 English

## 📋 Table of Contents
1. [Description](#description-en)
2. [Technologies](#technologies-en)
3. [Installation](#installation-en)
4. [Configuration](#configuration-en)
5. [Usage](#usage-en)
6. [Project Structure](#structure-en)

<a name="description-en"></a>
### 1. Description
This application is a dynamic image gallery that allows searching and viewing high-quality photographs using the Pexels API. It implements modern React patterns such as custom Hooks, Adapters to clean API data, and TanStack Query for asynchronous state management.

<a name="technologies-en"></a>
### 2. Technologies
- **React 19**
- **TypeScript**
- **Vite** (Build Tool)
- **TanStack Query (React Query)** (Data management)
- **React Router Dom** (Navigation)
- **CSS Modules / Vanilla CSS**

<a name="installation-en"></a>
### 3. Installation
To install the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pexel-gallery-react.git
   ```
2. Enter the project folder:
   ```bash
   cd pexel-gallery-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

<a name="configuration-en"></a>
### 4. Configuration
For the application to work, you need a Pexels API key.

1. Create a `.env` file in the project root.
2. Add your key as follows:
   ```env
   VITE_PEXELS_API_KEY=your_key_here
   ```
   *You can use `.env.example` as a reference.*

<a name="usage-en"></a>
### 5. Usage
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

<a name="structure-en"></a>
### 6. Structure
- `src/api`: Direct calls to the Pexels API.
- `src/adapters`: Transformation of raw API data into domain interfaces.
- `src/hooks`: Reusable logic and data management with React Query.
- `src/components`: Gallery visual components.
