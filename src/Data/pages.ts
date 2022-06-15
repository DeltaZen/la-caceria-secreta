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
        text: 'comenzar',
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
    html: `<p>Con un poderoso rugido, el corueco se abalanza sobre vosotros. A pesar de tu aceleración, su rapidez te desconcierta y la enorme bestia te cubre por completo lanzando un poderoso rugido.</p>

    <p>En ese momento comprendes la suerte que estás teniendo. El corueco te pasa por encima con la intención de alcanzar a la muchacha que sale huyendo.</p>
  
    <p>Ejecutas la técnica del Yagartéi desenvainando tu espada a la vez que das un tajo ascendente de izquierda a derecha, buscando el abdomen de la bestia. La kisha de tu espada atraviesa unos centímetros de carne y provoca que el corueco herido se encoja en el aire, a la vez que lanza un berrido estruendoso. La hoja que se deslizaba se traba súbitamente con algo metálico y chocas con algo muy duro que te propina una sacudida repentina que te recorre los dos brazos de punta a punta, obligándote a soltar el arma.</p>
  
    <p>El corueco se revuelve en el aire y cae pesadamente sobre el suelo. Pero asombrosamente, se recupera de inmediato y se gira para afrontarte de nuevo. No ves a la muchacha por ninguna parte. No puedes alcanzar la espada, por lo que retrocedes, acercándote al arroyo. Todo parece haber terminado y solo piensas en distraer al corueco el tiempo suficiente con el fin de darle tiempo a ella para escapar.</p>
  
    <p>Te dispones a afrontar la criatura que se acerca lentamente, sin dejar de mirarte. Parece que sus ojos gualdos quieran hipnotizarte antes de volver a atacar.</p>`,
    actions: [
      {
        id: '143',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '23',
    html: `<p>El corueco salta sobre ti lanzando un poderoso rugido. A pesar de tu aceleración, su velocidad te sorprende y la enorme bestia se te viene encima desde lo alto.</p>

    <p>Instintivamente, das un salto hacia delante para poderte colocar debajo de él. Realizas la técnica del Yagartéi desenvainando tu espada y ejecutas un tajo ascendente de izquierda a derecha, buscando el abdomen de la bestia. Notas como la kisha penetra unos centímetros en la carne y provoca un espasmo de dolor en el corueco, que le hace retorcerse en el aire profiriendo un bramido estridente. La hoja deja de deslizarse y golpea algo metálico en el lugar donde debería haber una costilla, lo que te provoca una fuerte vibración en ambos brazos, desde los hombros hasta la punta de los dedos, como si hubieras golpeado con todas tus fuerzas una columna de piedra maciza. El dolor te hace soltar la espada.</p>
  
    <p>El corueco se ha revolcado en el suelo un instante pero se recobra y te encara nuevamente. Estás desarmado y has retrocedido instintivamente en sentido opuesto, acercándote a la confluencia del prado con el arroyo. No albergas ninguna esperanza, por lo que decides morir junto a la sepultura de tu compañera de aventuras.</p>
  
    <p>El corueco avanza lentamente hacia ti cruzando su mirada fosforescente con la tuya como si quisiera hipnotizar a su presa.</p>`,
    actions: [
      {
        id: '134',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '24',
    html: `<p>Nervioso a la par que fascinado por tu sorprendente encuentro con Tríane, recorres inquieto el perímetro exterior una y otra vez para intentar volver a verla. Pierdes la noción del tiempo hasta tal punto que te sorprende ver acudir el relevo de tu guardia.</p>

    <p>Cuando te diriges a tu refugio, distingues a cinco siluetas camufladas que están hablando con tu compañero Dahzor. Reconoces de inmediato al corpulento Taifos, la mano derecha de Deilos, un Ibtahán de quinto grado como tú. Deilos es el primero que se gira hacia ti y te sonríe posando su mano sobre tu hombro con falsa actitud condescendiente. Sus dientes brillan en la oscuridad. Todos visten ropajes oscuros y se han manchado las caras con carboncillo, como una avanzadilla de reconocimiento que se camufla antes de una misión de combate. Al acercarte, observas que Dahzor está muy emocionado y que también se está tiznando la cara con madera carbonizada.</p>`,
    actions: [
      {
        id: '94',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '25',
    html: `<p>Te has quedado tan fascinado por la simetría de su rostro y la armonía de sus facciones que dudas un instante, sin saber qué decisión tomar.</p>

    <p>Escuchas unas palabras en tu mente, que te plantean un acertijo para que puedas tomar la decisión correcta:</p>
  
    <p>«ODIO O CEDO».</p>`,
    actions: [
      {
        id: '96',
        text: 'Piensas que «EXHIBO» puede ser la solución, te acercas a ella con actitud amigable',
      },
      {
        id: '169',
        text: 'Crees que «FRENO» es la respuesta correcta, desenvainas tu espada',
      },
    ],
  },
  {
    id: '26',
    html: `<p>De pronto notas una terrible punzada en el abdomen. Observas tu estómago y ves que una flecha está clavada en tus tripas. Alzas la vista a lo lejos y descubres a Merkar que te mira con asombro después de haber disparado su arco.</p>

    <p>Todo sigue transcurriendo lentamente a tu alrededor; la muchacha grita… demasiado tiempo. Hincas la rodilla en el suelo e intentas seguir sujetando la empuñadura de tu espada.</p>
  
    <p>Entretanto Deilos ha agarrado a la chiquilla por el cuello, que se debate aterrorizada, intentando escapar. Todo se está desvaneciendo a tu alrededor y la oscuridad se cierne rápidamente sobre ti. Lo último que escuchas es la voz de Deilos:</p>
  
    <p>—Voy a divertirme con tu nueva amiga, cretino. Taifos, carga con este imbécil y ocultémonos rápido cerca de ese bosque. Puede que su cuerpo nos sirva todavía…</p>
  
    <p>Se hace el silencio. Has muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: 'inicio',
        text: 'Ir al principio',
      },
    ],
  },
  {
    id: '27',
    html: `<p>—Es una identificación que indica mi graduación…</p>

    <p>—¿Tú también eres un guerrero de Uhdanfiún como ellos, verdad?</p>
  
    <p>No crees que valga la pena contestar.</p>
  
    <p>—No es la primera vez que veo un brazalete como éste… El que lo llevaba me salvó… cuando me iba a violar un grupo como ése.</p>
  
    <p>Señala a Deilos y los suyos que veis marchar a lo lejos, corriendo hacia el desfiladero.</p>
  
    <p>—Y al igual que tú, también iba con ellos.</p>
  
    <p>Turbado por su historia, la contemplas en silencio.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. A pesar de su mirada dura y fría, ves cómo unas lágrimas brotan de sus ojos.</p>
  
    <p>—Dale recuerdos de mi parte cuando lo veas. —Te besa en los labios suavemente—. Se llama Derguín.</p>
  
    <p>Se separa de ti lentamente, dejando resbalar sus manos por tus mejillas. En las suyas, ves cómo resbalan las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Cuando la diminuta figura se pierde entre los cerros, te pones en marcha para llegar cuanto antes al campamento, pensando en lo que te ha dicho.</p>
  
    <p>Te acuerdas muy bien de ese tal Derguín. Él y su amigo Mikhon Tiq fueron severamente castigados y luego expulsados de la academia, hace un año aproximadamente, por enfrentarse a sus propios compañeros. Sonríes al pensar que acabas de hacer algo parecido, mientras apuras el paso.</p>`,
    actions: [
      {
        id: '34',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '28',
    html: `<p>El grupo sigue avanzando y no puedes alertarles sin hacer ruido. Pero hay sonidos que pueden pasar desapercibidos en la noche… como el ulular de un búho, por ejemplo. Juntas las manos e imitas a la perfección su sonido, como podrías imitar cientos, en base a tus enseñanzas de la academia.</p>

    <p>Bhratar, que va el último, no parece haber reaccionado. Tu imitación debe ser muy buena. Lo repites de inmediato. Ahora sí. Se ha detenido, extrañado por la súbita insistencia del rapaz nocturno y se da la vuelta para ver de dónde viene ese ulular tan persistente…</p>
  
    <p>Se acaba de percatar de tu posición alejada. Le haces una señal con un código que habéis practicado miles de veces. Le muestras una dirección. Bhratar te entiende y avisa al compañero de delante. El grupo se ha detenido. Ves como Deilos abandona la cabeza y acude para saber qué pasa.</p>
  
    <p>Bhratar le explica lo que le has transmitido; observas que Deilos se pone muy nervioso y te mira de refilón. Vuelves a señalarle la posición y le indicas que se trata de un solo individuo.</p>
  
    <p>Deilos reúne al grupo y simulan una pequeña reunión, aprovechando la cobertura para indicarte que lo rodees por detrás.</p>
  
    <p>Retoman la marcha mientras tú retrocedes para capturarlo por detrás. Van prestando atención para detectarlo, pero el misterioso individuo aún ha extremado más las precauciones, hasta el punto que incluso a ti te cuesta distinguirlo en la oscuridad.</p>`,
    actions: [
      {
        id: '131',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '29',
    html: `<p>No entiendes lo que te está proponiendo. Le cuentas que al llegar al campamento piensas denunciar la infamia de Deilos y su grupo, para que se les aplique el castigo correspondiente.</p>

    <p>—No lo has entendido, muchacho —te contesta con voz clara y serena—. Ellos también lo saben. Acompáñame.</p>
  
    <p>Tríane te precede. Te impresiona comprobar como se desplaza sin hacer el más mínimo ruido. Os infiltráis en el campamento con total discreción y os acercáis a la tienda del maestro Turpa. Del interior surge claramente una conversación con otra persona a la que reconoces de inmediato: es Deilos, que le está informando de lo sucedido.</p>`,
    actions: [
      {
        id: '128',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '30',
    html: `<p>Empiezas a recitar la secuencia, sin dejar de correr entre chinas y guijarros que vuelan a tu alrededor, cuando de pronto recibes un fuerte golpe por detrás, en plena nuca, y caes de bruces al suelo.</p>

    <p>Eso ha sido un pedrusco de los gordos, piensas, mucho más atontado y dolorido.</p>`,
    actions: [
      {
        id: '129',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '31',
    html: `<p>Mientras reptas por detrás de la tapia para tomar posición, murmuras la secuencia de letras y números con la que entras en Protahitéi, la primera aceleración. En el mismo instante que terminas de recitarla puedes notar como sube un calor intenso por todo tu cuerpo. Tus músculos lumbares se contraen… y todo se ralentiza a tu alrededor.</p>

    <p>Te incorporas y ves moverse a la chiquilla de manera ralentizada. Le haces la señal y cargas tu arco velozmente.</p>
  
    <p>Ella todavía te está mirando.</p>
  
    <p>Te incorporas por encima de la tapia y apuntas al que está más cerca de la cabaña.</p>
  
    <p>Reconoces al corpulento Taifos, que avanza espada en mano.</p>
  
    <p>Sueltas la cuerda. La flecha vuela hacia él.</p>
  
    <p>Recargas tu arco y apuntas a Merkar que está más lejos y también empuña su arco tensándolo desde la cintura mientras mira hacia los lados.</p>
  
    <p>Sueltas tu segunda flecha. Por el rabillo del ojo ves que ella ya tensa su arco y se dispone a disparar.</p>
  
    <p>Tu primera flecha se clava en la pantorilla de Taifos que grita al sentir el impacto.</p>
  
    <p>Te llevas el cuerno a la boca y soplas con todas tus fuerzas.</p>
  
    <p>Tu segunda flecha roza la nalga de Merkar, arrancándole un gruñido de dolor.</p>
  
    <p>Se le dispara el arco y su flecha se pierde en el huerto vecino.</p>
  
    <p>Cargas una tercera flecha.</p>
  
    <p>Apuntas de nuevo pero constatas que no todo se mueve con lentitud. Alguien corre hacia vosotros a toda velocidad. Es Deilos, que también a entrado en Protahitéi.</p>`,
    actions: [
      {
        id: '71',
        text: 'Decides disparar tu tercera flecha',
      },
      {
        id: '115',
        text: 'Prefieres soltar el arco y desenvainar la espada',
      },
    ],
  },
  {
    id: '32',
    html: `<p>Cuando la pequeña figura se pierde entre los cerros, inicias la marcha bordeando el bosque de Corocín y empiezas a subir por la quebrada que lleva al campamento dispuesto a afrontar tu destino. En un oscuro recodo del camino, notas una extraña presencia en las sombras. Te pones a la defensiva ante cualquier peligro inminente, temiendo incluso haber sido sorprendido por Deilos y su pandilla, cuando se avanza una esbelta figura de pelo oscuro y ojos rasgados.</p>

    <p>Es Tríane, que te mira con una extraña compasión en los ojos.</p>
  
    <p>—A veces las buenas intenciones no son suficientes. Me has defraudado.</p>
  
    <p>No entiendes lo que te está proponiendo. Le cuentas que al llegar al campamento piensas denunciar la infamia de Deilos y su grupo, para que se les aplique el castigo correspondiente.</p>
  
    <p>—No lo has entendido, muchacho —te contesta con voz clara y serena—. Ellos también lo saben. Acompáñame.</p>
  
    <p>Tríane te guía atravesando senderos invisibles hasta llegar al campamento. Te impresiona comprobar que ella se desplaza sin hacer el más mínimo ruido. Os infiltráis en el campamento con total discreción y os acercáis a la tienda del maestro Turpa. Del interior surge claramente una conversación con otra persona a la que reconoces de inmediato: es Deilos, que le está informando de lo sucedido.</p>`,
    actions: [
      {
        id: '133',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '33',
    html: `<p>Estás regresando de vuelta al campamento, avanzando a paso ligero por los términos del bosque, seguido de la extraña muchacha que acabas de conocer. Jadea detrás de tuyo, pero no se queja. Por la ladera opuesta observas cómo el grupo sigue huyendo desordenadamente… hasta que se detiene, poco antes de llegar a la loma de la alameda. Parece que uno ellos os ha descubierto y el grupo señala en vuestra dirección.</p>

    <p>De repente, parte del grupo cambia de sentido y avanza hacia vosotros.</p>
  
    <p>La muchacha se sorprende cuando te detienes y busca el motivo de tu repentino interés. Ahora se acaba de dar cuenta.</p>
  
    <p>—¿Qué hacemos?</p>
  
    <p>Detectas angustia y miedo en su tono.</p>
  
    <p>—Meternos en el bosque.</p>
  
    <p>—Ese bosque es muy peligroso —te dice ella resoplando.</p>
  
    <p>—¿Prefieres enfrentarte a ellos?</p>
  
    <p>La coges por la mano y avanzáis con algo de aprensión hacia la espesura.</p>`,
    actions: [
      {
        id: '46',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '34',
    html: `<p>Temes no poder adelantar a Deilos y los suyos, por lo que seguramente Dahzor se percatará de tu ausencia en el refugio y despertarás sospechas en el grupo a raíz de lo ocurrido.</p>

    <p>Inicias la marcha bordeando el bosque de Corocín y empiezas a subir por la quebrada que lleva al campamento, sabiendo que el grupo te precede. En un oscuro recodo del camino, notas una extraña presencia en las sombras. Te pones a la defensiva ante cualquier peligro inminente, temiendo incluso ser sorprendido por Deilos y su pandilla, cuando se avanza una esbelta figura de pelo oscuro y ojos rasgados.</p>
  
    <p>Es Tríane, acompañada de un extraño caballo.</p>
  
    <p>—No me has defraudado y por este motivo te voy a prestar excepcionalmente la ayuda que necesitas. <i>Riamar</i> accede a llevarte hasta tu campamento por un atajo, para que nadie descubra lo que has hecho. Será nuestro secreto.</p>
  
    <p>Ignoras como ha conseguido persuadirte, pero al poco rato estás subido en el lomo de ese extraño y hermoso caballo blanco de remos largos y cabeza orgullosa que emite un suave gorjeo cuando Tríane le susurra unas palabras acariciándole el cuello. El extraño animal franquea los obstáculos con una velocidad y agilidad sorprendentes.</p>
  
    <p>En apenas unos minutos, tu peculiar montura se detiene en lo alto de una loma. Tu mirada se posa abajo y vislumbras el campamento. Desmontas con cuidado y te despides del bello animal, sin poder recordar su nombre.</p>
  
    <p>Te internas en el campamento con sigilo. No hay indicios de que Deilos y los suyos hayan regresado todavía.</p>`,
    actions: [
      {
        id: '188',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '35',
    html: `<p>Sujetas con decisión la empuñadura de tu espada, esperando el salto del corueco.</p>

    <p>Aunque realices el movimiento de manera impecable, te resulta imposible predecir la velocidad exacta de este extraño animal. Tu vida pende de un hilo y lo sabes. Intentas no perder la concentración. Las pupilas de la bestia se contraen una milésima de segundo…</p>
  
    <p>¡El horripilante corueco salta velozmente sobre ti!</p>`,
    random: true,
    actions: [
      {
        id: '181',
        text: 'Continuar',
      },
      {
        id: '9',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '36',
    html: `<p>Te adentras entre los árboles, tomando la dirección opuesta de Taifos, con la intención de desahogarte antes de empezar la misteriosa «cacería secreta». Te internas algo más en la espesura, mientras reflexionas sobre lo que acabas de ver. ¿Una aldea con huertos? ¿Acaso la cacería va a consistir en robar animales de granja a unos pobres campesinos? Agachas la cabeza y terminas lo que estás haciendo, sintiendo un leve escalofrío por el súbito cambio de temperatura corporal.</p>

    <p>Al levantar la vista, casi te caes del susto. Ahogas un improperio y te tapas las vergüenzas precipitadamente. Tríane está plantada ante ti, a un metro y medio de distancia y te sonríe con la misma calma que la última vez que os visteis.</p>
  
    <p>—Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…</p>
  
    <p>Esta conversación por enigmas te está exasperando. Te dispones a hacerle preguntas claras, cuando a tu espalda escuchas el sonido de las ramas al agitarse y escuchas la voz de Tauldos:</p>
  
    <p>—¿Tienes para mucho? Tenemos que seguir…</p>
  
    <p>—Voy —le contestas de inmediato.</p>
  
    <p>Te vuelves hacia Tríane, pero ya no está. Lo ha vuelto a hacer otra vez.</p>
  
    <p>Regresas con los demás.</p>`,
    actions: [
      {
        id: '03',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '37',
    html: `<p>Mantienes la posición sin dejar de observar los movimientos del grupo. Todos, salvo Dahzor, parecen ahora más concentrados. Por lo que parece, la cacería es inminente, pero no alcanzas a entender lo que va a ocurrir. ¿Una aldea con huertos? ¿Acaso la cacería va a consistir en robar hortalizas o animales de granja a unos pobres campesinos?</p>

    <p>Al rato aparece Taifos, reuniéndose nuevamente con el grupo. Reemprenden la marcha, esta vez con sigilo, adentrándose por el sendero que va hacia la aldea.</p>`,
    actions: [
      {
        id: '147',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '38',
    html: `<p>En ese mismo momento Taifos se queda paralizado; puedes ver la perplejidad reflejada en su cara y te señala repentinamente gritando:</p>

    <p>—¡Cuidado! ¡Detrás de ti!</p>
  
    <p>Apenas has ladeado la cabeza cuando el silbido de una flecha precede el roce del proyectil que pasa junto a tu cuello. Es la muchacha, erguida a pocos metros detrás de ti, que acaba de disparar su arco. Su capucha se ha retirado por el viento y ves su larga melena oscilando en el aire.</p>
  
    <p>Taifos comprende con el tiempo justo que la flecha va dirigida a él y apenas tiene tiempo de tirarse a un lado para esquivarla. Deilos también se agacha instintivamente a pesar de estar al otro lado de la puerta, pero Dahzor es incapaz de eludir la flecha que se le clava en la cadera y profiere un alarido, rodando a continuación por los suelos.</p>
  
    <p>Los demás, algo más alejados, todavía buscan a los asaltantes cuando de pronto suena un cuerno en todo el prado.</p>
  
    <p>Estás anonadado mirando a la chiquilla que suelta su cuerno y empieza a huir ladera arriba, cuando escuchas el griterío a tu alrededor: voces de alarma en las cabañas colindantes, Dahzor aullando por los suelos… y Deilos vociferando:</p>
  
    <p>—¡Atrapad a esa zorra!</p>
  
    <p>Puedes ver cómo Taifos se está incorporando mientras farfulla una secuencia de números que reconoces de inmediato: está entrando en Protahitéi, la primera aceleración.</p>
  
    <p>Rápidamente, haces tus cálculos. La chica está corriendo ladera arriba pero no conseguirá escapar de Taifos, que la atrapara antes de que llegue al bosque. Tú también recitas la secuencia y la persigues, aprovechando tu posición aventajada para llegar antes.</p>`,
    actions: [
      {
        id: '201',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '39',
    html: `<p>La enorme bestia se abre paso entre la espesura. Es impresionante y mucho más grande que un jabalí… quizá tenga el tamaño de un oso inmenso. Contemplas hipnotizado cómo se le hincha el abombado tórax mientras se apoya en su largos brazos. Su cabeza está coronada por una cresta de hueso y no te quita ojo; notas cómo se clavan en ti sus crueles ojos amarillos. Las piernas cortas y musculosas se están tensando, parece que se dispone a saltar. Encojes aún más tu postura para cubrirte mejor.</p>

    <p>Es la primera vez que te enfrentas a un corueco y seguramente no vivirás para contarlo. Recuerdas ciertos rumores que aseguran que su único punto débil es un reducido espacio ubicado en su abdomen. Esperas que esa teoría sea cierta, ahora que te dispones a afrontarlo.</p>`,
    actions: [
      {
        id: '153',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '40',
    html: `<p>—Sospecho que debe tratarse de algún asunto importante. Te conduciré hasta la salida del bosque. Sígueme.</p>

    <p>Linar te precede dando grandes zancadas, recorriendo un camino que se te antoja inexistente. Tienes que correr para no perderle. A lo largo del recorrido, te parece entrever extrañas sombras de bestias ocultas en la espesura, pero no se produce ningún percance. Te da la sensación de que Linar es el amo y señor de este viejo bosque. La densidad de la arboleda es tal que parece que se cierra a tu paso, imposibilitando seguir un rastro en condiciones. No te cabe duda que el lugar es mágico.</p>
  
    <p>Sigues trotando detrás del incansable mago; a pesar de que parezca un viejo, constatas que tiene una resistencia asombrosa. Cuando por fin se detiene, te muestra un grupo de robles centenarios que parecen formar una pared impenetrable.</p>
  
    <p>—Nuestros caminos se separan aquí —te dice Linar con voz grave—. Yo regreso a mi santuario. Te deseo la misma fortuna que la que tuviste cuando le plantaste cara al corueco. Tuviste suerte de que no fuera un ejemplar adulto, pero aun así no desmerece en absoluto tu hazaña. Adiós muchacho.</p>
  
    <p>El mago se interna en el bosque y se desvanece en la tupida arboleda.</p>
  
    <p>Al llegar junto a los árboles vislumbras el paisaje que se extiende fuera del bosque de Corocín. Reconoces el final del camino que empezaba en un desfiladero, un montículo con una alameda y al final de ese sendero se adivinan los pequeños pagos, rodeados por huertos.</p>`,
    actions: [
      {
        id: '103',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '41',
    html: `<p>—Pareces tener motivos justificados para no demorarte. Te guiaré hasta la salida de Corocín.</p>

    <p>Linar se adelanta y empieza a caminar dando grandes zancadas que te obligan a trotar para no distanciarte de él. Se desplaza con soltura por senderos que no logras vislumbrar y al avanzar dejáis atrás a criaturas que se ocultan en la espesura, sin atreverse a interrumpir vuestra progresión. Jurarías que el extraño mago tiene una estrecha relación con el bosque y es respetado por todos sus habitantes. Cuando echas la vista atrás te das cuenta que el sendero que recorréis ha desaparecido tras vuestro paso. Corocín exhuma magia por todos los lados.</p>
  
    <p>El mago sigue avanzando, incansable, lo cual no deja de asombrarte teniendo en cuenta que parece bastante mayor para tener semejante vitalidad.</p>
  
    <p>Linar se detiene finalmente ante unos robles centenarios que se elevan sobre un pequeño montículo.</p>
  
    <p>—Aquí nos separamos. Vuelvo a mi hogar. Espero que tengas suerte en tu búsqueda. La tuviste cuando te enfrentaste al corueco, y aunque no fuera un ejemplar adulto, fuiste valiente. Adiós muchacho.</p>
  
    <p>La voz grave de Linar retumba en tus oídos cuando lo ves desvanecerse en la espesura.</p>
  
    <p>Un estrecho pasadizo oculto entre los robles te permite acceder al exterior del bosque y te devuelve a un paisaje que te resulta muy familiar: el camino previo al desfiladero que termina en la aldea de los campesinos y la pequeña alameda sobre la loma. Avanzas con precaución, explorando las inmediaciones para encontrar a la muchacha.</p>`,
    actions: [
      {
        id: '154',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '42',
    html: `<p>—Intuyo que debe tratarse de algún asunto importante. Te ayudaré. Sígueme.</p>

    <p>Linar se adelanta y empieza a trotar con largos pasos entre los árboles del bosque sin un rumbo preciso aparente. Te obliga a correr para no quedar rezagado. En la frondosidad que dejáis a los lados, te parece intuir la presencia de espectros que también podrían ser bestias fantásticas ocultas en la penumbra, pero nadie os perturba durante vuestro recorrido, como si el mago fuera el amo y señor de este viejo bosque cuya espesura es comparable a un angosto laberinto. La magia que desprende el lugar es innegable.</p>
  
    <p>Al rato llegáis a un claro y bordeáis un arroyo, dejando a un lado una poza oscura y maloliente.</p>
  
    <p>Linar, que continua avanzando a buen ritmo, te advierte:</p>
  
    <p>—No te detengas y no mires hacia la charca.</p>
  
    <p>Instintivamente, haces todo lo contrario y descubres una extrañas criaturas que parecen emerger del agua. Desconcertado, te ha parecido intuir el cuerpo de una mujer desnuda que se perfilaba en la orilla… ¿Delante de una enorme cola de serpiente?</p>`,
    actions: [
      {
        id: '91',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '43',
    html: `<p>Recitas velozmente la secuencia de letras y números que te permitirán conseguir la primera aceleración, con la esperanza de que esa velocidad suplementaria te brinde alguna ventaja sobre la colosal bestia que se dispone a atacarte.</p>

    <p>Tus riñones se tensan y notas como tu cuerpo se calienta rápidamente, a causa del apresurado bombeo de toda tu sangre.</p>
  
    <p>Es la primera vez que afrontas un corueco y por lo que tú sabes, nadie ha sobrevivido para contarlo. Esperas que la suerte esté de tu parte; sabes que la vas a necesitar.</p>
  
    <p>El enfrentamiento es inminente.</p>`,
    random: true,
    actions: [
      {
        id: '54',
        text: 'Continuar',
      },
      {
        id: '183',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '44',
    html: `<p>De pronto escuchas a tu espalda algo que parece el ulular de un búho. Reconoces de inmediato el sonido como uno de los cientos que habéis practicado en la academia para comunicarse en terreno abierto. Ves que el extraño personaje que estabas siguiendo se ha ocultado inmediatamente. A él tampoco le ha debido convencer la imitación del sonido. Asciendes algo más por la ladera para poder tener a ambos objetivos en tu campo de visión; en ese momento observas que el grupo se ha detenido y que parece estar esperando alguna señal. No están todos.</p>

    <p>Ahora ves a Deilos al otro extremo de la ladera, que ha retrocedido hasta tu posición. Gracias a la refulgencia de las tres lunas de Tramórea y a pesar de la distancia, compruebas que te está viendo y te hace señales, intentando entender lo que estás haciendo. Por sus gestos constatas que está exasperado. Oteas en la otra dirección para ver si tu presa se ha movido. Parece que se arrastra lentamente hacia delante, pero no levanta la cabeza.</p>
  
    <p>Le haces una señal a Deilos con un código que habéis practicado en la academia. Le muestras una dirección. Ves como intenta ver algo sin éxito y te pide confirmación. Vuelves a señalarle la posición y le indicas que se trata de un solo individuo. Le indicas que regrese con el grupo para no alertar al misterioso sujeto que os está espiando.</p>
  
    <p>Deilos te indica que lo rodees por detrás y regresa con el grupo. Retoman la marcha mientras tú te posicionas aún más arriba para que el intruso no te detecte y sin perder de vista su extraña sombra cuando repta por el suelo. Vas a intentar capturarlo por su retaguardia. En el grupo van prestando atención para detectar la singular presencia, pero te das cuenta de que la misteriosa figura aún extrema más las precauciones; incluso a ti te cuesta distinguirla en la oscuridad.</p>`,
    actions: [
      {
        id: '131',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '45',
    html: `<p>Los lobos se quedan inmóviles, olfateando el aire. La muchacha se derrumba y respira con dificultad, intentando recuperarse.</p>

    <p>El lobo negro profiere un corto aullido apenas audible. El lobo gris de cresta blanca se acerca junto a él y gruñe en tono bajo. Los cuatro lobos, inquietos, quieren reanudar la marcha, pero la muchacha todavía se está reponiendo y aún no tiene fuerzas para levantarse. Te das cuenta de que el lobo negro está muy crispado y no deja de mirar hacia su lado, con una postura cada vez más hostil. En ese momento escuchas a lo lejos un ruido opaco que se aproxima.</p>
  
    <p>Los lobos están cada vez más inquietos y el jefe de la manada se tiene que imponer para que mantengan la calma y permanezcan en sus puestos. Intercambian un aullidos roncos, seguidos de breve gañidos.</p>
  
    <p>En ese momento, los dos lobos se colocan al lado del negro, y el gran lobo gris ocupa el centro; todos están alertas y encarando el bosque desde donde proviene el sordo clamor que crece en intensidad.</p>
  
    <p>El jefe de la manada, sin dejar su posición, se gira hacia vosotros y os ladra con exasperación varias veces, mostrando sus afilados colmillos. Y de golpe, salta al frente y se internan en el bosque enfrentando el peligro inminente. Los tres lobos restantes le siguen de cerca, con un semblante siniestro. Tú percibes por primera vez un olor desagradable con exhalaciones metálicas que te recuerda los rumores escuchados sobre cierta terrible criatura.</p>
  
    <p>—¿Y ahora que pasa? —dice la chiquilla intentando respirar con normalidad.</p>
  
    <p>—Creo que se van a enfrentar a algo terrible para protegernos: un corueco. Huyamos de aquí.</p>`,
    actions: [
      {
        id: '130',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '46',
    html: `<p>Los lindes del bosque son tan densos y tupidos como lo parecían desde lejos. Inspiran mucho respeto… y temor. Notas que la chiquilla aumenta la presión de su mano mientras os internáis entre fresnos, olmos y robles que parecen milenarios. Con un hilo de voz y carraspeando previamente, la muchacha te confiesa:</p>

    <p>—Nunca me he atrevido a entrar en el bosque de Corocín, ni siquiera de día.</p>
  
    <p>Os detenéis un momento para saber si Deilos y el resto del grupo os está siguiendo. Se oyen voces de alarma a lo lejos pero no parece que el grupo se haya atrevido a penetrar en la espesura.</p>
  
    <p>Ella retoma la conversación. Parece que el escuchar su propia voz le ayuda a temperar su creciente miedo.</p>
  
    <p>—Según dicen, en este bosque habitan bestias de todo tipo, desde lobos salvajes hasta basiliscos o serpientes bípedas… y sobre todo, es temido por sus coruecos.</p>
  
    <p>—Y ¿qué hay de cierto en todas esas leyendas?</p>
  
    <p>—No lo sé, pero el bosque se llama Corocín por ese motivo: es el bosque de los coruecos.</p>`,
    actions: [
      {
        id: '106',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '47',
    html: `<p>Estáis avanzando sin dejar de controlar a las seis figuras camufladas que serpentean entre huertos y cercados.</p>

    <p>La chiquilla se ha colocado a tu lado y te observa de soslayo sin perderlos de vista.</p>
  
    <p>—Vas bien armado… y supongo que sabes que no se permiten las armas en esta región. ¿Qué eres? ¿Un montaraz solitario o un guerrero rebelde?</p>
  
    <p>No sabes qué contestar… escuchas en tu mente unas palabras, la voz Tríane retumba en tu cabeza: «Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…».</p>
  
    <p>—Hablaremos de eso más tarde. Ocupémonos de ellos antes.</p>
  
    <p>Retomáis la marcha, recuperando terreno sobre el grupo para poneros casi a su altura, separados por las cabañas de los campesinos.</p>
  
    <p>Tal como intuías, se dirigen a la cabaña más alejada. Observas cómo se detienen un momento para parlamentar y encaran el sendero que asciende hacia la choza de la loma, acercándose por los márgenes del huerto principal.</p>
  
    <p>Aprovecháis vuestra ventajosa posición para descender y ocultaros detrás de la tapia, de manera que podáis sorprenderlos desde uno de sus flancos.</p>
  
    <p>A medida que el grupo asciende, puedes reconocer a sus integrantes: el más fuerte, Taifos, va delante seguido por Deilos. Un poco más atrás siguen Tauldos, Bhratar y Dahzor. Cierra la marcha Merkar, que avanza con el arco a medio tensar desde la cintura.</p>
  
    <p>La muchacha se encoge para quedar oculta tras la tapia.</p>`,
    actions: [
      {
        id: '196',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '48',
    html: `<p>Permaneces un tiempo inmóvil. El bosque está en silencio, como si presentara sus condolencias por el triste e injusto fallecimiento que se acaba de producir en sus dominios. No te llega ningún sonido del exterior, no escuchas nada. Tampoco hay señales de que Deilos y los suyos se hayan atrevido a entrar en el bosque. Transcurre un tiempo sin que te reactives. Sostienes a la chiquilla en brazos con delicadeza, como si solo estuviera dormida, y buscas con la mirada algún lugar donde poder enterrarla. Continúas avanzando por la espesura con dificultad, como un alma en pena.</p>

    <p>De pronto un claro se abre ante tus ojos sin previo aviso. A tu derecha distingues un ligero declive que baja hacia un arroyo. A tu izquierda, entrevés un pequeño prado que despide un aroma penetrante y dulzón. El suelo cerca del arroyo está más blando. Con la ayuda de una piedra, empiezas a cavar una tumba. Al rato terminas y buscas ramas para confeccionar una señal que indique su lugar de descanso. Al buscar entre heléchos, se alzan destellos diminutos de varios colores, entre los cuales predomina el verde. A los brillos fosforescentes se les une un sutil zumbido, parecido al de un canturreo, que rodea la sepultura de la muchacha. Son luznagos, que contribuyen a darle a la ceremonia un aura todavía más fantástica y solemne. Una vez recubierto el cuerpo, colocas una combinación de piedras y ramas a modo de lápida, inclinándote para presentarle tus respetos a la que fuera tu compañera por un breve instante.</p>
  
    <p>Luego te acercas para beber un poco de agua del arroyo, antes de emprender nuevamente la marcha.</p>`,
    actions: [
      {
        id: '90',
        text: 'Quieres avanzar bordeando el arroyo',
      },
      {
        id: '158',
        text: 'Prefieres atravesar el pequeño prado',
      },
    ],
  },
  {
    id: '49',
    html: `<p>Abandonas discretamente y en silencio el campamento, dejando atrás a todos tus compañeros de armas. Rastreas el lugar donde viste por última vez a la chiquilla, en busca de alguna pista de tu compañera de aventuras en el bosque de Corocín.</p>

    <p>Estás arrodillado examinando una pisada cuando de repente notas una presencia a escasos metros que te sobresalta. Tríane se acerca y te pone una mano en el hombro, acariciándote la cabellera. Una vez más, no la has escuchado aproximarse. Sus esperanzadoras palabras te infunden algo de sosiego.</p>
  
    <p>—No te queda otra alternativa que convertirte en fugitivo. Pero no temas, se avecinan tiempos revueltos en los que puedes culminar hazañas gloriosas y conseguir poder. Y si quieres seguir conociendo los secretos del Tahedo, ten paciencia y busca a un guerrero llamado Kratos May.</p>
  
    <p>Adviertes cómo sus delicados y suaves dedos se deslizan por tu brazo hasta llegar a tu mano. Su nívea piel contrasta con tu curtido y rugoso pellejo de color cuero, tu brazo peludo y tus uñas sucias. Quieres mirarla a los ojos una vez más… pero ya no está.</p>
  
    <p>Miras a tu alrededor, te encoges de hombros y te alejas por un sendero entre árboles. Estás pensando que vas a ocultarte durante tiempo en Ritión. Zarenyo te contó que habían lugares fantásticos allí y siempre quisiste vivir junto al mar. Con un poco de suerte os encontraréis por ahí y le podrás explicar lo sucedido esta noche. Miras a lo lejos… y descubres que apenas doscientos metros delante de ti, una pequeña figura con un arco en la espalda se aleja con lentitud y cabizbaja. Una sonrisa tonta te brota en los labios.</p>
  
    <p>«Quizá no haga el viaje solo», piensas.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: 'inicio',
        text: 'Ir al principio',
      },
    ],
  },
  {
    id: '50',
    html: `<p>Cierras los ojos y empiezas a subvocalizar velozmente letras y números para entrar en primera aceleración, notando cómo se te tensionan tus lumbares y una corriente cálida recorre todo tu cuerpo. Al abrirlos nuevamente, percibes que el universo parece haber frenado su curso.</p>

    <p>Todavía no ha salido la flecha del arco de la muchacha cuando tú le arrebatas el cuerno del cinto y lo soplas con fuerza, propinándole un pequeño empujón. Su flecha describe un arco mientras entonas un agudo lamento con el cuerno, deformado por tu aceleración. El grupo de Deilos se ha quedado paralizado (y no solamente por la sensación que te provoca la Protahitéi). Sueltas el cuerno.</p>
  
    <p>Ahora, tensas tu arco y arrojas una primera flecha desde la tapia.</p>`,
    actions: [
      {
        id: '203',
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
