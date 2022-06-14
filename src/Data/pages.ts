const pageArray: IPage[] = [
  {
    id: 'intro',
    html: `<h1 title="Introducción">La cacería secreta</h1>

    <p>
      Vas a leer una aventura ambientada en el mundo de Tramórea. Para jugar
      esta aventura tendrás que tomar decisiones que marcarán la diferencia
      entre el éxito o el fracaso. Solo necesitarás este libro, un dado (o en su
      defecto una moneda para realizar lanzamientos a cara o cruz) y tu ingenio
      para tomar las mejores decisiones.
    </p>

    <hr />

    <p>
      No es necesario (aunque si lo has hecho, disfrutarás aún más de la
      aventura) que hayas leído <i>La Espada de Fuego</i> de Javier Negrete,
      novela en la que está ambientado este libro-juego. Al final del relato se
      incluye un glosario de términos y un índice de personajes para que
      conozcas mejor la terminología del mundo de Tramórea y sitúes más
      rápidamente aquellos nombres que te resulten desconocidos. En el párrafo
      siguiente de presentación del personaje hay algunos de esos términos que
      se incluyen en dicho glosario (Uhdanfiún, Tramórea, Ainara, Ibtahán,
      Tahedo, Zenordanil y Protahitéi). Al familiarizarte con el léxico
      conseguirás una mayor inmersión en la ambientación del juego, disfrutando
      aún más si cabe de la lectura.
    </p>

    <p>
      En <i>La cacería secreta</i> vas a afrontar peligros de diversa índole que
      se saldarán con tu victoria o tu muerte. En ese último caso siempre puedes
      volver a empezar, tomando otras decisiones para intentar cambiar el rumbo
      de los acontecimientos.
    </p>

    <p>
      Prepárate para interpretar al protagonista de <i>La cacería secreta</i>.
      Esperamos que te diviertas con la experiencia.
    </p>

    <p class="doble">Presentación del personaje</p>

    <p>
      Eres alumno de quinto grado de la famosa escuela Uhdanfiún, la academia de
      artes marciales más prestigiosa y antigua de Tramórea. Tercer hijo de una
      acomodada familia Ainari, estás predestinado por herencia familiar a
      convertirte en un gran guerrero. Pero tu verdadera pasión es la
      investigación, consecuencia de tu insaciable curiosidad. Lo cual no impide
      que, a tus diecisiete años, seas un aventajado guerrero y que ya tengas el
      título de Ibtahán, como Maestro menor del Tahedo de quinto grado. Estamos
      a principios de Anfiundanil del año 998 y hace pocas semanas se te reveló
      el secreto de Protahitéi, por lo que ya luces las correspondientes cinco
      marcas azules en tu brazalete.
    </p>

    <p class="doble">Aclaraciones sobre el libro juego</p>

    <p>
      Hay diversos finales posibles para <i>La cacería secreta</i>. La mayoría
      de ellos concluyen con el fallecimiento de tu personaje, los más escasos
      te brindan un final perfecto y en algunos otros casos se dan finales
      alternativos algo menos dramáticos que mediante la defunción de tu
      personaje. Es posible que necesites varias partidas para encontrar el
      final que más te satisfaga.
    </p>

    <p>
      Las diferentes secciones del libro tienen una numeración aleatoria por lo
      que solo deberás leer las secciones que corresponden al número que has
      escogido (o te ha tocado) en el párrafo anterior. Es la mejor manera de
      disfrutar con el juego. Si lees otra sección, lo más probable es que el
      relato se vuelva confuso. Si en algún momento tienes esa sensación,
      asegúrate de que no te has equivocado de número (y retoma la lectura más
      atrás si es necesario).
    </p>

    <p>
      Como se menciona en la presentación de tu personaje, tu característica
      principal es la capacidad de observación. Para reflejar mejor dicha
      cualidad, tendrás la ocasión de poder tomar decisiones que no siempre
      estarán sujetas al azar (como por ejemplo saber si la flecha que has
      disparado va a dar en la diana o no).
    </p>

    <p>
      Las decisiones más afines a tu característica principal se han planteado
      bajo la forma de enigmas relacionados con la capacidad de observación y
      deducción. Pueden ser lingüísticos o matemáticos. Si descubres la solución
      correcta sabrás que has tomado la mejor decisión para esa situación.
    </p>

    <p>
      Ya solo nos queda desearte suerte en la aventura que te dispones a
      emprender.
    </p>`,
    actions: [
      {
        id: '01',
        text: 'Comenzar',
      },
    ],
  },
  {
    id: '01',
    html: `<p class="h1alt">Cómo empieza todo</p>

    <p>Junto con el resto de alumnos, has abandonado Koras hace pocos días, bajo la tutela de unos cuantos instructores de Uhdanfiún, para practicar las habilidades de supervivencia y exploración.</p>
  
    <p>Tras una larga marcha que os ha llevado hacia el este, llegáis agotados a una zona aislada y montañosa, cerca del desierto de Guiños y del bosque de Corocín, para hacer vivaque. La aldea más cercana, Banta, está a varios kilómetros de distancia. Os dividís por grupos para construir refugios y pasar la noche.</p>
  
    <p>Uno de los grupos destaca sobre el resto. Su cabecilla se llama Deilos, es hijo de una buena familia Ainari y cuenta con un grupo de moscones que lo adulan. Deilos es Ibtahán de sexto grado, pero su comportamiento prepotente no te acaba de convencer, por lo que ya has declinado en varias ocasiones su ofrecimiento para unirte a la camarilla que él lidera.</p>
  
    <p>Tus compañeros de grupo son un simpático Ritión llamado Zarenyo y Dahzor, perteneciente a la Horda Roja. Has podido observar que Deilos y los demás desprecian bastante a Zarenyo, al que no consideran merecedor de pertenecer a Uhdanfiún.</p>
  
    <p>Os disponíais a buscar alimento después de construir vuestros refugios, cuando os atacan súbitamente con proyectiles, principalmente rocas y pedruscos que parecen ser lanzados mediante hondas, aunque no acertáis a distinguir los agresores.</p>
  
    <p>En medio del caos producido por el ataque sorpresa, tienes que tomar tu primera decisión.</p>`,
    actions: [
      {
        id: '199',
        text: 'Decides protegerte y estar a la defensiva ante un posible ataque',
      },
      {
        id: '165',
        text: 'Intentas contraatacar',
      },
    ],
  },
]

export const pages: PageDict = pageArray.reduce(
  (prev, curr) => ({ ...prev, [curr.id]: curr }),
  {},
)
