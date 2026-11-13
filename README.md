# Plumita

**Editor vectorial de bolsillo.** Pluma, nodos y jaladores, hechos para dibujarse con el pulgar.

Un solo archivo HTML, sin dependencias, sin servidor y sin internet. Lo abres en el navegador del teléfono y dibujas curvas Bézier como en Illustrator, CorelDRAW o FreeHand, pero solo con las herramientas que de verdad se usan.

> *Para quienes dibujan donde no hay escritorio: en el camión, en la fila, en la sala de espera.*
> *Y para toda la gente que alguna vez pensó "ojalá esto existiera en el celular".*

<p align="center">
  <img src="docs/img/principal.jpeg" width="300" alt="Una figura con un nodo seleccionado y sus jaladores listos para editar la curva">
 <br> <a href="https://mialmoga.github.io/Plumita/">Plumita en GitHub pages</a>
</p>

---

## Qué hace

**Dibujo**
- **Pluma:** toca para poner nodos, arrastra para sacar jaladores y curvar, toca el primer nodo para cerrar la forma. Con la pluma también puedes **continuar un trazo abierto** tocando uno de sus extremos (los extremos libres se marcan con un anillo), y si estás dibujando y tocas el extremo de **otro** trazo abierto, **los une** en uno solo.
- **Lápiz:** dibuja a mano alzada con el dedo; al soltar, la línea se ajusta a curvas de Bézier con pocos nodos (algoritmo de Schneider). El control **Suavizado** del panel de color decide cuánto simplifica: más alto, menos nodos. Si el final cae cerca del principio, la forma se cierra y se rellena. Si empiezas sobre el extremo de un trazo abierto, lo continúa. Un segundo dedo a media línea la descarta.
- **Línea:** arrastra y suelta.
- **Nodos:** mueve nodos, estira los jaladores para ajustar la curva, o arrastra el trazo completo.
- **Mover:** selecciona una forma y arrástrala entera. Su caja trae un círculo arriba para **rotarla** y esquinas para **escalarla** (proporcional, con la esquina opuesta fija). Con el imán encendido, mueve a saltos de retícula y rota de 15° en 15°.
- **Selección múltiple y grupos:** el botón ☑ (flotante, a la derecha) permite sumar o quitar formas de la selección con un toque. Con la herramienta Mover, **mantén pulsado y arrastra** para seleccionar todo lo que vayas tocando a tu paso. **Agrupar** y **Desagrupar** (panel de color) hacen que varias formas se comporten como una: se seleccionan juntas y se mueven, rotan, escalan, duplican, espejan, borran, recolorean y reordenan en bloque. Los grupos se guardan en los proyectos; en el SVG exportado quedan aplanados.
- **Alinear y distribuir** (panel de color → *Alinear y distribuir*): alinea a la izquierda, al centro o a la derecha, y arriba, al centro o abajo. Con **una** forma seleccionada alinea al lienzo; con **varias**, entre ellas; el selector *Respecto a* permite forzar *Lienzo* o *Selección*. **Distribuir** (3 o más objetos) reparte con **espaciado igual** o **centros iguales**, horizontal o vertical, dejando fijos los objetos de los extremos. Un **grupo cuenta como un solo objeto**, y puedes elegir medir **con contorno** (lo que ves) o **solo la forma**. Se puede deshacer.
- **Convertir:** convierte un nodo de punta a suave (y al revés). Si lo arrastras, saca jaladores.
- **± Nodo:** toca un nodo para quitarlo, o toca el trazo en un tramo para agregar uno sin cambiar su forma.

**Formas**
- **Pathfinder:** **Sumar**, **Restar**, **Intersecar** (deja solo lo que se encima), **Excluir** (quita lo que se encima, que queda como hueco) y **Dividir** (corta las dos formas en piezas sueltas: lo exclusivo de cada una y el traslape, que toma el color de la forma de encima). Todo sobre formas cerradas y **conservando las curvas** (no las convierte en polígonos). Si una forma está dentro de otra, Restar y Excluir dejan un hueco, Intersecar deja la de dentro y Dividir deja ambas. Las piezas de Dividir quedan seleccionadas pero sin agrupar.
- **Contorno a forma:** convierte el trazo de la forma seleccionada en una figura rellenable, respetando el grosor, las esquinas (punta, redonda, bisel), los extremos (plano, redondo, cuadrado) y la alineación (centro, dentro, fuera). Un trazo abierto se vuelve una figura cerrada; una forma cerrada se vuelve un anillo (una forma con hueco editable). Si la forma tenía relleno, conserva el relleno sin contorno y la figura nueva queda encima; si no, la figura reemplaza al trazo. Los trazos con rayas o puntos hay que pasarlos a sólido antes. Por dentro se calcula el contorno desplazado, se limpian los cruces y se reajustan las curvas con pocos nodos; en las pruebas el resultado coincide con el trazo original con menos de 1 % de diferencia de píxeles.
- **Huecos editables:** los huecos son contornos como cualquier otro. Al seleccionar una forma ves los nodos de todos sus contornos, y puedes mover nodos, estirar jaladores, convertir curva/recta y agregar o quitar nodos igual que en el exterior. Si un hueco se queda con menos de 3 nodos, desaparece. **Soltar hueco** lo convierte en una forma independiente (con el mismo estilo de la original). Tocar dentro de un hueco selecciona lo que hay detrás, como debe ser.
- Relleno, contorno y grosor, con paleta rápida y selector libre de color.
- **Estilo de línea** (panel de color → *Estilo de línea y opacidad*): **esquinas** en punta, redondas o biseladas; **extremos** planos, redondos o cuadrados; trazo **sólido, de rayas, de puntos o mixto** (los guiones escalan con el grosor); **alineación** del contorno al centro, **dentro** o **fuera** de la forma (en formas cerradas, huecos incluidos); y **opacidad** independiente para relleno y contorno. Las formas nuevas heredan el estilo activo, y todo se conserva al duplicar, espejar, agrupar, sumar y restar, soltar un hueco, guardar proyectos y exportar a SVG o PNG. Dentro y fuera se resuelven con recortes (`clipPath`) dentro del SVG, así que se ven igual en navegadores y en editores.
- Duplicar, llevar al frente, mandar atrás.
- **Espejo:** crea una copia reflejada de la forma seleccionada, de lado a lado (↔), de arriba a abajo (↕) o las tres copias de los cuatro cuadrantes (✛). El eje puede ser el **centro del lienzo** (ideal para dibujar una mitad y completar la otra) o el **borde de la forma** (la copia queda pegada). La copia es editable como cualquier otra, y los jaladores y huecos se reflejan con ella.

**Color**
- **Código hexadecimal:** escribe `#ff8000`, `ff8000` o `#f80` en relleno o contorno (también `none`).
- **Usados:** fila con tus últimos colores (se guardan) y los colores del dibujo abierto, para reutilizar uno sin buscarlo en el selector.
- **Cuentagotas:** toca el 💧 de relleno o contorno y luego cualquier forma: toma su color. Si tocas la **foto de referencia**, toma el color de ese punto de la foto.

**Ayudas para trazar**
- **Imagen de referencia:** carga una foto (por ejemplo, de un dibujo en papel) y trázala a mano. Opacidad ajustable; la mueves y escalas con un dedo y pellizco. No se exporta.
- **Retícula** de 10, 20, 25, 50 o 100 px, con **imán** para que pluma, línea, nodos y jaladores salten a las intersecciones.
- **Guía de ícono** (no se exporta): marca la zona visible y el círculo seguro de **Android** (ícono adaptativo, 108 dp con 72 dp visibles y 66 dp seguros) y la máscara de esquinas de **Apple**.
- **Exportar assets para app:** un `.zip` con `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` (180×180, con fondo sólido) y `favicon.ico` (16, 32 y 48 px), más un `LEEME.txt` con las líneas listas para pegar en tu HTML y tu manifest.

<table>
  <tr>
    <td align="center"><img src="docs/img/fondo.jpeg" width="240" alt="Foto de un dibujo como imagen de fondo, con un trazo encima"><br><sub>Una foto de fondo con opacidad baja, para calcarla a mano</sub></td>
    <td align="center"><img src="docs/img/reticula.jpeg" width="240" alt="Cuadrícula sobre el lienzo con trazos alineados"><br><sub>Retícula con imán: todo cae en las intersecciones</sub></td>
  </tr>
</table>

**Proyectos**
- **Guardar** baja un archivo `plumita-AAAAMMDD-HHMM.plumita.json` con todo: trazos, tamaño del lienzo, retícula y la imagen de fondo con su opacidad y posición.
- **Abrir** continúa un proyecto guardado; **Nuevo** empieza un lienzo en blanco. Ambos preguntan antes de reemplazar lo que tengas. El archivo se valida antes de abrirse, así que uno ajeno o dañado no rompe nada.
- **Abrir también importa SVG**, incluidos los que exportó Plumita (vuelven idénticos) y los hechos con Illustrator, Inkscape u otras herramientas: cada forma queda como trazos con nodos y jaladores editables. Entiende rutas (rectas, curvas, arcos, relativas y absolutas), rectángulos, círculos, elipses, líneas y polígonos, grupos y transformaciones, y colores en atributos, `style` o clases CSS simples. Las formas con huecos, como una letra O, conservan el hueco.
- Así puedes tener varios dibujos y volver a cualquiera. Los archivos son portables: guárdalos en tu nube o mándalos a otro teléfono.

**Pensado para móvil**
- Zoom y desplazamiento con dos dedos.
- **Botón mano ✋** para mover el lienzo con un dedo sin cortar el trazo que estás haciendo.
- **Cerrar trazo** con un botón, sin tener que atinarle al primer nodo.
- Si un segundo dedo cae a la mitad de un toque con la pluma, el nodo accidental se descarta solo.
- Pantalla completa y dos pestañitas (arriba y abajo) que pliegan las barras para dar más espacio al lienzo.
- Deshacer y rehacer (hasta 80 pasos).

**Exportar**
- **SVG** y **PNG** (×1, ×2 o ×4), con el tamaño de lienzo que elijas y fondo transparente o blanco.

---

## Cómo usarlo

1. Descarga `vectores.html`.
2. Ábrelo en el navegador (probado en Chrome para Android).
3. Listo. No hay nada que instalar.

o 1. En linea [Plumita en GitHub pages](https://mialmoga.github.io/Plumita/)

### Guía rápida

| Quiero… | Hago… |
|---|---|
| Guardar, abrir (proyecto o SVG) o empezar un dibujo | Panel de color → fila *Proyecto*: *Guardar*, *Abrir*, *Nuevo* |
| Elegir el tamaño del lienzo | Toca el botón con las medidas (arriba) |
| Exportar | Mismo botón: *Descargar SVG* o *Descargar PNG* |
| Cambiar color, grosor, capas, imagen o retícula | Toca el cuadrito de color (arriba) |
| Editar o soltar un hueco | Herramienta *Nodos*: toca un nodo del hueco y edítalo como cualquier otro. Para separarlo, panel de color → *Soltar hueco* |
| Seleccionar varias formas | Botón ☑ y toca cada forma; o con *Mover*, mantén pulsado y desliza sobre ellas |
| Alinear o distribuir | Panel de color → *Alinear y distribuir*; selecciona las formas y toca el botón |
| Agrupar o desagrupar | Panel de color → fila *Grupo* |
| Mover, rotar o escalar una forma | Herramienta *Mover*: arrastra la forma, el círculo de arriba (rotar) o una esquina (escalar) |
| Tomar un color de otra forma o de la foto | Panel de color → *Gotero* → toca el color |
| Usar un color exacto | Panel de color → *Código*: escribe el hexadecimal |
| Hacer los íconos de una app | Activa la *Guía ícono*, dibuja dentro de la zona segura y exporta con *Exportar assets para app* (botón del tamaño del lienzo) |
| Hacer una copia espejo | Selecciona la forma, abre el panel de color y toca *Espejo*; elige el *Eje* (lienzo o forma) |
| Sumar o restar | Selecciona una forma cerrada con *Nodos*, abre el panel de color, toca *Sumar* o *Restar* y luego toca la otra forma |
| Mover imagen de referencia | Panel de color → *Mover*, y arrastra o pellizca |
| Navegar sin tocar el dibujo | Botón ✋ (derecha) |
| Ganar espacio | Pestañitas ▲ ▼ y botón ⛶ |

### En escritorio (ratón y teclado)

Pensado para el teléfono, pero también se lleva bien con una computadora:

| Acción | Atajo |
|---|---|
| Pluma, Lápiz, Línea, Nodos, Mover, Convertir, ± Nodo | `1` a `7` (en el orden de los botones), o `P` `N` `L` `A` `V` `C` `+` `-` |
| Cuentagotas de relleno / de contorno | `I` / `Shift+I` |
| Seleccionar todo / Agrupar / Desagrupar | `Ctrl+A` / `Ctrl+G` / `Ctrl+Shift+G` |
| Sumar o quitar una forma de la selección | `Shift` + clic con la herramienta Mover |
| Deshacer / Rehacer | `Ctrl+Z` / `Ctrl+Y` (o `Ctrl+Shift+Z`) |
| Duplicar la forma | `Ctrl+D` |
| Guardar proyecto | `Ctrl+S` |
| Borrar | `Supr`: el nodo seleccionado o, si no hay nodo, la forma completa |
| Mano (mover el lienzo) | Mantén `Espacio` y arrastra; al soltar vuelves a tu herramienta |
| Terminar el trazo / deseleccionar / cerrar el panel | `Enter` / `Esc` |
| Panel de color y opciones | Clic derecho (se abre junto al cursor) |
| Zoom | Rueda del ratón |
| Mover el lienzo con el ratón | Botón central, o `Espacio` + arrastrar |

Los botones muestran su atajo al pasar el cursor por encima.

<table>
  <tr>
    <td align="center"><img src="docs/img/color-booleanas.jpeg" width="240" alt="Panel de color abierto y resultado de sumar o restar formas"><br><sub>Panel de color y booleanas: sumar y restar conservando las curvas</sub></td>
    <td align="center"><img src="docs/img/exportar.jpeg" width="240" alt="Cuadro de tamaño del lienzo con botones para descargar SVG y PNG"><br><sub>Tamaño del lienzo y exportación a SVG o PNG</sub></td>
  </tr>
</table>

### Del lienzo al archivo

<table>
  <tr>
    <td align="center"><img src="docs/img/exportando.jpeg" width="240" alt="Descarga del archivo en el teléfono"><br><sub>Exportando desde el teléfono</sub></td>
    <td align="center"><img src="docs/img/resultado.png" width="240" alt="PNG final creado con la herramienta"><br><sub>El PNG final, hecho con Plumita</sub></td>
      <td align="center"><img src="docs/img/resultado.svg" width="240" alt="PNG final creado con la herramienta"><br><sub>El SVG final, hecho con Plumita</sub></td>
  </tr>
</table>

---

## Instalar y usar sin internet

Plumita es una PWA: con el `site.webmanifest` se puede instalar desde el navegador y abrir como app, y con `sw.js` sigue funcionando **sin conexión**. El service worker usa *red primero*: si hay internet siempre carga la versión más reciente y el caché solo entra como respaldo. En cada release sube el número de `VERSION` en `sw.js` para limpiar cachés viejos. Los service workers solo funcionan sobre `https` (como GitHub Pages) o `localhost`, no abriendo el archivo directo.

## Privacidad

Todo ocurre en tu dispositivo. Los proyectos son archivos que tú guardas donde quieras. No hay cuentas, red ni analítica. El trabajo se guarda en el `localStorage` del navegador (`vec-doc`, `vec-ref`, `vec-grid`, `vec-ui`), así que sigue ahí si recargas la página. Si la foto de referencia es demasiado pesada para el almacenamiento del navegador, simplemente no se recuerda al recargar, pero tu dibujo vectorial sí.

---

## Cómo funciona por dentro

Todo vive en un solo archivo, organizado por secciones comentadas: geometría, historial, interfaz, dibujo, gestos, estilo, booleanas, referencia y retícula, pantalla completa y pestañas.

- **Modelo:** cada trazo es una lista de nodos `{x, y, i, o, s}`, donde `i` y `o` son los jaladores de entrada y salida (relativos al nodo) y `s` indica si el nodo es suave. Los trazos cerrados pueden llevar `holes`.
- **Render:** SVG puro; el mismo `path` que se ve en pantalla es el que se exporta.
- **Entrada:** Pointer Events, con gestos de uno y dos dedos manejados a mano.
- **Booleanas con curvas:** se buscan las intersecciones entre los segmentos Bézier muestreándolos y afinando con Newton; se corta cada trazo en esos puntos con De Casteljau; cada pedazo se clasifica como dentro o fuera de la otra forma con un test de punto en polígono; y los pedazos que se quedan se vuelven a encadenar en contornos cerrados. Los huecos se pintan con la regla `evenodd`.
- **Imán:** redondea al múltiplo más cercano del tamaño de celda.

---

## Limitaciones conocidas

- Las booleanas ignoran los huecos de las formas que sumas o restas; el resultado sí puede traer huecos nuevos.
- Las booleanas funcionan sobre formas **cerradas**. Dos formas que comparten un borde exactamente coincidente pueden dar un resultado inesperado.
- Al **importar SVG** se omiten texto, imágenes, máscaras y filtros; los degradados quedan en gris sólido. Se leen esquinas, extremos, guiones y opacidad (los guiones se aproximan al más parecido de los cuatro tipos). Un SVG muy grande se reduce para caber en el lienzo (máximo 8000 px) y uno muy pequeño, como un ícono, se amplía.
- **Contorno a forma** aproxima el resultado con curvas de Bézier ajustadas (error de décimas de unidad), no es el desplazamiento matemático exacto; en trazos muy gruesos sobre curvas muy cerradas puede convenir revisar los nodos.
- Los grupos son planos (no hay grupos dentro de grupos) y las operaciones de pathfinder piden una sola forma, así que desagrupa antes de usarlas.
- No hay degradados, texto, ni panel de capas con nombres.
- La pantalla completa depende del navegador; Safari en iPhone no la permite en páginas web.
- Está probado en Chrome para Android y con pruebas automáticas de la lógica geométrica. En otros navegadores puede haber detalles por pulir.

---

## Créditos

- **Brujo**: idea, dirección de producto, pruebas en el teléfono y todas las observaciones que fueron moldeando la herramienta, como el botón de mano y el de cerrar trazo.
- **Claude (Anthropic)**, modelo Claude Sonnet 5.5: diseño de la arquitectura y escritura del código, en conversación con Brujo.

Se construyó por etapas, probando cada una en un teléfono real antes de seguir con la siguiente.

---

## Licencia

[MIT](LICENSE). Úsalo, cámbialo, mézclalo con lo tuyo y compártelo.
