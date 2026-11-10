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
- **Pluma:** toca para poner nodos, arrastra para sacar jaladores y curvar, toca el primer nodo para cerrar la forma.
- **Línea:** arrastra y suelta.
- **Nodos:** mueve nodos, estira los jaladores para ajustar la curva, o arrastra el trazo completo.
- **Curva/Recta:** convierte un nodo de punta a suave (y al revés). Si lo arrastras, saca jaladores.
- **+ Nodo / − Nodo:** agrega un nodo sobre el trazo sin cambiar su forma, o quita uno.

**Formas**
- **Sumar y restar** formas cerradas **conservando las curvas** (no las convierte en polígonos). Si restas una forma contenida dentro de otra, queda un hueco.
- **Huecos editables:** los huecos son contornos como cualquier otro. Al seleccionar una forma ves los nodos de todos sus contornos, y puedes mover nodos, estirar jaladores, convertir curva/recta y agregar o quitar nodos igual que en el exterior. Si un hueco se queda con menos de 3 nodos, desaparece. **Soltar hueco** lo convierte en una forma independiente (con el mismo estilo de la original). Tocar dentro de un hueco selecciona lo que hay detrás, como debe ser.
- Relleno, contorno y grosor, con paleta rápida y selector libre de color.
- Duplicar, llevar al frente, mandar atrás.
- **Espejo:** crea una copia reflejada de la forma seleccionada, de lado a lado (↔), de arriba a abajo (↕) o las tres copias de los cuatro cuadrantes (✛). El eje puede ser el **centro del lienzo** (ideal para dibujar una mitad y completar la otra) o el **borde de la forma** (la copia queda pegada). La copia es editable como cualquier otra, y los jaladores y huecos se reflejan con ella.

**Ayudas para trazar**
- **Imagen de referencia:** carga una foto (por ejemplo, de un dibujo en papel) y trázala a mano. Opacidad ajustable; la mueves y escalas con un dedo y pellizco. No se exporta.
- **Retícula** de 10, 20, 25, 50 o 100 px, con **imán** para que pluma, línea, nodos y jaladores salten a las intersecciones.

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
| Hacer una copia espejo | Selecciona la forma, abre el panel de color y toca *Espejo*; elige el *Eje* (lienzo o forma) |
| Sumar o restar | Selecciona una forma cerrada con *Nodos*, abre el panel de color, toca *Sumar* o *Restar* y luego toca la otra forma |
| Mover imagen de referencia | Panel de color → *Mover*, y arrastra o pellizca |
| Navegar sin tocar el dibujo | Botón ✋ (derecha) |
| Ganar espacio | Pestañitas ▲ ▼ y botón ⛶ |

### En escritorio (ratón y teclado)

Pensado para el teléfono, pero también se lleva bien con una computadora:

| Acción | Atajo |
|---|---|
| Pluma, Línea, Nodos, Curva/Recta, + Nodo, − Nodo | `1` a `6` (en el orden de los botones), o `P` `L` `A` `C` `+` `-` |
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
      <td align="center"><img src="docs/img/resultado.svg" width="240" alt="PNG final creado con la herramienta"><br><sub>El SGV final, hecho con Plumita</sub></td>
  </tr>
</table>

---

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
- Al **importar SVG** se omiten texto, imágenes, máscaras y filtros; los degradados quedan en gris sólido y la opacidad se ignora. Un SVG muy grande se reduce para caber en el lienzo (máximo 8000 px) y uno muy pequeño, como un ícono, se amplía.
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
