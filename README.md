## Despliegue en GitHub Pages (automatizado)

1. Haz público tu repositorio en GitHub.
2. Agrega el siguiente script en `package.json`:
	```json
	"export": "next export"
	```
3. Instala el paquete gh-pages:
	```bash
	npm install --save-dev gh-pages
	```
4. Agrega este script en `package.json`:
	```json
	"deploy": "npm run build && npm run export && gh-pages -d out"
	```
5. Ejecuta:
	```bash
	npm run deploy
	```
Esto subirá automáticamente el contenido estático a la rama `gh-pages`.
6. En GitHub, ve a Settings > Pages y selecciona la rama `gh-pages` como fuente.
## Despliegue automático

### Vercel
1. Ve a [https://vercel.com/import](https://vercel.com/import) y conecta tu cuenta de GitHub.
2. Selecciona el repositorio `cartera-next`.
3. Vercel detectará automáticamente Next.js y realizará el despliegue.
4. Cada push a `main` actualizará la web automáticamente.

### Netlify
1. Ve a [https://app.netlify.com/start](https://app.netlify.com/start) y conecta tu cuenta de GitHub.
2. Selecciona el repositorio `cartera-next`.
3. Configura el build command: `npm run build` y el publish directory: `.next`.
4. Netlify desplegará la web y cada push a `main` la actualizará automáticamente.
## Ejemplo de código

```tsx
// Ejemplo de uso de un componente en Next.js
import Navbar from './components/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			{/* ...otras secciones... */}
		</div>
	);
}
```

## Contribuir

¿Quieres mejorar este proyecto?

1. Haz un fork del repositorio.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit.
4. Haz push a tu rama y abre un Pull Request.

¡Toda contribución es bienvenida!
# Autor
[inbiostech](https://github.com/InbiosTech)

## Descripción técnica

Este proyecto está construido con:

- **Next.js 15**: Framework React para aplicaciones web modernas y SSR.
- **React 19**: Librería principal para la UI.
- **Tailwind CSS 3**: Utilidades CSS para diseño responsivo y moderno.
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad.

### Estructura principal

- `/app`: Páginas y layouts principales.
- `/components`: Componentes reutilizables (Navbar, Footer).
- `/sections`: Secciones de la landing (Hero, Servicios, Portafolio, Contacto).
- `/public`: Archivos estáticos e imágenes.

### Animaciones y UX

Se utilizan clases utilitarias de Tailwind y animaciones CSS para transiciones suaves y efectos visuales.

### Configuración

- `tailwind.config.js`: Configuración de Tailwind y paths de contenido.
- `postcss.config.js`: Plugins de Tailwind y Autoprefixer.

### Despliegue

Compatible con Vercel, Netlify y cualquier plataforma que soporte Next.js.

# Cartera Next

Landing page profesional para promocionar servicios y portafolio de desarrolladores.

## Características
- Diseño moderno y responsivo con Tailwind CSS
- Secciones: Hero, Servicios, Portafolio, Contacto
- Animaciones y experiencia de usuario única

## Instalación

```bash
npm install
```

## Uso

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la web.

## Despliegue
Puedes desplegar este proyecto fácilmente en Vercel, Netlify o cualquier servicio compatible con Next.js.

## Autor
[inbiostech](https://github.com/InbiosTech)
