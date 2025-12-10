🟢 MiMarcador – Landing Page (Angular)

Landing page desarrollada con Angular 17, diseñada para el proyecto MiMarcador, una plataforma de consulta de resultados deportivos en tiempo real.
La aplicación consume datos reales desde la API de TheSportsDB, mostrando próximos partidos por liga de manera dinámica, visual y totalmente responsiva.

🚀 Características principales

✔️ Landing page moderna diseñada con componentes Angular standalone

✔️ Arquitectura organizada por carpetas (shared, core, pages)

✔️ Consumo real de datos desde TheSportsDB API

✔️ Visualización de partidos próximos por liga

✔️ Conversión automática de horarios a la zona horaria de México

✔️ Diseño responsivo con Flexbox, Grid y Media Queries

✔️ Imágenes y logos de equipos de forma dinámica

✔️ Estilo visual coherente y atractivo

🛠️ Tecnologías utilizadas
Tecnología	Uso
Angular 17	Framework principal
TypeScript	Lógica y tipado
SCSS	Estilos por componente
Flexbox / Grid	Diseño responsivo
TheSportsDB API	Datos en tiempo real
Fetch API	Peticiones HTTP
📂 Estructura del proyecto
src/
 ├─ app/
 │   ├─ core/
 │   │   └─ services/        → Servicios (API)
 │   ├─ shared/
 │   │   ├─ header/          → Encabezado
 │   │   ├─ hero/            → Sección principal
 │   │   ├─ features/        → Características
 │   │   ├─ demo/            → Vista de partidos (API)
 │   │   └─ footer/          → Pie de página
 │   ├─ app.config.ts
 │   └─ app.ts
 ├─ assets/
 └─ index.html

▶️ Cómo ejecutar el proyecto
1. Clonar el repositorio
git clone https://github.com/PavlovRR/mimarcador-landing.git
cd mimarcador-landing

2. Instalar dependencias
npm install

3. Ejecutar el servidor de desarrollo
ng serve
# o
npm start

4. Abrir en el navegador

👉 http://localhost:4200

🔌 Integración con TheSportsDB API

Este proyecto utiliza un servicio personalizado para consumir la API:

Próximos partidos por liga

Logos de equipos

Nombres de ligas, equipos y fechas

Ejemplo del endpoint usado:

https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventsnextleague.php?id={LEAGUE_ID}


Ligas disponibles:

Liga	ID
Premier League	4328
LaLiga	4335
Bundesliga	4331
Liga MX	4350
MLS	4346
🌎 Responsive Design

La landing page incluye:

Breakpoints para móvil, tablet y escritorio

Adaptación de tarjetas, secciones y botones

Imágenes responsivas

Tests visuales para distintos tamaños

📦 Build para producción
ng build --configuration production


Los archivos finales se generan en:

dist/mimarcador-landing/

📘 Capturas (agregar en el documento final)

📸 Aquí puedes insertar imágenes de tu Landing Page mostrando:

Sección Hero

Vista de partidos

Botones de ligas

Versión móvil vs escritorio

Uso de Flex/Grid

Footer

📝 Licencia

Este proyecto es de uso académico y personal.
