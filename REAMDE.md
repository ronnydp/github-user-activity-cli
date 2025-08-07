## GitHub User Activity CLI

Una herramienta de línea de comando que permite consultar la actividad reciente de cualquier usuario de GitHub usando la API pública de GitHub

---

## Características 

- Consulta la actividad pública reciente de un usuario de GitHub.
- Muestra eventos como :
    - Commits realizados (`PushEvent`)
    - Repositorios marcados con estrella (`WatchEvent`)
    - Issues abiertos o cerrados (`PushEvent`)
- Manejo de errores como usuarios no encontrados o problemas de red.
- Uso exclusivo de módulos nativos de Node.js (`https`, `process`).
- No depende de librerías externas.

---

## Requisitos

- Node.js v14 o superior (probado con Node.js v18+)

---

## Instalación

No requiere instalación de paquetes.

Solo clona el repositorio o descarga el archivo `github_activity.js`.

```bash
git clone https://github.com/ronnydp/github-user-activity-cli.js
cd github-user-activity-cli
```

## Licencia 

Este proyecto es de uso libre para fines educativos y personales. Puedes modificarlo como desees.