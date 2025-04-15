document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('json/datosSecciones.json');
    const secciones = await res.json();
    const container = document.getElementById('seccionesContainer');

    secciones.forEach(seccion => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';
      col.innerHTML = `
        <div class="article-card" onclick="location.href='pages/${seccion.archivo}.html'">
          <div class="content">
            <p class="date">Sección</p>
            <p class="title">${seccion.nombre}</p>
          </div>
          <img src="${seccion.imagen}" alt="${seccion.nombre}" />
        </div>`;
      container.appendChild(col);
    });
  } catch (err) {
    console.error('Error cargando secciones:', err);
  }
});