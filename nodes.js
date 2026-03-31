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
        desc: 'El Dios de la Guerra espartano viviendo en Midgard nórdico bajo una identidad contenida. Físicamente imponente: piel ceniciento-blanca, ojos gris acerado en llamas, tatuajes escarlata en torso y cráneo, pauldron de cuero en el hombro derecho, vendajes en ambos antebrazos. Barba castaña espesa y recortada. En la cacería dirige con órdenes secas y se obliga a frenar la ira: «Necesitaba controlar su ira. Estaba tratando con un niño.» Rara vez hace contacto físico con Atreus — cuando lo hace (la mano sobre el cuchillo) el gesto tiene peso máximo. Cuando el Desconocido lo abofetea, recuerda el voto que hizo al llegar a esta tierra y absorbe el golpe antes de responder. Solo cuando el Desconocido lo golpea repetidamente actúa: «Te avisé.» En el combate pleno arranca árboles, usa monolitos como armas, pero el Desconocido supera cada ataque. Al romperle el cuello y arrojar el cuerpo a la grieta se queda inmóvil durante minutos — esperando. Pregunta que le queda: «¿Cómo supo de mí y de mi pasado? ¿Cómo me encontró?»',
        star: '★★★ El combate con el Desconocido es la primera vez que Kratos enfrenta algo posiblemente más poderoso que él en el mundo nórdico. La bofetada absorbida antes de responder muestra el esfuerzo real del voto: no es que no pueda reaccionar, es que elige no hacerlo hasta que no queda alternativa.'
    },

    {
        id: 'kratos-filosofia', label: 'Filosofía de Kratos', group: 'KRATOS', type: 'Rasgo — Ideología',
        desc: '«Solo dispara cuando yo te diga que dispares.» / «No te disculpes. Sé mejor.» / «Demorar lo que debe hacerse solo invita al problema.» / «La ira puede ser un arma... si la controlas, si la usas a tu ventaja. Tú claramente no puedes.» Kratos enseña con aforismos duros pero funcionales. Su modelo pedagógico es la inmersión brutal: el mundo nórdico es violento, el niño vivirá en él, debe aprender a actuar antes de sentir. Obliga a Atreus a dar el golpe de gracia porque cree que protegerlo del dolor solo lo debilita. Su doctrina de la ira distingue al guerrero del berserker: no niega la ira — la convierte en herramienta dirigida. Cuando Atreus protesta que Kratos también se enoja en combate, Kratos confirma que la diferencia no es sentir sino controlar. Contrasta directamente con la pedagogía de Faye, que era alentadora, iterativa y perdonadora — Faye enseñó la precisión; Kratos enseña la necesidad de terminar el trabajo. Kratos no enseña cómo sentirse — enseña cómo actuar.',
        star: '★★★ «La ira puede ser un arma» es la máxima clave: Kratos no pide a Atreus que suprima la ira — le pide que la discipline. Es una distinción que el niño todavía no puede encarnar. El debate pedagógico está también inscrito en el diseño del videojuego: el tutorial de GoW (2018) te lanza a combate sin explicarlo todo — «aprenderás haciendo» es el principio de diseño de Santa Monica y la filosofía de Kratos a la vez.'
    },
    {
        id: 'kratos-pasado', label: 'Pasado Griego de Kratos', group: 'KRATOS', type: 'Lore — Trasfondo',
        desc: 'En Grecia, Kratos fue el Dios de la Guerra espartano: responsable de la muerte de su primera esposa e hija (engañado por Ares), masacró el Olimpo y mató a Zeus. Las cenizas de su familia fundidas en su piel dan a su tez el color blanco-gris permanente. Llegó al norte buscando un comienzo nuevo, donde conoció a Faye y tuvo a Atreus. Ese pasado que intentó enterrar resurge en una pesadilla: un Kratos sin barba, vestido con ropa griega, empuña las Blades of Chaos para defenderse de tres lobos gigantes (uno negro de ojos verdes que actúa como alfa, uno blanco y uno gris) mientras una mujer encapuchada y embozada alza el brazo para lanzarlos al ataque. El lobo negro le desgarra el muslo arrastrándolo. Kratos grita «¿QUIÉN ERES?» — y despierta empapado en sudor. Lleva décadas suprimiendo el recuerdo. Su regreso lo inquieta: no puede discernir su propósito. Sus brazos duelen a pesar del descanso.',
        star: '★★★ La pesadilla es la primera grieta visible en la contención de Kratos. No la causa el presente — la causa el pasado que creyó enterrado. La mujer encapuchada es la pregunta sin respuesta del capítulo: su identidad, su relación con los lobos y con el pasado griego de Kratos es el hilo que el texto deja suelto deliberadamente.'
    },
    {
        id: 'tatuajes-kratos', label: 'Tatuajes Escarlatas', group: 'KRATOS', type: 'Objeto — Símbolo',
        desc: 'Franjas rojas amplias que recorren el torso de Kratos como el resultado de una pincelada de mano ancha; una similar cruza su cráneo rapado y la ceja izquierda. Se describen como si burbujearan de ira cuando está enojado. Marca visual de su identidad espartano-divina. En la lore expandida, el rojo remplazó el gris de las cenizas en su rostro (la «pintura de guerra» roja que Kratos aplicó sobre su piel ceniza).',
        star: '★ Detalle visual de caracterización: los tatuajes «se fruncen de ira» — la novela anima la iconografía del personaje.'
    },
    {
        id: 'vendajes-kratos', label: 'Vendajes de los Antebrazos', group: 'KRATOS', type: 'Objeto — Símbolo',
        desc: 'Vendas decoloradas que cubren ambos antebrazos de Kratos en su vida cotidiana nórdica. Ocultan las cadenas grabadas en sus muñecas — las marcas permanentes de las Blades of Chaos, impuestas por Ares y que no pueden ser removidas. En la pesadilla que sufre Kratos, el Kratos griego aparece sin barba y sin vendajes, con las Blades visibles y en uso: el pasado que las vendas intentan ocultar en el presente emerge en el sueño sin filtro. El ocultamiento diurno es un acto de voluntad consciente y cotidiana — las vendas son la frontera entre quien fue y quien intenta ser.',
        star: '★★★ Las vendas no ocultan una herida — ocultan un símbolo. En el sueño esa frontera desaparece: el Kratos griego con las Blades desenvueltas es lo que Kratos nórdico teme que permanezca debajo de toda la contención.'
    },

    // ── ATREUS ─────────────────────────────────────────
    {
        id: 'atreus', label: 'Atreus', group: 'ATREUS', type: 'Personaje — Protagonista',
        desc: 'Hijo adolescente de Kratos y Faye. Cabello castaño recortado, ojos azules del color de los lagos profundos. Viste un jubón sin mangas de piel de conejo para protegerse del frío. Físicamente delgado — piernas adolescentes flacas con las que corre a toda velocidad. Su voz interior es rica, ansiosa y emocional: desea desesperadamente la aprobación de su padre, siente que siempre está disculpándose con él, extraña intensamente a su madre Faye cuya ausencia permea cada escena. En el Cap. 1: yerra el primer disparo (cerró los ojos sin darse cuenta), acierta el segundo, duda ante el golpe de gracia, y enfrenta un troll por primera vez. Su reacción al ciervo herido — voltear la cara, sentir la emoción acumulándose en la garganta — es la primera gran ventana a su compasión innata.',
        star: '★★★ Atreus es el corazón emocional de la obra. Su voz interior en la novelización llena el silencio que el videojuego deja entre las líneas de diálogo. El cabello castaño que comparte con Kratos es el único rasgo físico que los une visualmente: lo demás — ojos azules, compasión, temperamento — viene de Faye. La pregunta que atraviesa todo el arco: ¿puede crecer con la dureza de Kratos sin perder la compasión de Faye?'
    },
    {
        id: 'atreus-madre', label: 'La Madre (Faye)', group: 'ATREUS', type: 'Personaje — Ausente',
        desc: 'Conocida en vida como Faye, y en el lore del juego como Laufey la Justa — gigante nórdica y guerrera. Murió antes del comienzo de la historia; sus cenizas deben ser dispersadas en el pico más alto de todos los reinos — misión que ordena el viaje completo. «Su madre» es la fuente de todo lo que Atreus valora: le enseñó a apuntar, a posicionarse a favor del viento, a hablar la Lengua Antigua, a anticipar intercambios con criaturas del bosque. Siempre lo alentó cuando fallaba; nunca mostró ira; nunca le hizo sentir la necesidad de disculparse. Era su persona más feliz cuando cuidaba su jardín. Tenía un halcón gyrfalcón, Jöphie, que solo obedecía a ella. Advirtió a Atreus que informara si veía cuervos negros sobre el bosque. Su pira funeraria: amortajada en linos blancos, las llamas consumiéndola por todos lados. Atreus dejó el cuchillo de caza de Faye sobre su pecho al cortar el paño para envolverla — al darse cuenta, metió la mano entre las llamas para recuperarlo, quemándose la palma.',
        star: '★★★ Faye es el catalizador de toda la trama y el estándar moral contra el que Atreus mide a su padre. Cada instrucción suya que Atreus recuerda es un fragmento de preparación deliberada: sabía de cuervos, de criaturas, de la Lengua Antigua. No murió por sorpresa — se fue dejando a su hijo equipado. El cuchillo recuperado de las llamas es el objeto que une el duelo al acto físico de valerse de ella incluso después de muerta.'
    },
    {
        id: 'atreus-compasion', label: 'Compasión de Atreus', group: 'ATREUS', type: 'Rasgo — Carácter',
        desc: 'Cuando el ciervo cae herido pero vivo, Atreus no puede mirarlo. La emoción le llena la garganta. Ofrece el cuchillo a su padre, esperando ser liberado de la responsabilidad. Cuando Kratos lo obliga a terminar el trabajo, su mano tiembla sin control y dice «No puedo...». Su compasión no es debilidad narrativa sino el contrapeso moral de toda la obra. Contrasta con la filosofía de Kratos («es simplemente un objetivo»), que el niño internamente rechaza. Mismo rasgo que hereda de Faye.',
        star: '★★★ La escena del golpe de gracia es la más densa del capítulo. Atreus no es cobarde — entiende lo que debe hacer y por qué. Su parálisis es ética, no física. Eso es lo que Kratos no puede enseñarle, y lo que Faye ya sembró en él.'
    },
    {
        id: 'atreus-aprobacion', label: 'Búsqueda de Aprobación', group: 'ATREUS', type: 'Rasgo — Motivación',
        desc: 'Todo el arco inicial está estructurado por el deseo de Atreus de demostrarle a su padre que puede lograrlo. «Tenía que hacer esto. Tenía que demostrarle a su padre que podía.» Cuando yerra, las «palabras filosas arañaron sus entrañas». Cuando acierta quiere celebrar — pero sofoca el impulso. La aprobación de Kratos es escasa, funcional y siempre mediada. A la mañana siguiente al combate, Atreus confronta el veredicto directamente: «Hice todo lo que me pediste. ¿Por qué no es suficiente?» La respuesta de Kratos («Cediste el control») lo obliga a reformular su pregunta — no es si fue suficientemente valiente, sino si fue suficientemente dueño de sí mismo. Atreus responde: «Aprendo rápido. Madre me lo dijo.» — invocar a Faye como aval. Cierra: «Te lo voy a demostrar», en susurro, a nadie.',
        star: '★★★ La búsqueda de aprobación no es vanidad: es el intento de Atreus de construir un vínculo con un padre que no sabe cómo ofrecerlo. Invocar a Faye como testigo («madre me lo dijo») es el único recurso que le queda cuando el argumento propio no basta.'
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
        id: 'ataque-troll', label: 'Combate con el Troll', group: 'EVENTO', type: 'Evento — Secuencia de Combate',
        desc: '(0) IRRUPCIÓN: mientras Kratos y Atreus observan el ciervo caído, el sotobosque explota a una docena de pasos. El troll emerge — tres veces la altura de Kratos, atraído por el olor de la sangre. «Troll del bosque. Quédate detrás de mí.» El troll golpea el pecho de Kratos enviándolos a ambos rodando, y agarra el cadáver del ciervo. (1) PRIMER CONTACTO: Kratos empuña el hacha; el troll lo derriba como a un muñeco. El hacha cae — regresa. El troll la codicia y agarra su mango para inmovilizarlo. (2) ATREUS INTENTA DISPARAR: busca ángulo al pecho del troll. Kratos: «¡No dispares!» Golpea la mandíbula del troll con el puño libre. El troll ha subestimado seriamente la fuerza del hombre. (3) KRATOS EN EL SUELO: el troll carga, aplasta a Kratos y levanta una roca apuntando a Atreus. «¡Muchacho!» — Atreus: «Estoy bien. ¡Mátalo!» Apunta al centro del pecho — antes de disparar, el troll carga. (4) MUERTE DEL TROLL: Kratos golpea la garganta forzando al troll a retroceder. Salta, clava el hacha en el hombro. El troll ulula. En el momento en que intenta aferrar el cuello de Kratos, Kratos alza el hacha y le hiende la cabeza. El troll cae de bruces.',
        star: '★★★ El combate establece la dinámica de cooperación padre-hijo que regirá la obra: Atreus quiere actuar, Kratos lo frena, Atreus necesita aprender cuándo desobedecer. El instinto inmediato de Kratos es proteger antes de atacar — y la estructura del combate lo confirma en cada fase.'
    },

    // ── CRIATURAS ──────────────────────────────────────
    {
        id: 'troll-bosque', label: 'Troll del Bosque', group: 'CRIATURA', type: 'Criatura — Troll',
        desc: 'Troll de las zonas boscosas de Midgard. Tres veces la altura de Kratos, cuatro veces su masa. Mano gris colosal. Boca abierta enmarcada por dos colmillos defensivos curvados. Irrumpe en la escena atraído por el olor de la sangre del ciervo muerto. Habla la Lengua Antigua: «Kjöt» (carne) cuando roba el ciervo; «Dauði Kaupmaðr ta» (muerto mercader, toma); «Þú tilheyra ekki hér!» (¡No pertenecéis aquí!). Kratos no comprende ninguna palabra; Atreus traduce parcialmente y responde. El troll derriba a Kratos de un puñetazo al pecho — el único ser hasta ahora capaz de desplazarlo físicamente. Codicia el Hacha de Leviatán en cuanto la ve, agarrando su mango para neutralizar a Kratos. Muere cuando Kratos le clava la hoja en la cabeza tras haberlo aferrado por la garganta. En la lore del videojuego los trolls nórdicos son criaturas antiguas y poderosas, con territorio y lenguaje propios. [Diseño visual en el juego: corpulentos, piel gris-verde, portadores de grandes pilares de piedra como armas].',
        star: '★★ El troll revela que el mundo de GoW tiene criaturas con lenguaje y reclamos territoriales propios — no son bestias vacías. Que Kratos no entienda la Lengua Antigua y Atreus sí es la primera inversión de capacidades entre padre e hijo: el niño sabe algo que el guerrero no sabe.'
    },
    {
        id: 'ciervo', label: 'El Ciervo (Presa)', group: 'CRIATURA', type: 'Criatura — Presa',
        desc: 'Ciervo de dieciséis puntas de color leonado. Pace ajeno a su presencia (se posicionaron a favor del viento). Al errar Atreus, sale corriendo; al ser herido en el segundo disparo, las patas delanteras lo fallan; cae en el segundo claro. Aún vivo cuando llegan — su sufrimiento cataliza la crisis emocional de Atreus y exige el golpe de gracia. Su cuerpo atraerá al troll. Destino final: el troll roba el cadáver y lo levanta triunfante hacia sus fauces; Kratos arroja el Hacha de Leviatán cargada de escarcha y el hacha penetra la piel del ciervo congelándolo instantáneamente — cuando impacta el suelo, el cadáver se hace añicos en cien pedazos. Resultado: sin presa. Comerán tejón.',
        star: '★ El ciervo completa su arco narrativo como objeto de destrucción: fue blanco de aprendizaje, objeto de compasión forzada, y finalmente detonador de la primera muestra de poder real de Kratos. Su desaparición en escarchas es la consecuencia directa de que el mundo nórdico no deja tregua.'
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
        desc: 'La ausencia de Faye es la herida abierta que permea toda la obra. En los primeros capítulos Atreus la evoca en cada momento de dificultad: cuando falla, cuando acierta, cuando necesita compasión. La única mención directa de Kratos — «Tu madre te enseñó bien» — es el mayor elogio del relato, mediado a través de ella. El duelo toma forma concreta en el hogar: Atreus cuida el asador de tejón y las llamas lo arrastran al recuerdo de la pira funeraria (linos blancos, el fuego consumiéndola) y de la calidez de su mejilla pegada a la de él mientras le enseñaba a tensar el arco. La tercera silla vacía junto a Kratos intensifica la pérdida a cada comida en silencio. Por la noche, tumbado en su catre frente a la cama ahora half-vacía de sus padres, Atreus escucha la respiración forzada de Kratos y enfrenta su primera duda teológica: si su madre le enseñó que hay dioses buenos que cuidan a los humanos, ¿por qué esos mismos dioses dejaron a su madre sin protección? El duelo no ha sido procesado — ni por el niño, ni por el padre.',
        star: '★★★ La duda teológica de Atreus es el primer resquebrajamiento de la fe que Faye sembró en él. Faye creía en dioses benevolentes; el mundo que Atreus ve no los confirma. Esta grieta crecerá a lo largo de la obra.'
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
        id: 'ragnarok-profecia', label: 'Ragnarök y Fimbulwinter', group: 'MITOLOGIA', type: 'Lore — Profecía',
        desc: 'Ragnarök («crepúsculo de los dioses») es la gran profecía del cosmos nórdico: una serie de eventos catastróficos que culminarán en la destrucción de Asgard, la muerte de los principales dioses y el hundimiento del mundo bajo las aguas — seguido de un renacimiento. No es simplemente «el fin del mundo»: es el fin de un ciclo y el inicio del siguiente. En el universo GoW, Ragnarök es la pesadilla de Odín: conoce la profecía en fragmentos (los gigantes la ocultaron antes de ser exterminados) y su obsesión por evitarla es la raíz de toda su tiranía. Precede a Ragnarök el Fimbulwinter — el «gran invierno»: tres años consecutivos sin verano, cubriendo todos los reinos de nieve y oscuridad, acompañados de guerras fratricidas. Es la señal cosmológica de que el crepúsculo se acerca. En el universo GoW, el Fimbulwinter no debería ocurrir hasta décadas más tarde — su llegada prematura indicaría que algo lo desencadenó antes de tiempo. El bosque nevado de los primeros capítulos ya lleva en sí la semilla del invierno que viene.',
        star: '★★★ Ragnarök es el horizonte narrativo de toda la saga. Los dioses reaccionan ante él de maneras radicalmente distintas — Odín con terror y control, Týr con aceptación y esperanza. La pregunta estructural de la historia: ¿puede cambiarse el destino, o solo navegarse? El Fimbulwinter es el reloj que alguien adelantó sin permiso.'
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
        desc: 'El arma icónica de Kratos, forjada por los enanos Brok y Sindri originalmente para Faye. Transportada en eslinga en la espalda. Mecánica: carga de escarcha mediante comando mental silencioso, lanzamiento con precisión, retorno al cerrar la palma abierta. El poder del hacha opera a través del Gáldr — la magia rúnica nórdica inscrita en el metal: sus ataques rúnicos son el sistema de habilidades del jugador en el videojuego. En combate con el troll: congela el ciervo instantáneamente al penetrar su piel, el cadáver se hace añicos al tocar el suelo. En combate con el Desconocido: el hacha se embebe en su pecho con escarcha máxima — pero el Desconocido NO SE CONGELA; es inmune al frost. La herida se cierra sola en segundos. Esta inmunidad redefine el mapa de amenazas: la primera arma de Kratos no puede herir de forma duradera al agente de Odín.',
        star: '★★★ La inmunidad al frost del hacha es la mayor revelación táctica del arco inicial. Kratos construyó todo su sistema de combate en torno a esta arma — y el primer ser verdaderamente peligroso que encuentra la hace irrelevante. La obra establece que el viaje exigirá algo más que el hacha. Además, el hacha fue un regalo de amor (Faye la comisionó) frente a las Blades, una cadena de esclavitud (Ares las impuso) — dos armas que encarnan dos versiones de Kratos.'
    },

    {
        id: 'novelizacion', label: 'Novelización Oficial', group: 'VIDEOJUEGO', type: 'Obra — Novela',
        desc: 'Adaptación literaria oficial del videojuego God of War (2018), escrita por J.M. Barlog (relacionado con el director Cory Barlog). La novelización amplía el texto del videojuego con acceso a la voz interior de los personajes — en especial de Atreus — y con detalles sensoriales y psicológicos que el medio interactivo no puede transmitir directamente. El Cap. 1 corresponde aproximadamente a la secuencia de apertura del juego.',
        star: '★★ La novelización no es simplemente el guión del juego transcrito: añade capas de subjetividad que el juego sugiere pero no dice. La mayor diferencia: en el juego Kratos es opaco; en la novela su lucha interior es parcialmente visible.'
    },

    // ── EVENTOS — CAPÍTULO 2 ───────────────────────────
    {
        id: 'hacha-primera-vez', label: 'Primera Vez del Hacha', group: 'EVENTO', type: 'Evento — Revelación',
        desc: 'Tras el primer golpe del troll que envía a ambos rodando, Kratos se pone en pie y extrae el Hacha de Leviatán de la eslinga en su espalda. El troll levanta el cadáver del ciervo triunfalmente hacia sus fauces. Kratos emite un comando silencioso — sin palabras, sin gesto visible — y carga el hacha con escarcha. La lanza al troll. El ciervo baja como escudo; cuando el hacha penetra su piel lo congela instantáneamente. El troll lo suelta. El cadáver se hace añicos en cien pedazos al impactar el suelo. Kratos extiende la palma abierta: el hacha regresa sin demora, cortando el aire. El troll la ve y la codicia de inmediato — gira para encarar a Kratos con la nueva evaluación de quién tiene el arma. La sonrisa de Kratos cuando el troll detecta el hacha sobre su cabeza es el primer destello de disfrute del combate que el texto le concede.',
        star: '★★★ La primera aparición del hacha no es un ataque: es un rescate fallido del ciervo y una demostración de poder ante el troll. El arma define a Kratos ante el mundo más rápido que cualquier declaración. La sonrisa es el momento en que el Dios de la Guerra — no el padre — emerge por primera vez en la saga nórdica.'
    },
    {
        id: 'breakdown-atreus', label: 'Colapso Emocional de Atreus', group: 'EVENTO', type: 'Evento — Ruptura Emocional',
        desc: 'Cuando el troll cae, el claro queda en silencio. Atreus se pone en pie con un grito áspero. Arroja el arco a un lado. Se deja caer de rodillas junto al cuerpo del troll y clava el cuchillo de caza en el cadáver repetidamente, una y otra vez. Todo el miedo embotellado, la rabia y la angustia estallan en la superficie: «el pensamiento de perder a su padre después de acabar de perder a su madre lo llevó a un lugar donde ya no podía contener sus emociones». Grita: «¡Esto es lo que te mereces!» Lágrimas le nublan la visión. Aparta la cara para que Kratos no vea lo que está escrito en ella — no quiere que su padre lo vea como un niño que llora. «¡Crees que te tengo miedo!» — todavía snarling al troll muerto, bajando el cuchillo, limpiándose las lágrimas. Una tos violenta lo fuerza a manos y rodillas, sin poder respirar. Kratos lo agarra por la cintura para alejarlo; Atreus busca golpear otra vez. «¡No eres nada para mí! ¡Nada!» — entre toses. Kratos lo toma por los hombros y lo obliga a mirarlo. «¡Muchacho! ¡Mírame! ¡Ahora!» Atreus cede completamente a su dolor interior. Kratos sostiene sus muñecas y bloquea su mirada. Sin sonrisa, sin palabras de consuelo, sin abrazo que indique que comparte el dolor. Lo suelta para que Atreus enfunde el cuchillo. La tos vuelve, pero esta vez Atreus la suprime por fuerza de voluntad.',
        star: '★★★ El colapso es la escena más reveladora de Atreus hasta ahora. No es debilidad: es la acumulación de dos pérdidas — la madre muerta y el miedo casi materializado de perder al padre. Que Kratos no ofrezca consuelo verbal no significa que no lo vea: lo agarra, lo detiene, lo obliga a estar presente. Es su forma de consuelo. El niño que al inicio del relato intentaba no parecer pequeño termina aquí completamente expuesto — y sobrevive al momento sin desintegrarse.'
    },
    {
        id: 'veredicto-no-listo', label: '«No Estás Listo»', group: 'EVENTO', type: 'Evento — Veredicto',
        desc: 'Tras el colapso, jadeando, Atreus dice «Lo hicimos». Kratos lo observa en silencio durante un momento largo — «parece leer su mente, evaluándolo de una forma que Atreus no puede comprender». «No estás listo», Kratos muta finalmente. Atreus explota: «¿Qué?» Sabe que debería callar. No puede. «Encontré al ciervo. Disparé al ciervo. Me demostré a mí mismo. ¿Cómo no estoy listo?» Kratos devuelve el hacha a su eslinga en la espalda y se limpia la sangre del troll de la cara. Sale del claro sin más comentario. «¿Qué vamos a comer?» — «Tejón.» — «Odio el tejón.» Silencio. Atreus grita detrás: «No he estado enfermo en mucho tiempo. Puedo hacer todo lo que me pidas.» Kratos lanza una mirada sobre el hombro: «No estás listo» — con gravedad definitiva. Atreus susurra «Sí lo estoy». Pasa junto al cadáver del troll y le da una patada final en el vientre — el cadáver se mueve por una flatulencia súbita y nauseabunda. Atreus se pellizca la nariz. Kratos desaparece en el bosque. «Estoy listo», repite Atreus más alto. «No hables más». «Te lo voy a demostrar» — en voz muy baja, bajo el aliento.',
        star: '★★★ El veredicto es deliberadamente inexplicado. El texto ofrece varios posibles motivos — el colapso emocional incontrolable, la tos que revela fragilidad física, haber necesitado ser retenido durante el combate, la incapacidad de aceptar el veredicto sin argumento. Kratos no justifica porque en su filosofía la justificación no es parte de la enseñanza. La patada al troll muerto y la flatulencia son el único beat cómico de un capítulo brutalmente tenso. «Te lo voy a demostrar» es la promesa que estructurará los capítulos siguientes.'
    },

    // ── RASGOS / CONCEPTOS — CAPÍTULO 2 ───────────────
    {
        id: 'lengua-antigua', label: 'Lengua Antigua', group: 'TEMA', type: 'Rasgo — Habilidad de Atreus',
        desc: 'La Lengua Antigua (Old Norse / lengua primordial de los seres del mundo nórdico) es el idioma del troll — y, por extensión, de muchas criaturas y seres no humanos de los Nueve Reinos. Kratos no la comprende: pregunta «¿Qué dijo?» con la boca a un lado. Atreus entiende parcialmente — traduce «Kjöt» como «carne» y la última palabra como «tomar». Cuando el troll clama «¡No pertenecéis aquí!», Atreus no solo descifra sino que responde directamente: «¡Sí pertenecemos! Cazamos donde nos plazca.» Está «asombrado de haber descifrado el reclamo del troll». Faye anticipó que algún día este intercambio ocurriría y lo preparó para manejarlo. Esta capacidad lingüística marca la primera habilidad que Atreus posee y Kratos no — el mundo habla a este niño en registros que el guerrero no puede escuchar.',
        star: '★★★ La Lengua Antigua invierte por primera vez la jerarquía padre-hijo: Atreus es el intérprete, Kratos depende de él para entender. Esta dinámica crecerá a lo largo de toda la obra — Atreus no es solo el niño que debe aprender del padre; es el puente entre Kratos y el mundo que lo rodea. Faye lo preparó para este rol con décadas de anticipación.'
    },
    {
        id: 'miedo-perder-padre', label: 'Miedo a Perder al Padre', group: 'TEMA', type: 'Tema — Motivación',
        desc: 'El motor emocional que desencadena el colapso de Atreus después del combate: «negándose a aceptar la posibilidad de perder a otro progenitor». Este miedo es la cara oculta del duelo por Faye — Atreus ya perdió a su madre; la sola posibilidad de perder a su padre también lo arrastra a un lugar de rabia y dolor sin fondo. Durante el combate este miedo opera como combustible: cuando el troll levanta la roca apuntando a Atreus, Kratos grita su advertencia; cuando el troll agarra a Kratos por el cuello, Atreus deja de dudar y apunta al pecho del troll con total determinación. El miedo activa la acción donde la instrucción paterna no bastaba. Después del combate el mismo miedo se convierte en rabia descontrolada.',
        star: '★★★ El miedo a perder al padre es el eslabón emocional más importante del arco de Atreus. El niño no está luchando por demostrar valor — está luchando por no quedarse solo. Esto recontextualiza toda su búsqueda de aprobación: no quiere que Kratos lo vea como capaz; quiere que Kratos se quede.'
    },
    {
        id: 'tos-atreus', label: 'La Tos de Atreus', group: 'ATREUS', type: 'Rasgo — Condición Física',
        desc: 'Durante el colapso emocional posterior al combate, Atreus sufre una tos violenta que lo fuerza a manos y rodillas sin poder respirar. La suprime por fuerza de voluntad para no parecer débil. A la mañana siguiente Kratos lo confronta explícitamente: «Y te arriesgas a caer enfermo cada vez que tu ira te domina. No es la primera vez.» Atreus concede: «Ya sé, padre, pero ha pasado mucho tiempo desde la última vez que estuve enfermo. Al menos... La última vez fue grave. Estoy listo.» El reconocimiento tácito de un episodio anterior grave queda flotando sin detalles. La ira sin control desencadena la enfermedad — Kratos lo sabe y lo usa como argumento para el veredicto. La condición física de Atreus no es una debilidad menor: es una razón estratégica real para que Kratos lo considere todavía no listo.',
        star: '★★★ La conexión ira-enfermedad que Kratos establece transforma la condición de Atreus de rasgo de simpatía a variable narrativa activa. No es solo que el niño sea frágil: es que la fragilidad se dispara precisamente cuando el niño más necesita ser fuerte. Esto es lo que el veredicto protege — aunque no lo explique.'
    },

    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 3 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════

    // ── PERSONAJES NUEVOS ──────────────────────────────
    {
        id: 'el-desconocido', label: 'El Desconocido', group: 'KRATOS', type: 'Personaje — Amenaza',
        desc: 'Figura enviada por Odín que irrumpe en los terrenos del hogar de Kratos. Descripción física: hombre sin camisa, aparenta la misma edad de Kratos, no imponente a primera vista. Tatuajes rúnicos dispersos por la piel. Sin sonrisa. Trenzas con cuentas colgando de una barba castaña completa. Cabello corto recogiendo copos de nieve. Ropa andrajosa y raída — parece un mendigo. Mirada sin alma, penetrante, rostro ilegible. Sus primeras palabras: «Pensé que serías más grande. Pero tú eres definitivamente el indicado.» / «Estás muy lejos de casa, ¿verdad?» — sabe que Kratos es un dios extranjero. Poderes revelados en combate: fuerza capaz de enviar a Kratos volando con un solo uppercut; no sangra ni se magulla a pesar de golpes devastadores; el Hacha de Leviatán lo clavó en el pecho pero NO lo congeló — inmune al poder de escarcha — y la herida se cerró sola en segundos; levanta un monolito tallado mayor que él mismo y lo arroja; su cuello fue roto por Kratos y su cuerpo colapsó. Motivación declarada: «Odín me envió por respuestas, pero tu vanidad convirtió esto en batalla.» Pregunta obsesiva durante el combate: «¿Por qué hay dos camas?» / «¿A quién estás escondiendo?» — detectó la trampa del suelo al asomarse por el agujero del techo. Última revelación: «No puedo sentir nada de esto» — ríe. No siente dolor. Kratos al final: «¿Cómo supo de mí y mi pasado? ¿Cómo me encontró después de todo este tiempo?»',
        star: '★★★ El Desconocido es el punto de inflexión de toda la historia: confirma que Odín sabe de Kratos, que fue enviado a buscarlo, y que las reglas del mundo nórdico no aplican igual para él. Su inmunidad al hacha redefine el mapa de amenazas. La pregunta por las dos camas convierte a Atreus de secreto doméstico en objetivo potencial de Odín.'
    },
    {
        id: 'jophie', label: 'Jöphie', group: 'CRIATURA', type: 'Criatura — Gyrfalcón',
        desc: 'Gyrfalcón de gran tamaño: mitad el tamaño de Atreus, plumaje negro moteado, envergadura de dos metros. Era el pájaro de Faye — solo obedecía a ella; nunca vino a Atreus cuando él lo intentó. Reaparece en el camino de regreso al hogar, saliendo del dosel del bosque y dispersando a los dos cuervos negros en direcciones opuestas antes de posarse en un tocón cercano. Ignoró el brazo extendido de Atreus como percha. «Solo iba a Madre. Nunca vendría a mí», dice Atreus, abandonando el intento. Kratos apenas le presta atención más allá de un vistazo pasajero — mantiene la vigilancia en la vegetación circundante.',
        star: '★★ Jöphie es el primer ser vivo que manifiesta el vínculo exclusivo con Faye. Su dispersión de los cuervos puede ser coincidencia o acto intencional — su regreso al día siguiente del funeral sugiere que el mundo animal todavía responde a Faye de maneras que sus familiares no comprenden del todo.'
    },

    // ── EVENTOS CAP. 3 ─────────────────────────────────
    {
        id: 'regreso-al-hogar', label: 'Regreso al Hogar', group: 'EVENTO', type: 'Evento',
        desc: 'Kratos y Atreus emergen del bosque — Kratos primero, Atreus unos pasos detrás con un tejón muerto al hombro. Se detienen en el saliente rocoso que domina el valle. La palabra «Hogar» resuena en Atreus con un significado ahora completamente distinto: el hogar no puede ser lo mismo. Kratos escanea los campos circundantes antes de avanzar por el sendero. En el camino ven los cuervos negros (nodo: cuervos-odin) que Jöphie dispersa. La presencia del troll tan cerca de su hogar envía un malestar por las entrañas de Kratos — nunca antes habían visto un troll tan próximo a donde vivían.',
        star: '★★ El «Hogar» ya no es refugio: es el espacio donde la ausencia de Faye tiene forma física (la silla vacía, la cama half-vacía, el jardín sin dueña). El malestar de Kratos ante la proximidad del troll introduce la idea de que el mundo hostil se está acercando a lo único que intentaba proteger.'
    },
    {
        id: 'noche-en-casa', label: 'Noche en el Hogar', group: 'EVENTO', type: 'Evento',
        desc: 'Secuencia completa de la noche de regreso. (1) PREPARACIÓN: Atreus pela y eviscera el tejón para la cena; lo ensarta en el asador ante el hogar. Las llamas disparan el recuerdo de la pira funeraria de Faye (ver nodo pira-faye). Kratos grita cuando la carne se quema. Tejón carbonizado. (2) CENA: «Discúlpate con tu vientre vacío, no conmigo» — cenan en silencio. La tercera silla vacía junto a Kratos agranda la pérdida. (3) SUEÑO: «Es hora», dice Kratos y se retira a su rincón. Atreus intenta reavivar en su mente la sonrisa de Faye — decide que esta noche se forzará a soñar con ella, con las veces que trabajaban juntos en el jardín. (4) INSOMNIO: Atreus escucha la respiración forzada de Kratos desde el otro lado de la habitación. Mira los maderos del techo. Se siente más solo que nunca. Ira ante el pensamiento de haber perdido todo lo que le importaba — pero se corrige: tiene a su padre. No está solo. ¿Por qué los dioses lo castigan? Si Faye le enseñó que hay dioses buenos que se preocupan por los humanos, ¿por qué esos dioses dejaron a su madre sin protección? (5) Minutos después el agotamiento lo arrastra a un sueño sin imágenes — y lo despierta el sonido de Kratos batallando en su pesadilla.',
        star: '★★★ La noche en casa es el mapa emocional del estado de ambos: Kratos forzando la respiración (conteniendo algo), Atreus forzando el sueño (huyendo de algo). La duda teológica de Atreus es la primera vez que cuestiona el mundo de creencias que Faye construyó en él — y lo hace precisamente en el espacio físico que ella dejó vacío.'
    },
    {
        id: 'pira-faye', label: 'La Pira Funeraria de Faye', group: 'EVENTO', type: 'Evento — Memoria',
        desc: 'Recuerdo que las llamas del hogar despiertan en Atreus: Faye yace amortajada en linos blancos sobre la pira; las llamas la consumen por todos lados. En ese momento Atreus no lloró — su mente estaba tan dominada por el dolor que solo pudo quedarse paralizado en shock. Después sintió el pinchazo cuando recordó que había dejado el cuchillo de caza de Faye sobre su pecho, puesto allí después de usarlo para cortar el paño que la envolvía. En el último instante metió la mano entre las llamas para recuperar la hoja, tirándola a un lado ante el dolor abrasador que le cruzó la palma. Las lágrimas llegan ahora, ante el fuego de la cocina, retrasadas respecto al momento real.',
        star: '★★★ La pira concentra el duelo de Atreus en un solo objeto: el cuchillo de Faye recuperado de las llamas. El gesto — meter la mano en el fuego para no perder el último objeto tangible de su madre — define su relación con la pérdida de manera más elocuente que cualquier llanto. El dolor físico de la palma quemada es el precio que pagó por retener algo de ella.'
    },
    {
        id: 'pesadilla-kratos', label: 'La Pesadilla de Kratos', group: 'EVENTO', type: 'Evento — Memoria / Sueño',
        desc: 'Kratos lucha en una pesadilla mientras Atreus duerme en la habitación: un Kratos sin barba — más joven, vestido con ropas griegas — sostiene una posición defensiva contra una pared rocosa, blandiendo las Blades of Chaos para contener a tres lobos gigantes el doble de su altura. El negro, de ojos verde esmeralda, ocupa la posición más adelantada como alfa. El blanco y el gris flanquean. Detrás de las bestias, una mujer con capa larga y capucha que oculta gran parte de su rostro alza el brazo y los tres lobos se lanzan al ataque simultáneo. «¿QUIÉN ERES?» grita Kratos con toda la fuerza que puede invocar — justo cuando el lobo negro le desgarra el muslo arrastrándolo. Kratos se incorpora en la cama empapado en sudor. El sol naciente lo envuelve en naranja y rojo. Silencio. Su hijo sigue dormido — las palabras fueron parte de la pesadilla, no gritadas en voz alta. Durante un buen rato intenta recordar el rostro de la mujer. Los brazos le duelen a pesar del descanso. Por décadas había conseguido enterrar aquel recuerdo. Ahora ha vuelto — y no puede discernir su propósito.',
        star: '★★★ La pesadilla es la primera imagen directa del pasado griego de Kratos en la obra nórdica. Los tres lobos y la mujer encapuchada son la pregunta que el texto planta sin responder: no son enemigos genéricos de su pasado, sino una escena específica cuya identidad y significado quedarán latentes. El Kratos sin barba es el Kratos anterior a Faye, anterior al intento de ser padre — y aún así está a la defensiva, no al ataque.'
    },
    // ── OBJETOS CAP. 3 ─────────────────────────────────
    {
        id: 'cuervos-odin', label: 'Cuervos Negros', group: 'OBJETO', type: 'Objeto — Señal / Vigilancia',
        desc: 'Dos cuervos negros graznando en formación de arco sobre el bosque, camino de regreso al hogar. Atreus nunca los había visto antes sobre su bosque. Su tono al señalarlos inquieta a Kratos. Faye instruyó a Atreus que la avisara si alguna vez veía cuervos sobre su bosque — Atreus nunca tuvo oportunidad de hacerlo. Kratos descarta la señal: «Déjalos.» Momentos después el gyrfalcón Jöphie sale del dosel y los dispersa en direcciones opuestas. En la mitología nórdica, Huginn y Muninn son los cuervos de Odín que vuelan por los reinos recopilando información para el Allfather. Su aparición sobre el bosque exactamente después de la muerte de Faye y el primer combate del troll sugiere que alguien — o algo — ha comenzado a prestar atención a lo que ocurre en este rincón de Midgard.',
        star: '★★★ Los cuervos son el signo más ominoso del capítulo y el que Kratos menos quiere examinar. Que Faye instruyera a Atreus sobre ellos específicamente confirma que ella sabía qué significaban y vigilaba su aparición. Su llegada ahora — después de su muerte — implica que la vigilancia que ella temía ya comenzó.'
    },
    {
        id: 'blades-of-chaos', label: 'Blades of Chaos', group: 'OBJETO', type: 'Objeto — Arma del Pasado',
        desc: 'Las Cuchillas del Caos: par de espadas-cadena encantadas por Ares que Kratos porta atadas permanentemente a sus muñecas — no pueden ser removidas. Arma icónica de su era griega. En la vida nórdica cotidiana las mantiene ocultas bajo los vendajes. Aparecen por primera vez en la pesadilla: el Kratos joven y sin barba las blande en posición defensiva contra los tres lobos gigantes — no como herramienta de ataque, sino de contención desesperada. Su existencia física debajo de los vendajes es confirmada por la lógica del sueño: el pasado no desaparece cuando uno lo cubre. En el videojuego las Blades of Chaos son el arma de fuego y caos que contrasta directamente con el hacha de escarcha: dos filosofías de combate encarnadas en dos armas.',
        star: '★★★ La aparición de las Blades en el sueño es más significativa que si Kratos las usara en el presente: el sueño no tiene filtros, no tiene vendajes. Lo que Kratos suprime en la vigilia emerge sin disfraces en la pesadilla. Las Blades no son solo armas — son la cadena que Ares le impuso, el símbolo de la versión de sí mismo que más le aterra replicar.'
    },
    {
        id: 'trampa-suelo', label: 'Trampa del Suelo', group: 'OBJETO', type: 'Objeto — Refugio Preparado',
        desc: 'Escotilla en el suelo de la casa de Kratos, oculta bajo una alfombra de piel de oso negro. Pintada con un símbolo rúnico. Lleva a un espacio de rastreo de metro y medio de profundidad donde, en un rincón, reposa un arcón rectangular de madera a media luz. Kratos la abrió con un tirón y escondió a Atreus allí antes de enfrentar al Desconocido. Atreus nunca había tenido permiso para bajar allí — Kratos se lo había prohibido. La existencia de este escondite preparado confirma que Kratos anticipó que algún día alguien vendría buscándolos: no construyó una trampa de improviso sino un refugio planificado, con travesaño de refuerzo en la puerta. El arcón en el rincón — cuyo contenido no se revela — es la pregunta sin respuesta del espacio.',
        star: '★★★ El espacio bajo el suelo es el símbolo más revelador del estado mental de Kratos como padre: construyó la salida de emergencia antes de que existiera la emergencia. Todo este tiempo «siendo padre» también estuvo siendo guardaespaldas silencioso. El arcón misterioso en el rincón es el elemento que el texto planta sin abrir.'
    },
    {
        id: 'cuchillo-faye', label: 'Cuchillo de Caza de Faye', group: 'OBJETO', type: 'Objeto — Relquia',
        desc: 'El cuchillo de caza personal de Faye, que Atreus usó para cortar el paño con el que la envolvió en su pira funeraria. Lo dejó sobre el pecho de su madre entre los linos blancos — y al darse cuenta, en el último instante, metió la mano entre las llamas para recuperarlo. El dolor abrasador cruzó su palma. Lo tiró a un lado. Es el objeto más cargado emocionalmente que Atreus posee: el último contacto físico con el cuerpo de su madre, recuperado a un costo físico real. Distinto del cuchillo de combate de Atreus (ver nodo cuchillo-atreus): este es específicamente el cuchillo de Faye, no el suyo.',
        star: '★★★ El gesto de meter la mano en el fuego para recuperar el cuchillo define el duelo de Atreus de manera más precisa que cualquier llanto: no pudo proteger a su madre pero puede retener algo de ella. La palma quemada es la cicatriz del amor. El cuchillo aparecerá — o debería aparecer — en los capítulos siguientes como objeto de significado acumulado.'
    },

    // ── TEMAS CAP. 3 ───────────────────────────────────
    {
        id: 'duda-dioses', label: 'Duda Teológica', group: 'TEMA', type: 'Tema — Filosófico',
        desc: 'Tumbado en la oscuridad, incapaz de dormir, Atreus formula la pregunta que el dolor ha estado aplazando: «¿Por qué los dioses lo están castigando así? ¿Qué había hecho para enfurecerlos tanto? Su madre le predicó que había dioses que eran buenos y se preocupaban por los humanos. ¿Por qué esos mismos dioses eligieron dejar a su madre sin protección?» La fe que Faye construyó en él — en dioses benevolentes — no resiste el peso de su ausencia. Atreus no la rechaza todavía: la cuestiona. La duda es genuina, no retórica. Y el mundo que lo rodea — trolls, cuervos, un desconocido que sabe lo que son — no ofrece respuestas reconfortantes.',
        star: '★★★ La duda teológica es la semilla de uno de los arcos más importantes de la saga: ¿qué clase de dioses gobiernan este mundo? La respuesta que el texto irá construyendo — dioses crueles, paranoicos, capaces de genocidio — hará que la fe de Faye en dioses buenos parezca o bien ingenua o bien radicalmente subversiva.'
    },

    // ══════════════════════════════════════════════════════════════
    // CAPÍTULO 4 — NUEVOS NODOS
    // ══════════════════════════════════════════════════════════════

    {
        id: 'combate-desconocido', label: 'Combate con el Desconocido', group: 'EVENTO', type: 'Evento — Secuencia de Combate',
        desc: '(0) LLEGADA: ramas partiéndose, golpe sordo, alas coriáceas enormes despegando, chillido antinatural. Golpes atronadores en la puerta. «¡Sal! Sé quién eres. Y lo que es más importante, ¡sé lo que eres!» Kratos esconde a Atreus en la trampa del suelo. Decide no empuñar el hacha — «eso es lo que haría el viejo Kratos». Sale. El Desconocido: ropa andrajosa, tatuajes rúnicos, trenzas con cuentas, mirada sin alma. «Pensé que serías más grande. Pero tú eres definitivamente el indicado.» / «Estás muy lejos de casa, ¿verdad?» Bofetada calculada. Kratos la absorbe, recuerda el voto — «la rabia a la que juró que nunca volvería». Cuarto puñetazo: «Te avisé.» (1) GOLPE AÉREO: uppercut envía a Kratos volando sobre el tejado. (2) TEJADO: agarra a Kratos, lo estrella en el alero, lluvia de golpes. Mira por el agujero: «¿Por qué hay dos camas?» (3) HACHA — INMUNIDAD: hacha de escarcha clavada en el pecho. No se congela. Ningún ser hasta ahora ha resistido el frost. La herida se cierra en segundos. Regeneración instantánea. No sangra ni se magulla. (4) MONOLITO Y GRIETA: tronco arrancado, monolito colosal volcado sobre el Desconocido. Lo levanta sonriendo: «Odín me envió por respuestas, pero tu vanidad lo convirtió en batalla.» Colisión, tierra cede, caen a una grieta. (5) FINAL — «No puedo sentir nada de esto.» Ríe. Kratos emerge tembloroso. Llave de cuello inversa — le rompe el cuello. Cuerpo a la grieta. Espera minutos. No vuelve. Kratos: «¿Cómo supo de mí y de mi pasado? ¿Cómo me encontró?»',
        star: '★★★ La estructura (llegada→bofetada absorbida→escalada inevitable) es espejo de la pedagogía de Kratos: resistir hasta que ya no se puede. La inmunidad al frost + regeneración + ausencia de dolor confirman que ninguna de sus armas puede resolver esta amenaza de forma permanente. «¿Por qué hay dos camas?» convierte a Atreus en objetivo potencial de Odín. La revelación del Allfather transforma la escala narrativa de drama doméstico a enfrentamiento cósmico.'
    },
    {
        id: 'voto-kratos', label: 'El Voto de Kratos', group: 'KRATOS', type: 'Rasgo — Decisión',
        desc: 'Al ser abofeteado por el Desconocido, Kratos recuerda «el voto que hizo cuando llegó a esta tierra». No se detalla el contenido exacto del voto, pero su función es clara: fue una promesa de no revertir a quien fue, de no dejarse arrastrar por la rabia irreflexiva. Se fuerza a mantener los brazos a los lados mientras el fuego nace en sus ojos — «la rabia a la que juró que nunca volvería». Solo cuando el Desconocido lo golpea repetidamente y él le atrapa el cuarto puño decide responder: el voto no es absoluto, es un umbral. La diferencia entre el viejo y el nuevo Kratos es la pregunta que hace antes de actuar — «¿debo?» en vez de simplemente actuar.',
        star: '★★★ El voto es el dispositivo estructural que explica toda la contención de Kratos en la obra. No es impotencia ni cobardía — es una promesa activa que debe renovar en cada provocación. Que el Desconocido la fuerce a romperse, aunque sea el último recurso, confirma que el mundo nórdico no le dejará mantener el voto de manera indefinida.'
    },
    {
        id: 'odin-sabe', label: 'Odín Sabe de Kratos', group: 'EVENTO', type: 'Evento — Revelación',
        desc: 'La confesión del Desconocido durante el combate: «Odín me envió por respuestas.» Confirma que el Allfather no solo existe en el horizonte amenazante del lore — ya ha actuado. Ya envió un agente. Ya localiza a Kratos. Las preguntas obsesivas del Desconocido («¿A quién estás escondiendo?», «¿Por qué hay dos camas?») indican que Odín no lo sabe todo: sabe que Kratos existe pero no sabe de Atreus. Kratos al final del combate: «¿Cómo supo de mí y de mi pasado? ¿Cómo me encontró después de todo este tiempo?» — la pregunta que no tiene respuesta dentro del capítulo pero que define el nuevo estado del mundo: ya no es posible ser invisible.',
        star: '★★★ La revelación «Odín me envió» es el momento en que la historia deja de ser un drama doméstico padre-hijo y se convierte en algo de escala cósmica. El tiempo de esconderse ha terminado — no porque Kratos quiera salir, sino porque Odín ya lo encontró. Todo lo que viene es consecuencia de este momento.'
    },
    {
        id: 'jardin-faye', label: 'El Jardín de Faye', group: 'LUGAR', type: 'Lugar — Hogar',
        desc: 'El jardín detrás de la casa de Kratos y Faye — el espacio donde Faye era más feliz, según el recuerdo de Atreus: «siempre era más feliz cuando cuidaba sus plantas». Aparece en el combate como escenario de destrucción: el Desconocido lanza a Kratos al jardín detrás de la casa durante el intercambio. El espacio íntimo de Faye se convierte en arena de combate. La ironía es estructural: el único lugar asociado a la paz y a la presencia de Faye es donde se libra la batalla más violenta de la historia hasta ahora.',
        star: '★ El jardín invadido es la metáfora más clara de que el pasado ya no puede proteger el presente. Faye construyó un hogar; el mundo lo derrumba por el tejado y lo arrasa por detrás.'
    },

];
