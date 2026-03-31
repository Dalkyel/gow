// ═══════════════════════════════════════════════════════
// LINKS — God of War: Novelización + Videojuego
// ═══════════════════════════════════════════════════════

const links = [

    // ── Root → Categorías ──────────────────────────────
    { source: 'root', target: 'cat-lore',       label: 'lore previo',  type: 'cat' },
    { source: 'root', target: 'cat-personajes', label: 'personajes',   type: 'cat' },
    { source: 'root', target: 'cat-mundo',      label: 'mundo',        type: 'cat' },
    { source: 'root', target: 'cat-trama',      label: 'trama',        type: 'cat' },
    { source: 'root', target: 'cat-temas',      label: 'temas',        type: 'cat' },
    { source: 'root', target: 'cat-criaturas',  label: 'criaturas',    type: 'cat' },
    { source: 'root', target: 'cat-videojuego', label: 'juego',        type: 'cat' },

    // ── Lore: Cosmología ───────────────────────────────
    { source: 'cat-lore',  target: 'yggdrasil',         label: 'eje cosmológico',    type: 'arc' },
    { source: 'cat-lore',  target: 'lago-nueve',        label: '',                   type: 'arc' },
    { source: 'cat-lore',  target: 'ragnarok-profecia', label: 'profecía central',   type: 'arc' },
    { source: 'cat-lore',  target: 'guerra-aesir-vanir',label: 'historia',           type: 'arc' },

    { source: 'yggdrasil', target: 'lago-nueve',        label: 'emerge de',          type: 'geo' },
    { source: 'yggdrasil', target: 'nueve-reinos',      label: 'conecta',            type: 'lore' },

    // ── Lore: Dioses ───────────────────────────────────
    { source: 'cat-lore',        target: 'odin-allfather',  label: 'antagonista central', type: 'arc' },
    { source: 'cat-lore',        target: 'thor-trueno',     label: '',                    type: 'arc' },
    { source: 'cat-lore',        target: 'tyr-dios',        label: '',                    type: 'arc' },

    { source: 'odin-allfather',  target: 'asgard',          label: 'gobierna desde',      type: 'lore' },
    { source: 'odin-allfather',  target: 'ragnarok-profecia',label: 'obsesionado con evitar', type: 'lore' },
    { source: 'odin-allfather',  target: 'jotnar',          label: 'ordenó exterminar',   type: 'lore' },
    { source: 'odin-allfather',  target: 'mimir-sabio',     label: 'mantiene prisionero', type: 'lore' },
    { source: 'thor-trueno',     target: 'jotnar',          label: 'ejecutó genocidio',   type: 'lore' },
    { source: 'thor-trueno',     target: 'brok-sindri',     label: 'recibió Mjölnir de',  type: 'lore' },
    { source: 'tyr-dios',        target: 'lago-nueve',      label: 'construyó templo en', type: 'lore' },
    { source: 'tyr-dios',        target: 'jotnar',          label: 'trató como iguales',  type: 'lore' },
    { source: 'dioses-aesir',    target: 'odin-allfather',  label: 'liderados por',       type: 'lore' },
    { source: 'dioses-aesir',    target: 'thor-trueno',     label: 'incluye',             type: 'lore' },
    { source: 'dioses-aesir',    target: 'tyr-dios',        label: 'incluye',             type: 'lore' },

    // ── Lore: Razas ────────────────────────────────────
    { source: 'cat-lore',        target: 'jotnar',          label: 'raza extinta',        type: 'arc' },
    { source: 'cat-lore',        target: 'enanos-svartalf', label: '',                    type: 'arc' },
    { source: 'cat-lore',        target: 'valquirias',      label: '',                    type: 'arc' },
    { source: 'cat-lore',        target: 'draugr',          label: 'amenaza común',       type: 'arc' },

    { source: 'jotnar',          target: 'jotunheim',       label: 'habitan',             type: 'lore' },
    { source: 'jotnar',          target: 'ragnarok-profecia',label: 'conocían el futuro', type: 'lore' },
    { source: 'enanos-svartalf', target: 'brok-sindri',     label: 'representados por',   type: 'lore' },
    { source: 'valquirias',      target: 'valhalla',        label: 'conducen almas a',    type: 'lore' },
    { source: 'valquirias',      target: 'draugr',          label: 'su ausencia genera',  type: 'lore' },

    // ── Lore: Lugares ──────────────────────────────────
    { source: 'cat-lore',        target: 'asgard',          label: '',                    type: 'arc' },
    { source: 'cat-lore',        target: 'jotunheim',       label: 'destino del viaje',   type: 'arc' },
    { source: 'cat-lore',        target: 'vanaheim',        label: '',                    type: 'arc' },
    { source: 'cat-lore',        target: 'helheim',         label: '',                    type: 'arc' },
    { source: 'cat-lore',        target: 'valhalla',        label: '',                    type: 'arc' },

    { source: 'asgard',          target: 'valhalla',        label: 'contiene',            type: 'geo' },
    { source: 'asgard',          target: 'odin-allfather',  label: 'sede de',             type: 'lore' },
    { source: 'jotunheim',       target: 'atreus-madre',    label: 'origen de',           type: 'lore' },
    { source: 'helheim',         target: 'draugr',          label: 'disfunción genera',   type: 'lore' },
    { source: 'guerra-aesir-vanir', target: 'vanaheim',     label: 'devastó',             type: 'lore' },
    { source: 'guerra-aesir-vanir', target: 'mimir-sabio',  label: 'resultó en prisión de', type: 'lore' },

    // ── Lore: Personajes ───────────────────────────────
    { source: 'cat-lore',        target: 'brok-sindri',     label: 'aliados clave',       type: 'arc' },
    { source: 'cat-lore',        target: 'mimir-sabio',     label: '',                    type: 'arc' },

    { source: 'brok-sindri',     target: 'hacha-leviatán',  label: 'forjaron para Faye',  type: 'lore' },
    { source: 'mimir-sabio',     target: 'odin-allfather',  label: 'prisionero de',       type: 'lore' },
    { source: 'mimir-sabio',     target: 'lago-nueve',      label: 'encadenado en cima sobre', type: 'lore' },
    { source: 'mimir-sabio',     target: 'nueve-reinos',    label: 'conoce todos los',    type: 'lore' },

    // ── Personajes → Categorías ────────────────────────
    { source: 'cat-personajes',  target: 'kratos',          label: '',                    type: 'arc' },
    { source: 'cat-personajes',  target: 'atreus',          label: '',                    type: 'arc' },
    { source: 'cat-personajes',  target: 'atreus-madre',    label: 'ausente',             type: 'arc' },
    { source: 'cat-personajes',  target: 'el-desconocido',  label: 'amenaza',             type: 'arc' },

    // ── Kratos conexiones ─────────────────────────────
    { source: 'kratos', target: 'kratos-filosofia',   label: 'filosofía',       type: 'rel' },
    { source: 'kratos', target: 'kratos-pasado',      label: 'trasfondo',       type: 'lore' },
    { source: 'kratos', target: 'tatuajes-kratos',    label: 'porta',           type: 'rel' },
    { source: 'kratos', target: 'vendajes-kratos',    label: 'porta',           type: 'rel' },
    { source: 'kratos', target: 'hacha-leviatán',     label: 'arma principal',  type: 'rel' },
    { source: 'kratos', target: 'voto-kratos',        label: 'portador del',    type: 'rel' },
    { source: 'kratos', target: 'atreus',             label: 'padre de',        type: 'rel' },
    { source: 'kratos', target: 'tension-padre-hijo', label: 'motor del tema',  type: 'trama' },

    // ── Atreus conexiones ─────────────────────────────
    { source: 'atreus', target: 'atreus-compasion',   label: 'rasgo central',    type: 'rel' },
    { source: 'atreus', target: 'atreus-aprobacion',  label: 'motivación',       type: 'rel' },
    { source: 'atreus', target: 'atreus-madre',       label: 'duelo',            type: 'rel' },
    { source: 'atreus', target: 'loki-atreus',        label: 'identidad oculta', type: 'lore' },
    { source: 'atreus', target: 'arco-atreus',        label: 'usa',              type: 'rel' },
    { source: 'atreus', target: 'cuchillo-atreus',    label: 'usa',              type: 'rel' },
    { source: 'atreus', target: 'tension-padre-hijo', label: 'motor del tema',   type: 'trama' },
    { source: 'atreus', target: 'lengua-antigua',     label: 'posee / usa',      type: 'rel' },
    { source: 'atreus', target: 'miedo-perder-padre', label: 'motor del colapso',type: 'rel' },
    { source: 'atreus', target: 'tos-atreus',         label: 'padece',           type: 'rel' },

    // ── Faye conexiones ───────────────────────────────
    { source: 'atreus-madre', target: 'duelo-madre',          label: 'genera',               type: 'rel' },
    { source: 'atreus-madre', target: 'tension-padre-hijo',   label: 'contraste pedagógico', type: 'rel' },
    { source: 'atreus-madre', target: 'arco-atreus',          label: 'enseñó a usar',        type: 'rel' },
    { source: 'atreus-madre', target: 'jotnar',               label: 'era una Jötunn',       type: 'lore' },
    { source: 'atreus-madre', target: 'lengua-antigua',       label: 'enseñó / anticipó',    type: 'rel' },
    { source: 'atreus-madre', target: 'miedo-perder-padre',   label: 'su muerte origina',    type: 'rel' },
    { source: 'atreus-madre', target: 'cuervos-odin',         label: 'advirtió sobre',       type: 'rel' },

    // ── Trama → Eventos ───────────────────────────────
    { source: 'cat-trama',     target: 'escena-caza',          label: 'apertura',          type: 'arc' },
    { source: 'cat-trama',     target: 'primer-fallo',         label: '',                  type: 'arc' },
    { source: 'cat-trama',     target: 'segundo-disparo',      label: '',                  type: 'arc' },
    { source: 'cat-trama',     target: 'golpe-gracia',         label: 'clímax',            type: 'arc' },
    { source: 'cat-trama',     target: 'ataque-troll',         label: 'combate troll',     type: 'arc' },
    { source: 'cat-trama',     target: 'hacha-primera-vez',    label: 'revelación',        type: 'arc' },
    { source: 'cat-trama',     target: 'breakdown-atreus',     label: 'colapso',           type: 'arc' },
    { source: 'cat-trama',     target: 'veredicto-no-listo',   label: 'veredicto',         type: 'arc' },
    { source: 'cat-trama',     target: 'regreso-al-hogar',     label: '',                  type: 'arc' },
    { source: 'cat-trama',     target: 'noche-en-casa',        label: '',                  type: 'arc' },
    { source: 'cat-trama',     target: 'pesadilla-kratos',     label: '',                  type: 'arc' },
    { source: 'cat-trama',     target: 'combate-desconocido',  label: 'combate central',   type: 'arc' },
    { source: 'cat-trama',     target: 'odin-sabe',            label: 'revelación',        type: 'arc' },

    // ── Secuencia narrativa ────────────────────────────
    { source: 'escena-caza',        target: 'primer-fallo',        label: 'conduce a', type: 'event' },
    { source: 'primer-fallo',       target: 'segundo-disparo',     label: 'conduce a', type: 'event' },
    { source: 'segundo-disparo',    target: 'golpe-gracia',        label: 'conduce a', type: 'event' },
    { source: 'golpe-gracia',       target: 'ataque-troll',        label: 'conduce a', type: 'event' },
    { source: 'ataque-troll',       target: 'hacha-primera-vez',   label: 'contiene',  type: 'event' },
    { source: 'ataque-troll',       target: 'breakdown-atreus',    label: 'conduce a', type: 'event' },
    { source: 'breakdown-atreus',   target: 'veredicto-no-listo',  label: 'conduce a', type: 'event' },
    { source: 'veredicto-no-listo', target: 'regreso-al-hogar',    label: 'conduce a', type: 'event' },
    { source: 'regreso-al-hogar',   target: 'noche-en-casa',       label: 'conduce a', type: 'event' },
    { source: 'noche-en-casa',      target: 'pesadilla-kratos',    label: 'contiene',  type: 'event' },
    { source: 'noche-en-casa',      target: 'pira-faye',           label: 'evocada en',type: 'event' },
    { source: 'noche-en-casa',      target: 'combate-desconocido', label: 'conduce a', type: 'event' },

    // ── Personajes ↔ Eventos ───────────────────────────
    { source: 'kratos', target: 'escena-caza',          label: 'lidera',                           type: 'event' },
    { source: 'kratos', target: 'primer-fallo',         label: 'explota / se frena',               type: 'event' },
    { source: 'kratos', target: 'golpe-gracia',         label: 'guía la mano / da el golpe',       type: 'event' },
    { source: 'kratos', target: 'hacha-primera-vez',    label: 'usa por primera vez',              type: 'event' },
    { source: 'kratos', target: 'ataque-troll',         label: 'lidera y completa',                type: 'event' },
    { source: 'kratos', target: 'veredicto-no-listo',   label: 'emite tres veces',                 type: 'event' },
    { source: 'kratos', target: 'pesadilla-kratos',     label: 'sufre',                            type: 'event' },
    { source: 'kratos', target: 'combate-desconocido',  label: 'combate y gana provisionalmente',  type: 'event' },

    { source: 'atreus', target: 'escena-caza',          label: 'apunta',                           type: 'event' },
    { source: 'atreus', target: 'primer-fallo',         label: 'cierra los ojos / yerra',          type: 'event' },
    { source: 'atreus', target: 'segundo-disparo',      label: 'ignora instrucciones / acierta',   type: 'event' },
    { source: 'atreus', target: 'golpe-gracia',         label: 'paralizado / mano temblorosa',     type: 'event' },
    { source: 'atreus', target: 'ataque-troll',         label: 'coopera / es retenido',            type: 'event' },
    { source: 'atreus', target: 'breakdown-atreus',     label: 'protagoniza',                      type: 'event' },
    { source: 'atreus', target: 'regreso-al-hogar',     label: 'lleva tejón',                      type: 'event' },
    { source: 'atreus', target: 'noche-en-casa',        label: 'cocina / reflexiona',              type: 'event' },
    { source: 'atreus', target: 'pira-faye',            label: 'recuerda',                         type: 'event' },
    { source: 'atreus', target: 'trampa-suelo',         label: 'es ocultado en',                   type: 'event' },

    { source: 'el-desconocido', target: 'combate-desconocido', label: 'protagoniza',               type: 'event' },
    { source: 'el-desconocido', target: 'odin-sabe',           label: 'confirma al revelar',       type: 'event' },
    { source: 'troll-bosque',   target: 'ataque-troll',        label: 'muere en',                  type: 'event' },
    { source: 'jophie',         target: 'regreso-al-hogar',    label: 'aparece en',                type: 'event' },

    // ── Criaturas ─────────────────────────────────────
    { source: 'cat-criaturas', target: 'troll-bosque', label: '',                       type: 'arc' },
    { source: 'cat-criaturas', target: 'ciervo',       label: '',                       type: 'arc' },
    { source: 'cat-criaturas', target: 'jophie',       label: '',                       type: 'arc' },
    { source: 'ciervo',        target: 'golpe-gracia', label: 'objeto del acto',        type: 'event' },
    { source: 'ciervo',        target: 'hacha-primera-vez', label: 'destruido en',      type: 'event' },

    // ── Mundo → Lugares ────────────────────────────────
    { source: 'cat-mundo', target: 'bosque-midgard', label: 'escenario', type: 'arc' },
    { source: 'cat-mundo', target: 'midgard',        label: 'reino',     type: 'arc' },
    { source: 'cat-mundo', target: 'nueve-reinos',   label: 'cosmología',type: 'arc' },
    { source: 'cat-mundo', target: 'jardin-faye',    label: '',          type: 'arc' },
    { source: 'midgard',   target: 'bosque-midgard', label: 'contiene',  type: 'geo' },
    { source: 'nueve-reinos', target: 'midgard',     label: 'incluye',   type: 'lore' },
    { source: 'nueve-reinos', target: 'dioses-aesir',label: 'regidos por',type: 'lore' },

    // ── Temas ─────────────────────────────────────────
    { source: 'cat-temas', target: 'tension-padre-hijo', label: '', type: 'arc' },
    { source: 'cat-temas', target: 'herencia-natural',   label: '', type: 'arc' },
    { source: 'cat-temas', target: 'duelo-madre',        label: '', type: 'arc' },
    { source: 'cat-temas', target: 'miedo-perder-padre', label: '', type: 'arc' },
    { source: 'cat-temas', target: 'lengua-antigua',     label: '', type: 'arc' },
    { source: 'cat-temas', target: 'duda-dioses',        label: '', type: 'arc' },

    { source: 'herencia-natural',   target: 'loki-atreus',         label: 'naturaleza oculta',   type: 'lore' },
    { source: 'herencia-natural',   target: 'pesadilla-kratos',    label: 'ilustrada en',        type: 'rel' },
    { source: 'duelo-madre',        target: 'atreus-compasion',    label: 'origen de',           type: 'rel' },
    { source: 'kratos-filosofia',   target: 'golpe-gracia',        label: 'materializa en',      type: 'event' },
    { source: 'kratos-filosofia',   target: 'veredicto-no-listo',  label: 'se aplica en',        type: 'rel' },
    { source: 'tension-padre-hijo', target: 'veredicto-no-listo',  label: 'materializa en',      type: 'trama' },
    { source: 'tension-padre-hijo', target: 'noche-en-casa',       label: 'visible en',          type: 'trama' },
    { source: 'miedo-perder-padre', target: 'breakdown-atreus',    label: 'desencadena',         type: 'rel' },
    { source: 'tos-atreus',         target: 'veredicto-no-listo',  label: 'contribuye al',       type: 'rel' },
    { source: 'lengua-antigua',     target: 'ataque-troll',        label: 'revelada en',         type: 'event' },
    { source: 'lengua-antigua',     target: 'troll-bosque',        label: 'idioma del',          type: 'rel' },
    { source: 'duda-dioses',        target: 'duelo-madre',         label: 'provocada por',       type: 'rel' },
    { source: 'duda-dioses',        target: 'atreus-madre',        label: 'contradice fe de',    type: 'rel' },
    { source: 'voto-kratos',        target: 'combate-desconocido', label: 'puesto a prueba en',  type: 'event' },
    { source: 'voto-kratos',        target: 'kratos-filosofia',    label: 'expresión máxima de', type: 'rel' },

    // ── Videojuego / Objetos ───────────────────────────
    { source: 'cat-videojuego', target: 'gow-2018',      label: '',             type: 'arc' },
    { source: 'cat-videojuego', target: 'novelizacion',  label: '',             type: 'arc' },
    { source: 'cat-videojuego', target: 'hacha-leviatán',label: 'mecánica',     type: 'arc' },
    { source: 'gow-2018',       target: 'novelizacion',  label: 'adaptado en',  type: 'rel' },
    { source: 'gow-2018',       target: 'nueve-reinos',  label: 'escenario de', type: 'lore' },
    { source: 'gow-2018',       target: 'dioses-aesir',  label: 'antagonistas', type: 'lore' },

    { source: 'vendajes-kratos',  target: 'kratos-pasado',        label: 'ocultan marcas de', type: 'lore' },
    { source: 'tatuajes-kratos',  target: 'kratos-pasado',        label: 'símbolo de',        type: 'lore' },
    { source: 'blades-of-chaos',  target: 'pesadilla-kratos',     label: 'aparecen en',       type: 'event' },
    { source: 'blades-of-chaos',  target: 'vendajes-kratos',      label: 'ocultas bajo',      type: 'rel' },
    { source: 'blades-of-chaos',  target: 'kratos-pasado',        label: 'símbolo de',        type: 'lore' },
    { source: 'arco-atreus',      target: 'escena-caza',          label: 'usado en',          type: 'event' },
    { source: 'cuchillo-atreus',  target: 'golpe-gracia',         label: 'usado en',          type: 'event' },
    { source: 'hacha-leviatán',   target: 'hacha-primera-vez',    label: 'protagonista de',   type: 'event' },
    { source: 'hacha-leviatán',   target: 'el-desconocido',       label: 'ineficaz contra',   type: 'event' },
    { source: 'trampa-suelo',     target: 'combate-desconocido',  label: 'usada en',          type: 'event' },
    { source: 'trampa-suelo',     target: 'kratos',               label: 'preparada por',     type: 'rel' },
    { source: 'cuchillo-faye',    target: 'pira-faye',            label: 'recuperado de',     type: 'event' },
    { source: 'cuchillo-faye',    target: 'atreus-madre',         label: 'pertenecía a',      type: 'rel' },
    { source: 'cuchillo-faye',    target: 'atreus',               label: 'porta',             type: 'rel' },
    { source: 'cuervos-odin',     target: 'regreso-al-hogar',     label: 'observados en',     type: 'event' },
    { source: 'cuervos-odin',     target: 'jophie',               label: 'dispersados por',   type: 'event' },
    { source: 'cuervos-odin',     target: 'odin-allfather',       label: 'agentes de',        type: 'lore' },
    { source: 'jophie',           target: 'atreus-madre',         label: 'era el pájaro de',  type: 'rel' },
    { source: 'jardin-faye',      target: 'atreus-madre',         label: 'espacio de',        type: 'rel' },
    { source: 'jardin-faye',      target: 'combate-desconocido',  label: 'arena del',         type: 'event' },

    // ── Mitología ─────────────────────────────────────
    { source: 'loki-atreus',      target: 'nueve-reinos',         label: 'cambiará su destino', type: 'lore' },

    // ── Odín ↔ trama ───────────────────────────────────
    { source: 'odin-allfather',   target: 'el-desconocido',       label: 'lo envió',                  type: 'rel' },
    { source: 'odin-allfather',   target: 'odin-sabe',            label: 'envió al Desconocido',      type: 'lore' },
    { source: 'odin-sabe',        target: 'atreus',               label: 'Odín ignora su existencia', type: 'rel' },
    { source: 'odin-sabe',        target: 'tension-padre-hijo',   label: 'eleva las apuestas de',     type: 'trama' },

];
