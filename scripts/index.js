document.addEventListener('DOMContentLoaded', async () => {
  await cargarMasVistos();
  await cargarSecciones();
});

async function cargarMasVistos() {
  try {
    const res = await fetch('json/masVistos.json');
    const data = await res.json();
    const container = document.getElementById('masVistoContainer');

    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      div.innerHTML = `
        <div class="d-flex justify-content-center">
          <div class="article-card">
            <div class="content">
              <p class="date">${item.fecha}</p>
              <p class="title">${item.titulo}</p>
            </div>
            <img src="${item.imagen}" alt="${item.titulo}" />
          </div>
        </div>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.error('Error cargando lo más visto:', err);
  }
}

async function cargarSecciones() {
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
}