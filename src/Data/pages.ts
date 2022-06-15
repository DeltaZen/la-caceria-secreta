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
    id: '11',
    html: `<p>Te das la vuelta y corres hacia ella, para cubrir su huida… y en ese momento sientes como algo te atraviesa la espalda y se abre camino por debajo de tu omoplato, rasgando vísceras y alcanzando tu pulmón. Sigues corriendo, escupiendo sangre con el esfuerzo.</p>

    <p>Detrás de ti se empiezan a oír muchas voces, no solo del grupo, sino también de diferentes chozas de la aldea desde la que os llegan gritos de alarma. Alcanzas a la muchacha cuando estáis llegando prácticamente al bosque; ella parece titubear antes de entrar pero la empujas y os adentráis en la espesura.</p>
  
    <p>Tus piernas a duras penas te sostienen.</p>
  
    <p>Escuchas el grito de Deilos al otro lado del bosque.</p>
  
    <p>—¡Lo pagarás caro, maldito!</p>
  
    <p>Te apoyas contra un olmo de tronco ancho y húmedo. Vuelves a toser sangre…</p>`,
    actions: [
      {
        id: '175',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '12',
    html: `<p>Al escuchar las palabras del Maestro Turpa, te quedas paralizado y decides dar media vuelta, aprovechando que no se han percatado de tu presencia. Además, por lo que acabas de escuchar, no puedes hablar con Zarenyo puesto que no está consciente.</p>

    <p>Su última frase ha reavivado tu curiosidad por la cacería secreta que está dirigiendo Deilos. Intuyes que podría tratarse de algo que no augura nada bueno. Regresas rápidamente a tu refugio y te equipas a toda velocidad, llevándote la espada, así como el arco y las flechas de Zarenyo, debidamente protegidas para que no hagan ruido.</p>
  
    <p>Tomas la dirección que cogió el grupo cuando se despidió de ti y decides seguir su pista. Bajas durante veinte minutos por breñales, hasta llegar a un sendero que se bifurca; te cuesta descubrir qué dirección han tomado. Parece que el camino de la izquierda se adentra en una frondosa arboleda. El de la derecha desciende por una quebrada.</p>`,
    actions: [
      {
        id: '81',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '13',
    html: `<p>Te lanzas de nuevo hacia delante con ímpetu y das una voltereta para acabar tras una roca cubierta de musgo. Una piedra vuelve a impactar contra tu parapeto y vuela en mil pedazos. Menuda puntería tienen, piensas. Decides contar hasta tres, antes de volver a salir disparado: 1, 2… 3.</p>

    <p>Al asomarte ves a lo lejos tres figuras que huyen a mucha velocidad. Demasiada incluso. Frenas tu carrera, observando el lugar desde el cual os han tendido la emboscada. Todavía hay piedras en el suelo, de tamaño considerable. Parece que la encerrona estaba planificada a conciencia y sin ninguna intención de culminar un asalto posterior.</p>
  
    <p>Deduces que vuestros atacantes eran pocos pero fuertes, rápidos… y muy certeros.</p>
  
    <p>Escuchas un alboroto más abajo por lo que decides regresar al campamento.</p>`,
    actions: [
      {
        id: '86',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '14',
    html: `<p>En ese mismo momento todos los lobos ladran ruidosamente y saltan a tu alrededor con actitud amenazadora. El gran lobo de cresta blanca se encara a ti y encoge los morros enseñándote sus terribles fauces. De pronto el lobo negro levanta el hocico. Parece que olfatea el aire y profiere un corto aullido apenas audible. El lobo de cresta blanca, gira velozmente el tronco hacia ese lado y resopla. A lo lejos se oye un rumor creciente que parece acercarse a gran velocidad. Los lobos te ladran y saltan a tu alrededor, encarando en ocasiones hacia el lugar de donde provienen los ruidos que siguen creciendo. Parece que algo muy grande se acerca a gran velocidad.</p>

    <p>El gran lobo de cresta blanca te ladra con insistencia, manteniendo la distancia para evitar el filo de tu espada y finalmente aúlla brevemente, ante lo cual los cuatro lobos que te están rodeando dan media vuelta y salen corriendo.</p>
  
    <p>En un primer momento piensas que has tenido suerte, pero al percibir un nuevo olor, nauseabundo y metálico, adivinas que algo mucho peor se acerca, atraído por el ruido y el olor a carne humana: un corueco.</p>`,
    actions: [
      {
        id: '110',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '15',
    html: `<p>De pronto, observas como el grupo se detiene y encara un sendero que asciende hacia vuestra posición. A medio camino puedes ver una cabaña aislada del resto que se erige sobre una pequeña loma, rodeada por varios huertos y una pequeña tapia que delimita su terreno. Descendéis reptando por el suelo hasta la tapia y la recorréis hasta un extremo, para posicionaros en el flanco del grupo, respecto a la casa.</p>

    <p>Has reconocido a Deilos que da el alto y reúne al resto del grupo junto a él. También vislumbras con claridad el enorme corpachón de Taifos. Cuando están todos juntos, observas cómo parece producirse un momento de confusión. Las figuras se agitan levemente e incluso una retrocede por el camino. Parece buscar algo.</p>
  
    <p>Tú sabes qué es lo que están buscando. A ti.</p>`,
    actions: [
      {
        id: '135',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '16',
    html: `<p>El grupo sigue avanzando y no puedes alertarlos sin hacer ruido.</p>

    <p>Al quedarte quieto, ves a lo lejos una pequeña silueta que avanza con cautela, a una distancia equidistante a la del grupo. Puesto que vas el último, retrocedes poco a poco para rezagarte, buscando algún sendero entre huertos para atravesar el pago y acceder a la ladera opuesta con la intención de sorprenderlo por detrás.</p>
  
    <p>A pesar de que la distancia es importante y la noche siempre resulta engañosa, tú jurarías que se trata de un ser más bien pequeño. Has descartado que sea de un animal… ¿quién acecha a estas horas de la noche?</p>
  
    <p>Emocionado, piensas que podría tratarse de una de esas criaturas fantásticas que se rumorea habitan el bosque de Corocín.</p>
  
    <p>Estimulado por tu propia cacería personal, te alejas del grupo y reculas, atravesando con cautela los huertos de las afueras de la aldea para acceder al ribazo opuesto, sin perder de vista al escurridizo personaje. Tienes que prestar mucha atención al fijarte, acechando sus movimientos a la par que reptas hacia él para no perderlo de vista. Tu capacidad de observación se ve sometida a una difícil prueba.</p>`,
    random: true,
    actions: [
      {
        id: '162',
        text: 'Continuar',
      },
      {
        id: '44',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '17',
    html: `<p>Ahora distingues a lo lejos como la pequeña sombra avanza con extremada cautela, en paralelo al grupo. Estimulado por este nuevo misterio, optas por tomar un sendero entre huertos que atraviesa el pago y accede a la ladera opuesta; así te podrás situar en su retaguardia, vigilando al grupo al mismo tiempo.</p>

    <p>Aunque hay una distancia importante entre ambos y la noche confunde con facilidad a causa de la penumbra, jurarías que se trata de un individuo pequeño. Descartas de inmediato un niño por la discreción de sus movimientos. Piensas que podría tratarse de algún otro ser, quizá de índole fantástica, como los que se rumorea que habitan el bosque de Corocín.</p>
  
    <p>Estimulado por tu propia cacería personal, atraviesas con suma precaución los terrenos de las afueras del poblado para acceder a la ladera opuesta sin perder de vista al extraño personajillo. Compruebas lo difícil que resulta avanzar y mantener su posición localizada sin que desaparezca entre los matorrales. Empiezas a sospechar que realmente debe ser muy bajito para conseguir escabullirse tan fácilmente. El seguimiento se complica, poniendo a prueba tu capacidad de observación.</p>`,
    random: true,
    actions: [
      {
        id: '161',
        text: 'Continuar',
      },
      {
        id: '72',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '18',
    html: `<p>Sospechando que hay algo de cierto en lo que te está diciendo, tensas rápidamente la cuerda de tu arco y aprovechas la experiencia adquirida en Uhdanfuín para disparar antes que la muchacha.</p>

    <p>Vas a intentar evitar una masacre, pero tampoco quieres que muera ninguno de tus compañeros de academia.</p>
  
    <p>Difícil decisión. Haces un tiro rápido e instintivo, esperando tener suerte.</p>`,
    random: true,
    actions: [
      {
        id: '191',
        text: 'Continuar',
      },
      {
        id: '73',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '19',
    html: `<p>Ahora el maestro ha cambiado su postura y te mira desafiante con las piernas separadas, apoyando sus puños en la cadera. Al cabo de un segundo, con un veloz movimiento, chasquea los dedos.</p>

    <p>Dos flechas silban en el aire sin que puedas reaccionar. Tus piernas flaquean y miras con asombro como ambos proyectiles se han clavado en tu torso. Caes pesadamente de rodillas, pero no sientes dolor alguno. Tu mirada empieza a nublarse y alcanzas a vislumbrar cómo dos figuras se perfilan delante de ti. Son Merkar y Taifos, que bajan sus arcos y te sonríen cruelmente, cobrándose su ansiada revancha.</p>
  
    <p>La voz de Turpa parece alejarse. No consigues ver al maestro.</p>
  
    <p>—Deshaceos del cuerpo. Mañana anunciaremos la deserción de este infeliz y explicaremos que no pudo aguantar la presión de las enseñanzas de la academia.</p>
  
    <p>La oscuridad se cierne cada vez más sobre ti. Antes de morir, puedes ver como Deilos se acerca y te observa despiadadamente para disfrutar con tu agonía…</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: 'intro',
        text: 'Volver al inicio',
      },
    ],
  },
  {
    id: '20',
    html: `<p>Corres hacia la casa totalmente horrorizado intuyendo lo que puede estar sucediendo.</p>

    <p>No puede ser. Son guerreros de Uhdanfiún… no son asesinos despiadados.</p>
  
    <p>Pero un nuevo grito en el interior de la choza te devuelve a la cruda realidad.</p>
  
    <p>Vas a tener que enfrentarte con tus compañeros y solo cuentas con el factor sorpresa…</p>`,
    actions: [
      {
        id: '69',
        text: 'Decides entrar en primera aceleración (Protahitéi)',
      },
      {
        id: '63',
        text: 'Buscas la espalda de Merkar, que se ha quedado fuera, para sorprenderle',
      },
    ],
  },
  {
    id: '21',
    html: `<p class="h1alt">La misteriosa chica vengativa.</p>  
    <p class="asangre"><i>Has solventado el enigma. «Bribonzuela» y «Curiosear» son palabras pentavocálicas, es decir, que contienen todas las vocales, al igual que «Ecuación»</i>.</p>
  
    <p>Algo te dice que ese curioso individuo puede saber algo de lo que está ocurriendo. Te acercas en silencio y descubres asombrado que en realidad se trata de una chiquilla que apenas debe tener catorce años. Bajo su capa con capucha, viste con pieles y harapos. Tiene el cabello largo pero parece tan sucio que no aciertas a adivinar el color. Lleva unas calzas que le vienen anchas y un cuerno le cuelga de un cinto hecho con cuerda de esparto. Mientras te habla, saca una flecha de su aljaba y se dispone a cargar su arco.</p>
  
    <p>—Me alegro de no estar sola para plantarles cara. Te he visto bajar desde el bosque. ¿Eres de la aldea o un montaraz?</p>
  
    <p>Su voz es algo ronca, y no se corresponde con su aspecto de niña. Te mira de soslayo y te asombra constatar que su mirada azul es fría como el acero, en comparación a la dulzura de su rostro. Ella también te está examinando con detalle.</p>
  
    <p>—Llevas espada… ¿Eres un rebelde?</p>
  
    <p>Decides obviar las preguntas. Su determinación te intriga.</p>
  
    <p>—¿Qué quieres hacer con ese arco?</p>
  
    <p>—Impedirlo.</p>
  
    <p>—¿El qué?</p>
  
    <p>—Que repitan lo que le hicieron a mi familia. Los asesinaron a sangre fría. ¿Me ayudas o solo has venido a mirar?</p>
  
    <p>Deilos, Taifos y Dahzor se acercan con sigilo a la puerta de la cabaña. Están a poco más de 50 metros y sus siluetas parecen demonios amenazantes.</p>`,
    actions: [
      {
        id: '144',
        text: 'Cargas tu arco como la niña, apuntando hacia el grupo',
      },
      {
        id: '142',
        text: 'Impides que la niña dispare',
      },
    ],
  },
  {
    id: '22',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '23',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '24',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '25',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '26',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '27',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '28',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '29',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '30',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '31',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '32',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '33',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '34',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '35',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '36',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '37',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '38',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '39',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '40',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '41',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '42',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '43',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '44',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '45',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '46',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '47',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '48',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '49',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '50',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '51',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '52',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '53',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '54',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '55',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '56',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '57',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '58',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '59',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '60',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '61',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '62',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '63',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '64',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '65',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '66',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '67',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '68',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '69',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '70',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '71',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '72',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '73',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '74',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '75',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '76',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '77',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '78',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '79',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '80',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '81',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '82',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '83',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '84',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '85',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '86',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '87',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '88',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '89',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '90',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '91',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '92',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '93',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '94',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '95',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '96',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '97',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '98',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '99',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '100',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '101',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '102',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '103',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '104',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '105',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '106',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '107',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '108',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '109',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '110',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '111',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '112',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '113',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '114',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '115',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '116',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '117',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '118',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '119',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '120',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '121',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '122',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '123',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '124',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '125',
    html: 'www',
    actions: [
      {
        id: 'xx',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '126',
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
