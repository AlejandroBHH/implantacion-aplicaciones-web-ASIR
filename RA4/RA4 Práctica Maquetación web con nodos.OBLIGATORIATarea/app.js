// HEADER
const header = document.createElement("header");

const logo = document.createElement("img");
logo.src = "logo-azul-marino-viajes.jpg";
logo.alt = "Azul Marino Viajes";
header.appendChild(logo);

const nav = document.createElement("nav");
const menu = ["Inicio", "Nosotros", "Servicios", "Contacto"];

menu.forEach(item => {
  const enlace = document.createElement("a");
  enlace.href = "#";
  enlace.textContent = item;
  nav.appendChild(enlace);
});

header.appendChild(nav);
document.body.appendChild(header);

// MAIN
const main = document.createElement("main");

const section1 = document.createElement("section");
const h2 = document.createElement("h2");
h2.textContent = "Este es el titular del div de texto";
section1.appendChild(h2);

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
section1.appendChild(p);

const btn = document.createElement("button");
btn.textContent = "Ver más";
section1.appendChild(btn);

main.appendChild(section1);
document.body.appendChild(main);

// FOOTER
const footer = document.createElement("footer");
footer.textContent = "© Azul Marino Viajes";
document.body.appendChild(footer);
