fetch('datosSecciones.json')
    .then(response => response.json())
    .then(secciones => {
        const contenedor = document.querySelector('.tarjetas-secciones');
        secciones.forEach(seccion => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.innerHTML = `
        <img src="${seccion.imagen}" alt="${seccion.nombre}" />
        <h3>${seccion.nombre}</h3>
      `;
            tarjeta.addEventListener('click', () => {
                localStorage.setItem('seccionActual', JSON.stringify(seccion));
                window.location.href = 'seccion.html';
            });
            contenedor.appendChild(tarjeta);
        });
    });
