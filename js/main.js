fetch('data/articulos.json')
  .then(res => res.json())
  .then(data => {
    const categorias = [...new Set(data.map(a => a.categoria))];
    const catDiv = document.getElementById('categorias');
    const artDiv = document.getElementById('articulos');

    categorias.forEach(cat => {
      const btn = document.createElement('button');
      btn.textContent = cat;
      btn.onclick = () => mostrarArticulos(cat, data);
      catDiv.appendChild(btn);
    });

    function mostrarArticulos(categoria, articulos) {
      artDiv.innerHTML = '';
      articulos.filter(a => a.categoria === categoria).forEach(a => {
        const art = document.createElement('div');
        art.innerHTML = `<h2>${a.titulo}</h2><p>${a.contenido}</p>`;
        artDiv.appendChild(art);
      });
    }
  });
