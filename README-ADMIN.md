# Cómo activar el panel de administración

Esto conecta tu sitio a **Firebase** (gratis) para que puedas agregar productos
y cambiar precios desde una página oculta (`/admin`), y esos cambios se vean
al instante para todos tus clientes, sin tocar código ni volver a subir nada.

## Paso 1 — Crear el proyecto de Firebase (gratis)

1. Ve a https://console.firebase.google.com y entra con tu cuenta de Google.
2. Clic en **"Agregar proyecto"**. Ponle un nombre, por ejemplo `muchacho-alegre-menu`.
3. Puedes desactivar Google Analytics (no lo necesitas). Clic en **Crear proyecto**.

## Paso 2 — Activar Firestore (la base de datos)

1. En el menú izquierdo: **Compilación > Firestore Database**.
2. Clic en **Crear base de datos**.
3. Elige **modo de producción** (no "modo de prueba").
4. Elige la ubicación más cercana (ej. `us-central` o `southamerica-east1`). Clic en **Habilitar**.
5. Ve a la pestaña **Reglas** y reemplaza el contenido por el del archivo
   `firestore.rules` que te entregué. Clic en **Publicar**.

## Paso 3 — Activar el login del admin (Authentication)

1. En el menú izquierdo: **Compilación > Authentication**.
2. Clic en **Comenzar**.
3. En la lista de proveedores, elige **Correo electrónico/contraseña** y actívalo. Guardar.
4. Ve a la pestaña **Users** (Usuarios) > **Añadir usuario**.
5. Pon el correo y contraseña que **tú** vas a usar para entrar al panel de admin
   (ej. tu correo real y una contraseña fuerte). Este es tu usuario admin —
   no hace falta registro público, solo tú vas a poder entrar.

## Paso 4 — Obtener las claves de configuración

1. Clic en el ícono de engrane (⚙️) arriba a la izquierda > **Configuración del proyecto**.
2. Baja hasta **"Tus apps"** y clic en el ícono `</>` (Web) para registrar una app web.
3. Ponle un apodo (ej. "menu-web") y clic en **Registrar app**. NO necesitas Firebase Hosting.
4. Te va a mostrar un bloque `firebaseConfig = { apiKey: "...", ... }`. Copia esos valores.
5. Abre el archivo **`firebase-config.js`** que te entregué y reemplaza los valores
   de ejemplo (`TU_API_KEY`, `TU_PROYECTO`, etc.) por los que acabas de copiar.

## Paso 5 — Subir los archivos a tu repo/Netlify

Copia estos archivos nuevos a la raíz de tu repositorio (junto a `index.html`):

- `firebase-config.js` (ya editado con tus claves)
- `menu-loader.js`
- `admin.html`
- `seed-productos.js`
- `robots.txt`

Y reemplaza tus páginas de categoría actuales por las versiones que te entregué:
`ceviches.html`, `cocteles.html`, `camarones.html`, `filetes.html`, `milanesas.html`,
`caldos.html`, `especialidades.html`, `tacos.html`, `snacks.html`, `hamburguesas.html`,
`fit.html`, `litros.html`, `bebidas.html`.

Haz commit y push a tu repo de GitHub — Netlify va a hacer el deploy automáticamente.

## Paso 6 — Importar tu menú actual (una sola vez)

1. Entra a `https://tusitio.netlify.app/admin` (nadie la va a encontrar porque no está
   enlazada en ningún menú, y `robots.txt` le pide a Google que no la indexe).
2. Inicia sesión con el correo/contraseña que creaste en el Paso 3.
3. Baja hasta la tarjeta **"⚠️ Importar catálogo inicial"** y da clic al botón.
   Esto sube tus 134 productos actuales (con sus precios y descripciones) a Firestore.
   **Solo hazlo una vez** — si lo corres de nuevo, simplemente vuelve a poner los
   valores originales (no crea duplicados).
4. Refresca cualquier página de tu menú (ej. `/ceviches`) y deberías ver los productos
   cargando desde Firestore.

## Cómo usarlo día a día

- Entra a `/admin`, inicia sesión.
- Elige la categoría en el menú desplegable.
- Para cambiar un precio: clic en **Editar** en la fila del producto, cambia el número,
  clic en **Guardar**.
- Para agregar un producto nuevo: llena el formulario de abajo. Si tiene varias
  variantes con precios distintos (como "Peke: Camarón $100, Pulpo $100..."), marca
  la casilla de "Tiene varias opciones" y agrégalas una por una.
- Los cambios se ven de inmediato en el sitio público, sin redeploy.

## Seguridad — por qué esto es seguro aunque sea "sin backend"

- Nadie puede escribir en tu base de datos sin haber iniciado sesión (lo controla
  `firestore.rules`, que vive en los servidores de Google, no en el navegador).
- La página `/admin` no aparece en ningún menú ni buscador, pero si alguien
  adivinara la URL, igual necesitaría tu correo y contraseña para hacer cualquier cambio.
- Las claves en `firebase-config.js` son públicas por diseño (así funciona Firebase);
  lo que protege tus datos son las reglas, no que las claves estén ocultas.

## Costo

El plan gratuito de Firebase (Spark) incluye 50,000 lecturas y 20,000 escrituras al día
en Firestore. Para un menú de restaurante eso es más que suficiente — no vas a pagar nada.
