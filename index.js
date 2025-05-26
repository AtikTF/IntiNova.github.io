// Inicialización del mapa
function initMap() {
    // Crear el mapa centrado en una ubicación por defecto
    const map = L.map('map').setView([-0.21182155297757171, -78.48987459808514], 12);

    // Agregar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Agregar algunos marcadores de ejemplo
    const locations = [
        {
            coords: [-0.21182155297757171, -78.48987459808514],
            title: "Campus EPN",
            description: "Primera estación Nova Inti con 8 puertos de carga USB"
        },
        {
            coords: [-0.20833256968304886, -78.49045267535028],
            title: "El Giron - Estación de bus",
            description: "Estación especial para estudiantes"
        },
        {
            coords: [-0.20784517807303812, -78.49761665923397],
            title: "Parque El Ejido",
            description: "Estación Nova Inti con 8 puertos de carga USB"
        }
    ];

    // Agregar marcadores al mapa
    locations.forEach(location => {
        const marker = L.marker(location.coords)
            .addTo(map)
            .bindPopup(`
                        <div style="max-width: 200px;">
                            <h4 style="color: #6C733D; margin-bottom: 8px;">${location.title}</h4>
                            <p style="margin: 0; font-size: 14px;">${location.description}</p>
                            <div style="margin-top: 10px; font-size: 12px; color: #666;">
                                <span style="color: #9DA65D;">●</span> Disponible 24/7<br>
                                <span style="color: #9DA65D;">●</span> Carga gratuita<br>
                            </div>
                        </div>
                    `);
    });
}

// Navegación suave y manejo de secciones activas
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Función para activar una sección específica
    function activateSection(targetId) {
        // Remover clase active de todos los links
        navLinks.forEach(link => link.classList.remove('active'));
    }

}
initMap();
initNavigation();