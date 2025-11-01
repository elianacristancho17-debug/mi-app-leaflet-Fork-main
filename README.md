# Mi Aplicación Leaflet

Aplicación web interactiva de mapas construida con Leaflet, una biblioteca JavaScript de código abierto para mapas interactivos compatibles con dispositivos móviles.

## Descripción

Esta aplicación permite visualizar mapas interactivos, agregar marcadores, navegar a diferentes ubicaciones y obtener tu ubicación actual mediante geolocalización.

## Características

- Mapa interactivo con zoom y navegación
- Botones de acceso rápido a ciudades populares (Madrid, Barcelona, Ciudad de México)
- Geolocalización para encontrar tu ubicación actual
- Marcadores personalizados al hacer clic en el mapa
- Diseño responsive adaptado a dispositivos móviles
- Interfaz moderna con gradientes y animaciones

## Tecnologías Utilizadas

- **Leaflet** v1.9.4 - Biblioteca de mapas JavaScript
- **OpenStreetMap** - Proveedor de tiles/mapas
- HTML5
- CSS3
- JavaScript (ES6+)

## Estructura del Proyecto

```
mi-app-leaflet/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos personalizados
├── app.js              # Lógica de la aplicación
├── package.json        # Dependencias del proyecto
├── README.md           # Documentación
├── LICENSE             # Licencia del proyecto
└── .gitignore          # Archivos ignorados por Git
```

## Instalación

### Opción 1: Uso directo (sin instalación)

Simplemente abre el archivo `index.html` en tu navegador. La aplicación utiliza CDN para cargar Leaflet, por lo que no necesitas instalar dependencias.

### Opción 2: Servidor local

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd mi-app-leaflet
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

O alternativamente:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:8080` (o el puerto que indique el servidor)

## Uso

### Navegación Básica

- **Zoom**: Usa la rueda del ratón o los botones +/- en el mapa
- **Desplazamiento**: Arrastra el mapa con el cursor
- **Marcadores**: Haz clic en cualquier parte del mapa para añadir un marcador

### Botones de Control

- **Mi Ubicación**: Solicita permiso para acceder a tu ubicación GPS y centra el mapa en ella
- **Madrid**: Navega a Madrid, España
- **Barcelona**: Navega a Barcelona, España
- **Ciudad de México**: Navega a Ciudad de México, México

### Personalización

#### Cambiar la ubicación inicial

Edita el archivo `app.js`, línea 2:
```javascript
let map = L.map('map').setView([latitud, longitud], zoom);
```

#### Agregar nuevas ciudades

Añade un nuevo botón en `index.html`:
```html
<button id="btnNuevaCiudad">Nueva Ciudad</button>
```

Y su funcionalidad en `app.js`:
```javascript
document.getElementById('btnNuevaCiudad').addEventListener('click', function() {
    agregarMarcador(lat, lng, 'Título', 'Descripción');
});
```

#### Cambiar el estilo del mapa

Leaflet soporta múltiples proveedores de tiles. Para cambiar el estilo, reemplaza la URL en `app.js`:

```javascript
// Ejemplo con diferentes estilos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // OpenStreetMap (actual)
}).addTo(map);

// Mapbox (requiere API key)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // ...
}).addTo(map);
```

## Funciones Principales

### `agregarMarcador(lat, lng, titulo, descripcion)`

Añade un marcador en las coordenadas especificadas.

**Parámetros:**
- `lat` (number): Latitud
- `lng` (number): Longitud
- `titulo` (string): Título del popup
- `descripcion` (string): Descripción del popup

### `obtenerMiUbicacion()`

Obtiene la ubicación actual del usuario usando la API de Geolocalización del navegador.

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (para cargar los tiles del mapa)
- HTTPS o localhost (requerido para geolocalización)

## Compatibilidad

- Chrome/Edge:
- Firefox:
- Safari:
- Opera:

## Scripts Disponibles

- `npm start` - Inicia un servidor HTTP simple
- `npm run dev` - Inicia live-server con recarga automática

## Recursos

- [Documentación de Leaflet](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Leaflet Plugins](https://leafletjs.com/plugins.html)
- [Tutoriales de Leaflet](https://leafletjs.com/examples.html)

## Próximas Mejoras

- [ ] Búsqueda de sitios (Geocoding)
- [ ] Capas de mapa personalizadas
- [ ] Guardado de marcadores favoritos
- [ ] Exportar ubicaciones a GeoJSON
- [ ] Medición de distancias
- [ ] Dibujo de formas y polígonos

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

