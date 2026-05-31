/* ============================================================
   ARCHIVO: zapatillas.js
   Array de objetos de zapatillas + generación de tarjetas
   ============================================================ */


// =====================================================
// PASO 1: Array de objetos
// Cada {} es una zapatilla con sus propiedades:
// marca, modelo, talla y foto
// =====================================================
const zapatillas = [
  {
    marca:  "Nike",
    modelo: "Air Max Plus",
    talla:  40,
    foto:   "nike.jpg"
  },
  {
    marca:  "Adidas",
    modelo: "Superstar",
    talla:  50,
    foto:   "adidas.jpg"
  },
  {
    marca:  "Puma",
    modelo: "Puma RS-X",
    talla:  56,
    foto:   "puma.jpg"
  },
  {
    marca:  "Nike",
    modelo: "Air Max Plus",
    talla:  40,
    foto:   "nike.jpg"
  },
  {
    marca:  "Adidas",
    modelo: "Superstar",
    talla:  50,
    foto:   "adidas.jpg"
  },
  {
    marca:  "Puma",
    modelo: "Puma RS-X",
    talla:  56,
    foto:   "puma.jpg"
  }
];


// =====================================================
// PASO 2: Seleccionamos el contenedor del HTML
// =====================================================
const contenedor = document.getElementById('contenedor');


// =====================================================
// PASO 3: forEach() — recorremos el array y creamos
// una tarjeta HTML por cada objeto zapatilla
// =====================================================
zapatillas.forEach(function(zapatilla) {

  // Creamos el div de la tarjeta
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta-zapatilla');

  // Construimos el HTML interno con los datos del objeto
  tarjeta.innerHTML = `
    <div class="tarjeta-foto">
      <img src="${zapatilla.foto}" alt="${zapatilla.marca} ${zapatilla.modelo}" />
    </div>
    <div class="tarjeta-info">
      <p class="tarjeta-marca">${zapatilla.marca}</p>
      <div class="tarjeta-separador"></div>
      <div class="tarjeta-detalle">
        <p>Modelo: <span>${zapatilla.modelo}</span></p>
        <p>Talla: <span>${zapatilla.talla}</span></p>
      </div>
      <span class="tarjeta-talla-badge">Talla ${zapatilla.talla}</span>
    </div>
  `;

  // Añadimos la tarjeta al contenedor
  contenedor.appendChild(tarjeta);

});