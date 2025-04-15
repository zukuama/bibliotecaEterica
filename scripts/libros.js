document.addEventListener('DOMContentLoaded', async () => {
  const seccion = window.location.pathname.split('/').pop().replace('.html', '');
  const url = `../json/${seccion}.json`;

  try {
    const res = await fetch(url);
    const libros = await res.json();
    const container = document.getElementById('librosContainer');

    libros.forEach(libro => {
      const col = document.createElement('div');
      col.className = 'col-md-12 mb-4';
      col.innerHTML = `
        <div class="card libro-card d-flex flex-row">
          <img src="${libro.imagen}" class="img-fluid libro-img" alt="${libro.titulo}">
          <div class="card-body">
            <h5 class="card-title">${libro.titulo}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${libro.autor}</h6>
            <p class="card-text">${libro.descripcion}</p>
            <a href="${libro.ver}" class="btn btn-primary me-2" target="_blank">Ver ahora</a>
            <a href="${libro.descargar}" class="btn btn-secondary" target="_blank">Descargar</a>
          </div>
        </div>`;
      container.appendChild(col);
    });
  } catch (err) {
    console.error('Error cargando libros:', err);
  }
});