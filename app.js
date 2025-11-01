// Inicializar el mapa centrado en Boyacá, Colombia
let map = L.map('map').setView([5.33379, -72.39603], 9);

// Variable para guardar el marcador de ubicación
let marcadorActual = null;

// Variable para la capa GeoJSON de departamentos
let capaGeoJSON = null;

// Añadir capa de tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Cargar y mostrar el archivo GeoJSON de departamentos
fetch('data/departamentos.geojson')
    .then(response => response.json())
    .then(data => {
        capaGeoJSON = L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: '#a7b698ff',
                    weight: 2,
                    opacity: 0.65,
                    fillOpacity: 0.2
                };
            },
            onEachFeature: function(feature, layer) {
                // Agregar popup con información del departamento
                if (feature.properties) {
                    let popupContent = '<div style="font-family: Arial, sans-serif;">';
                    if (feature.properties.dpto_cnmbr) {
                        popupContent += `<h3 style="margin: 0 0 10px 0;">${feature.properties.dpto_cnmbr}</h3>`;
                    }
                    if (feature.properties.dpto_ccdgo) {
                        popupContent += `<p style="margin: 5px 0;"><strong>Código:</strong> ${feature.properties.dpto_ccdgo}</p>`;
                    }
                    popupContent += '</div>';
                    layer.bindPopup(popupContent);
                }

                // Efecto hover
                layer.on('mouseover', function(e) {
                    this.setStyle({
                        fillOpacity: 0.5,
                        weight: 3
                    });
                });

                layer.on('mouseout', function(e) {
                    capaGeoJSON.resetStyle(this);
                });
            }
        }).addTo(map);

        // Ajustar el mapa para mostrar todos los departamentos
        map.fitBounds(capaGeoJSON.getBounds());
    })
    .catch(error => {
        console.error('Error al cargar el archivo GeoJSON:', error);
        alert('No se pudo cargar el archivo de departamentos');
    });

// Cargar y mostrar el archivo GeoJSON de BOLIVAR
fetch('data/BOLIVAR.geojson')
    .then(response => response.json())
    .then(data => {
        capaGeoJSON = L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: '#db4a10ff',
                    weight: 2,
                    opacity: 0.65,
                    fillOpacity: 0.2
                };
            },
            onEachFeature: function(feature, layer) {
                // Agregar popup con información del departamento
                if (feature.properties) {
                    let popupContent = '<div style="font-family: Arial, sans-serif;">';
                    if (feature.properties.dpto_cnmbr) {
                        popupContent += `<h3 style="margin: 0 0 10px 0;">${feature.properties.dpto_cnmbr}</h3>`;
                    }
                    if (feature.properties.dpto_ccdgo) {
                        popupContent += `<p style="margin: 5px 0;"><strong>Código:</strong> ${feature.properties.dpto_ccdgo}</p>`;
                    }
                    popupContent += '</div>';
                    layer.bindPopup(popupContent);
                }

                // Efecto hover
                layer.on('mouseover', function(e) {
                    this.setStyle({
                        fillOpacity: 0.5,
                        weight: 3
                    });
                });

                layer.on('mouseout', function(e) {
                    capaGeoJSON.resetStyle(this);
                });
            }
        }).addTo(map);

        // Ajustar el mapa para mostrar todos los departamentos
        map.fitBounds(capaGeoJSON.getBounds());
    })
    .catch(error => {
        console.error('Error al cargar el archivo GeoJSON:', error);
        alert('No se pudo cargar el archivo de departamentos');
    });

// Cargar y mostrar el archivo GeoJSON de Mun Bolivar
fetch('data/Mun_Bolivar.geojson')
    .then(response => response.json())
    .then(data => {
        capaGeoJSON = L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: '#5208ddff',
                    weight: 2,
                    opacity: 0.65,
                    fillOpacity: 0.2
                };
            },
            onEachFeature: function(feature, layer) {
                // Agregar popup con información del departamento
                if (feature.properties) {
                    let popupContent = '<div style="font-family: Arial, sans-serif;">';
                    if (feature.properties.dpto_cnmbr) {
                        popupContent += `<h3 style="margin: 0 0 10px 0;">${feature.properties.dpto_cnmbr}</h3>`;
                    }
                    if (feature.properties.dpto_ccdgo) {
                        popupContent += `<p style="margin: 5px 0;"><strong>Código:</strong> ${feature.properties.dpto_ccdgo}</p>`;
                    }
                    popupContent += '</div>';
                    layer.bindPopup(popupContent);
                }

                // Efecto hover
                layer.on('mouseover', function(e) {
                    this.setStyle({
                        fillOpacity: 0.5,
                        weight: 3
                    });
                });

                layer.on('mouseout', function(e) {
                    capaGeoJSON.resetStyle(this);
                });
            }
        }).addTo(map);

        // Ajustar el mapa para mostrar todos los departamentos
        map.fitBounds(capaGeoJSON.getBounds());
    })
    .catch(error => {
        console.error('Error al cargar el archivo GeoJSON:', error);
        alert('No se pudo cargar el archivo de departamentos');
    });    

// Función para agregar marcador
function agregarMarcador(lat, lng, titulo, descripcion) {
    // Eliminar marcador anterior si existe
    if (marcadorActual) {
        map.removeLayer(marcadorActual);
    }

    // Crear nuevo marcador
    marcadorActual = L.marker([lat, lng]).addTo(map);

    // Agregar popup si hay título o descripción
    if (titulo || descripcion) {
        marcadorActual.bindPopup(`<b>${titulo}</b><br>${descripcion}`).openPopup();
    }

    // Centrar el mapa en el marcador
    map.setView([lat, lng], 13);
}

// Función para obtener ubicación actual
function obtenerMiUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                agregarMarcador(lat, lng, 'Mi Ubicación', 'Estás aquí');
            },
            function(error) {
                alert('No se pudo obtener tu ubicación: ' + error.message);
            }
        );
    } else {
        alert('Tu navegador no soporta geolocalización');
    }
}

// Event listeners para los botones
document.getElementById('btnMiUbicacion').addEventListener('click', obtenerMiUbicacion);

document.getElementById('btnTunja').addEventListener('click', function() {
    agregarMarcador(5.5353, -73.3678, 'Tunja', 'Capital de Boyacá');
});

document.getElementById('btnSogamoso').addEventListener('click', function() {
    agregarMarcador(5.7142, -72.9342, 'Sogamoso', 'Ciudad del Sol y del Acero');
});

document.getElementById('btnCocuy').addEventListener('click', function() {
    agregarMarcador(6.4027, -72.4483, 'Cocuy', 'Puerta de entrada al Parque Nacional Natural El Cocuy');
});

// Añadir un marcador inicial en Tunja
agregarMarcador(5.5353, -73.3678, 'Tunja', 'Capital de Boyacá - ¡Bienvenido!');

// Añadir un marcador inicial en Tunja
agregarMarcador(5.33379, -72.39603, 'Yopal', 'Capital de Casanare - ¡Bienvenido!');

// Evento de clic en el mapa para añadir marcadores personalizados
map.on('click', function(e) {
    agregarMarcador(
        e.latlng.lat,
        e.latlng.lng,
        'Ubicación Seleccionada',
        `Coordenadas: ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`
    );
});
