const seccion = JSON.parse(localStorage.getItem('seccionActual'));
document.getElementById('titulo-seccion').textContent = seccion.nombre;

fetch(seccion.archivo)
    .then(response => response.json())
    .then(libros => {
        const contenedor = document.getElementById('contenedor-libros');
        libros.forEach(libro => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}" />
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p>${libro.descripcion}</p>
      `;
            contenedor.appendChild(tarjeta);
        });
    });
