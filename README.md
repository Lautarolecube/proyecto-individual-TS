# Proyecto individual TypeScript

Trabajo práctico: programación orientada a objetos, pruebas unitarias (Vitest) e integración continua con GitHub Actions.

## Ubicación del código

El proyecto Node/TypeScript está en la carpeta **`proyecto-individual-TS-main/`** (punto de entrada: `master.ts`, `package.json`).

## Requisitos

- [Node.js](https://nodejs.org/) 20 LTS (o compatible)

## Uso

Desde la raíz del repositorio:

```bash
cd proyecto-individual-TS-main
npm ci
npm run build
npm run test:run
npm start
```

- **`npm run dev`**: ejecuta `master.ts` con `ts-node` (desarrollo).
- **`npm start`**: ejecuta la salida compilada (`dist/master.js` tras `npm run build`).

## Integración continua

El workflow **CI** está en `.github/workflows/ci.yml` (raíz del repo). En cada push o pull request a `main` o `master` se instalan dependencias, se compila el proyecto y se ejecutan las pruebas unitarias.
