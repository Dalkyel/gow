// ═══════════════════════════════════════════════════════
// NODES — God of War: Novelization + Videojuego
// Capítulo 1
// ═══════════════════════════════════════════════════════

const nodes = [

    // ── ROOT ───────────────────────────────────────────
    {
        id: 'root', label: 'God of War', group: 'CENTER', type: 'Obra — Centro',
        desc: 'Nodo raíz del mapa mental. Cubre tanto la novelización oficial de God of War (2018) como el videojuego homónimo de Santa Monica Studio. El capítulo 1 introduce a Kratos y Atreus en una cacería en los bosques de Midgard, estableciendo la dinámica central padre-hijo y la tesis temática de la obra: la tensión entre la naturaleza violenta heredada y la posibilidad de cambio.',
        star: '★★★ La obra funciona en dos registros simultáneos: el del videojuego como experiencia interactiva, y el de la novelización como texto literario que profundiza la psicología de los personajes, en especial la voz interior de Atreus y los pensamientos no verbalizados de Kratos.'
    },

    // ── CATEGORÍAS ─────────────────────────────────────
    {
        id: 'cat-personajes', label: 'Personajes', group: 'CAT', type: 'Categoría',
        desc: 'Personajes presentados o referenciados en el Capítulo 1.',
        star: ''
    },
    {
        id: 'cat-mundo', label: 'Mundo', group: 'CAT', type: 'Categoría',
        desc: 'Lugares, geografía y cosmología nórdica que conforman el escenario de la historia.',
        star: ''
    },
    {
        id: 'cat-trama', label: 'Trama Cap. 1', group: 'CAT', type: 'Categoría',
        desc: 'Eventos y escenas que componen el arco narrativo del Capítulo 1.',
        star: ''
    },
    {
        id: 'cat-temas', label: 'Temas', group: 'CAT', type: 'Categoría',
        desc: 'Temas, motivos y ejes thématicos que el Capítulo 1 establece para toda la obra.',
        star: ''
    },
    {
        id: 'cat-criaturas', label: 'Criaturas', group: 'CAT', type: 'Categoría',
        desc: 'Seres mitológicos y bestias que pueblan el mundo de God of War.',
        star: ''
    },
    {
        id: 'cat-videojuego', label: 'Videojuego', group: 'CAT', type: 'Categoría',
        desc: 'Contexto, mecánicas y datos provenientes del videojuego God of War (2018) de Santa Monica Studio.',
        star: ''
    },

    // ── KRATOS ─────────────────────────────────────────
    {
        id: 'kratos', label: 'Kratos', group: 'KRATOS', type: 'Personaje — Protagonista',
        desc: 'El Dios de la Guerra espartano, conocido en Grecia por sus hazañas y su violencia cataclísmica. En esta nueva vida nórdica intenta dejar atrás su pasado. Físicamente imponente: piel ceniciento-blanca (producto de las cenizas de su familia cubriéndolo eternamente), ojos gris acerado en llamas, tatuajes escarlata en torso, cráneo y ceja izquierda, pauldron de cuero de tres capas en el hombro derecho, vendas decoloradas cubriendo ambos antebrazos. Barba castaña espesa y recortada. En el Cap. 1 dirige la cacería con órdenes secas, explota de ira cuando Atreus dispara antes de tiempo, pero se obliga a frenar conscientemente: «Necesitaba controlar su ira. Estaba tratando con un niño.» Rara vez hace contacto físico con el hijo — cuando lo hace (guiando la mano del cuchillo) es un gesto de significado máximo. Habla de manera lacónica y directa; cada instrucción de caza es también una filosofía de vida.',
        star: '★★★ Kratos no es el berserker griego de los títulos anteriores: es un hombre tratando activamente de ser mejor padre de lo que fue. La novela externaliza su lucha interior: «Se forzó a detenerse. Necesitaba revisar su ira.» El lector/jugador ve el esfuerzo — y eso lo humaniza radicalmente.'
    },
    {
        id: 'kratos-apariencia', label: 'Apariencia de Kratos', group: 'KRATOS', type: 'Descripción Física',
        desc: 'Piel gris-blanca como nubes. Ojos grises ardiendo. Tatuajes escarlatas en torso como resultado de una pincelada ancha — también en el cráneo rapado y cruzando la ceja izquierda, que se fruncen con la ira. Pauldron de cuero de tres capas protegiendo el hombro derecho; torso por lo demás sin ropa. Vendas decoloradas en ambos antebrazos. Barba castaña espesa recortada.',
        star: '★ Los vendajes en los antebrazos ocultan las cadenas de las Blades of Chaos — símbolo permanente de su pasado griego. Visualmente presentes pero deliberadamente tapados: metáfora de la represión de su naturaleza.'
    },
    {
        id: 'kratos-filosofia', label: 'Filosofía de Kratos', group: 'KRATOS', type: 'Rasgo — Ideología',
        desc: '«Solo dispara cuando yo te diga que dispares.» / «No te disculpes. Sé mejor.» / «Demorar lo que debe hacerse solo invita al problema.» Kratos enseña con aforismos duros pero funcionales: la precisión sobre el entusiasmo, la acción sin demora, la brutalidad como misericordia (el golpe de gracia es un acto de compasión, no de crueldad). Su pedagogía contrasta directamente con la de Faye, que era alentadora y perdonadora. Kratos no enseña cómo sentirse — enseña cómo actuar.',
        star: '★★ Su máxima más reveladora: «Es simplemente un objetivo. Vacía tu mente.» — instrucción de combate que es también su estrategia emocional de supervivencia. Atreus la rechaza internamente, que es su primera acto de resistencia al modelo paterno.'
    },
    {
        id: 'kratos-pasado', label: 'Pasado Griego de Kratos', group: 'KRATOS', type: 'Lore — Trasfondo',
        desc: 'En Grecia, Kratos fue el Dios de la Guerra espartano, esclavizado por Ares, responsable de la muerte de su primera esposa Lysandra e hija Calliope (engañado por Ares). Masacró el Olimpo. Mató a Zeus. Las cenizas de Lysandra y Calliope fueron fundidas en su piel por las Parcas como castigo, dando a su piel el color blanco-gris permanente. Llegó al norte (mundo nórdico) buscando un comienzo nuevo, donde conoció a Faye (Laufey la Justa), con quien tuvo a Atreus. En el Cap. 1 este pasado no es explicado explícitamente pero su peso es visible: los vendajes, la contención emocional, la negativa a expresar afecto abiertamente.',
        star: '★★★ Lore crítico para comprender a Kratos en esta nueva saga: ha perdido una familia antes por su propia violencia. Su dureza con Atreus no es indiferencia — es terror de repetir el pasado.'
    },
    {
        id: 'tatuajes-kratos', label: 'Tatuajes Escarlatas', group: 'KRATOS', type: 'Objeto — Símbolo',
        desc: 'Franjas rojas amplias que recorren el torso de Kratos como el resultado de una pincelada de mano ancha; una similar cruza su cráneo rapado y la ceja izquierda. Se describen como si burbujearan de ira cuando está enojado. Marca visual de su identidad espartano-divina. En la lore expandida, el rojo remplazó el gris de las cenizas en su rostro (la «pintura de guerra» roja que Kratos aplicó sobre su piel ceniza).',
        star: '★ Detalle visual de caracterización: los tatuajes «se fruncen de ira» — la novela anima la iconografía del personaje.'
    },
    {
        id: 'vendajes-kratos', label: 'Vendajes de los Antebrazos', group: 'KRATOS', type: 'Objeto — Símbolo',
        desc: 'Vendas decoloradas que cubren ambos antebrazos de Kratos. En la novelización se mencionan como parte de su descripción física sin mayor explicación en el Cap. 1. En el lore del videojuego cubren las cadenas grabadas en sus muñecas — las marcas permanentes de las Blades of Chaos, armas de su era griega que Ares le impuso y que no pueden ser removidas. Son el símbolo físico más elocuente de su pasado que no puede borrar.',
        star: '★★★ Ocultar las cadenas = ocultar quién fue. Enseñar a Atreus a cazar sin armas divinas = intentar ser padre sin ser el Dios de la Guerra. El ocultamiento es voluntario y cotidiano — un esfuerzo activo, no un hecho dado.'
    },

    // ── ATREUS ─────────────────────────────────────────
    {
        id: 'atreus', label: 'Atreus', group: 'ATREUS', type: 'Personaje — Protagonista',
        desc: 'Hijo adolescente de Kratos y Faye. Cabello castaño recortado, ojos azules del color de los lagos profundos. Viste un jubón sin mangas de piel de conejo para protegerse del frío. Físicamente delgado — piernas adolescentes flacas con las que corre a toda velocidad. Su voz interior es rica, ansiosa y emocional: desea desesperadamente la aprobación de su padre, siente que siempre está disculpándose con él, extraña intensamente a su madre Faye cuya ausencia permea cada escena. En el Cap. 1: yerra el primer disparo (cerró los ojos sin darse cuenta), acierta el segundo, duda ante el golpe de gracia, y enfrenta un troll por primera vez. Su reacción al ciervo herido — voltear la cara, sentir la emoción acumulándose en la garganta — es la primera gran ventana a su compasión innata.',
        star: '★★★ Atreus es el corazón emocional de la obra. Su voz interior en la novelización llena el silencio que el videojuego deja entre las líneas de diálogo. La pregunta del Cap. 1: ¿puede crecer con la dureza de Kratos sin perder la compasión de Faye?'
    },
    {
        id: 'atreus-apariencia', label: 'Apariencia de Atreus', group: 'ATREUS', type: 'Descripción Física',
        desc: 'Adolescente. Cabello castaño recortado (del mismo tono que la barba de Kratos). Ojos azules del color de los lagos profundos. Llega al pecho de Kratos de altura. Viste jubón sin mangas de piel de conejo para combatir el frío del bosque. Piernas flacas y veloces. Sudor salpicando su pelo mientras corre.',
        star: '★ El cabello castaño compartido con Kratos es el único rasgo físico que los une visualmente: lo demás de Atreus (ojos azules, compasión, temperamento) viene de Faye.'
    },
    {
        id: 'atreus-madre', label: 'La Madre (Faye)', group: 'ATREUS', type: 'Personaje — Ausente',
        desc: 'Referenciada en el Cap. 1 repetidamente pero sin nombre. «Su madre» es la fuente de todo lo que Atreus valora en la caza: ella le enseñó a apuntar, le enseñó a posicionarse a favor del viento, siempre lo alentó cuando fallaba, nunca mostró ira, nunca le hizo sentir la necesidad de disculparse. Su ausencia en el presente narrativo es el peso emocional más grande del capítulo. Kratos la menciona una sola vez: «Tu madre te enseñó bien» — el único momento de elogio genuino del capítulo, y está mediado a través de ella. En el lore del juego: Faye es Laufey la Justa, gigante nórdica y guerrera. Murió antes del comienzo del juego; sus cenizas deben ser dispersadas en la cima de la montaña más alta de los nueve reinos — la misión de la obra completa.',
        star: '★★★ Faye es el catalizador de toda la trama y el estándar moral contra el que Atreus mide a su padre. Su presencia en ausencia es más poderosa que la mayoría de los personajes presentes. El contraste Kratos/Faye como modelos pedagógicos es el corazón del arco de Atreus.'
    },
    {
        id: 'atreus-compasion', label: 'Compasión de Atreus', group: 'ATREUS', type: 'Rasgo — Carácter',
        desc: 'Cuando el ciervo cae herido pero vivo, Atreus no puede mirarlo. La emoción le llena la garganta. Ofrece el cuchillo a su padre, esperando ser liberado de la responsabilidad. Cuando Kratos lo obliga a terminar el trabajo, su mano tiembla sin control y dice «No puedo...». Su compasión no es debilidad narrativa sino el contrapeso moral de toda la obra. Contrasta con la filosofía de Kratos («es simplemente un objetivo»), que el niño internamente rechaza. Mismo rasgo que hereda de Faye.',
        star: '★★★ La escena del golpe de gracia es la más densa del capítulo. Atreus no es cobarde — entiende lo que debe hacer y por qué. Su parálisis es ética, no física. Eso es lo que Kratos no puede enseñarle, y lo que Faye ya sembró en él.'
    },
    {
        id: 'atreus-aprobacion', label: 'Búsqueda de Aprobación', group: 'ATREUS', type: 'Rasgo — Motivación',
        desc: 'Todo el Cap. 1 está estructurado por el deseo de Atreus de demostrarle a su padre que puede lograrlo. «Tenía que hacer esto. Tenía que demostrarle a su padre que podía.» Cuando yerra, los «palabras filosas arañaron sus entrañas». Cuando acierta, quiere sonreír, quiere celebrar — pero inmediatamente sofoca el impulso y vuelve a la tarea. La aprobación de Kratos es escasa, funcional y siempre mediada: «Bien», con aún el reproche implícito de que el animal no cayó en el acto.',
        star: '★★ Patrón repetido en toda la obra: Atreus busca palabras de Kratos que Kratos es incapaz de dar libremente. La economía emocional de Kratos convierte sus raros gestos (la mano sobre el cuchillo) en eventos de significado enorme.'
    },

    // ── EVENTOS ────────────────────────────────────────
    {
        id: 'escena-caza', label: 'Escena de Caza', group: 'EVENTO', type: 'Evento — Apertura',
        desc: 'Apertura del Cap. 1: Atreus y Kratos acechan un ciervo de dieciséis puntas en el bosque. Atreus tiene el ojo cerrado, el arco tensado, el corazón desbocado. Se han posicionado estratégicamente a favor del viento. La instrucción de Faye resuena en su mente: «Dispara solo cuando el animal esté mirando hacia abajo.» Kratos da instrucciones de combate en voz baja directamente en el oído del niño. Tensión acumulada — el mundo se reduce al espacio entre la punta de la flecha y el hombro del ciervo.',
        star: '★★ Apertura in medias res clásica: al lector se le lanza directamente al interior de la relación padre-hijo sin exposición previa. En el videojuego esta misma escena es el tutorial de combate/caza; en la novela es un estudio psicológico.'
    },
    {
        id: 'primer-fallo', label: 'Primer Disparo (Fallo)', group: 'EVENTO', type: 'Evento',
        desc: 'Atreus cierra los ojos sin darse cuenta y dispara antes de la señal de Kratos («Mantén»). La flecha se desvía por una ráfaga de viento inesperada y da en un olmo, espantando al ciervo. Kratos explota: «¡¿Qué estás haciendo?!» con ojos ardiendo, arranca el arco de las manos laxas del niño. Luego se fuerza a detenerse: «Está tratando con un niño.» Da la orden sin más drama: «Encuéntralo.» Atreus rastrea el animal por sus huellas — habilidad que aprendió de Faye — y Kratos reconoce que el niño se había desviado de la pista correcta: «Tu madre te enseñó bien.»',
        star: '★★ Primer modelo del patrón del capítulo: Kratos explota → Kratos se frena → da la orden funcional. Su ira no es irracional — su CONTROL de la ira es la novedad. Ese esfuerzo es la caracterización central del personaje en esta obra.'
    },
    {
        id: 'segundo-disparo', label: 'Segundo Disparo (Éxito parcial)', group: 'EVENTO', type: 'Evento',
        desc: 'Reagrupados en una cresta, Atreus vuelve a apuntar. Esta vez ignora deliberadamente las instrucciones de Kratos («Toma el tiro, muchacho. ¡Ahora!») y confía en su propia cadencia aprendida de Faye. La flecha vuela silenciosa y certera, penetrando la parte trasera del hombro. El ciervo sale cojeando. Atreus salta y grita «¡Lo di!» — júbilo puro. Kratos: «Bien.» (con el reproche implícito de que el animal no cayó en el acto). El muchacho toma la pista de sangre y los guía por el rastro.',
        star: '★★★ Atreus tiene éxito precisamente cuando DEJA de escuchar a Kratos y confía en la voz de Faye. Subversión estructural: la pedagogía materna triunfa sobre la paterna en el primer acto. Kratos lo ve pero no lo dice — su «Tu madre te enseñó bien» anterior es la única vez que lo reconoce.'
    },
    {
        id: 'golpe-gracia', label: 'El Golpe de Gracia', group: 'EVENTO', type: 'Evento — Clímax emocional',
        desc: 'El ciervo ha caído pero aún vive. Atreus se paraliza al mirarlo. La emoción le invade la garganta; vuelve la cara. Saca su cuchillo inconscientemente y lo ofrece a su padre — esperando ser liberado del deber. Kratos planta las manos en las caderas, inmóvil, y lo manda con la mirada: «Tú debes terminar lo que empezaste.» La mano de Atreus tiembla incontrolablemente: «No puedo...» Kratos se agacha junto a él y envuelve su mano colosal sobre la del niño, sosteniendo el cuchillo. Atreus se encoge ante el contacto repentino e inusual — su padre rara vez lo toca. Entonces Kratos clava la hoja con toda la fuerza en el cuello del ciervo, con la mano de Atreus todavía dentro. El grito final y la sangre salpicándoles la cara. Segundos de silencio mirando el cuerpo quieto.',
        star: '★★★ La escena más cargada del capítulo. El gesto físico de Kratos (la mano sobre la mano) es ambiguo: ¿acto de conexión o de obligación? Atreus malinterpreta el gesto como liberación y se relaja — momento en que Kratos empuja el cuchillo. La enseñanza es real: Kratos no lo protege de la realidad dura. Pero el texto dice que Kratos «leyó la lucha en la cara de su hijo» y vio la expresión de su madre. Eso detalla la memoria, no la insensibilidad.'
    },
    {
        id: 'ataque-troll', label: 'Ataque del Troll del Bosque', group: 'EVENTO', type: 'Evento — Combate',
        desc: 'Mientras observan el cuerpo del ciervo, el sotobosque a una docena de pasos explota. Un troll del bosque emerge: tres veces la altura de Kratos, cuatro veces su volumen, mano gris colosal golpeando la cresta, boca enmarcada por colmillos defensivos curvados. Atraído por el olor de la sangre del ciervo. Kratos reacciona: «Troll del bosque. Quédate detrás de mí.» Antes de que pueda colocar a Atreus a salvo, el troll lanza un puño colosal al pecho del Dios de la Guerra, enviando a ambos rodando hacia un hueco entre los árboles. — Fin del capítulo.',
        star: '★★ Cliffhanger perfecto: el primer combate del juego/novela. El troll no es un enemigo filosófico — es física pura. Pero el texto lo inscribe en la dinámica padre-hijo: el instinto inmediato de Kratos es proteger a Atreus, no atacar.'
    },

    // ── CRIATURAS ──────────────────────────────────────
    {
        id: 'troll-bosque', label: 'Troll del Bosque', group: 'CRIATURA', type: 'Criatura — Troll',
        desc: 'Troll de las zonas boscosas de Midgard. Tres veces la altura de Kratos, cuatro veces su masa. Mano gris colosal. Boca abierta enmarcada por dos colmillos defensivos curvados. Irrumpe en la escena atraído por el olor de la sangre del ciervo muerto. Derriba a Kratos de un puñetazo al pecho — primer ser en el capítulo que logra desplazarlo físicamente. En la lore del videojuego los trolls nórdicos son criaturas antiguas y poderosas, a veces usados por facciones enemigas como armas de asedio. [Diseño visual en el juego: corpulentos, piel gris-verde, portadores de grandes pilares de piedra como armas].',
        star: '★★ La aparición del troll funciona como transición temática: la lección de compasión y muerte ha terminado — ahora viene la lección de supervivencia y combate. El mundo nórdico no da descanso emocional.'
    },
    {
        id: 'ciervo', label: 'El Ciervo (Presa)', group: 'CRIATURA', type: 'Criatura — Presa',
        desc: 'Ciervo de dieciséis puntas de color leonado. Pace ajeno a su presencia (se posicionaron a favor del viento). Al errar Atreus, sale corriendo; al ser herido en el segundo disparo, las patas delanteras lo fallan; cae en el segundo claro. Aún vivo cuando llegan, mirando al niño que lo ha herido. Su sufrimiento cataliza la crisis emocional de Atreus. Su cuerpo atraerá al troll.',
        star: '★ El ciervo no es solo presa: es el objeto a través del cual se realiza toda la enseñanza del capítulo. Tres fases: blanco (intento), herida (responsabilidad), muerte (compasión forzada). Narrativamente es el más eficiente de los personajes secundarios.'
    },

    // ── LUGARES ────────────────────────────────────────
    {
        id: 'bosque-midgard', label: 'Bosque de Midgard', group: 'LUGAR', type: 'Lugar — Midgard',
        desc: 'Bosque denso de pinos y olmos en Midgard (el mundo de los humanos en la cosmología nórdica), cubierto de nieve dispersa y tierra manchada. Crestas suaves, copses espinosos, sotobosque denso. El viento es variable — factor que arruinó el primer disparo de Atreus. Temperatura fría: Atreus viste jubón de piel de conejo. En el videojuego el bosque inicial es la zona tutorial, ambientada en los alrededores del hogar de Kratos y Faye en las estribaciones de las montañas.',
        star: ''
    },
    {
        id: 'midgard', label: 'Midgard', group: 'LUGAR', type: 'Lugar — Cosmología',
        desc: 'Uno de los Nueve Reinos de la cosmología nórdica: el mundo de los humanos, conectado al Árbol del Mundo Yggdrasil. En God of War (2018) es el reino principal donde transcurre la mayor parte de la historia. Poblado por humanos, trolls, dragones, enanos (Svartálfaheimr limítrofe) y los remanentes de la guerra de los dioses. Los gigantes (incluyendo la familia de Faye) fueron casi exterminados. Los dioses Æsir — Odín y Thor — gobiernan con miedo. [Los Nueve Reinos conectables: Midgard, Alfheim, Helheim, Jötunheim, Muspelheim, Niflheim, Asgard, Vanaheim, Svartálfaheimr].',
        star: '★★ Midgard en GoW es un mundo post-apocalíptico mitológico: los gigantes casi extintos, los dioses paranoicos y crueles, la magia antigua diezmada. Kratos llega como un extranjero que no conoce esta mitología — su ignorancia es narrativamente funcional.'
    },

    // ── TEMAS ──────────────────────────────────────────
    {
        id: 'tension-padre-hijo', label: 'Tensión Padre–Hijo', group: 'TEMA', type: 'Tema — Central',
        desc: 'El eje narrativo de toda la obra. El Cap. 1 lo establece mediante contraste pedagógico: Kratos enseña con órdenes, frustración contenida y lecciones duras; Faye (en el recuerdo de Atreus) enseñaba con aliento, paciencia y perdón. Atreus siente que su padre es casi un extraño. Kratos se fuerza a controlar la ira conscientemente. Ninguno sabe cómo hablar al otro. El lenguaje del vínculo entre ellos no son las palabras sino los gestos físicos: la mano sobre el cuchillo, el empujón protector antes del troll. La pregunta que atraviesa toda la obra: ¿puede Kratos aprender a ser padre sin replicar el ciclo de trauma?',
        star: '★★★ Tema generacional: el padre teme repetir los errores que lo destruyeron en Grecia. El hijo lleva la herencia de la madre muerta. La misión (dispersar las cenizas de Faye) los obliga a estar juntos durante suficiente tiempo como para que algo cambie — o se rompa.'
    },
    {
        id: 'herencia-natural', label: 'Naturaleza vs. Elección', group: 'TEMA', type: 'Tema — Filosófico',
        desc: '¿Puede un dios de la guerra convertirse en padre? ¿Puede un hijo de la guerra escapar a la violencia? El Cap. 1 plantea la pregunta a través de la cacería: matar no es abstracto — es una habilidad que se enseña, se aprende y se siente. La compasión de Atreus ante el ciervo sugiere que no hereda automáticamente la frialdad de Kratos. Pero su brazo tiembla — tiene el impulso de actuar; le falta la disociación. La filosofía de Kratos («es simplemente un objetivo, vacía tu mente») es una técnica de supervivencia, no de deshumanización. La novela investiga si Atreus puede aprender la técnica sin perder el corazón.',
        star: '★★★ Tema que conecta directamente con el lore mitológico: Atreus es también Loki, dios del caos nórdico — su naturaleza divina está latente y no revelada aún. El capítulo siembra el tema sin resolverlo.'
    },
    {
        id: 'duelo-madre', label: 'Duelo por Faye', group: 'TEMA', type: 'Tema — Emocional',
        desc: 'La ausencia de Faye es la herida abierta del capítulo. Atreus la menciona o evoca en cada momento de dificultad: cuando falla («su madre siempre lo alentaba cuando fallaba»), cuando acierta (recuerda sus instrucciones), cuando necesita compasión (ella nunca le mostró ira). La única mención directa de Kratos a ella — «Tu madre te enseñó bien» — es a la vez el elogio más grande del capítulo y el reconocimiento tácito de que él no puede reemplazarla. El duelo no ha sido procesado — ni por el niño, ni por el padre.',
        star: '★★★ Faye estructura la trama completa: sus cenizas son el objetivo del viaje; su ausencia es el motor emocional. El Cap. 1 establece que para Atreus ella fue perfecta en todo lo que Kratos no puede ser — lo que hace el viaje simultáneamente de supervivencia y de duelo.'
    },
    {
        id: 'pedagogia-dura', label: 'Pedagogía de la Dureza', group: 'TEMA', type: 'Tema — Pedagógico',
        desc: '«Demorar lo que debe hacerse solo invita al problema.» — Kratos obliga a Atreus a dar el golpe de gracia porque cree que protegerlo del dolor solo lo debilita. Su modelo pedagógico es la inmersión brutal: el mundo nórdico es violento, el niño vivirá en él, debe aprender a actuar antes de sentir. Contrasta con Faye, cuya pedagogía era alentadora e iterativa. La tensión no se resuelve en el capítulo: ambos modelos producen resultados distintos (Faye enseñó la precisión; Kratos enseñó la necesidad de terminar el trabajo).',
        star: '★★ El debate pedagógico está inscrito en el diseño de niveles del videojuego: el tutorial de GoW (2018) te lanza a combate sin explicar todo. «Aprenderás haciendo» es el principio de diseño de Santa Monica y la filosofía de Kratos a la vez.'
    },

    // ── OBJETOS ────────────────────────────────────────
    {
        id: 'arco-atreus', label: 'Arco de Atreus', group: 'OBJETO', type: 'Objeto — Arma',
        desc: 'Arco de madera de pino con el que Atreus caza. Herramienta enseñada por Faye. En el capítulo: Kratos lo arrebata de las manos de Atreus tras el primer fallo y lo devuelve para el segundo intento. En el videojuego el arco es el arma primaria de Atreus a lo largo del juego, con diferentes tipos de flechas con propiedades especiales. La flecha de madera del capítulo es funcional y sencilla: eje de pino con plumas.',
        star: '★ El arco es el nexo físico entre Atreus y Faye: fue ella quien se lo enseñó. Que Kratos lo arranque y lo devuelva es un gesto de poder/tutela sobre la herramienta y sobre quién tiene autoridad en la cacería.'
    },
    {
        id: 'cuchillo-atreus', label: 'Cuchillo de Atreus', group: 'OBJETO', type: 'Objeto — Arma',
        desc: 'Cuchillo que Atreus lleva y saca cuando Kratos ordena el golpe de gracia al ciervo. Saca el cuchillo «inconscientemente» y lo ofrece a su padre — el gesto inconsciente revela que parte de él sabe que debe hacerlo, pero otra parte lo está ofreciendo a Kratos para que lo libere de la obligación. La hoja es la herramienta del acto más intenso del capítulo.',
        star: '★★ En el videojuego Atreus lleva un cuchillo de combate que usa en ataques cuerpo a cuerpo. La continuidad entre la herramienta de caza del Cap. 1 y el arma de combate posterior es coherente: misma hoja, usos distintos.'
    },

    // ── MITOLOGÍA / LORE ───────────────────────────────
    {
        id: 'nueve-reinos', label: 'Los Nueve Reinos', group: 'MITOLOGIA', type: 'Lore — Cosmología',
        desc: 'La cosmología nórdica de God of War organiza la existencia en nueve reinos interconectados por Yggdrasil, el Árbol del Mundo: Midgard (humanos), Asgard (Æsir), Vanaheim (Vanir), Jötunheim (gigantes), Alfheim (elfos de la luz y la oscuridad), Helheim (muertos), Muspelheim (fuego, Surtr), Niflheim (niebla y veneno), Svartálfaheimr (enanos). La misión de Kratos y Atreus es viajar hasta Jötunheim para dispersar las cenizas de Faye. El Cap. 1 no menciona la cosmología explícitamente, pero el bosque de Midgard y el troll nórdico la sitúan.',
        star: '★★ Los Nueve Reinos son mapeados y visitables en el videojuego. La novela los presupone como contexto. Para el mapa mental serán nodos expandibles en capítulos posteriores.'
    },
    {
        id: 'dioses-aesir', label: 'Dioses Æsir', group: 'MITOLOGIA', type: 'Lore — Facción Divina',
        desc: 'Los dioses nórdicos del panteón Æsir: Odín (el Allfather), Thor (dios del trueno), Baldur, Freya, Tyr, Heimdall y otros. Gobiernan con poder absoluto y miedo en los Nueve Reinos. Son la amenaza central del videojuego: Baldur aparece como el primer antagonista principal. Odín es el villano en la secuela (Ragnarök). En el Cap. 1 no se mencionan, pero su presencia es inminente — Kratos es un dios extranjero en territorio donde los dioses matan a los que se atreven a ser más poderosos que ellos.',
        star: '★★★ Nodo para expandir en capítulos siguientes. Los Æsir son el contraste filosófico de Kratos: ellos usan el poder para dominar; él intenta usar la contención para vivir. La ironía es que su presencia violenta en el norte ya ha comenzado a afectar al mundo incluso antes de que Kratos lo sepa.'
    },
    {
        id: 'loki-atreus', label: 'Atreus / Loki', group: 'MITOLOGIA', type: 'Lore — Identidad Oculta',
        desc: 'Revelación central de la obra (spoiler): Atreus es Loki, el dios nórdico del caos, hijo de Kratos/Farbauti y Faye/Laufey. Su verdadero nombre nórdico, Loki, le es revelado al final del juego. Este es el giro que recontextualiza toda la narrativa: el «niño de la cacería» del Cap. 1 es en realidad una figura mítica fundamental cuya existencia cambiará el destino de todos los Nueve Reinos. En el Cap. 1 no hay indicios explícitos de esto — pero el texto siembra su carácter empático y curioso como contrapeso al de su padre.',
        star: '★★★ El mayor twist narrativo de la saga. La novelización lo maneja con sutileza: la compasión de Atreus en el Cap. 1 no es una debilidad que debe corregirse — es el germen del caos ordenado que Loki representa en la mitología. La pregunta de si Kratos puede cambiar se invierte: ¿puede Atreus no convertirse en lo que la mitología dijo que sería?'
    },

    // ── VIDEOJUEGO ─────────────────────────────────────
    {
        id: 'gow-2018', label: 'God of War (2018)', group: 'VIDEOJUEGO', type: 'Obra — Videojuego',
        desc: 'Videojuego de acción-aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Dirigido por Cory Barlog. Lanzado el 20 de abril de 2018 para PlayStation 4. Ganó el GOTY 2018 en múltiples premiaciones incluyendo The Game Awards. La cámara de plano único (one-shot) es su innovación técnica más reconocida: toda la obra — desde el inicio hasta los créditos — transcurre sin un solo corte de cámara. El combate es en tercera persona centrado en el Hacha de Leviatán. Atreus combate con arco y puede invocar a los lobos Atreus. Historia profundamente influida por el viaje del héroe y la mitología nórdica.',
        star: '★★★ El plano secuencia como lenguaje cinematográfico tiene una implicación narrativa: nunca abandonas a Kratos. Ves todo lo que él ve, en tiempo real. Es la materialización técnica de la filosofía del personaje: nada se evita, nada se corta.'
    },
    {
        id: 'hacha-leviatán', label: 'Hacha de Leviatán', group: 'VIDEOJUEGO', type: 'Objeto — Arma Principal',
        desc: 'El arma icónica de Kratos en God of War (2018). Hacha enorme imbuida con magia de hielo/frost, forjada por los enanos Brok y Sindri. Puede ser lanzada y llamada de vuelta mágicamente (similar a Mjölnir de Thor). Es el reemplazo funcional de las Blades of Chaos de la saga griega. En el Cap. 1 de la novela Kratos no la usa — enfrenta la cacería y el troll sin armas divinas. [Su no-aparición en el Cap. 1 es coherente con la narrativa de suprimir su identidad divina en el día a día.]',
        star: '★★ El hacha ausente en el Cap. 1 es tan significativa como si estuviera presente. Kratos elige no usar sus armas divinas para una tarea mundana — enseñar a su hijo a cazar. Es un padre, no un dios. Por ahora.'
    },
    {
        id: 'leviathan-magic', label: 'Magia de Gáldr (Runas)', group: 'VIDEOJUEGO', type: 'Lore — Sistema Mágico',
        desc: 'En el mundo de God of War la magia opera a través del Gáldr: cantos rúnicos, encantamientos y el poder inscrito en los objetos y el entorno. Las runas del Hacha de Leviatán son el sistema de habilidades del jugador en el juego (runic attacks). En el Cap. 1 no hay magia explícita — pero el bosque de Midgard en la mitología está imbuido de Seiðr (magia de Faye era presumiblemente de esta escuela). Nodo a expandir en capítulos posteriores.',
        star: ''
    },
    {
        id: 'novelizacion', label: 'Novelización Oficial', group: 'VIDEOJUEGO', type: 'Obra — Novela',
        desc: 'Adaptación literaria oficial del videojuego God of War (2018), escrita por J.M. Barlog (relacionado con el director Cory Barlog). La novelización amplía el texto del videojuego con acceso a la voz interior de los personajes — en especial de Atreus — y con detalles sensoriales y psicológicos que el medio interactivo no puede transmitir directamente. El Cap. 1 corresponde aproximadamente a la secuencia de apertura del juego.',
        star: '★★ La novelización no es simplemente el guión del juego transcrito: añade capas de subjetividad que el juego sugiere pero no dice. La mayor diferencia: en el juego Kratos es opaco; en la novela su lucha interior es parcialmente visible.'
    },

];
