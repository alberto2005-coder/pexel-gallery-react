# Pexels Image Gallery (React + TypeScript)

[Español](#español) · [English](#english)

---

## Español

### Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración de la API](#configuración-de-la-api)
- [Uso](#uso)
- [Scripts](#scripts)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Licencia](#licencia)

### Descripción

Galería de imágenes dinámica que busca y muestra fotografías de alta calidad usando la **API de Pexels**. La aplicación implementa patrones modernos de React: *hooks* personalizados, un **adapter** que limpia la respuesta de la API y **TanStack Query** para la gestión del estado asíncrono.

El flujo es simple: escribes un término en la portada, la app navega a `/imagenes?q=<término>` y muestra una cuadrícula con la imagen, el fotógrafo y la descripción de cada resultado.

### Características

- **Búsqueda por texto** desde la portada, con envío por botón o con `Enter`.
- **Rutas con React Router**: `/` (portada) y `/imagenes` (galería).
- **Tema claro/oscuro** persistente con el hook `useTheme`.
- **Caché y reintentos** de las peticiones gracias a TanStack Query.
- **Separación de responsabilidades**: `api` → `adapters` → `hooks` → `components`.
- **Carga diferida** de las imágenes (`loading="lazy"`).
- **TypeScript** en todo el proyecto.

### Tecnologías

| Pieza | Versión |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| TanStack Query | 5 |
| React Router DOM | 7 |
| ESLint | 9 (configuración plana) |

Los estilos son **CSS puro** (sin Tailwind ni CSS-in-JS).

### Requisitos

- **Node.js 20 o superior**.
- npm.
- Una **API key de Pexels** (gratuita): se obtiene en <https://www.pexels.com/api/>.

### Instalación

```bash
git clone https://github.com/alberto2005-coder/pexel-gallery-react.git
cd pexel-gallery-react
npm install
```

### Configuración de la API

1. Crea un archivo `.env` en la raíz del proyecto (hay un `.env.example` de referencia).
2. Añade tu clave:

   ```env
   VITE_PEXELS_API_KEY=tu_clave_aqui
   ```

Sin esa variable la aplicación arranca, pero la búsqueda lanza el error `Pexels API Key no encontrada`, porque Vite solo expone al cliente las variables que empiezan por `VITE_`.

### Uso

```bash
npm run dev
```

Abre <http://localhost:5173>, escribe un término (por ejemplo «Playas» o «Arquitectura») y pulsa **Buscar Imágenes**. La galería pide 10 resultados por búsqueda a `https://api.pexels.com/v1/search`.

El botón 🌙 / ☀️ de la barra superior alterna el tema.

### Scripts

| Script | Función |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Comprobación de tipos (`tsc -b`) y build de producción |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |

### Estructura del proyecto

```text
pexel-gallery-react/
├── src/
│   ├── api/
│   │   └── imagenesPexel.ts       # Llamada a la API de Pexels
│   ├── adapters/
│   │   └── imagenesAdapter.ts     # Traduce la respuesta a `ImagenAdaptada`
│   ├── hooks/
│   │   ├── useImages.ts           # React Query + adapter
│   │   └── useTheme.ts            # Tema claro/oscuro
│   ├── components/
│   │   ├── ListaImagenes.tsx      # Cuadrícula de resultados
│   │   └── TarjetaImagen.tsx      # Tarjeta individual
│   ├── App.tsx                    # Router, navbar y portada
│   ├── main.tsx
│   └── index.css
├── .env.example
├── index.html
├── vite.config.ts
├── tsconfig*.json
├── eslint.config.js
├── LICENSE
└── README.md
```

### Arquitectura

1. **`src/api`** hace el `fetch` a Pexels y devuelve la respuesta cruda (`PexelsApiResponse`). Si falta la clave o la petición falla, lanza un error.
2. **`src/adapters`** convierte cada `PexelsPhoto` en `ImagenAdaptada` (`id`, `url`, `descripcion`, `fotografo`), usando `src.medium` como imagen.
3. **`src/hooks/useImages`** envuelve la llamada en `useQuery` con `queryKey: ['images', texto]` y `select: adaptarImagenes`. Se desactiva mientras el término esté vacío.
4. **`src/components`** solo pinta; no sabe nada de la API.

### Licencia

Este proyecto se distribuye bajo la **licencia MIT**. Consulta [LICENSE](LICENSE).

---

## English

### Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [API configuration](#api-configuration)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Architecture](#architecture)
- [License](#license)

### Overview

A dynamic image gallery that searches and displays high-quality photos from the **Pexels API**. The app applies modern React patterns: custom hooks, an **adapter** that cleans up the API response, and **TanStack Query** for asynchronous state management.

The flow is simple: you type a term on the landing page, the app navigates to `/imagenes?q=<term>` and renders a grid with each result's image, photographer and description.

### Features

- **Text search** from the landing page, triggered by button or `Enter`.
- **React Router routes**: `/` (home) and `/imagenes` (gallery).
- **Light/dark theme** persisted through the `useTheme` hook.
- **Caching and retries** for requests thanks to TanStack Query.
- **Separation of concerns**: `api` → `adapters` → `hooks` → `components`.
- **Lazy-loaded** images (`loading="lazy"`).
- **TypeScript** across the project.

### Tech stack

| Piece | Version |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| TanStack Query | 5 |
| React Router DOM | 7 |
| ESLint | 9 (flat config) |

Styling is **plain CSS** (no Tailwind, no CSS-in-JS).

### Requirements

- **Node.js 20 or later**.
- npm.
- A **Pexels API key** (free): get one at <https://www.pexels.com/api/>.

### Installation

```bash
git clone https://github.com/alberto2005-coder/pexel-gallery-react.git
cd pexel-gallery-react
npm install
```

### API configuration

1. Create a `.env` file in the project root (a `.env.example` is provided).
2. Add your key:

   ```env
   VITE_PEXELS_API_KEY=your_key_here
   ```

Without that variable the app still boots, but searching throws `Pexels API Key no encontrada`, because Vite only exposes variables prefixed with `VITE_` to the client.

### Usage

```bash
npm run dev
```

Open <http://localhost:5173>, type a term (e.g. "Beaches" or "Architecture") and press **Buscar Imágenes** (Search). The gallery requests 10 results per search from `https://api.pexels.com/v1/search`.

The 🌙 / ☀️ button in the navbar toggles the theme.

### Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type check (`tsc -b`) and production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint over the project |

### Project structure

```text
pexel-gallery-react/
├── src/
│   ├── api/
│   │   └── imagenesPexel.ts       # Pexels API call
│   ├── adapters/
│   │   └── imagenesAdapter.ts     # Maps the response to `ImagenAdaptada`
│   ├── hooks/
│   │   ├── useImages.ts           # React Query + adapter
│   │   └── useTheme.ts            # Light/dark theme
│   ├── components/
│   │   ├── ListaImagenes.tsx      # Results grid
│   │   └── TarjetaImagen.tsx      # Single card
│   ├── App.tsx                    # Router, navbar and home page
│   ├── main.tsx
│   └── index.css
├── .env.example
├── index.html
├── vite.config.ts
├── tsconfig*.json
├── eslint.config.js
├── LICENSE
└── README.md
```

### Architecture

1. **`src/api`** performs the `fetch` to Pexels and returns the raw response (`PexelsApiResponse`). It throws when the key is missing or the request fails.
2. **`src/adapters`** turns each `PexelsPhoto` into `ImagenAdaptada` (`id`, `url`, `descripcion`, `fotografo`), using `src.medium` as the image.
3. **`src/hooks/useImages`** wraps the call in `useQuery` with `queryKey: ['images', term]` and `select: adaptarImagenes`. It stays disabled while the term is empty.
4. **`src/components`** only renders; they know nothing about the API.

### License

This project is released under the **MIT License**. See [LICENSE](LICENSE).
