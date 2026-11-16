'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const contenedorCatalogo = document.getElementById('catalogo');

    tienda.forEach((disco) => {
        const card = document.createElement('article');
        card.classList.add('card');

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('card-img-wrapper');

        const img = document.createElement('img');
        img.classList.add('card-img');
        img.src = disco.caratula;
        img.alt = `Carátula de ${disco.titulo} - ${disco.artista}`;

        img.onerror = function () {
            this.onerror = null;
            this.src = 'img/default.png';
            this.style.opacity = '0.5';
            this.classList.add('error-img');
        };

        imgWrapper.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titulo = document.createElement('h2');
        titulo.classList.add('card-title');
        titulo.textContent = disco.titulo;

        const artista = document.createElement('p');
        artista.classList.add('card-artist');
        artista.textContent = disco.artista;

        const metaRow = document.createElement('div');
        metaRow.classList.add('card-meta');

        const paisBadge = document.createElement('span');
        paisBadge.classList.add('badge-country');
        paisBadge.textContent = disco.pais;

        const anio = document.createElement('span');
        anio.classList.add('card-year');
        anio.textContent = disco.publicacion;

        metaRow.appendChild(paisBadge);
        metaRow.appendChild(anio);

        const copias = document.createElement('p');
        copias.classList.add('card-copies');
        copias.textContent = `💿 ${disco.copias}k copias vendidas`;

        const precio = document.createElement('p');
        precio.classList.add('card-price');
        precio.textContent = `€${disco.precio.toFixed(2)}`;

        cardBody.appendChild(titulo);
        cardBody.appendChild(artista);
        cardBody.appendChild(metaRow);
        cardBody.appendChild(copias);
        cardBody.appendChild(precio);

        card.appendChild(imgWrapper);
        card.appendChild(cardBody);

        contenedorCatalogo.appendChild(card);
    });
});