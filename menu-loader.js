// ============================================================
// menu-loader.js
// Carga los productos de la categoría de esta página desde
// Firestore (colección "productos") y los pinta en el <ul>
// con id="lista-productos", respetando el mismo diseño/CSS
// que ya tenía el sitio (item-linea, detalle-peq, expandible...).
// ============================================================

function escaparHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

function formatoPrecio(precio) {
  if (precio === null || precio === undefined || precio === "") return "";
  const num = Number(precio);
  // Muestra sin decimales si es entero, con 2 decimales si no
  const texto = Number.isInteger(num) ? num.toString() : num.toFixed(2);
  return "$" + texto;
}

function renderProducto(p) {
  if (Array.isArray(p.opciones) && p.opciones.length > 0) {
    const opcionesHtml = p.opciones
      .map(
        (op) => `
        <li>
          <div class="sabor-linea">
            <span>${escaparHtml(op.nombre)}</span>
            <span class="precio">${formatoPrecio(op.precio)}</span>
          </div>
        </li>`
      )
      .join("");

    return `
      <li class="expandible">
        <div class="titulo">
          <span>${escaparHtml(p.nombre)}</span>
          <span class="flecha">▼</span>
        </div>
        <div class="sabores">
          <ul>${opcionesHtml}</ul>
        </div>
      </li>`;
  }

  const detalleHtml = p.detalle
    ? `<p class="detalle-peq">${escaparHtml(p.detalle)}</p>`
    : "";

  return `
    <li>
      <div class="item-linea">
        <span>${escaparHtml(p.nombre)}</span>
        <span class="precio">${formatoPrecio(p.precio)}</span>
      </div>
      ${detalleHtml}
    </li>`;
}

async function cargarMenu() {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;
  const categoria = contenedor.dataset.categoria;

  try {
    const snapshot = await db
      .collection("productos")
      .where("categoria", "==", categoria)
      .orderBy("orden", "asc")
      .get();

    if (snapshot.empty) {
      contenedor.innerHTML =
        "<li>Aún no hay productos cargados en esta categoría.</li>";
      return;
    }

    let html = "";
    snapshot.forEach((doc) => {
      html += renderProducto(doc.data());
    });
    contenedor.innerHTML = html;

    // Reactivar el comportamiento de las listas expandibles (sabores/opciones)
    contenedor.querySelectorAll(".expandible").forEach((item) => {
      const titulo = item.querySelector(".titulo");
      if (titulo) {
        titulo.addEventListener("click", () => {
          item.classList.toggle("abierto");
        });
      }
    });
  } catch (err) {
    console.error("Error cargando el menú:", err);
    contenedor.innerHTML =
      "<li>No se pudo cargar el menú. Por favor recarga la página.</li>";
  }
}

document.addEventListener("DOMContentLoaded", cargarMenu);
