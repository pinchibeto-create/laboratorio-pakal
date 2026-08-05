# Laboratorio Pakal

Sitio informativo de Laboratorio Pakal en Palenque, Chiapas.

## Tecnología

- Next.js con App Router
- React
- TypeScript
- Tailwind CSS mediante PostCSS
- Preparado para Netlify

## Desarrollo local

Requiere Node.js 22.13 o posterior y pnpm.

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`.

## Validación

```bash
pnpm build
pnpm lint
```

## Publicación en Netlify

1. Sube esta carpeta a un repositorio de GitHub.
2. En Netlify selecciona **Add new project → Import an existing project**.
3. Selecciona el repositorio.
4. Netlify utilizará la configuración incluida en `netlify.toml`:
   - comando: `pnpm run build`
   - directorio de publicación: `.next`
   - Node.js: `22.13.0`
5. Publica el proyecto.

Netlify aplicará automáticamente su adaptador OpenNext para Next.js.

## WhatsApp

Los botones de contacto abren WhatsApp en el número `916 102 0613` con un
mensaje inicial listo para editar y enviar.

## Información por confirmar

- Confirmar con el cliente que `916 102 0613` es su cuenta oficial de WhatsApp
  antes de publicar el sitio definitivo.
- Confirmar el horario del sábado.
- Sustituir las imágenes conceptuales por fotografías reales del laboratorio.
