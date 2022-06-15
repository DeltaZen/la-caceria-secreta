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
  {
    id: '02',
    html: `<p>Te cuesta reaccionar en medio de la pesadilla que estás viviendo, pero la desesperación de la chiquilla que te llama te hace reaccionar. Por otra parte, la alarma está cundiendo en todo el valle y lo mejor será que los aldeanos se fijen en el grupo que está huyendo mientras vosotros escapáis por los lindes del bosque.</p>

      <p>Enfundas la espada y corres hacia ella, saltando la tapia como un gamo.</p>
    
      <p>Ambos corréis ladera arriba para ocultaros en los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: '68',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '03',
    html: `<p>—Ya estamos todos —masculla Deilos al verlo—. Sigamos.</p>

    <p>Deilos encabeza la marcha, ahora con mucho más sigilo, progresando con la tensión de un cazador que se dispone a cobrar su presa. Tú prefieres dejar pasar a todos para cerrar la marcha y cubrir la retaguardia.</p>
  
    <p>Empezáis a avanzar pisando la hierba de los bordes de un sendero que rodea los primeros cercados de la pradera sin hacer ruido, como los gatos callejeros del distrito Feryí, en Koras. Son habilidades que habéis desarrollado en Uhdanfiún y gracias a ellas parecéis fantasmas avanzando en un fúnebre cortejo.</p>
  
    <p>Captas una presencia a tu espalda que te observa y te giras instintivamente, parándote por un instante. ¿Tríane? No consigues avistar nada. Cuando reanudas la marcha, ves que el grupo está a unos veinte metros ante ti y te dispones a acortar esa distancia, pero de pronto algo llama tu atención.</p>
  `,
    actions: [
      {
        id: '111',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '04',
    html: `<p>El grupo está a unos cien metros por delante. Examinas el recorrido que están realizando a la vez que observas los alrededores, buscando alguna posición ventajosa para seguirles sin ser descubierto, cuando algo te llama la atención.</p>

    <p>Te ha parecido ver algo en movimiento en el extremo opuesto de la ladera por donde está avanzando el grupo de Deilos. Acechas con cuidado, escrutando todos los recodos del paisaje, al otro extremo del prado… Te ha parecido ver algo en la ladera que trepa hacia el frondoso y amenazador bosque. No ves nada… esperas unos segundos más. Te dispones a retomar la marcha… ¡Ahora sí! ¡Algo pequeño se ha vuelto a mover entre las sombras de manera casi imperceptible!</p>
  
    <p>Observas en silencio, agazapado contra el suelo, al igual que un felino espiando a su presa. En la lontananza, una pequeña figura se vuelve a mover, ocultándose de nuevo entre malezas. Si no te hubieses percatado con anterioridad serías incapaz de detectarlo ahora.</p>
  
    <p>Alguien o algo se está moviendo en paralelo al grupo. Y por lo que parece, sea quien sea, está solo.</p>`,
    actions: [{
      id: '17',
      text: 'Continuar',
    }],
  },
  {
    id: '05',
    html: '<p>Apenas tienes tiempo de hacer un quiebro de cintura y lanzarte a un lado al intuir el disparo de Merkar. Su flecha sesga la tela de tu jubón y te araña el brazo para perderse luego a tu espalda, mientras das una voltereta rondando sobre tu hombro y desenvainas para encararlo.</p>',
    actions: [{
      id: '192',
      text: 'Continuar',
    }],
  },
  {
    id: '06',
    html: `<p><i>Has solventado el enigma. Aunque «Delquz» sea un nombre extraño (como Bhiko o Acefir por otra parte), guarda una característica común con los otros dos. Los tres nombres están formados por letras que respetan el orden alfabético. Has descubierto por lo tanto la solución (o has tenido mucha suerte)</i>.</p>

    <p>Avanzas hacia las aguas, custodiado por las tres bellas mujeres. La ninfa rubia te besa mientras deshace el cinto de tu espada. Al notar como se afloja tu cinturón y resbala el arma, coges instintivamente la empuñadura de tu espada. La hoja se libera de la vaina quedando al descubierto. En ese mismo instante, las tres se separan de manera fulminante, abriendo ojos con diminutas pupilas y gritando:</p>
  
    <p>—¡Aleja eso! ¡Ni se te ocurra tocarnos con el metal del cielo!</p>`,
    actions: [
      {
        id: '124',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: `<p>Has solventado el enigma. «Lamido resol» son palabras muy musicales, ya que todas sus sílabas corresponden a notas: la-mi-do-re-sol. «Mi-re-la» es otra palabra que también tiene esta característica, por lo que has descubierto la solución (o has tenido mucha suerte).</p>

    <p>Sigues aproximándote a las transparentes aguas de la charca, rodeado por las tres doncellas que canturrean junto a ti. La morena te quita el jubón mientras te acaricia el cuello. La pelirroja te desabrocha el cinturón que sujeta la espada. Al notar cómo se resbala el cinto, retienes instintivamente la caída de tu arma, que se desenvaina de ese modo de la funda. Mientras sigues sujetando la espada liberada por la empuñadura, la hoja resplandece produciendo un terrible efecto en las tres mujeres, que se apartan gritando:</p>
  
    <p>—¡Retira ese vil metal de nuestra vista! ¡No te atrevas a tocarnos con el metal del cielo!</p>
  
    <p>Mientras pronuncian horrorizadas esas extrañas palabras, te asombra comprobar que sus pupilas se han contraído de repente y su aspecto ha cambiado radicalmente.</p>
  `,
    actions: [
      {
        id: '123',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '08',
    html: `<p>Lo cierto es que te gustaría saber en qué consiste la cacería secreta. Se han hecho muchas conjeturas y otros tantos rumores sin fundamento sobre esa misteriosa cacería y ahora se te presenta la ocasión de descubrir la verdad. A pesar de que te cuesta confiar en el arrogante Deilos, es una lástima dejar pasar esta oportunidad. Por otra parte, se te ocurre que puede ser todavía más emocionante seguir al grupo sin ser descubierto… y propiciar de este modo otro encuentro con la misteriosa joven que viste durante tu guardia: Tríane.</p>

    <p>Decides equiparte a toda velocidad. Además de la espada, resuelves tomar prestado el arco y las flechas de Zarenyo, debidamente protegidas para que no hagan ruido. Si vas a emprender esta aventura en solitario, más vale equiparse a conciencia.</p>
  
    <p>Sigues el mismo recorrido que tomó el grupo cuando se despidió de ti y te dispones a seguir su pista, confiando en que los atraparás pronto, teniendo en cuenta que son bastante numerosos y que no parecían tener mucha prisa cuando se fueron. Las tres lunas de Tramórea proporcionan una luz mágica a esta noche tan especial, facilitando la visibilidad en la penumbra.</p>
  
    <p>Una vez fuera del campamento, identificas el rastro de sus pisadas y progresas por un camino que desemboca en una pendiente repleta de matorrales y zarzales, hasta que empiezas a escuchar voces a lo lejos. Al cabo de un rato, logras vislumbrar sus siluetas más adelante. No te parece que estén tomando las adecuadas precauciones para pasar desapercibidos y te choca que no sean más prudentes, sobre todo después de haber sufrido la emboscada en el campamento. Reduces la marcha, sin perderles de vista, extremando las precauciones y avanzando con cuidado por las sombras sin hacer ningún ruido.</p>`,
    actions: [
      {
        id: '93',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '09',
    html: `<p>Has logrado anticipar correctamente el salto del corueco y te has lanzado hacia delante para ejecutar la Yagartéi bajo su cuerpo en extensión. Sacas instintivamente tu hoja de la vaina y ejecutas de manera impecable un arco con tu espada, notando como tus hombros y muñecas acompañan el movimiento, y como la hoja se abre paso por el abdomen del animal con una leve resist…</p>

    <p>—¡Clonck!</p>
  
    <p>El corueco se ha retorcido rugiendo al notar la hoja en sus carnes y tu espada acaba de chocar con una de sus costillas… metálicas. La vibración del impacto te sacude ambos brazos y el arma te salta de las manos, mientras das una voltereta para esquivar la enorme mole que se te venía encima.</p>
  
    <p>Vuelves a encarar la bestia, pero esta vez estás desarmado y entumecido.</p>
  
    <p>El corueco también se ha girado y te mira con más odio si cabe mientras profiere una especie de bramido ensordecedor que no presagia nada bueno.</p>`,
    actions: [
      {
        id: '164',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '10',
    html: `<p>Apenas te alejas unos pocos metros y te preparas, cargando tu arco.</p>

    <p>Ves que la muchacha te mira con impaciencia, esperando tu señal.</p>
  
    <p>No quieres cargar con la muerte de un compañero de Uhdanfiún sobre tu conciencia, por muy canalla que sea. Prefieres que se haga justicia. Y vas a intentar que ella no mate a nadie…</p>
  
    <p>Deilos está dando instrucciones a Taifos, para que se acerque a la puerta de la cabaña. Puedes ver con el rabillo del ojo que la chiquilla le está apuntando a él.</p>
  
    <p>Te incorporas rápidamente tensando tu arco y aprovechas tu experiencia como guerrero para disparar antes que ella. Ojalá la buena puntería y la fortuna guíen tu brazo.</p>`,
    random: true,
    actions: [
      {
        id: '121',
        text: 'Continuar',
      },
      {
        id: '74',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '07',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
]

export const pages: PageDict = pageArray.reduce(
  (prev, curr) => ({ ...prev, [curr.id]: curr }),
  {},
)
