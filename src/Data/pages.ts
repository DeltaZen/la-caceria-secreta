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
    html: `<p>Antes de sucumbir al encanto de las tres hermosas mujeres, intentas discernir qué insólita magia puede flotar en el ambiente, provocando esas visiones y extrañas melodías. Puedes percibir que algo misterioso está ocurriendo y confías en tu percepción para desentrañar lo que puede estar pasando.</p>

    <p>Dos palabras te vienen a la mente, para facilitarte la señal que buscas: «Lamido resol». Las tres mujeres te siguen fascinando y te resulta cada vez más difícil permanecer impasible.</p>`,
    actions: [
      {
        id: 'xx',
        text: '«Mírela» es la palabra que te inspira',
      },
      {
        id: 'xx',
        text: '«Escúchela» es la palabra que te gusta',
      },
    ],
  },
  {
    id: '52',
    html: `<p>Corres a toda velocidad en dirección opuesta y al rato escuchas a tu espalda ladridos y un rugido ensordecedor. Intentas acelerar pero apenas te quedan fuerzas. Golpeas ramas y zarzas que te hieren en el rostro y en los brazos a tu paso, pero procuras no detenerte. Cuando crees que ya te has alejado lo bastante, te detienes extenuado y resoplas contra un viejo olmo, intentando recuperar el aliento.</p>

    <p>Respiras con fuerza para aliviar la quemazón que notas en los pulmones.</p>
  
    <p>Y de súbito, lo vuelves a oler. Ese pestilente efluvio con reminiscencias metálicas.</p>
  
    <p>No puede ser. Debe ser otro. Y ha olido tu sangre.</p>
  
    <p>Desenvainas la espada, dispuesto a afrontar el peligro.</p>`,
    actions: [
      {
        id: '110',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '53',
    html: `<p>A pesar del miedo que te inspiran estas bestias, hay algo que no te encaja en su comportamiento. Intentas advertir el detalle que te permita descubrir qué puede ser. En ese momento, el jefe de la manada avanza, acercándose a ti. Su pezuña es casi del tamaño de tu cabeza. La chica se está poniendo nerviosa y agarra con crispación su arco. Su voz se ha quebrado y apenas puedes oírla cuando te dice:</p>

    <p>—Ag, el lobo llega.</p>
  
    <p>La respuesta adecuada a esa frase te dará la solución.</p>`,
    actions: [
      {
        id: '88',
        text: 'decides contestar «Solos»',
      },
      {
        id: '112',
        text: 'contestas «Zarpa»',
      },
    ],
  },
  {
    id: '54',
    html: `<p>El corueco salta hacia ti.</p>

    <p>Tú das un brinco hacia delante, seguido de una voltereta con la esperanza de situarte detrás de él, pero compruebas algo tarde que su velocidad es pasmosa, incluso estando tú en segunda aceleración.</p>
  
    <p>Terminas tu maniobra desenfundado el arma para protegerte. El cuerpo del animal te envuelve prácticamente y lanzas un tajo desesperado para sacarte de encima tan tremenda mole. Tu kisha ejecuta una arco bajo su cuerpo y notas cómo se hunde levemente en su abdomen… para acabar golpeando algo metálico. La sacudida del impacto te hace soltar el arma y notas un latigazo en todos los músculos, desde el hombro hasta la punta de los dedos.</p>
  
    <p>El corueco también parece haber reaccionado. Profiere un rugido estremecedor y da un sorprendente brinco como si de un gato rabioso se tratase, para acabar sobre sus patas nuevamente, encarándote con una mirada amenazadora.</p>
  
    <p>Vuelves a afrontar la bestia totalmente desarmado. Te planteas huir, pero estás totalmente convencido que el corueco te dará alcance.</p>
  
    <p>Intuyendo tu pánico, la espantosa bestia profiere otro bramido ensordecedor que no presagia nada bueno.</p>`,
    actions: [
      {
        id: '164',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '55',
    html: `<p>Un impacto en el pecho te detiene en seco. Caes de rodillas al suelo, sujetando la flecha que se ha clavado en tu pulmón, cerca del corazón.</p>

    <p>Merkar balbucea tu nombre asombrado, cuando de pronto una flecha silba, se clava en su hombro y lo derriba.</p>
  
    <p>Entre brumas, escuchas cómo salen de la casa Deilos y el resto del grupo. Suena un cuerno, se escuchan voces de alerta. Taifos agarra a Merkar, se lo carga a la espalda y sale corriendo detrás de Deilos que vocifera al resto del grupo:</p>
  
    <p>—¡Corred, idiotas!</p>
  
    <p>Se oyen más voces. Parece que están dando la alarma en la aldea. El grupo se pierde en un horizonte de niebla que no alcanzas a entender. De pronto notas un brazo que te sujeta y te intenta levantar a duras penas. Es la chiquilla que te arrastra como puede fuera de la casa, empujándote por encima de la tapia y llevándote hasta los lindes del bosque. Abajo los campesinos gritan y lloran al comprobar la carnicería que se ha cometido en la casa de uno de sus vecinos, señalando al grupo que huye hacia el desfiladero.</p>`,
    actions: [
      {
        id: '184',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '56',
    html: `<p>Ya recuperado, te dispones a emprender la marcha para salir de Corocín. Vas detrás del mago por senderos invisibles que no serías capaz de atisbar. A pesar de su edad, el mago avanza con grandes pasos y te obliga a corretear para mantener su zancada. Al rato te das cuenta que estás totalmente perdido y de no ser por Linar, no sabrías qué dirección tomar. Aún te estás preguntando a qué distancia podéis estar cuando Linar se detiene de pronto y te muestra un grupo de robles centenarios que se erigen frente a vosotros, bloqueando el paso.</p>

    <p>—Aquí nos despedimos —te dice Linar en voz baja—. Vuelvo a mis dominios y espero que tengas toda la suerte que te mereces, muchacho.</p>
  
    <p>El trayecto se te ha hecho muy corto y te sorprende que pueda haber un atajo para semejante distancia. Observas al mago alejarse entre los árboles y te da la sensación de que a su paso se van cerrando los accesos… hasta que desaparece de tu vista en la frondosa arboleda.</p>
  
    <p>Cuando te acercas a los árboles descubres un estrecho pasadizo entre troncos que te lleva hasta los lindes exteriores del misterioso bosque de Corocín. Desde allí puedes escrutar el paisaje y rememorar el camino que has recorrido previamente: el camino donde empieza el desfiladero, que desemboca en los huertos de los campesinos, la pequeña loma con la alameda en la que os detuvisteis antes de que descubrieras a la chiquilla…</p>`,
    actions: [
      {
        id: '103',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '57',
    html: `<p>Totalmente regenerado gracias al ágape que te ha ofrecido Linar, emprendéis la marcha hacia los lindes del bosque de Corocín. El viejo mago te precede y recorre senderos imperceptibles con grandes zancadas, apoyando su bastón con decisión. Te ves obligado a trotar para no perder su paso.</p>

    <p>Al poco rato desistes totalmente de cualquier intento de orientarte en la espesura. Sin embargo, cuando menos te lo esperabas, Linar se detiene y te muestra una apertura entre árboles que desemboca en un descampado. El recorrido te ha parecido excepcionalmente breve pero estás seguro de que serías incapaz de retomar la senda por la que habéis venido. Linar te señala un grupo de robles centenarios apostados sobre un pequeño cerro.</p>
  
    <p>—Aquí nos despedimos, jovenzuelo. Espero que tu destino te sea tan favorable como el encuentro que has tenido con el corueco. —Su voz suena profunda y solemne—. Todo y que no era un ejemplar adulto, demostraste una valentía que merece recompensa. Vuelvo a mis dominios. Buena suerte.</p>
  
    <p>Linar se interna de nuevo en el bosque y desaparece en la negrura del follaje.</p>
  
    <p>Avanzas hasta la arboleda y contemplas el paisaje desde los lindes del bosque de Corocín. Reconoces la ruta que se dirige al desfiladero y a lo lejos vislumbras el monte que precede a la aldea y los huertos de los pobres campesinos.</p>
  
    <p>Inspeccionas por los alrededores con la esperanza de encontrar a la chiquilla.</p>`,
    actions: [
      {
        id: '122',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '58',
    html: `<p>Todavía te estás preguntando cómo vas a plantear la denuncia de Deilos y los suyos a los maestros cuando, al llegar al perímetro exterior del campamento, escuchas una voz autoritaria que te interpela:</p>

    <p>—¡Alto! ¿Quién va?</p>
  
    <p>Caminas pausadamente y separas los brazos del cuerpo para que te pueda reconocer el centinela. En ese momento, se adelantan dos guardias que se ocultaban en las sombras, para cerrarte el paso. Son Taifos y Deilos. El corpulento Ainari empuña un arco cargado a medio tensar, reteniendo la flecha desde la cintura y apuntado con el arma hacia el suelo. Llevas tu arco a la espalda y sabes que no se dejaran sorprender con una aceleración que ellos también conocen. Aun así, estás dispuesto a enfrentarte a ellos, por lo que te dispones a empuñar la espada.</p>
  
    <p>—Detente, necio.</p>
  
    <p>Reconoces la voz del maestro Turpa, que ahora ves surgir desde las sombras.</p>`,
    actions: [
      {
        id: '149',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '59',
    html: `<p>Quiebras tu cintura gracias a la velocidad de la primera aceleración y la flecha de Merkar pasa de largo, rozando tu brazo izquierdo. Aprovechas el escorzo para dar media vuelta y salir huyendo. A tu espalda resuena la voz de Turpa gritando: «¡Acabad con él!».</p>

    <p>Asciendes por la loma y distingues a lo lejos la diminuta figura de tu compañera, cargando nuevamente su arco. Aceleras para darle alcance.</p>
  
    <p>Escuchas cómo Deilos y los demás te persiguen, pero prefieres no mirar. Sigues corriendo, cruzándote con una flecha que la muchacha ha lanzado al grupo. Ella también se da la vuelta y empieza a correr. La rebasas y la coges por el brazo aprovechando tu rapidez, para tirar de ella. Al llegar a un talud que desciende, os lanzáis por él. Resbaláis hasta llegar abajo, a unos pocos metros. Cuando os incorporáis de nuevo, temiendo que vuestros perseguidores os estén pisando los talones, echáis un rápido vistazo hacia arriba.</p>`,
    actions: [
      {
        id: '102',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '60',
    html: `<p>Examinas la herida de Zarenyo. La manga de su jubón está desgarrada y la sangre sale a borbotones por la rotura de la tela. Tu compañero aprieta los dientes cuando cortas la manga y compruebas la gravedad del daño. Está muy pálido. Entiendes el motivo cuando examinas su brazo destrozado por el impacto del afilado pedrusco: tiene el húmero partido.</p>

    <p>Al rato llegan los instructores exaltados, blandiendo sus armas y vociferando para saber si hay algún herido. Al ver el lamentable estado de Zarenyo, el maestro Turpa, máximo responsable de estas maniobras, solicita que se lo lleven de inmediato a la tienda del médico y que si es necesario, lo trasladen mañana mismo a primera hora a Koras para que reciba mayores cuidados. Afortunadamente, es el único herido en todo el campamento y gracias a tu rápida intervención la herida no tendrá mayores consecuencias: solo tiene el brazo roto.</p>`,
    actions: [
      {
        id: '204',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '61',
    html: `<p>Interpones tu espada cuando Taifos se dispone a atestarte un contundente tajo desde arriba, cortándole el antebrazo con tu hasha. Su corpulencia te ha desequilibrado y te doblas hacia atrás para evitar caerte.</p>

    <p>Taifos maldice entre dientes y te fulmina con sus ojillos de jabalí rabioso.</p>
  
    <p>Te preparas para recibir otra embestida.</p>
  
    <p>—¡Déjalo Taifos! ¡Tenemos que salir de aquí! ¡Ya ajustaremos luego cuentas con él!</p>
  
    <p>Te señala con su espada antes de unirse al grupo, renegando.</p>
  
    <p>—Cuando nos veamos de nuevo, te haré pagar por esto.</p>
  
    <p>El grupo sale corriendo a toda velocidad y empieza a perderse por el camino de la quebrada que lleva hasta el campamento.</p>
  
    <p>Echas un vistazo al interior de la cabaña. A duras penas te contienes para no vomitar ahí mismo. Cuerpos masacrados, degollados, mutilados. Sangre por todas partes.</p>
  
    <p>Oyes la voz de la muchacha, que se incorpora al otro lado de la tapia, haciéndote señas para que te reúnas con ella, gritándote:</p>
  
    <p>—¡Ven! ¡Tenemos que salir de aquí YA!</p>`,
    actions: [
      {
        id: '02',
        text: 'decides seguir a la muchacha y huir hacia los lindes del bosque',
      },
      {
        id: '126',
        text: 'decides perseguir al grupo',
      },
    ],
  },
  {
    id: '62',
    html: `<p>La voz te resulta extraña, una curiosa mezcla entre ronca e infantil. Mantienes tu cuerpo rígido e inmóvil mientras giras lentamente la cara hacia el sonido de la voz que has escuchado. Un bulto oscuro e invisible, perfectamente oculto detrás un desnivel del terreno, te está apuntado con su arco. Lo único que consigues ver es la punta de la flecha que no está en las sombras y apunta directamente hacia ti. No podrías esquivarla a esta distancia.</p>

    <p>—Al principio a ellos… luego a ambos.</p>
  
    <p>—¿Y sabes cuáles son sus intenciones?</p>
  
    <p>—Es lo que intento averiguar.</p>
  
    <p>—Yo te lo puedo decir. Los he visto antes. Son guerreros de Undanfiún. Van a entrar en una de esas chozas para masacrar a la familia que viva dentro… —la voz carraspea— y a lo mejor hacer cosas peores.</p>
  
    <p>Sus palabras te han sacudido como si fueran un mazazo. No logras articular una sílaba.</p>
  
    <p>—Ahora que lo sabes… ¿Me vas a ayudar a detenerlos o te vas a desentender y convertirte en su cómplice?</p>`,
    actions: [
      {
        id: '212',
        text: 'crees que miente y te niegas a prestarle a ayuda',
      },
      {
        id: '100',
        text: 'aceptas ayudarle',
      },
    ],
  },
  {
    id: '63',
    html: `<p>Te dispones a sorprender a Merkar por detrás cuando de pronto una flecha pasa silbando por tu lado y se clava en su omoplato derecho. Merkar aúlla de dolor. En ese mismo momento desenvainas tu espada y le golpeas fuertemente con la empuñadura su antebrazo izquierdo, lo que le hace soltar el arco con otra mueca crispada.</p>

    <p>Encaras la entrada de la cabaña con la espada en alto, sin saber lo que te vas a encontrar dentro.</p>`,
    random: true,
    actions: [
      {
        id: '146',
        text: 'Continuar',
      },
      {
        id: '125',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '64',
    html: `<p>Se suman otras voces que provienen de los huertos colindantes.</p>

    <p>«¡Allí van! ¡Fijaos, hay un rezagado!».</p>
  
    <p>En ese momento, escuchas el impacto de un guijarro a tus pies, mientras sigues corriendo. De pronto, te das cuenta que vienen de todas partes, a por ti, armados con aperos de labranza, cogiendo piedras que te lanzan con torpeza… pero ya son más de veinte personas que se te aproximan, rodeándote por todos lados.</p>
  
    <p>Una piedra te golpea en el pecho, sin apenas hacerte daño. Al momento otro canto te atiza de lleno en un pómulo, aturdiéndote por un segundo. Notas la sangre que recorre tu mejilla.</p>
  
    <p>La cosa se está poniendo fea y decides pronunciar la fórmula de la aceleración para salir cuanto antes de este atolladero.</p>`,
    actions: [
      {
        id: '30',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '65',
    html: `<p>Cuando estás prácticamente sobre él, lanzas el brazo hacia delante y cargas todo tu peso sobre su espalda para amordazarle la boca con tu mano y mantenerle aplastado contra el suelo, tal y como os han enseñado en las técnicas de emboscada de la academia.</p>

    <p>Apenas ha emitido un bufido cuando ha sentido tu presión y lo mantienes totalmente inmovilizado. Tampoco parece que quiera debatirse demasiado. Le das la vuelta lentamente para verle la cara… y alucinas: ¡Es una chiquilla!</p>
  
    <p>Apenas debe tener catorce años. Bajo la capa con capucha, viste con pieles y harapos. Tiene el cabello largo pero parece tan sucio que no aciertas a adivinar el color. Lleva unas calzas que le vienen anchas y un cuerno de caza le cuelga de un cinto tosco hecho con cuerda basta. Un arco corto y su aljaba asoman por su espalda. Tú sigues sin incorporarte, para permanecer invisible.</p>`,
    actions: [
      {
        id: '205',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '66',
    html: `<p>Sincronizas tu movimiento con sumo cuidado, lanzándote a su espalda y buscando su boca con una mano para evitar que pueda chillar, mientras que con la otra intentas aprisionar sus brazos. Te ha sorprendido la poca resistencia que has notado, por lo que ambos habéis chocado de bruces contra la hierba. La peor parte se la ha llevado él puesto que lo has aplastado literalmente contra el suelo cuando le has caído encima. No ha proferido ningún sonido y ahora notas como resopla por la nariz humedeciendo la palma de tu mano que se aferra a su boca como una tenaza. Está totalmente inmovilizado y dejas pasar un segundo para que asuma su condición mientras le susurras al oído una fanfarronada.</p>

    <p>—No hagas ni el más mínimo ruido o te retuerzo el pescuezo como a una gallina. Asiente lentamente si me entiendes.</p>`,
    actions: [
      {
        id: '213',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '67',
    html: `<p>Te lanzas sobre su espalda rodeándolo con tus brazos para impedir cualquier reacción. El encapuchado apenas consigue resoplar y su rostro se hunde en la hierba. Le mantienes sujeto de tal modo que le resulta imposible moverse. Constatas que no tiene mucha fuerza, tanto por la poca resistencia que has notado como por la escasa envergadura que tiene. Puesto que no forcejea, decides girarlo para arrancarle la capucha y verle la cara.</p>

    <p>No te lo puedes creer… ¡Es una chiquilla!</p>
  
    <p>Su aspecto es lastimoso; su cara y su pelo están tan sucios que eres incapaz de adivinar el color. Su vestimenta da pena. Por debajo de la capa lleva harapos y pieles, junto con unos calzones que le vienen grandes. Para sujetarlos usa una cuerda de esparto a modo de cinturón, del que cuelga una especie de cuerno de caza. No sabrías darle una edad, pero te parece que debe rondar los catorce años.</p>`,
    actions: [
      {
        id: '210',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '68',
    html: `<p>Al llegar junto a un grueso fresno, te detienes para recuperarte y poder estudiar el terreno. En ese momento, te das cuenta que ella te está examinando detenidamente: tus ágiles movimientos, tu cuerpo curtido por el ejercicio, tu espada al cinto… tu brazalete con marcas azules.</p>

    <p>—Eres… como ellos.</p>
  
    <p>No sabes qué contestarle. Solo la miras en silencio.</p>
  
    <p>—No exactamente. Ellos mataron a mi familia. Tú me recuerdas al otro.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. A pesar de su mirada dura y fría, ves cómo unas lágrimas brotan de sus ojos.</p>
  
    <p>—Dale recuerdos de mi parte cuando lo veas. —Te besa en los labios suavemente—. Se llama Derguín.</p>
  
    <p>Con una mano acaricia tu mejilla, con la otra se enjuga las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Derguín… te suena mucho ese nombre. De pronto lo recuerdas: es un alumno de la academia al que expulsaron el año pasado después de infringirle un severo castigo. No recuerdas bien el motivo pero te suena que castigaron y expulsaron a su compañero también, un tal Mikhon Tiq.</p>`,
    actions: [
      {
        id: '32',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '69',
    html: `<p>Murmuras la secuencia de letras y números que te permiten alcanzar la primera aceleración y vas notando una tensión en tu columna vertebral, a la vez que se acelera el bombeo de tu sangre. Todo a tu alrededor transcurre ahora más lentamente.</p>

    <p>Te abalanzas sobre Merkar que todavía se está girando con una lentitud exasperante y le barres ambas piernas, levantándolo del suelo con tu espada envainada, usándola como una remo que se propulsa en las olas. Su cuerpo todavía no ha tocado el suelo que tú ya estás entrando en tromba dentro de la cabaña que despide un extraño olor a sudor y sangre.</p>
  
    <p>Escuchas el sonido opaco (debido a tu aceleración) de la espada de Taifos, segándole la pierna a una mujer que intentaba levantarse; ves cómo las gotas de sangre salpican lentamente la estancia y puedes ver como algunas te llegan al rostro. Dahzor se dispone a ensartar un niño por la espalda cuando éste intenta huir. Afuera, se escucha el sonido de un cuerno de caza que da la alarma. Interpones tu arma y ejecutas un giro de muñeca tan veloz que la espada sale volando hacia una de las paredes.</p>
  
    <p>Y de pronto percibes que a tu espalda alguien se ha movido rápidamente… Es Deilos, que también ha entrado en Protahitéi.</p>
  
    <p>Vas a necesitar mucha suerte para afrontar a un Ibtahán de sexto grado en igualdad de condiciones.</p>`,
    random: true,
    actions: [
      {
        id: '145',
        text: 'Continuar',
      },
      {
        id: '186',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '70',
    html: `<p>Observas cómo el grupo se ha dispersado y ocupa diversas posiciones alrededor de la cabaña y el camino. Te parece reconocer a Taifos como el que está más cerca de vosotros y de la cabaña. Se ha puesto en cuclillas, apoyado contra el cercado. Algo más atrás, te da la sensación que se trata de Deilos, por la manera de gesticular. Junto a él distingues a Merkar, con el arco tensado a media cintura. En el sendero parece que Dahzor avanza en dirección a Deilos. Bhratar y Tauldos se han quedado en el cruce cubriendo la retaguardia.</p>

    <p>La chiquilla está esperando tu señal y se muestra cada vez más impaciente a medida que el grupo se acerca a la cabaña. Está tensando su arco y se dispone a apuntar a Taifos. Rápidamente, te llevas el cuerno a la boca y soplas con todas tus fuerzas.</p>`,
    actions: [
      {
        id: '182',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '71',
    html: `<p>Sueltas la flecha. Deilos la esquiva dando un salto hacia el lado… y entonces te reconoce.</p>

    <p>—¡Tú! —exclama rabioso.</p>
  
    <p>Sin soltar el arco, te abalanzas sobre la muchacha y la agarras por la cintura como si fuera un pequeño fardo mientras ella profiere un breve resoplido. Corres ladera arriba, en dirección al bosque, hostigado de cerca por Deilos que ya se reincorporado y os persigue.</p>
  
    <p>Escuchas voces de alarma que provienen de las diferentes chozas, pero sabes que Deilos no cejará en su empeño tan fácilmente. El peso de la chiquilla que se debate con torpeza te ralentiza y lo tienes casi encima.</p>
  
    <p>Ya falta menos, apenas cien metros. Escuchas resoplar a Deilos a tu espalda… De pronto sueltas a la muchacha y te giras ejecutando un Yagartéi defensivo que sorprende a vuestro perseguidor. Cuando intenta reaccionar, le propinas una patada frontal en pleno tórax que le despide hacia atrás con ímpetu y le hace rodar cuesta abajo.</p>
  
    <p>La chiquilla se ha levantado y se ha quedado perpleja contemplando la escena. La sujetas de nuevo por el brazo y reemprendéis vuestra huida hacia el bosque. Deilos se yergue con dificultad mientras reniega encolerizado:</p>
  
    <p>—¡Te arrepentirás de esto, maldito!</p>
  
    <p>Llegáis a la imponente arboleda, apurando tu aceleración hasta los lindes. Tiene un aspecto amenazador. Avanzas hacia el bosque.</p>
  
    <p>—¿Seguro que es buena idea meternos aquí dentro? —te pregunta resoplando.</p>
  
    <p>—No tenemos otra opción.</p>`,
    actions: [
      {
        id: '46',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '72',
    html: `<p>Te arrastras zigzagueando como una serpiente para envolver a tu presa y capturarla por detrás. Has logrado distinguir su perfil recortado en la noche por una fracción de segundo. Lleva una capa y una capucha que impide ver su rostro, a su espalda cuelga un arco corto con su aljaba. Por delante y a lo lejos, divisas al grupo que prosigue su avance silencioso.</p>

    <p>Vuelves a fijar la atención en el extraño personaje que estás siguiendo… pero ya no lo ves. ¡No puede haber desaparecido!</p>
  
    <p>Irritado por haberte despistado tan tontamente, avanzas lo más velozmente que puedes sin delatar tu presencia y extremando las precauciones para no hacer ruido… pero sigues sin verlo.</p>`,
    actions: [
      {
        id: '140',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '73',
    html: `<p>El silbido de tu flecha precede el de la chica, pero no alcanza tu objetivo. Deilos se sobresalta cuando escucha el silbido que le roza las piernas y ve cómo una flecha se clava en el prado a pocos metros de él. En ese mismo instante otra flecha se le clava en el hombro, arrancándole un grito de dolor agudo. Si no se hubiese movido, le hubiese atravesado el corazón.</p>

    <p>Dahzor, que avanzaba por detrás de él, asustado por el ataque, da media vuelta y huye gritando:</p>
  
    <p>—¡Es otra emboscada! ¡Nos estaban esperando, huyamos!</p>
  
    <p>La chiquilla está sorprendida por lo ocurrido y te mira de reojo levantando un ceja con reprobación. Le coges rápidamente el cuerno del cinto aprovechando su confusión.</p>
  
    <p>—¡Rápido! ¡Hay que alertar a los campesinos!</p>
  
    <p>Y te pones a soplar el cuerno con todas tus fuerzas.</p>
  
    <p>Se empiezan a oír gritos en la cabaña y en las chozas de los alrededores, mientras observas cómo el grupo huye corriendo a toda velocidad. Deilos corre sujetándose el hombro con el otro brazo y gruñe de dolor en cada zancada que da.</p>
  
    <p>—Vamos —le susurras suavemente a tu misteriosa compañera—. ¿No querrás que nos sorprendan aquí, verdad?</p>
  
    <p>Corréis agazapados subiendo por la loma hasta los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: '85',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '74',
    html: `<p>El silbido de tu flecha y tu movimiento brusco han alertado a Deilos, que ha percibido tu sombra al levantarte y se mueve imperceptiblemente para descubrir de qué se trata. El proyectil pasa entre sus piernas y se clava a pocos metros de él, justo delante de Dahzor, que avanzaba por detrás.</p>

    <p>La muchacha dispara un segundo más tarde, desconcertada ya que esperaba tu señal. Su flecha se clava en el hombro de Deilos, arrancándole un gañido de dolor agudo. Si no se hubiese movido, le hubiese atravesado el corazón.</p>
  
    <p>Taifos se ha quedado momentáneamente petrificado, al ver cómo Deilos cae de rodillas y se sujeta el hombro donde tiene clavado la flecha. Luego se lanza hacia él para ayudarle.</p>
  
    <p>En ese momento te llevas el cuerno de caza a los labios para soplar con todas tus fuerzas.</p>
  
    <p>Dahzor da media vuelta y huye gritando:</p>
  
    <p>—¡Es otra emboscada! ¡Nos estaban esperando, huyamos!</p>
  
    <p>Merkar, apostado más atrás carga su arco para proteger la retirada, intentando vislumbrar lo que hay detrás de Dahzor, que viene corriendo hacia él. Puede ver a Taifos cargando son Deilos a hombros y retirándose también, pero no consigue ver quién les está atacando…</p>
  
    <p>La chiquilla está confusa por lo sucedido; te mira de soslayo, alzando una ceja con desaprobación.</p>
  
    <p>Se encienden luces en algunas cabañas del pago y ya se oyen voces de alarma, gritos y llantos por los alrededores. El grupo está huyendo a toda velocidad por el mismo camino que han venido.</p>
  
    <p>Deilos va rezagado, corriendo mientras se sujeta el hombro con el otro brazo, y gruñe de dolor en cada zancada que da.</p>
  
    <p>—Será mejor que nos marchemos de aquí cuanto antes o tendremos problemas, musitas a tu enigmática compañera.</p>
  
    <p>No te contesta, pero adviertes que no parece del todo satisfecha por el reciente desenlace. La invitas a seguirte, sujetándola por un brazo.</p>
  
    <p>Corréis agazapados subiendo por la loma hasta los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: '33',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '75',
    html: `<p>—Vamos a cerciorarnos —te contesta Linar—. Sígueme.</p>

    <p>Linar se desplaza raudo y con soltura por el frondoso bosque, obligándote a corretear para igualar sus grandes pasos. Avanzáis durante unos minutos hasta que se despeja la espesura y desembocáis de pronto sobre un prado que encara un cerro culminado por un amplio árbol moldeado por cuatro troncos que se unen en uno solo. Cuando os acercáis puedes ver una hendidura en la corteza que da paso a una entrada natural al interior de la casa del mago.</p>
  
    <p>Linar te proporciona comida y agua para que puedas reponer las fuerzas pérdidas en tus recientes enfrentamientos. Al rato compruebas que tu agarrotada musculatura recupera su vigor original, incluso las zonas más doloridas tras el escarceo con el corueco. Sigues a Linar mientras éste asciende por el tronco de su hogar y culmina la copa del ancho árbol que ha apodado el Gran Viejo. Allí se extiende una plataforma natural desde la cual Linar otea los aledaños, buscando a la chica que le has comentado.</p>
  
    <p>Poco después carraspea y te informa:</p>
  
    <p>—Tu amiga está sana y salva, fuera de Corocín. Es muy lista y ha sabido salir ilesa de este peligroso lugar. Normalmente no suelo interesarme por los problemas que me son ajenos pero tu osadía al enfrentarte a ese corueco, aunque no fuese adulto, merece una atención. Si lo deseas, puedo llevarte hasta los lindes de Corocín, para que puedas alcanzarla luego. Cuando acabes de comer, marcharemos. No te demores.</p>
  
    <p>Estás bajando por la plataforma cuando te percatas de que el mago aparta un velo de hojas que parece camuflar un curioso teclado; el mago empieza a pulsarlo y notas que en la madera del árbol se accionan una clavijas que provocan un sonido similar al de un órgano, liberando una música que se puede escuchar en todo el bosque. Es la música de Corocín, supones.</p>
  
    <p>El mago se da cuenta que lo estás contemplado y hace un gesto de complicidad con el hombro mientras sigue tocando.</p>
  
    <p>—Eso tranquilizará a tu amiga —te explica el Mago.</p>`,
    actions: [
      {
        id: '57',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '76',
    html: `<p>Linar te invita a seguirle. Te colocas detrás de él y empezáis a serpentear por el bosque a través de los árboles sin que exista ningún sendero que os permita orientaros. El mago camina con decisión, dando grandes zancadas que te obligan a trotar para mantener la distancia. Al rato aparecéis en medio de un claro y ascendéis por un cerro coronado por un árbol de tamaño colosal, formado por cuatro troncos que se entrelazan en uno solo. El mago se cuela por una hendidura de la corteza y cuando le sigues descubres que se trata una puerta natural que brinda el acceso a la casa de Linar.</p>

    <p>El peculiar personaje te invita a comer y te sirve un generoso vaso de agua fresca que sabe de maravilla. La pitanza que te ofrece te parece muy sabrosa, por lo que la devoras con apetito, notando cómo recuperas las fuerzas hasta el punto de no notar el agarrotamiento que tenías en los brazos como consecuencia de tu encuentro con el corueco.</p>
  
    <p>Linar asciende por el ancho tronco del árbol que ha bautizado como el Gran Viejo, para alcanzar una plataforma natural que se extiende sobre la copa. Desde allí puedes ver cómo indaga en los alrededores, buscando el grupo que le has descrito.</p>
  
    <p>—Ahem. Allí están. No han entrado en el bosque, aunque te puedo llevar hasta los límites de Corocín para que los alcances. Tengo el presentimiento de que no llevan buenas intenciones, por lo que te aconsejo que tengas cuidado. Sería una lástima que no salieras airoso de esta aventura después de haber sobrevivido al ataque de un corueco, aunque ese ejemplar no fuera adulto.</p>`,
    actions: [
      {
        id: '113',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '77',
    html: `<p>—Acompáñame —te contesta Linar.</p>

    <p>Linar avanza con pasos largos y decididos entre la espesura y tú a duras penas logras seguir su ritmo. Al rato llegáis a un camino que se abre paso en el bosque, desemboca sobre un prado y finalmente encara una loma, sobre la cual se erige un extraño árbol, formado por cuatro troncos fundidos en uno solo. Lo que parece una hendidura resulta ser una puerta natural que da acceso a la casa de Linar.</p>
  
    <p>El mago te ofrece bebida y alimento para recuperar fuerzas y notas de inmediato cómo tus entumecidos músculos recobran nuevamente la vitalidad, a pesar del reciente enfrentamiento con el corueco. Linar sube por su árbol, hasta llegar a la copa del Gran Viejo, donde se levanta una plataforma natural. Desde ella escudriña los alrededores.</p>
  
    <p>Al cabo de un minuto, carraspea y te dice:</p>
  
    <p>—El grupo que os ha atacado no está en el bosque. Están regresando a su cubil. No suelo mezclarme en asuntos mundanos pero el coraje y la destreza que has demostrado ante el corueco, merece una recompensa. Tuviste suerte que no fuera adulto, pero eso no deprecia en nada tu valor. Te llevaré hasta los lindes del bosque si lo deseas. Acaba de comer y partiremos luego.</p>
  
    <p>Mientras bajas de la plataforma, observas cómo el mago aparta un velo de hojas que oculta un extraño teclado. Cuando el mago lo presiona sientes como unas clavijas que forman parte de la madera del árbol se accionan y suena una música de órgano en todo el bosque.</p>
  
    <p>La música de Corocín.</p>
  
    <p>—Es en homenaje a tu amiga —te explica el Mago—. Para que descanse en paz.</p>`,
    actions: [
      {
        id: '56',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '78',
    html: `<p>Estás enumerando la secuencia de números y letras de la fórmula secreta mientras te levantas para captar la atención de Deilos. Puedes ver cómo se sorprende y te encara de inmediato, pero en ese mismo instante sientes una terrible punzada en el estómago. Terminas la secuencia, por lo que te invade un repentino calor en todo el cuerpo al tiempo que se tensan tus riñones.</p>

    <p>La flecha que te ha lanzado Merkar está clavada en tus tripas, pero consigues mantenerte en pie. Cometiste un terrible error al no tener en cuenta la presencia de Merkar con su arco preparado.</p>
  
    <p>Aparte de Deilos, todo se ha vuelto más lento a tu alrededor; la chiquilla grita… demasiado tiempo. El arco se te escurre entre los dedos e hincas la rodilla en el suelo, sujetándote la flecha. Tu otra mano agarra la empuñadura de tu espada. Te concentras. Tan solo Deilos se mueve a tu misma velocidad y puedes ver cómo salta por encima de la tapia para sacudirte un tajo de arriba hacia abajo. En ese instante su rostro refleja estupor al reconocerte. Ejecutas de manera impecable un Yagartéi, desenvainando tu espada a la vez que das un tajo ascendente de izquierda a derecha. Vuestras espadas chocan y el arma de Deilos sale volando por encima de tu cabeza.</p>`,
    actions: [
      {
        id: '105',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '79',
    html: `<p>—Pues el que me ha salvado parecía estar en buena forma. Me dijo que se llamaba… —Intentas acordarte de su nombre pero…—. Vaya, no consigo recordarlo. ¿Y tú cómo has conseguido salir del bosque?</p>

    <p>—No lo sé. Empecé a correr sin parar hasta que ya no pude más. Cuando estuve a punto de rendirme, descubrí este sendero y pude salir. Estaba tan angustiada que apenas podía respirar hasta que me apoyé contra este viejo árbol. Me pareció escuchar una extraña música y me quede sentada aquí hasta que me relajé. Dicen que esa música es del bosque y se oye a veces.</p>
  
    <p>Sonríes una segunda vez y prefieres no explicar de dónde procede.</p>
  
    <p>—¿Qué hacemos ahora? —te pregunta la muchacha.</p>
  
    <p>—Voy a explicar lo ocurrido a nuestros maestros. Reclamaremos justicia para los campesinos y castigo para los culpables.</p>
  
    <p>—¿Estás seguro de que es una buena idea?</p>
  
    <p>—Puedes venir conmigo y te presentaré como testigo.</p>
  
    <p>—Ni lo sueñes. No confío en ellos.</p>
  
    <p>—Entonces, ¿no me acompañas al campamento?</p>
  
    <p>—Solo un tramo del recorrido. Luego nos separaremos.</p>`,
    actions: [
      {
        id: '104',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '80',
    html: `<p>Le quitas la daga a Bhratar, que todavía gimotea en el suelo y le lanzas con fuerza el puñal a Merkar que en ese momento se dispone a disparar.</p>

    <p>La flecha y la daga se cruzan en el aire. Merkar profiere un aullido de dolor y se sujeta el muslo, con la daga clavada hasta la empuñadura.</p>
  
    <p>Te das la vuelta y corres hacia el bosque; buscas con la mirada a la chiquilla.</p>
  
    <p>Detrás de ti se empiezan a oír muchas voces, no solo del grupo, sino también de diferentes chozas de la aldea que gritan aterrados dando aviso de que están siendo atacados. Alcanzas a la muchacha cuando estás llegando prácticamente al bosque; está tumbada en el suelo con una flecha clavada en la espalda, la coges en brazos y os adentráis en la espesura.</p>
  
    <p>Notas que el cansancio se apodera de ti por el esfuerzo tras la aceleración, pero sigues corriendo.</p>
  
    <p>Escuchas el grito de Deilos al otro lado del bosque.</p>
  
    <p>—¡Pagarás por esto, cobarde!</p>
  
    <p>Estáis en un bosque cerrado y ya no escuchas ningún ruido. Te arrodillas junto a un olmo de tronco ancho y húmedo, tumbando con delicadeza a la chiquilla herida. Ves un hilo de sangre que se le escapa por la comisura de los labios…</p>`,
    actions: [
      {
        id: '174',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '81',
    html: `<p>Buscas algún rastro que te permita descubrir el camino que haya seguido el grupo. No consigues apreciar ninguna huella o indicio que te ayude a decidir. Antes de dejarlo al azar, decides resolver un problema mental que te aclare las ideas y te ayude a tomar la decisión correcta.</p>

    <p>Recuerdas que en Uhdanfiún, un Tahedorán, maestro del Tahedo en la academia, empezaba sus clases con un ritual de saludos muy concretos. Todos los alumnos se inclinaban ante los demás alumnos, luego ante los Ibtahanes y finalmente ante el maestro. De igual forma, los Ibtahanes se inclinaban ante los demás ibtahanes, luego ante los alumnos y finalmente ante el maestro. Recuerdas igualmente que el número de alumnos duplicaba al de los Ibtahanes, por lo que el ritual precisaba un total de 900 reverencias. Con esa información deberías poder deducir cuantos Ibtahanes y alumnos había en la clase.</p>`,
    actions: [
      {
        id: '151',
        text: 'crees que habían 8 Ibtahanes y 16 alumnos, escoges el camino de a la izquierda y te adentras en el bosque',
      },
      {
        id: '167',
        text: 'crees que habían 10 Ibtahanes y 20 alumnos, escoges el camino de la derecha hacia el desfiladero',
      },
    ],
  },
  {
    id: '82',
    html: `<p>Antes de sucumbir definitivamente al encanto de las tres hermosas mujeres, intentas discernir qué extraña magia puede flotar en el ambiente. Puedes percibir que algo misterioso está sucediendo y confías en tu percepción para desentrañar lo que puede estar pasando.</p>

    <p>Un recuerdo del pasado irrumpe en tu memoria: cuatro nombres de mujeres que conociste en el pasado. Las dos primeras se llamaban «Bhiko» y «Acefir». También recuerdas el nombre de las dos siguientes, aunque sospechas que solo una de ellas te traerá suerte…</p>`,
    actions: [
      {
        id: '06',
        text: 'piensas que «Delquz» es el nombre que te inspirará',
      },
      {
        id: '190',
        text: 'crees que «Lorean» es el nombre correcto',
      },
    ],
  },
  {
    id: '83',
    html: `<p>Piensas que esta chiquilla tiene desvaríos de niña asustadiza y se cree todas las patrañas que le cuentan los campesinos supersticiosos.</p>

    <p>—Lo que acabas de decir es totalmente imposible. Conozco a esos guerreros y son incapaces de cometer semejante atrocidad. Márchate antes de que los avise y te den un castigo por tus injurias.</p>
  
    <p>La muchacha te observa con más detenimiento y se percata que además de la espada, también llevas un brazalete con estrías azules. Con ojos como platos, empieza a retroceder, balbuceando.</p>
  
    <p>—Eres uno de ellos…</p>
  
    <p>—Vuelve a tu casa enana —le respondes irritado.</p>
  
    <p>Ves auténtico terror en sus ojos. Decides que lo mejor es que se vaya, para que puedas seguir al grupo sin distracciones inoportunas. Le das la espalda y sigues arrastrándote mientras observas las evoluciones del grupo.</p>
  
    <p>Siguen avanzando entre los cercados.</p>
  
    <p>«Bobadas», piensas enfadado. Esta cacería secreta te está resultando decepcionante. Al final va a resultar que Deilos y sus patéticos acompañantes van a robar un cerdo o unas gallinas a unos miserables campesinos. Vaya estupidez.</p>
  
    <p>Te vuelves a girar para ver si la chiquilla sigue ahí, pero ya no la ves por ningún lado.</p>
  
    <p>Te quieres convencer que es lo mejor, que es un alivio que se haya marchado.</p>
  
    <p>Pero no acabas de sentirte cómodo con tus sentimientos.</p>`,
    actions: [
      {
        id: '214',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '84',
    html: '<p>Cuando te has quedado solo, te pica la curiosidad y te asaltan las dudas: ¿Qué sería lo mejor? ¿Seguir a hurtadillas el grupo de Deilos para averiguar en qué consiste la cacería secreta o acudir a la tienda del médico para ver cómo se encuentra Zarenyo?</p>',
    actions: [
      {
        id: '08',
        text: 'decides seguir al grupo',
      },
      {
        id: '194',
        text: 'vas a ver cómo se encuentra Zarenyo',
      },
    ],
  },
  {
    id: '85',
    html: `<p>Te desplazas sin hacer ruido, con la agilidad de un gato, tal y como te enseñaron en la academia…</p>

    <p>Al llegar junto a un grueso fresno, hacéis una pausa para recuperar el aliento. Ella no deja de mirarte con insistencia y descubres que se está fijando en todos los detalles de tu indumentaria: la espada al cinto, la ropa de combate… hasta que se queda mirando fijamente tu brazalete con cinco estrías azules.</p>
  
    <p>—¿Qué representa ese brazalete con marcas que llevas en el brazo?</p>
  
    <p>Carraspeas antes de contestar.</p>
  
    <p>—Es una identificación que indica mi graduación.</p>
  
    <p>—¿<i>Tú</i> también eres un guerrero de Uhdanfiún como ellos, verdad?</p>
  
    <p>—Bueno sí, quiero decir no, es decir no exactamente.</p>
  
    <p>—No es la primera vez que veo un brazalete como éste… El que lo llevaba me salvó… cuando me iba a violar un grupo como ése.</p>
  
    <p>Señala a Deilos y los suyos que veis marchar a lo lejos, corriendo hacia el desfiladero.</p>
  
    <p>—Aunque, al igual que tú, también iba con ellos.</p>
  
    <p>No sabes qué contestarle. Solo la miras en silencio.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. A pesar de su mirada dura y fría, ves cómo unas lágrimas brotan de sus ojos.</p>
  
    <p>—Dale recuerdos de mi parte cuando lo veas. —Te besa en los labios suavemente—. Se llama Derguín.</p>
  
    <p>Se separa de ti lentamente, dejando resbalar sus manos por tus mejillas. En las suyas, ves cómo resbalan las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Cuando la pequeña figura se pierde entre los cerros, te pones en marcha para llegar cuanto antes al campamento, pensando en lo que te ha dicho.</p>
  
    <p>Te acuerdas muy bien de ese tal Derguín. Él y su amigo Mikhon Tiq fueron severamente castigados y luego expulsados de la academia, hace un año aproximadamente, por enfrentarse a sus propios compañeros. Sonríes al pensar que acabas de hacer algo parecido, mientras apuras el paso.</p>`,
    actions: [
      {
        id: '34',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '86',
    html: `<p>Al llegar al vivaque, te encuentras a los instructores con sus espadas desenvainadas, desgañitándose para averiguar si alguien ha resultado herido. Te enteras entonces que el único herido es Zarenyo, que ha recibido dos impactos: el primero le ha fracturado el húmero y el segundo le ha impactado en la cabeza, dejándolo inconsciente. Turpa, máximo responsable de estas maniobras, solicita que se lo lleven de inmediato a la tienda del médico, maese Lartetos, y que después de examinarlo y determinar la gravedad de sus heridas, preparen su traslado a Koras para mañana mismo a primera hora.</p>

    <p>El maestro Turpa parece furioso y ha convocado al resto de alumnos. Os informa que el pérfido ataque ha sido cometido por una docena de campesinos rebeldes que deben vivir en los alrededores. Los han visto huir, pero no han conseguido reconocerles debido a la oscuridad de la noche. Está convencido que se trata de unos insurrectos que albergan resentimiento y envidia hacia los guerreros de Uhdanfiún y de la gloria del imperio Ainar.</p>
  
    <p>El tono firme y autoritario del Maestro Turpa no deja lugar a dudas. Escuchas en silencio, como el resto de alumnos… pero no compartes demasiado su versión de los hechos, sobre todo después de lo que has visto allá arriba.</p>
  
    <p>Turpa interrumpe tu reflexión. Para asegurar toda la zona de acampada, se van a realizar guardias por turnos para controlar la zona exterior y el perímetro interior. Te designa como responsable de la primera guardia para vigilar la franja externa.</p>
  
    <p>Te interesas por la salud de Zarenyo y te informan que permanece inconsciente de momento. Te equipas para la vigilancia ciñéndote la espada al cinto y decides comer algo rápidamente antes de iniciar tu ronda.</p>`,
    actions: [
      {
        id: '132',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '87',
    html: `<p>Le acaricias el pelo; ella suspira y te sonríe con picardía.</p>

    <p>—No hay mejor sitio que éste; nosotras te cuidaremos.</p>
  
    <p>Las palabras que te ha susurrado la rubia te resultan muy tentadoras. Sus delicadas manos acarician tu cabellera. En ese mismo momento, notas cómo un agradable escalofrío recorre tu espalda.</p>
  
    <p>—Vente a nadar con nosotras.</p>
  
    <p>La pelirroja tiene una voz suave y sus palabras te han encandilado. Baila lentamente a tu lado. Los bucles de su pelo rojizo vuelan al viento como extrañas llamaradas de un fuego mágico, resbalando sobre su espalda pecosa.</p>
  
    <p>Al rato, las tres te alzan del suelo para abrazarte, cogiendo tus manos mientras se acercan al agua reluciente y cristalina. Del fondo emanan brillos misteriosos que parecen provenir de joyas preciosas que reposan en el fondo. El murmullo de las aguas y el canturreo que se puede escuchar entre las ramas invitan a sumergirse. No puedes resistir la atracción que reina en ese mágico lugar y te dejas llevar por esas atractivas mujeres.</p>`,
    actions: [
      {
        id: '51',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '88',
    html: `<p class="asangre cursiva">Has solventado el enigma. «Ag, el lobo llega» es un palíndromo (palabra o frase que se lee igual hacia delante que hacia atrás). Al contestar con otro palíndromo («Solos»), has descubierto la solución (o has tenido mucha suerte).</p>

    <p>De repente, comprendes lo que está sucediendo. Los lobos no se muestran agresivos, salvo cuando se han sentido amenazados. Se han acercado lentamente y aunque os estén rodeando, no se muestran belicosos sino todo lo contrario: se muestran precavidos y hasta conciliadores. De un modo inexplicable, has asociado su presencia a Tríane y estás convencido de que los ha enviado ella para ayudaros a salir del bosque.</p>
  
    <p>—No dispares. Guarda la flecha. Son amigos.</p>
  
    <p>—¿Qué dices? ¿Te has vuelto loco? ¿Estás seguro?</p>
  
    <p>—Hazme caso.</p>`,
    actions: [
      {
        id: '119',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '89',
    html: `<p class="asangre cursiva">Has solventado el enigma. «Vislumbrando murciélagos» son dos palabras (bastante largas) cuyas letras no se repiten. Al contestar «tirabuzón» has descubierto la otra palabra con esas mismas características (o has tenido mucha suerte).</p>

    <p>De pronto, entiendes lo que está ocurriendo. Esos lobos no parecen hambrientos; tampoco se muestran muy combativos. Interpretas por lo tanto que podrían ser aliados y probablemente acudan a tu presencia como «mensajeros» de Tríane.</p>
  
    <p>Como tampoco estás muy convencido que tu presentimiento sea acertado, te mantienes a la defensiva intentando no mostrarte agresivo.</p>`,
    actions: [
      {
        id: '120',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '90',
    html: '<p>Avanzas con cuidado por el resbaladizo suelo que bordea el riachuelo, con la esperanza de que te guíe fuera de este fantasmagórico bosque. Caminas en silencio, con todos los sentidos en alerta. Cuando llevas apenas cinco minutos, ves que el arroyuelo hace un recodo y desemboca en una especia de charca oscura, rodeada de grandes rocas de diferentes tamaños. Sobre las negras aguas flotan algas y cañas podridas. Piensas que tendrás que dar media vuelta, a la vez que experimentas un ligero sopor. Bostezas una y otra vez. Súbitamente, te das cuenta de que estás muy agotado y decides descansar un segundo sobre una de las rocas. Te frotas la cara, quieres despejarte, pero continúas amodorrado. Te vence la somnolencia y al rato, te quedas dormido…</p>',
    actions: [
      {
        id: '168',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '91',
    html: `<p>El tirón que te pega el mago te sobresalta.</p>

    <p>—¡Te dije que no te detuvieras y no miraras!</p>
  
    <p>El susto parece haberte sacado del atontamiento que estabas padeciendo y vuelves a trotar detrás del incansable mago. A pesar de que parezca una persona mayor, constatas que tiene una resistencia asombrosa.</p>
  
    <p>De pronto Linar se detiene en seco y tú te das de bruces en su espalda. Te señala un pequeño resquicio que se abre entre dos anchos robles. Reconoces el término del camino que empezaba en un desfiladero y observas cómo al final del monte se adivinan unos pequeños pagos, rodeados por huertos.</p>
  
    <p>Linar se acerca hasta situarse entre los dos robles. Te señala la cabaña más apartada del pago, situada sobre una pequeña loma.</p>
  
    <p>—Están allí… ¿Los ves?</p>
  
    <p>Puedes distinguir varias unas sombras acercándose a la casa, ascendiendo una leve pendiente. Tú puedes acceder a la cabaña por otro camino desde arriba. Los seis perfiles de tus compañeros se van camuflando por los cercados mientras siguen avanzando hacia la casa.</p>
  
    <p>—Nuestros caminos se separan aquí —te dice Linar con voz grave—. Yo regreso a mi santuario. Espero que puedas afrontar esta situación con la misma sabiduría y coraje que tuviste frente al corueco, en el bosque de Corocín. Y te deseo la misma suerte. Adiós muchacho.</p>
  
    <p>Linar vuelve a internarse en la espesura hasta que desaparece en la tupida arboleda.</p>`,
    actions: [
      {
        id: '160',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '92',
    html: `<p>Durante más de media hora estáis descendiendo por angostos breñales, hasta llegar a un pequeño desfiladero. Observas que la comitiva avanza muy relajadamente por el terreno, lo cual no deja de sorprenderte teniendo en cuenta el ataque que se ha producido hace apenas unas horas en el campamento. Los odres de vino van pasando de mano en mano y el propio Deilos, guía de la peculiar cuadrilla, parece más amigable que de costumbre. Dahzor está muy animado y el resto de compañeros tienen que frenarle para que no beba en exceso, se comporte y se mueva con algo más de sigilo. Tú prefieres mantenerte sereno y solo simulas beber, mojando apenas los labios en la boquilla cuando te pasan el cuero.</p>

    <p>Juzgas más oportuno mantenerte sobrio para lo que se pueda avecinar, ya sea un combate, una caza… o un nuevo encuentro con Tríane.</p>
  
    <p>Tras el paso por el desfiladero os encontráis con una loma guarnecida por frondosos álamos de ramas robustas y ancha copa. Los esbeltos y elegantes árboles forman un soto peculiar desde el cual se puede contemplar el resto del paisaje. Su aspecto majestuoso y sus hojas en forma de corazón te evocan los emplazamientos funerarios de tu infancia y las explanadas donde se realizan las ofrendas a los dioses. Desde este sugestivo lugar, y gracias a la refulgencia de las lunas de Tramórea, puedes ver cómo el terreno vuelve a descender muy suavemente por una vega sembrada con huertos. Divisas pequeños senderos que rodean los cercados. Al otro extremo del estrecho valle, la ladera vuelve a ascender y el horizonte queda recortado por un denso bosque que parece tan impenetrable como los muros de un castillo. Deilos se detiene y requiere con un dramático movimiento la atención de todo el grupo.</p>
  
    <p>—A partir de ahora, silencio absoluto. No queremos que nuestra presa nos descubra antes de tiempo.</p>
  
    <p>Bhratar y Tauldos intentan sofocar una risotada cubriéndose la boca con las manos. Dahzor decide tomar un último trago; Taifos pide permiso para orinar antes de entrar en acción y se adentra en el bosquecillo. El comportamiento de tus compañeros de aventura te parece bastante ridículo.</p>`,
    actions: [
      {
        id: '155',
        text: 'decides observar detalladamente el paisaje y los alrededores',
      },
      {
        id: '36',
        text: 'te excusas para aliviarte como Taifos y entras en el bosquecillo',
      },
    ],
  },
  {
    id: '93',
    html: `<p>Mientras espías la progresión del grupo, ratificas tu primera impresión; la cuadrilla avanza distendidamente por el terreno sin tomar ninguna precaución a pesar de lo ocurrido en el vivaque. Tú te mantienes alerta en todo momento, pensando además en la posibilidad de volver a ver a Tríane.</p>

    <p>Al espiar los movimientos del grupo, observas que los odres de vino se van pasando de mano en mano. Incluso el propio Deilos, el peculiar guía de la banda, echa un trago de vez en cuando y se muestra amigable con Dahzor, que parece el más animado del grupo. Da la sensación que es el que más bebe de todos, seguramente para paliar su nerviosismo y para poder integrarse mejor en el clan de Dedos.</p>
  
    <p>El grupo continúa su marcha mientras tú les vigilas desde una distancia prudente. Te ocultas en el borde del sendero y avanzas silenciosamente, aplicando las enseñanzas recibidas en la academia de Uhdanfiún. Oteas en las proximidades y cuidas tu retaguardia, atento por si aparecen rebeldes y algo emocionado al pensar en la posibilidad de volver a coincidir con Tríane.</p>
  
    <p>La expedición liderada por Dedos toma por un desfiladero que también desciende suavemente, dejando a un lado un enorme bosque. Receloso ante la posibilidad de una emboscada, extremas aún más las precauciones, pero tras un cuarto de hora aproximado y sin incidentes, ves cómo el grupo accede a una loma poblada por una frondosa alameda. El grupo hace una breve pausa cuando se dispone a abandonar el bosquecillo, divisando desde ese mismo lugar una bajada muy suave que desemboca en una vega sembrada con huertos. Al otro extremo del poblado la ladera asciende hasta un denso bosque que se erige majestuosamente. Desde esta distancia, parece impenetrable.</p>
  
    <p>Antes de que el grupo reanude la marcha, Deilos exige la atención de todos, gesticulando teatralmente. Puedes escuchar como advierte al grupo:</p>
  
    <p>—A partir de ahora, silencio absoluto. No queremos que nuestra presa nos descubra antes de tiempo.</p>
  
    <p>Observas a Bhratar y Tauldos, que sofocan risas cubriéndose la boca con ambas manos. Taifos pide permiso para orinar antes de entrar en acción y se adentra en el bosquecillo de álamos. La actitud de tus compañeros te resulta bastante irrisoria.</p>`,
    actions: [
      {
        id: '156',
        text: 'vigilas al grupo',
      },
      {
        id: '37',
        text: 'te mantienes oculto en el bosquecillo',
      },
    ],
  },
  {
    id: '94',
    html: `<p>—Apuesto que la aburrida guardia que acabas de hacer te habrá desvelado. Si te apetece hacer algo más emocionante ahora, te invitamos a que te unas a la banda para participar en… la cacería secreta.</p>

    <p>Deilos te habla entre susurros pero ha recalcado con énfasis sus tres últimas palabras. Te guiña el ojo con complicidad, sabiendo que también habrás escuchado rumores sobre la cacería secreta. A su lado está Merkar, otro de sus «admiradores», con el arco en la mano y la aljaba asomando por detrás de su espalda. Lleva las flechas envueltas en trapos, para evitar que hagan ruido al chocar entre sí.</p>
  
    <p>—¿Qué, te animas? —pregunta Merkar, impaciente—. Dahzor ya se está equipando y nos ha pedido que te esperemos para que te puedas apuntar con nosotros.</p>
  
    <p>Bhratar y Tauldos, el resto de la comitiva de Deilos, están más apartados, pasándose un odre que contiene vino, sofocando risas entre trago y trago.</p>`,
    actions: [
      {
        id: '117',
        text: 'aceptas la invitación para participar en la cacería secreta',
      },
      {
        id: '150',
        text: 'declinas la invitación argumentando cansancio',
      },
      {
        id: '178',
        text: 'rechazas la invitación a causa de la emboscada y el estado de Zarenyo',
      },
    ],
  },
  {
    id: '95',
    html: `<p>Desplazándote con el mayor sigilo, accedes hasta la loma donde se encuentra el grupo. Observas a Bhratar y Tauldos pasándose un bota de vino para apurar su contenido. Merkar está increpando a Dahzor para que no hable tan fuerte… da la sensación de que ha bebido un poco más de la cuenta.</p>

    <p>Te sigues acercando con cuidado, infiltrándote en la alameda y manteniéndote oculto. Desde tu posición divisas a Deilos, que reclama la atención de todo el grupo con un gesto teatral. Oyes perfectamente sus palabras:</p>
  
    <p>—A partir de ahora, silencio absoluto. No queremos que nuestra presa nos descubra antes de tiempo.</p>
  
    <p>Puedes ver y escuchar a Bhratar y Tauldos sofocar la risa cubriéndose la boca con ambas manos. Taifos pide permiso para orinar antes de entrar en acción y se adentra en el bosquecillo. Todo te resulta muy extraño.</p>
  
    <p>Te agachas para controlar los movimientos del grupo y atisbas a Taifos aliviarse de pie, algo más lejos, junto a un árbol.</p>
  
    <p>Desde tu posición puedes observar cómo la loma desciende luego suavemente hacia una vega sembrada con huertos. Un pequeño sendero rodea los cercados. Al otro extremo, la ladera vuelve a ascender y el horizonte queda recortado por un denso bosque que parece tan impenetrable como los muros de un castillo.</p>`,
    actions: [
      {
        id: '156',
        text: 'vigilas al grupo',
      },
      {
        id: '37',
        text: 'te mantienes oculto en el bosquecillo',
      },
    ],
  },
  {
    id: '96',
    html: `<p class="asangre"><i>Has solventado el enigma. Al igual que el rostro de la misteriosa mujer, las palabras que escuchas en tu mente son simétricas al colocar un eje horizontal en su centro. <i>EXHIBO</i> también cumple con esas condiciones y por lo tanto ésa es la respuesta correcta</i>.</p>

    <p>Avanzas con cautela hacia la joven, extendiendo las palmas hacia arriba para mostrarte afable e intentar no asustarla. Ella sigue mirándote con placidez y no aparenta inquietud. Al preguntarle cómo se llama, te contesta con voz clara y algo grave, sin delatar ningún temor:</p>
  
    <p>—Tríane… —y añade tras una breve pausa—: Tú no eres como los demás.</p>
  
    <p>Te parece que su voz está en armonía con el cuerpo que descubres al internarte entre las malezas. La suave túnica de lino que lleva desvela un físico tan hermoso como sus facciones.</p>
  
    <p>Te disponías a preguntarle qué está haciendo sola en este lugar apartado, pero su serenidad te ha desarmado por completo. Es ella quien toma la iniciativa y te revela con una voz que casi consigue hipnotizarte:</p>
  
    <p>—Eres noble y generoso. He visto cómo aprecias a tu compañero. Haz caso a tu instinto y desconfía de aquellos que intentan imponerte su criterio con autoridad. Tu capacidad y tu buen juicio deberían guiarte en esta difícil prueba. No me defraudes o seré implacable contigo.</p>
  
    <p>Al escuchar el aleteo del mochuelo que alza el vuelo a tu espalda, te giras inquieto. Cuando te das la vuelta para seguir hablando con Tríane, descubres que ya no está. Ha desaparecido sin hacer ruido.</p>`,
    actions: [
      {
        id: '24',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '97',
    html: `<p>El olor a sangre y sudor te revuelve las tripas. Tienes que hacer un esfuerzo para no vomitar ahí mismo. En el exterior, se empiezan a solapar gritos de alerta sobre el sonido del cuerno. Deilos y Dahzor salen de la cabaña en tromba, dejándote frente al enorme Taifos, que te maldice y se abalanza sobre ti con toda su furia, espalda en alto.</p>

    <p>Teniendo en cuenta que te dobla en tamaño y que es un Ibtahán de quinto grado como tú, vas a necesitar mucha suerte para salir airoso de este enfrentamiento.</p>`,
    random: true,
    actions: [
      {
        id: '107',
        text: 'Continuar',
      },
      {
        id: '116',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '98',
    html: `<p>Se mueve otra vez… y sale de su escondite. Apenas te atreves a respirar mientras lo observas.</p>

    <p>Un contorno encapuchado y bajito se desliza con movimiento felino para salir de las sombras. A la espalda lleva un arco corto y una aljaba con flechas, por encima de la capa. Por debajo, puedes ver que va muy desaliñado; una mezcla de pieles y harapos junto con unos calzones amplios y unas botas pequeñas y desgastadas. Para sujetar los pantalones lleva un cinto basto de soga, en el que cuelga una especie de cuerno de caza. Empiezas a sospechar que no se trata de una de esas criaturas que te imaginabas. Parece más bien un crío…</p>
  
    <p>Se acaba de girar para mirar en tu dirección. En un primer momento piensas que ha debido escuchar el sonido de tu corazón desbocado.</p>
  
    <p>Tiene el pelo largo y oscuro… o muy sucio. Su rostro es aniñado y dulce… como el de una chica.</p>
  
    <p>Está en tensión. Ha escuchado algo… o intuye tu presencia. Se inclina hacia delante para atisbar lo que se oculta entre penumbras. Sus ojos son de color azul intenso como el acero… ¡Y es una chiquilla!</p>
  
    <p>No le das tiempo a reaccionar y te abalanzas sobre ella sin que tenga tiempo a oponer resistencia.</p>
  
    <p>Con un bufido ahogado, cae de espaldas debido a tu impulso y el peso de tu cuerpo.</p>
  
    <p>Le aprisionas el brazo y el cuerpo con tus piernas, sentándote sobré su estomago. Te inclinas hacia delante y la examinas detenidamente. Debe tener unos trece o catorce años como mucho. Al mirarla con más detenimiento, te da la sensación que su aspecto mugriento oculta a una linda muchacha.</p>
  
    <p>Aunque en estos momentos su rostro refleja rabia y crispación.</p>`,
    actions: [
      {
        id: '202',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '99',
    html: `<p>El lobo de cresta blanca se acerca rápidamente junto al lobo negro y resopla. Tres de los lobos, inquietos, quieren reanudar la marcha, pero el lobo más grande ladra con gañidos entrecortados y la manada obedece, deteniéndose. El lobo negro se pone en guardia y puedes ver cómo se le eriza el pelo mientras gruñe en la misma dirección que antes. Puedes escuchar un ruido sordo a lo lejos, que parece acercarse. El gran lobo gruñe impaciente y los otros lobos empiezan a retroceder.</p>

    <p>En ese momento puedes percibir un olor muy raro, entre fétido y metálico.</p>
  
    <p>Intuyes un peligro inminente.</p>
  
    <p>La manada de lobos resopla y gruñe una vez más, plantándose delante de ti, dispuestos a afrontar lo que se acerca. Sea lo que sea, despide un olor cada vez más nauseabundo.</p>
  
    <p>El lobo más grande, situado en el centro, se gira de repente hacia ti y te ladra con fiereza, mostrando sus fauces afiladas.</p>
  
    <p>Te está ahuyentando para que huyas de este lugar. Algo se aproxima a toda velocidad y con pésimas intenciones. Y por la reacción de esos fieros animales deduces que solo se puede tratar de una bestia muy particular: un corueco.</p>`,
    actions: [
      {
        id: '52',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '100',
    html: `<p>Parece una aberración, pero todo lo que ha ocurrido hasta ahora y la sinceridad de sus palabras… Tienes la intuición que dice la verdad. No sabes qué contestar. Te sientes indignado; a duras penas logras contener tu ira. Todos tus recelos hacia Deilos se intensifican creando el retrato de un individuo execrable cuya maldad ya había aflorado en otras ocasiones. Tus presentimientos sobre él estaban fundados.</p>

    <p>—Te ayudaré a detenerlos.</p>
  
    <p>—Me alegra oír eso.</p>
  
    <p>El pequeño bulto enfunda su arco y sale del escondite. Lleva puesta la capucha y empieza a reptar para seguir avanzando sin perder de vista al grupo. Cuando consigues verle por fin la cara te das cuenta de que… ¡Es una chiquilla!</p>
  
    <p>Su voz ronca no se corresponde a su edad. Es bajita. Debe tener unos catorce años, como mucho. Por debajo de la capa viste muy desaliñada. Con pieles, harapos y unas calzas que le vienen anchas, sujetas con un cinto de soga basto del que cuelga una especia de cuerno de caza. Su pelo es largo y oscuro… o muy sucio. El arco corto y la aljaba con flechas le sobresalen por ambos lados de la espalda.</p>
  
    <p>Su mirada es fría e intensa; sus ojos azules como el acero te desafían.</p>
  
    <p>—Creo que se dirigen a aquella cabaña —te susurra, señalándote una choza algo más alejada que está situada sobre una pequeña loma con huertos y una tapia por la parte que da al bosque.</p>
  
    <p>Al mirarla con más detenimiento, te da la sensación que su aspecto mugriento oculta a una linda muchacha.</p>
  
    <p>—Es la más aislada. Tiene sentido.</p>
  
    <p>Os ponéis en marcha para recuperar la distancia que os separa del grupo.</p>`,
    actions: [
      {
        id: '47',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '101',
    html: `<p>Encaráis el estrecho prado rodeado de enormes árboles erguidos como un solemne baluarte. Al avanzar por la pradera podéis notar esa fragancia acaramelada que flota en el aire. Ya habéis franqueado el claro y os enfrentáis de nuevo al bosque cuando de pronto escucháis unos gruñidos roncos que se aproximan. En la oscuridad del bosque en el que os disponíais a entrar, veis moverse unas sombras de animales salvajes. Los destellos de unos ojos rojizos les delatan cuando os están observando. Habéis contado tres, quizá cuatro criaturas.</p>

    <p>Dos de ellos se adelantan y se dibujan en el prado, gruñendo en tono bajo e intenso. Son lobos enormes, de aspecto terrible y feroz. El más grande tiene un pelaje de color plomizo, con una cresta blanca sobre el lomo. Se desplaza con lentitud. Sin dejar de gruñir, describe un círculo a vuestro alrededor a la vez que os observa.</p>
  
    <p>La muchacha tensa su arco cargado y cruza la mirada con el jefe de la manada. El lobo de cresta blanca reacciona muy rápidamente, encogiendo el morro y mostrando su feroz dentadura un instante, acobardando a la muchacha en el acto.</p>
  
    <p>Un tercer lobo surge de la oscuridad y se mueve con sigilo hacia el otro lado descubierto. Os están rodeando. El enorme lobo gris se acerca a vosotros gruñendo levemente.</p>`,
    actions: [
      {
        id: '53',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '102',
    html: `<p>En ese momento sucede algo inesperado. Cuatro lobos enormes han saltado por encima del declive y plantan cara ferozmente al grupo de Deilos. El más grande de todos tiene un pelaje gris plomizo y una cresta blanca encima del lomo. Escucháis voces de desconcierto y temor.</p>

    <p>Ambos los habéis reconocido; ella mira fascinada por un instante la manada que os está salvando. Tú oteas los alrededores y de pronto la descubres, serena y sonriente, observándote detrás la maleza: es Tríane. Te hace un gesto explícito y tú tiras de la muchacha para seguir huyendo.</p>
  
    <p>Te acabas de convertir en un forajido y un rebelde. Pero podrás vivir más aventuras en el reino de Tramórea… y probablemente lo harás en buena compañía. Quizá lo mejor sea ir a Ritión por un tiempo. Esconderse junto al mar siempre resulta más agradable. Zarenyo te recomendó unos lugares preciosos que había por allí y a lo mejor hasta te puede dar cobijo si le cuentas lo ocurrido esta noche.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: 'inicio',
        text: 'Ir al principio',
      },
    ],
  },
  {
    id: '103',
    html: `<p>Recorres en silencio el sendero que lleva hacia el campamento. Faltan pocas horas para que amanezca. Cuando vislumbras a lo lejos vuestro vivaque, empiezas a reducir el paso. A medida que te acercas al perímetro exterior del campamento, aumenta tu recelo…</p>

    <p>Entonces la vuelves a ver. Pelo negro, ojos rasgados, mirada serena. Es Tríane.</p>
  
    <p>—Esperaba mucho más ti, muchacho. Podrías haberlo hecho mucho mejor. Pero te mereces saber la verdad. Sígueme.</p>
  
    <p>Te gustaría confiar en ella, para calmar tu ira y tu frustración. Pero también tienes sed de venganza y justicia.</p>`,
    actions: [
      {
        id: '29',
        text: 'decides seguir a Tríane',
      },
      {
        id: '193',
        text: 'decides perseguir al grupo',
      },
    ],
  },
  {
    id: '104',
    html: `<p>Recorréis en silencio el sendero que lleva hacia el campamento. Faltan pocas horas para que amanezca. Cuando vislumbras a lo lejos vuestro vivaque, empiezas a reducir el paso. Ella te coge de la mano.</p>

    <p>—¿Estás seguro que quieres regresar con ellos?</p>
  
    <p>Su pregunta te hace dudar y afloran a tu mente extraños presentimientos.</p>
  
    <p>Asientes con la cabeza, no muy convencido.</p>
  
    <p>—Entonces, adiós.</p>
  
    <p>La muchacha te abraza una vez más, apretándote un poco más entre sus delgados brazos y antes de soltarte, te da un suave beso en los labios.</p>
  
    <p>Reanudas la marcha y adviertes cómo ella permanece en el camino, contemplando cómo te alejas.</p>
  
    <p>A medida que te acercas al perímetro exterior del campamento, aumenta tu recelo…</p>`,
    actions: [
      {
        id: '58',
        text: 'entras decidido hasta la tienda de los maestros',
      },
      {
        id: '177',
        text: 'prefieres infiltrarte sigilosamente',
      },
    ],
  },
  {
    id: '105',
    html: `<p>—Detente —le dices colocando tu kisha en su cuello.</p>

    <p>Tu voz ha sonado muy tranquila a pesar de que tengas un sabor pastoso en la boca… con regusto a sangre.</p>
  
    <p>Deilos intenta moverse pero presionas la punta de tu espada contra su cuello, haciéndole un ligero corte que empieza sangrar lentamente. Vuestras miradas se cruzan y puedes ver el pánico reflejado en sus ojos.</p>
  
    <p>—¡Huye niña! —le gritas a la chica.</p>
  
    <p>En ese momento, notas otro aguijonazo, esta vez sobre tu esternón. Bajas la mirada un instante. Merkar te ha clavado otra flecha. Una sombra imponente se acerca. Es Taifos, espada en mano, que te contempla atónito, como si no se pudiera creer lo que está viendo. Detrás de él, Merkar recarga su arco por tercera vez.</p>
  
    <p>Ahora Deilos tiene cogida a la chiquilla por el cuello, que se debate aterrorizada, intentando escapar. Todo se está desvaneciendo a tu alrededor y la oscuridad se cierne rápidamente sobre ti. Lo último que escuchas es la voz de Deilos:</p>
  
    <p>—Voy a divertirme con tu nueva amiga, cretino. Taifos, carga con este imbécil y ocultémonos rápido cerca de ese bosque. Puede que su cuerpo nos sirva todavía…</p>
  
    <p>Te parece escuchar el gruñido de unos lobos a tu espalda, pero estás convencido de que son alucinaciones. Empiezas a tiritar y percibes como se amortiguan los sonidos y las imágenes. Has muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: 'inicio',
        text: 'Ir al principio',
      },
    ],
  },
  {
    id: '106',
    html: `<p>Lo cierto es que el lugar es inquietante, y a pesar de que intentas no perder de vista los confines del bosque, la lúgubre presencia de la frondosidad que os rodea impide que puedas tener un punto de referencia, por lo que temes perder el sentido de la orientación en cualquier momento.</p>

    <p>Después de andar un rato, cuando pensabais que resultaba imposible avanzar, se abre un camino entre la espesura sin previo aviso. A vuestra derecha veis un ligero declive que baja hacia un arroyo. A vuestra izquierda, un pequeño prado que despide un aroma penetrante y dulzón. La chiquilla se acerca al arroyo para saciar su sed y al hacerlo, se alzan desde la orilla destellos diminutos de varios colores, entre los cuales predomina el verde. A los brillos fosforescentes se les une un sutil zumbido, parecido al de un canturreo, que rodea a la muchacha. Son luznagos, contribuyendo a darle al extraño lugar un aspecto todavía más fantasmagórico. Tú también te acercas para beber y juntas las manos para tomar agua del regato.</p>`,
    actions: [
      {
        id: '180',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '107',
    html: `<p>Todavía estás conmocionado por la dantesca escena que has contemplado y no consigues reaccionar a tiempo; notas que la hasha del arma de Taifos se abre paso entre tu hombro y tu cuello, seccionándote la carótida de cuajo.</p>

    <p>Te derrumbas como un títere al que le han cortado los hilos, junto al cuerpo de una mujer semidesnuda a la que han mutilado de manera execrable.</p>
  
    <p>Taifos te escupe al pasar junto ti. Deilos entra de nuevo y te susurra al oído antes de marchar:</p>
  
    <p>—Tú no eres Derguín, pelele.</p>
  
    <p>Sientes que un irresistible sueño te invade. Y notas frío, mucho frío. Te estás desangrando… hasta que mueres.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: 'inicio',
        text: 'Ir al principio',
      },
    ],
  },
  {
    id: '108',
    html: `<p>Te tumbas para espiar los movimientos de Deilos y los otros. Estás hecho un lío, pero le contestas:</p>

    <p>—Si es verdad todo lo que me has dicho, atajaremos esta barbaridad.</p>
  
    <p>Las seis figuras se desplazan agazapadas por los huertos.</p>
  
    <p>La chiquilla se echa a tu lado y estudia los movimientos del grupo.</p>
  
    <p>—Yo creo que se dirigen allí.</p>
  
    <p>Señala una choza aislada que se alza sobre un pequeño montículo. Al frente tiene un huerto bastante amplio, y detrás un poco más de terreno tapiado que colinda con la pradera que sube hacia el bosque.</p>
  
    <p>—Es la que queda más apartada.</p>
  
    <p>Empezáis a reptar hacia la tapia de la cabaña sin perder de vista al grupo. Cuando estáis a punto de llegar, puedes ver como los otros se detienen frente al sendero que lleva a la cabaña. Tenía razón la muchacha. Reconoces a Deilos, dando instrucciones para que los integrantes del grupo tomen posiciones. Os colocáis detrás de la tapia.</p>
  
    <p>En tu cabeza retumban unas palabras y escuchas la voz de Tríane diciéndote: «Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…».</p>
  
    <p>Deilos y el corpulento Taifos están junto a la puerta del cercado. Se disponen a franquear el huerto.</p>`,
    actions: [
      {
        id: '196',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '109',
    html: `<p>El hedor se acentúa hasta ser insoportable. Colocas a la muchacha detrás de ti, encarando lo que se acerca y esperas con todos los músculos en tensión.</p>

    <p>Escuchas cómo las ramas de los árboles crujen a su paso, cuando una mole sombría y enorme se planta delante de vosotros. Es mucho más grande y ancho que el lobo gris con el que estabais hace un rato… y mucho más aterrador. Tiene un tronco amplio y corvado que impresiona. Sus patas traseras son pequeñas pero vigorosas, y contrastan con unos largos brazos sobre los que se apoya. Tiene una cabeza monstruosa culminada por una especie de cornamenta huesuda. Distingues unos perversos ojos amarillos que te miran con crueldad.</p>
  
    <p>—Cuando se disponga a atacar, sal corriendo y busca una salida. Yo lo entretendré… aunque no sé por cuánto tiempo.</p>
  
    <p>Has decidido entrar en primera aceleración y pronuncias mentalmente la secuencia de letras y números; notas una fuerte tirantez en tus riñones así como una oleada de calor que se filtra por todo tu cuerpo.</p>
  
    <p>El corueco se prepara para el combate, a todas luces desigual. No has desenvainado la espada a propósito, para darle más confianza. Esperas poder realizar un Yagartéi cuando salte sobre vosotros, exprimiendo tu aceleración para intentar atacar su único punto débil: el abdomen.</p>
  
    <p>Ves como el corueco tensa sus patas traseras; una flecha silba junto a tu oído y se estrella contra su pecho, rebotando con un ruido metálico.</p>
  
    <p>El corueco se dispone a saltar sobre vosotros.</p>
  
    <p>—¡Vete! —Le gritas a la chica.</p>`,
    random: true,
    actions: [
      {
        id: '22',
        text: 'Continuar',
      },
      {
        id: '176',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '110',
    html: `<p>El olor se intensifica delante tuyo.</p>

    <p>Afianzas tu posición y sujetas tu espada con ambas manos.</p>
  
    <p>Una forma grande y oscura se abre paso entre los árboles; es mucho más grande que un jabalí, incluso más que un oso también. Se planta frente a ti resoplando gravemente. Tiene un amplio tórax abombado y se apoya sobre unos brazos largos; sus piernas son más bien cortas, aunque muy musculosas. Su enorme cabeza está coronada por una cresta de hueso bajo la cual brillan unos pérfidos ojos amarillos.</p>
  
    <p>Has decidido entrar en primera aceleración y pronuncias mentalmente la secuencia de letras y números; al momento notas cómo tus riñones se tensan y un calor intenso se propaga por todo tu cuerpo. El corueco se inclina hacia delante. Tú hincas una rodilla en el suelo y envainas tu espada, manteniendo ambas manos en la empuñadura, preparando tu próximo movimiento. Intentarás realizar un Yagartéi aprovechando tu velocidad para buscar su único punto débil; el abdomen.</p>
  
    <p>Las patas traseras se tensan. El corueco se abalanza sobre ti.</p>`,
    random: true,
    actions: [
      {
        id: '23',
        text: 'Continuar',
      },
      {
        id: '173',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '111',
    html: `<p>Te ha parecido advertir una sombra o algo desplazándose por tu campo de visión periférico. Te tumbas con cuidado y te arrastras con suma lentitud para tomar posición y vigilar ese punto. Es al otro extremo del prado, en la ladera que trepa hacia el espeso y intimidatorio bosque. No ves nada… y tras una pausa te dispones a retomar la marcha… Pero ¡algo pequeño se ha vuelto a mover entre aquellas sombras de manera casi imperceptible!</p>

    <p>Observas en silencio, agazapado contra el suelo, al igual que un tigre espiando a su presa. En la lontananza, una pequeña figura se vuelve a agitar, ocultándose de nuevo entre la maleza. Si no hubieses fijado la mirada serías incapaz de detectarla.</p>
  
    <p>Alguien o algo está moviéndose en paralelo al grupo. Y por lo que parece, sea quien sea, está solo.</p>`,
    actions: [
      {
        id: '16',
        text: 'te dispones a rodearlo y sorprenderlo por tu cuenta',
      },
      {
        id: '28',
        text: 'avisas al grupo discretamente',
      },
    ],
  },
  {
    id: '112',
    html: `<p>—Zarpa.</p>

    <p>Das un paso atrás y desenfundas tu espada. A tu espalda la muchacha ha soltado la cuerda de su arco y una flecha se dirige sobre el lobo negro que da un ágil salto para intentar esquivarla y emite un gañido quejumbroso cuando el proyectil le roza el lomo y le hiere.</p>
  
    <p>En ese momento todos los lobos están ladrando y saltando a vuestro alrededor con actitud amenazadora. El gran lobo de cresta blanca se encara a ti y encoge los morros enseñándote sus terribles fauces.</p>
  
    <p>La muchacha intenta apuntar para ahuyentar a otra bestia pero todos se mueven velozmente a su alrededor y le resulta muy difícil apuntar. Los dos habéis retrocedido instintivamente y vuestras espaldas se están tocando.</p>
  
    <p>De pronto el lobo negro levanta el hocico. Parece que olfatea el aire y profiere un corto aullido apenas audible. El lobo de cresta blanca, gira velozmente el tronco hacia ese lado y resopla.</p>
  
    <p>Inesperadamente, los cuatro lobos que os están rodeando dan media vuelta y salen corriendo.</p>
  
    <p>—Los hemos asustado, dice la chiquilla. Vaya suerte.</p>
  
    <p>—Me parece que no —contestas en tono circunspecto.</p>
  
    <p>Percibes un nuevo olor, nauseabundo y metálico.</p>
  
    <p>—Creo que algo peor se acerca, atraído por el olor de la sangre: un corueco.</p>`,
    actions: [
      {
        id: '109',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '113',
    html: `<p>—Nos tendremos que apresurar —comenta Linar—. Sígueme.</p>

    <p>Linar te precede corriendo por el bosque, recorriendo un camino que se te antoja inexistente. A duras penas puedes seguirle y temes que vas a perder toda la energía que habías recuperado en esta alocada carrera.</p>
  
    <p>—Tenemos que ir más rápido —inquiere Linar en voz baja y sorda—, apenas te queda tiempo. Agárrate a mi capa.</p>
  
    <p>Linar dobla el paso y estás a punto de tropezar pero el mago te coge de la mano y sigue acelerando… hasta que sus pies se levantan del suelo arrastrándote con él. Su levitación os lleva hasta uno de los lindes de Corocín. Te has quedado totalmente alucinado con la experiencia y no consigues articular una palabra.</p>
  
    <p>Reconoces el final del camino que empezaba en un desfiladero y observas cómo al final del monte se adivinan unos pequeños pagos, rodeados por huertos.</p>
  
    <p>Linar señala a lo lejos una pequeña choza más apartada, sobre una pequeña loma.</p>
  
    <p>—Allí.</p>
  
    <p>Alcanzas a ver unas sombras que se acercan a una cabaña por el camino opuesto que debes recorrer. Cuentas las figuras: cuatro, cinco… y seis. Son ellos, efectivamente.</p>
  
    <p>—Nuestros caminos se separan aquí —te dice Linar con voz grave—. Yo regreso a mi santuario. Confío en que sabrás afrontar esta situación con el mismo coraje que tuviste frente al corueco en Corocín. Y espero que tengas la misma suerte. Adiós muchacho.</p>
  
    <p>Linar se interna en el bosque y desaparece en la tupida arboleda.</p>`,
    actions: [
      {
        id: '160',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '114',
    html: `<p>La ayudas a incorporarse cogiéndola por el antebrazo.</p>

    <p>—Si lo que dices es cierto, haremos lo necesario —contestas.</p>
  
    <p>Has localizado de inmediato las seis figuras camufladas que siguen bordeando los huertos y ocultándose tras los cercados.</p>
  
    <p>La chiquilla se ha colocado a tu lado y te observa de soslayo sin perderlos de vista tampoco.</p>
  
    <p>—Vas muy bien equipado. Camuflado, con arco y espada… ¿Eres un montaraz o un rebelde? Por si no lo sabes, no se permite la posesión de ese tipo de armas por aquí.</p>
  
    <p>Toda tu atención se ha centrado en las oscuras siluetas de tus compañeros que se mueven a lo lejos. Unas palabras retumban en tu mente, y te parece escuchar la voz de Tríane diciéndote: «Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…».</p>
  
    <p>—Ya haremos las presentaciones más tarde. Ahora tenemos que prestar atención y vigilar lo que ese grupo pueda hacer.</p>
  
    <p>Retomáis la marcha, recuperando terreno sobre el grupo para poneros casi a su altura, separados por los huertos y las cabañas de los campesinos.</p>`,
    actions: [
      {
        id: '15',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '115',
    html: `<p>Dejas caer el arco y desenvainas tu espada, dispuesto a afrontar a Deilos.</p>

    <p>Ves cómo la chiquilla se mueve lentamente para cargar su arco y disparar.</p>
  
    <p>Adoptas una postura de defensa esperando su ataque; escuchas voces de alarma que provienen de las diferentes chozas.</p>
  
    <p>Deilos se lanza sobre ti gritando y lanzando un tajo a la altura de tu cabeza; detienes su hasha con tu acero ejecutando una parada vertical a la altura de los hombros. La inercia de su movimiento le atrae hacia tu lado izquierdo y aprovechas su impulso para girar sobre tus talones y propinarle un codazo en el cuello que le arranca un gruñido de dolor, haciéndole caer hacia delante.</p>
  
    <p>Recupera su equilibrio rápidamente y al levantarse se percata de la presencia de la chiquilla que ya se dispone a tensar el arco. Su aceleración le permite armar el brazo antes de que ella pueda disparar y se dispone a darle un tajo, pero tú ya te has colocado a su lado opuesto y le propinas una patada con todas tus fuerzas que le proyecta hacia el suelo de nuevo.</p>
  
    <p>—¡Huye niña! —le gritas a la chica sin perder de vista a Deilos.</p>`,
    actions: [
      {
        id: '26',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '116',
    html: `<p>Tu instinto de guerrero prevalece. Te ladeas imperceptiblemente arrodillándote al tiempo que colocas tu espada cruzada frente a ti. La carga del bruto de Taifos no encuentra oposición y pierde el equilibrio hacia delante, con tu espada trabándole las piernas; tropieza y sale rodando aparatosamente al exterior de la cabaña. Cuando se levanta, apenas tiene unos rasguños por la caída, pero está furioso. Tú estás saliendo de la cabaña, con la espada en alto, preparado para el combate.</p>

    <p>Deilos estira a Taifos del brazo, gritándole:</p>
  
    <p>—¡Nos tenemos que ir de aquí ahora mismo! ¡Ya ajustaremos cuentas con él más tarde! ¡Vamoooos!</p>
  
    <p>El grupo sale huyendo y se pierde por el camino que lleva hacia el desfiladero.</p>
  
    <p>La chiquilla te está llamando desde la tapia para que te reúnas con ella.</p>`,
    actions: [
      {
        id: '02',
        text: 'decides seguir a la muchacha para huir hasta los lindes del bosque',
      },
      {
        id: '126',
        text: 'decides perseguir al grupo',
      },
    ],
  },
  {
    id: '117',
    html: `<p>A pesar de ser uno de los mejores alumnos de Udhanfiún, Deilos no te cae muy bien. Sus modales altaneros, su trato despectivo y su comportamiento cruel te desagradan, por lo que has evitado relacionarte con él, evitando sus propuestas e invitaciones hasta hoy.</p>

    <p>Ignoras en qué consiste la cacería secreta, pero tienes curiosidad por saber lo que hay de cierto en todos esos rumores que has escuchado: enfrentamientos con criaturas fantásticas, descubrimiento de lugares desconocidos, encuentros sorprendentes…</p>
  
    <p>Por otra parte, también piensas en la posibilidad de volverte a encontrar con Tríane…</p>
  
    <p>Esa breve cavilación te acaba de convencer, de modo que aceptas acompañarlos.</p>
  
    <p>Analizas lo que llevan tus compañeros y optas por equiparte a conciencia: además de tu espada, coges prestado el arco y las flechas de Zarenyo. El grupo se empecina para que también realices el ritual de camuflaje, por lo que te tiznas con la madera carbonizada que te pasa Dahzor, compartiendo risas ahogadas con el resto del grupo, intentando evitar que os oigan vuestros compañeros de campamento.</p>
  
    <p>Deilos encabeza el grupo e inicia la marcha bajo las tres lunas de Tramórea que proporcionan una luz mágica a esta noche tan especial. Salís del refugio a hurtadillas.</p>`,
    actions: [
      {
        id: '92',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '118',
    html: `<p>Optas por tener una veloz «reacción» y seguir de cerca al grupo, para no perderte lo que parece va a ser el desenlace de la cacería secreta. Dejas a un lado el encapuchado, que por el tamaño debe ser un niño y sin pensarlo un segundo más, saltas la tapia.</p>

    <p>Al rato alcanzas la parte trasera de la choza… ya puedes ver cómo el grupo está acercándose a la puerta de la choza.</p>
  
    <p>Algo no encaja en esta escena; se supone que no hay gallinas ni ganado en la cabaña.</p>
  
    <p>Reconoces la recia figura de Taifos por su corpulencia y ves como se adelanta a sus compañeros. De pronto, se abalanza sobre la puerta derribándola con el hombro mientras desenvaina el arma, introduciéndose en el interior.</p>
  
    <p>Escuchas golpes y gritos ahogados en la cabaña.</p>
  
    <p>Deilos y Dahzor también entran y tan solo Merkar se queda fuera en posición alerta, con su arco cargado, tensando la cuerda desde la cintura.</p>`,
    actions: [
      {
        id: '172',
        text: 'corres hacia la entrada gritando que se detengan',
      },
      {
        id: '20',
        text: 'corres hacia la entrada en silencio',
      },
    ],
  },
  {
    id: '119',
    html: `<p>La muchacha baja el arco y devuelve su flecha a la aljaba con suma lentitud, mientras se acerca hasta tocarte. No parece muy convencida por tus palabras pero ha decidido hacerte caso.</p>

    <p>El formidable lobo gris de cresta grande avanza hacia ti con cuidado. Os miráis fijamente y percibes una extraña sabiduría que te proporciona confianza. Un vaho templado sale de su hocico cuando resopla, cada vez más cerca. Dos lobos se han posicionado a cada lado y el tercero se pone detrás. La chiquilla se arrima todavía más a ti. El lobo gris, que sin lugar a dudas es el jefe de la manada, gira lentamente hasta darte la espalda y empieza a caminar hacia el bosque.</p>
  
    <p>—Tenías razón… nos están llevando a alguna parte —admite la chiquilla mientras se vuelve a guardar el arco a la espalda—. Espero que sea para sacarnos de aquí.</p>
  
    <p>La manada empieza a trotar a paso más ligero, como si hubiese comprendido los deseos de la chica. Eso os obliga prácticamente a correr, por la diferencia de tamaño. Al cabo de quince minutos, tu compañera está agotada y se agarra a tu cinturón para no desfallecer. Te gustaría pedirle al lobo gris el hacer una pequeña pausa para que se recuperara, pero su tamaño te impresiona y sospechas que no le gustaría que lo agarrases por la cola para detenerlo, aunque la tengas al alcance de la mano. La muchacha empieza a jadear ruidosamente y ya te planteas parar (aunque no sabes cómo), cuando de pronto el lobo negro que está a tu lado se detiene bruscamente y emite un bufido ronco, en actitud vigilante hacia su flanco descubierto.</p>`,
    actions: [
      {
        id: '45',
        text: 'Continuar',
      },
    ],
  },
  {
    id: '120',
    html: `<p>El enorme lobo de cresta grande se acerca hasta el punto que puedes notar el calor de su aliento cuando bufa al pasar a tu lado. Los tres lobos restantes se han situado a tu alrededor; uno a cada lado y el tercero detrás. El lobo más grande se coloca delante de ti, dándote la espalda y emprende un trote ligero al mismo tiempo que los otros animales también se ponen en marcha. Eso te obliga prácticamente a correr, por la diferencia de tamaño. Durante un cuarto de hora lleváis ese ritmo y empiezas a acusar el cansancio. Te planteas seriamente avisar al gran lobo para reducir la marcha, pero te da mucho respeto su tamaño y no te parece que le vaya a hacer gracia que le agarres por la cola para frenarlo, aunque la tengas al alcance de tu mano.</p>

    <p>De repente, el lobo negro que trota a tu lado izquierdo emite un gruñido y se pone en alerta mirando hacia su flanco descubierto. Todos se detienen. El lobo negro levanta el hocico. Parece que olfatea el aire y profiere un corto aullido apenas audible.</p>`,
    actions: [
      {
        id: '99',
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
