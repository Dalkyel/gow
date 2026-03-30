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

    // ── CATEGORÍA LORE ─────────────────────────────────
    {
        id: 'cat-lore', label: 'Lore Nórdico', group: 'CAT', type: 'Categoría',
        desc: 'Fundamentos mitológicos y cosmológicos del mundo nórdico tal como los presenta God of War. Este bloque contiene el conocimiento previo necesario para comprender la historia: razas, facciones divinas, cosmología, criaturas y profecías.',
        star: ''
    },

    // ── COSMOLOGÍA ─────────────────────────────────────
    {
        id: 'yggdrasil', label: 'Yggdrasil', group: 'MITOLOGIA', type: 'Lore — Cosmología',
        desc: 'El Árbol del Mundo: un inmenso árbol que crece desde el Lago de los Nueve y cuyas ramas conectan y sostienen los nueve reinos del cosmos nórdico. Trasciende el tiempo y el espacio — no existe un origen que pueda atribuírsele. Tres raíces principales anclan el árbol en planos distintos: una sobre el pozo de Urðr (las Nornas), una sobre Jötunheim y una sobre Niflheim. A través de los portales mágicos (Mystic Gateways) es posible viajar entre reinos caminando por las ramas del árbol, aunque desviarse del camino significa la muerte instantánea. El árbol parece poseer una forma de conciencia no verbal. En God of War la base del árbol emerge del centro del Lago de los Nueve, en Midgard, donde se encuentra el templo de Týr, el punto de acceso al viaje entre reinos.',
        star: '★★★ Yggdrasil no es solo escenografía: es el sistema de transporte, el árbitro cosmológico y el símbolo de la interconexión de todos los reinos. En la mitología histórica el nombre probablemente significa «el caballo de Odín» — una referencia al sacrificio de Odín colgándose del árbol para obtener las runas. En el juego es la arquitectura visible de un universo que está a punto de ser sacudido.'
    },
    {
        id: 'lago-nueve', label: 'Lago de los Nueve', group: 'LUGAR', type: 'Lugar — Centro de Midgard',
        desc: 'Gran lago en el corazón de Midgard desde el que emerge Yggdrasil. Es el centro geográfico del mundo nórdico y el lugar donde convergen la mayoría de las rutas de viaje entre reinos. En el lago se alza el templo de Týr — la única estructura capaz de activar los portales de viaje intereino. La estatua sumergida de Thor es una presencia constante y amenazante en sus aguas. El lago es también el hogar de Jörmungandr, la Serpiente del Mundo, que lo rodea con su cuerpo y cuya escala hace que el lago parezca pequeño a su alrededor.',
        star: '★★ El Lago de los Nueve es el corazón del mundo jugable en God of War (2018). Mientras Kratos y Atreus lo exploran descubren las capas del mundo que les rodea: el pasado del dios Týr, la presencia de Jörmungandr, y las huellas de una civilización de gigantes que ya no existe.'
    },

    // ── DIOSES ─────────────────────────────────────────
    {
        id: 'odin-allfather', label: 'Odín — El Padre de Todo', group: 'MITOLOGIA', type: 'Lore — Dios Æsir',
        desc: 'El Padre de Todo (Allfather), rey y dios supremo del panteón Æsir. Dios de la sabiduría, la guerra, la muerte, la magia y la profecía. Porta la lanza Gungnir. Sacrificó su ojo derecho para beber del pozo de Mimir y obtener conocimiento infinito — y posteriormente aprisionó al sabio Mimir para usar su sabiduría de forma exclusiva. Tiene dos cuervos, Huginn y Muninn («pensamiento» y «memoria»), que vuelan por los nueve reinos recopilando información. Su paranoia respecto a Ragnarök — la profecía de su propia destrucción — define toda su política: el exterminio de los gigantes, el control de los demás reinos, la búsqueda obsesiva de toda profecía relacionada con su destino. En la mitología histórica Odín era complejo y moralmente ambiguo; en el universo GoW esta ambigüedad se oscurece hacia la tiranía. Gobierna desde Asgard con inteligencia y miedo — nunca ejerce fuerza bruta cuando puede ejercer manipulación.',
        star: '★★★ Odín es el gran ausente del Cap. 1 pero la sombra bajo la que todo sucede. Cada troll que aparece, cada gigante muerto, cada reino cerrado: todo es consecuencia de sus decisiones. Comprenderlo es comprender el mundo en que Kratos y Atreus se mueven. En el juego su presencia se siente antes de que aparezca: su mano está en todo.'
    },
    {
        id: 'thor-trueno', label: 'Thor — Dios del Trueno', group: 'MITOLOGIA', type: 'Lore — Dios Æsir',
        desc: 'Hijo de Odín, dios del trueno, de la fuerza y de la tormenta. Porta el martillo Mjölnir, forjado por los enanos Brok y Sindri. En la mitología popular (y en Marvel) Thor es un héroe noble; en God of War esta imagen es una construcción deliberada de propaganda divina. El Thor del universo GoW fue durante décadas el ejecutor de la campaña genocida de Odín contra los gigantes — masacró a la mayoría de los Jötnar usando Mjölnir como arma de destrucción masiva. Los enanos que forjaron el martillo arrastran culpa por haber contribuido a esa devastación. Es hijo de Odín y de la giganta Fjörgyn (de ahí que sea también mestizo Jötunn). A diferencia de Odín, Thor resuelve los problemas con fuerza directa. En el estado del mundo al inicio de la historia, Thor ya ha completado su campaña exterminadora — los gigantes en Midgard están extintos.',
        star: '★★★ La reputación de Thor precede su aparición en el juego por horas. Mimir, Brok, Sindri y otros hablan de él como una amenaza concreta, no abstracta. Su Mjölnir no es el símbolo de poder noble del mito popular — es el arma que diezmó una civilización entera. Conocer este contexto hace que cada mención de su nombre tenga peso.'
    },
    {
        id: 'tyr-dios', label: 'Týr — Dios de la Justicia', group: 'MITOLOGIA', type: 'Lore — Dios Æsir',
        desc: 'El dios Æsir de la justicia, la ley y la guerra honorable. A diferencia del resto de los Æsir, Týr fue el único dios que trató a los gigantes, elfos y enanos con respeto genuino — viajó a todos los reinos como diplomático y construyó relaciones basadas en confianza mutua. Su templo en el Lago de los Nueve es la prueba de esa labor: el único punto neutral en un mundo controlado por Odín. Desapareció en algún momento anterior a los eventos de la historia — Odín lo encarceló por su lealtad a los gigantes, aunque la mayoría cree que está muerto. Su nombre está escrito en runas en el templo que construyó, y sus viajes entre reinos dejaron rastros de su filosofía de paz en culturas que los Æsir nunca hubieran respetado.',
        star: '★★★ Týr es el Æsir «de lo que pudo ser»: la prueba de que los dioses nórdicos no necesitaban ser tiranos. Su ausencia en el presente narrativo es tan significativa como la de Faye: el único dios digno del nombre no está. El templo que dejó atrás es la única herramienta neutral que permite a Kratos y Atreus moverse por los reinos.'
    },

    // ── RAZAS ──────────────────────────────────────────
    {
        id: 'jotnar', label: 'Los Jötnar (Gigantes)', group: 'MITOLOGIA', type: 'Lore — Raza',
        desc: 'La raza de los gigantes nórdicos — seres primordiales anteriores a los dioses, cuya primera forma fue Ymir, el ser del que Odín creó Midgard. Los Jötnar no son simplemente criaturas grandes: son una raza inteligente y civilizada con arquitectura, arte, comercio y — lo más temido — el don de la precognición. Podían ver el futuro. Esta capacidad profética les otorgó el conocimiento de Ragnarök y de los eventos que vendrían — incluyendo la llegada de Kratos y Atreus — conocimiento que Odín quería monopolizar. Como resultado, Odín ordenó su exterminio sistemático, ejecutado principalmente por Thor. Al inicio de la historia los gigantes en Midgard están prácticamente extintos; los sobrevivientes se refugiaron en Jötunheim sellando sus puertas con magia. Faye — la madre de Atreus — era una Jötunn que eligió quedarse en Midgard.',
        star: '★★★ Los Jötnar son el corazón ético de la historia. Su adaptación en GoW invierte la tradición mitológica donde eran villanos: aquí son los nobles víctimas de una campaña genocida. La extinción de los gigantes en Midgard es el estado del mundo en el que Kratos y Atreus operan — una ruina que todavía está tibia.'
    },
    {
        id: 'enanos-svartalf', label: 'Los Enanos de Svartalfheim', group: 'MITOLOGIA', type: 'Lore — Raza',
        desc: 'Raza de humanoides de baja estatura originarios de Svartalfheim (también llamado Niðavellir). Son los artesanos supremos de los nueve reinos: forjan las armas más poderosas de la historia — incluyendo Mjölnir (el martillo de Thor) y la propia Hacha de Leviatán. Poseen una magia natural que les permite desplazarse entre el espacio físico y el «reino entre reinos», lo que los vuelve prácticamente invisibles a la mayoría de los seres conscientes. Esta habilidad es lo que les permite sobrevivir en un mundo donde Odín podría haberlos esclavizado: simplemente desaparecen de la percepción. Culturalmente valoran la artesanía como acto sagrado — construir una arma excepcional es un acto de devoción, no un servicio comercial. La entrega de un arma a un portador digno es el mayor honor que un enano puede dar.',
        star: '★★ Los enanos son la capa cómica y emocionalmente rica del mundo de GoW. Brok y Sindri, los dos más relevantes, cargaron durante años con la culpa de haber forjado Mjölnir — el arma que usó Thor para destruir a los gigantes. Su arrepentimiento los convirtió en aliados de quienes se oponen a los Æsir.'
    },
    {
        id: 'valquirias', label: 'Las Valquirias', group: 'MITOLOGIA', type: 'Lore — Raza Divina',
        desc: 'Las Valquirias son guerreras divinas al servicio de Odín cuya función es volar sobre los campos de batalla y escoger a los guerreros más dignos de entre los caídos, conduciéndolos a Valhalla para que se unan a los Einherjar. En la mitología histórica son figuras ambiguas — asistentes de Odín que a veces muestran compasión y a veces crueldad. En el universo de God of War, las Valquirias están vinculadas a la corrupción que Odín ha sembrado en los reinos: su estado actual al inicio de la historia es el resultado de esa corrupción. Son también las guardianas que debían recibir a los guerreros muertos y conducirlos a Valhalla — cuando esta función falla, los guerreros sin guía se convierten en Draugr.',
        star: '★★ En GoW las Valquirias son la intersección entre la teología nórdica de la muerte y el estado roto del mundo. La función que deberían cumplir — guiar a los muertos — no se está cumpliendo, lo que tiene consecuencias directas en el mundo que Kratos y Atreus atraviesan.'
    },
    {
        id: 'draugr', label: 'Los Draugr', group: 'MITOLOGIA', type: 'Lore — Criatura',
        desc: 'Los Draugr («caminantes de regreso» en nórdico antiguo) son guerreros muertos que, cegados por la ira, rechazaron el llamado de las Valquirias a Valhalla — generalmente por un deseo de venganza no satisfecho. Al negarse, son consumidos por la intensidad del duelo con la Valquiria y condenados a vagar por Midgard para siempre como cáscaras de rabia. Son muertos físicos y corpóreos — no fantasmas — con la fuerza y habilidades que poseían en vida, pero sin voluntad ni consciencia, solo violencia ciega. En la mitología histórica habitaban sus tumbas custodiando tesoros; en GoW son la amenaza más común que Kratos y Atreus enfrentan en el bosque y en las ruinas de Midgard. Su abundancia es una señal del estado roto del cosmos: demasiados guerreros rechazando el ciclo natural de muerte.',
        star: '★ Los Draugr son la manifestación física de un mundo fuera de equilibrio. Cada uno representa un guerrero que eligió la ira sobre el descanso — una resonancia directa con el arco de Kratos, que durante décadas eligió la ira sobre la paz.'
    },

    // ── PROFECÍA ───────────────────────────────────────
    {
        id: 'ragnarok-profecia', label: 'Ragnarök — El Crepúsculo', group: 'MITOLOGIA', type: 'Lore — Profecía',
        desc: 'Ragnarök («crepúsculo de los dioses», o Ragnarøkkr) es la gran profecía que domina toda la mitología nórdica: una serie de eventos catastróficos que culminarán en la destrucción de Asgard, la muerte de los dioses principales (Odín, Thor, Freyr, Heimdall, entre otros) y el hundimiento del mundo bajo las aguas — seguido de un renacimiento. En la mitología histórica es el fin inevitable de un ciclo cósmico. En el universo GoW, Ragnarök es la pesadilla de Odín: una profecía que conoce en fragmentos y que no puede leer del todo porque los gigantes — los únicos con visión completa del futuro — la ocultaron. Su obsesión por evitarla es la raíz de toda su tiranía. Fimbulwinter (el gran invierno que dura tres años) precede a Ragnarök según la profecía — es la señal de que el fin se acerca.',
        star: '★★★ Ragnarök es el horizonte narrativo de toda la saga. No es simplemente «el fin del mundo»: es una profecía que los dioses saben que no pueden evitar y ante la cual reaccionan de maneras radicalmente distintas — Odín con terror y control, Týr con aceptación y esperanza. La pregunta que estructura la historia: ¿puede cambiarse el destino, o solo navegarse?'
    },
    {
        id: 'fimbulwinter', label: 'Fimbulwinter', group: 'MITOLOGIA', type: 'Lore — Profecía',
        desc: 'El «gran invierno» que según la profecía precede a Ragnarök: tres inviernos consecutivos sin verano, que cubren todos los reinos de nieve, hielo y oscuridad. Es la señal cosmológica de que el fin de la era de los dioses se aproxima. En la mitología histórica dura tres años y viene acompañado de conflictos y guerras fratricidas entre humanos. En el universo GoW, Fimbulwinter no debería ocurrir hasta dentro de décadas — su llegada prematura indicaría que algo lo desencadenó antes de tiempo, acelerando el ciclo hacia Ragnarök.',
        star: '★★★ Fimbulwinter actúa en la narrativa de GoW como un reloj que alguien adelantó sin permiso. La pregunta de qué lo desencadenó y cuándo comenzará es parte del suspenso que se construye a lo largo de la historia. El bosque nevado del Cap. 1 ya lleva en sí la semilla del invierno interminable que viene.'
    },

    // ── LUGARES COSMOLÓGICOS ───────────────────────────
    {
        id: 'asgard', label: 'Asgard', group: 'LUGAR', type: 'Lugar — Reino Æsir',
        desc: 'El reino de los dioses Æsir, ubicado en la corona de Yggdrasil. Desde Asgard, Odín y los suyos gobiernan y vigilan los ocho reinos restantes. Es una fortaleza: sus muros fueron reforzados por orden de Odín ante el temor de Ragnarök. En su interior se encuentra Valhalla — la sala dorada donde los Einherjar (guerreros caídos dignamente) viven, beben y entrenan para la batalla final. Asgard está conectado a Midgard por el Bifröst, el puente arcoíris. Ningún ser puede viajar libremente a Asgard sin el permiso de los Æsir — es el reino más cerrado y más temido del cosmos.',
        star: '★★ Asgard es el poder central contra el que todo se define. En la mitología histórica era la sede de los dioses benevolentes; en GoW es la capital de un régimen de terror divine. Su fortaleza y su inaccesibilidad hacen que la sola idea de desafiarla parezca imposible — lo que la convierte en el horizonte inevitable de la historia.'
    },
    {
        id: 'jotunheim', label: 'Jötunheim', group: 'LUGAR', type: 'Lugar — Reino de los Gigantes',
        desc: 'El reino ancestral de los Jötnar: montañas tan altas que sus picos alcanzan por encima de las nubes, paisajes de escala titánica construidos para seres de tamaño descomunal. Es el destino final del viaje de Kratos y Atreus — donde deben dispersar las cenizas de Faye, en el pico más alto de todos los reinos. Odín destruyó el portal principal a Jötunheim y selló los demás accesos cuando los gigantes lo desterraron de allí para siempre. Los gigantes, antes de desaparecer, construyeron en su interior un templo con murales que registran profecías — incluida la de los eventos que Kratos y Atreus vivirán. Viajar a Jötunheim requiere una solución especial que no existe en ningún portal normal.',
        star: '★★★ Jötunheim no es solo el destino del viaje — es el archivo de los gigantes. Todo lo que los Jötnar sabían sobre el futuro está tallado en sus paredes. Llegar allí es la promesa que estructura toda la narrativa del primer juego.'
    },
    {
        id: 'vanaheim', label: 'Vanaheim', group: 'LUGAR', type: 'Lugar — Reino Vanir',
        desc: 'El reino de los dioses Vanir: junglas exuberantes y fauna peligrosa, asociado con la magia, la fertilidad y la sabiduría. Los Vanir son la otra tribu de dioses nórdicos — distintos de los Æsir en naturaleza y valores. Fueron rivales de los Æsir hasta que una larga guerra terminó en tablas y un tratado de paz sellado con intercambio de rehenes. Al inicio de la historia, Vanaheim está bajo la influencia directa de Odín — el acceso al reino está bloqueado. Solo puede entrar quien tenga permiso expreso de los Vanir.',
        star: '★ Vanaheim establece que el mundo nórdico de GoW no es solo «la tierra de los Æsir»: hay otra facción divina con su propia historia, sus propios valores y sus propias cicatrices de guerra. La dualidad Æsir/Vanir es uno de los ejes mitológicos más ricos de la saga.'
    },
    {
        id: 'helheim', label: 'Helheim', group: 'LUGAR', type: 'Lugar — Reino de los Muertos',
        desc: 'El reino de los muertos, gobernado por Hel (hija de Loki en la mitología histórica). Es el destino de quienes mueren sin gloria en combate — de vejez, enfermedad o causas «menores». No es un lugar de castigo sino una continuación de la existencia: los muertos en Helheim comen, duermen y viven como lo hacían en vida, aunque en un estado eterno de quietud helada. En GoW el frío de Helheim es tan extremo que incluso el fuego se congela. El acceso al reino no requiere morir: puede alcanzarse a través de los portales del templo de Týr, aunque hacerlo en vida es extraordinariamente peligroso. Su estado en la historia de GoW está perturbado — algo ha interrumpido el flujo natural de los muertos hacia él.',
        star: '★★ Helheim introduce uno de los conceptos más importantes del universo: en la cosmología nórdica no hay un único destino para los muertos. Valhalla (para guerreros gloriosos), Helheim (para los demás) y el ciclo de los Draugr (para los que se niegan) forman un sistema de muerte con implicaciones narrativas directas.'
    },
    {
        id: 'valhalla', label: 'Valhalla', group: 'LUGAR', type: 'Lugar — Sala de los Caídos',
        desc: 'La gran sala dorada en Asgard donde los guerreros caídos gloriosamente en batalla — los Einherjar — viven, festejan y entrenan hasta el día de Ragnarök, cuando lucharán junto a los dioses en la batalla final. Las Valquirias son las encargadas de seleccionar y conducir a estos guerreros. En la mitología histórica Valhalla era el mayor honor al que un guerrero nórdico podía aspirar. En GoW es parte del aparato ideológico de Odín: el sistema de muerte honorable que él controla, que define quién merece el descanso y quién no, y que las Valquirias administran bajo su mandato.',
        star: '★ Valhalla aparece constantemente en el lenguaje y la cultura del mundo de GoW: es el estándar de muerte honorable. Que los Draugr existan — guerreros que rechazaron Valhalla — muestra que no todo el mundo acepta la arquitectura de muerte que Odín construyó.'
    },
    {
        id: 'guerra-aesir-vanir', label: 'Guerra Æsir–Vanir', group: 'MITOLOGIA', type: 'Lore — Historia',
        desc: 'El conflicto primordial entre las dos tribus divinas nórdicas: los guerreros Æsir de Asgard y los magos Vanir de Vanaheim. La guerra comenzó cuando los Æsir intentaron invadir Vanaheim — subestimaron la magia Vanir y la guerra terminó en tablas después de siglos de combate devastador para ambos bandos. La paz se selló con un intercambio de rehenes: los Vanir enviaron a Njörd, Freyr y Freya a Asgard; los Æsir enviaron a Hœnir y al sabio Mimir a Vanaheim. Los Vanir quedaron insatisfechos cuando Hœnir resultó inútil sin Mimir — eventualmente decapitaron a Mimir y enviaron su cabeza de vuelta a Asgard, donde Odín la preservó. De la boca conjunta de ambas tribus en señal de paz nació Kvasir, el ser más sabio jamás creado. Esta guerra remodela toda la jerarquía de poder del cosmos nórdico.',
        star: '★★★ La guerra Æsir-Vanir es el pasado que explica el presente: por qué Freya está en Midgard, por qué Mimir está prisionero de Odín, por qué los enanos cargan culpa, por qué los Vanir no son libres. Es la capa histórica que precede al estado del mundo en el Cap. 1.'
    },

    // ── PERSONAJES LORE ────────────────────────────────
    {
        id: 'brok-sindri', label: 'Brok y Sindri', group: 'MITOLOGIA', type: 'Lore — Personajes Aliados',
        desc: 'Los hermanos Huldra: los dos enanos artesanos más talentosos de los nueve reinos. Brok: piel azul, temperamento brusco y directo, sin filtros sociales, puramente funcional. Sindri: piel rosada-normal, obsesivamente pulcro, educado hasta la exasperación, más reflexivo moralmente. Juntos forjaron las dos armas más importantes del universo: Mjölnir para Thor (de lo que arrastran culpa tremenda, ya que Thor la usó para matar gigantes durante décadas) y el Hacha de Leviatán, que originalmente forjaron para Faye. Son los herrerros de Kratos y Atreus durante el viaje — mejoran armas y equipo en sus talleres dispersos por los reinos. Su aparición desde el principio del viaje es uno de los primeros indicios de que este mundo tiene aliados inesperados dispuestos a ayudar.',
        star: '★★★ Brok y Sindri son el alivio cómico con profundidad emocional real. Su culpa por Mjölnir los hace moralmente complejos — no son simples comerciantes sino artesanos que intentan compensar el daño que su obra causó. Su relación con Faye, que comisionó el Hacha de Leviatán, los vincula directamente a la historia antes de que empiece.'
    },
    {
        id: 'mimir-sabio', label: 'Mimir — El Sabio', group: 'MITOLOGIA', type: 'Lore — Personaje Clave',
        desc: 'El ser más sabio de todos los reinos, según la mitología nórdica. En la versión histórica Mimir guardaba el Pozo de la Sabiduría, del que Odín bebió a cambio de un ojo. En el universo GoW, Mimir fue el embajador y consejero más sofisticado que los Æsir poseían — un mortal de sabiduría extraordinaria que Odín hizo inmortal para retenerlo. Fue enviado a los Vanir como rehén tras la guerra Æsir-Vanir; cuando fue devuelto decapitado a Asgard, Odín preservó y encantó su cabeza para que nunca pudiera mentir — convirtiéndolo en una biblioteca viviente a su servicio exclusivo. Al inicio de la historia de GoW, Mimir está encadenado a un árbol en la cima de la montaña de Midgard — prisionero de Odín, encantado para no poder liberarse.',
        star: '★★★ Mimir es la voz narrativa del lore: cuando se integra al equipo de Kratos y Atreus, se convierte en el narrador de los mitos nórdicos, explicando la historia de los dioses, los gigantes y los reinos a través de relatos. Saber quién es Mimir antes de conocerlo hace que su situación al ser encontrado sea inmediatamente significativa.'
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
