document.getElementById('nuevo-articulo-form').addEventListener('submit', e => {
  e.preventDefault();
  const nuevo = {
    titulo: document.getElementById('titulo').value,
    categoria: document.getElementById('categoria').value,
    contenido: document.getElementById('contenido').value
  };

  // Simulación: mostrar en consola
  console.log('Nuevo artículo:', nuevo);

  alert('Artículo agregado (simulado). Para guardar realmente, usa backend o GitHub commits.');
});