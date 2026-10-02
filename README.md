# Réplica web de Inelco

Réplica de la web de [Inelco S.A.](https://www.inelco.com.ar/) hecha como proyecto de prueba para practicar maquetado con React. No es el sitio oficial ni tiene uso comercial.

> Nota: la empresa real es Inelco S.A.; el repo se llama `inelco-srl-replic`, pero sirve para el mismo propósito.

## Stack

- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Requisitos

- Node.js `^20.19.0 || >=22.12.0` (probado con Node 24)

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Lint con ESLint
npm run lint

# Build de producción (genera dist/)
npm run build

# Previsualizar el build
npm run preview
```

## Estructura

```
src/
├── main.tsx        # Entry point
├── App.tsx         # Composición de secciones
├── sections/       # Secciones de la página (Navbar, AboutUs, Services, Clients)
└── styles/         # CSS por sección
```