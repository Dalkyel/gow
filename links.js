// ═══════════════════════════════════════════════════════
// LINKS — God of War: Novelización + Videojuego
// Capítulo 1
// ═══════════════════════════════════════════════════════

const links = [

    // ── Root → Categorías ──────────────────────────────
    { source: 'root', target: 'cat-personajes', label: 'personajes', type: 'cat' },
    { source: 'root', target: 'cat-mundo',      label: 'mundo',      type: 'cat' },
    { source: 'root', target: 'cat-trama',      label: 'Cap. 1',     type: 'cat' },
    { source: 'root', target: 'cat-temas',      label: 'temas',      type: 'cat' },
    { source: 'root', target: 'cat-criaturas',  label: 'criaturas',  type: 'cat' },
    { source: 'root', target: 'cat-videojuego', label: 'juego',      type: 'cat' },

    // ── Personajes → nodos ─────────────────────────────
    { source: 'cat-personajes', target: 'kratos',        label: '', type: 'arc' },
    { source: 'cat-personajes', target: 'atreus',        label: '', type: 'arc' },
    { source: 'cat-personajes', target: 'atreus-madre',  label: 'ausente', type: 'arc' },

    // ── Kratos conexiones internas ─────────────────────
    { source: 'kratos', target: 'kratos-apariencia',   label: 'descripción física', type: 'rel' },
    { source: 'kratos', target: 'kratos-filosofia',    label: 'filosofía', type: 'rel' },
    { source: 'kratos', target: 'kratos-pasado',       label: 'trasfondo', type: 'lore' },
    { source: 'kratos', target: 'tatuajes-kratos',     label: 'porta', type: 'rel' },
    { source: 'kratos', target: 'vendajes-kratos',     label: 'porta', type: 'rel' },
    { source: 'kratos', target: 'hacha-leviatán',      label: 'arma principal (ausente)', type: 'rel' },

    // ── Atreus conexiones internas ─────────────────────
    { source: 'atreus', target: 'atreus-apariencia',   label: 'descripción física', type: 'rel' },
    { source: 'atreus', target: 'atreus-compasion',    label: 'rasgo central', type: 'rel' },
    { source: 'atreus', target: 'atreus-aprobacion',   label: 'motivación', type: 'rel' },
    { source: 'atreus', target: 'atreus-madre',        label: 'duelo', type: 'rel' },
    { source: 'atreus', target: 'loki-atreus',         label: 'identidad oculta', type: 'lore' },
    { source: 'atreus', target: 'arco-atreus',         label: 'usa', type: 'rel' },
    { source: 'atreus', target: 'cuchillo-atreus',     label: 'usa', type: 'rel' },

    // ── Relación Kratos ↔ Atreus ───────────────────────
    { source: 'kratos', target: 'atreus',              label: 'padre de', type: 'rel' },
    { source: 'kratos', target: 'tension-padre-hijo',  label: 'motor del tema', type: 'trama' },
    { source: 'atreus', target: 'tension-padre-hijo',  label: 'motor del tema', type: 'trama' },

    // ── Faye ↔ personajes ──────────────────────────────
    { source: 'atreus-madre', target: 'duelo-madre',        label: 'genera', type: 'rel' },
    { source: 'atreus-madre', target: 'tension-padre-hijo', label: 'contraste pedagógico', type: 'rel' },
    { source: 'atreus-madre', target: 'arco-atreus',        label: 'enseñó a usar', type: 'rel' },

    // ── Trama → Eventos ───────────────────────────────
    { source: 'cat-trama', target: 'escena-caza',    label: 'apertura', type: 'arc' },
    { source: 'cat-trama', target: 'primer-fallo',   label: '', type: 'arc' },
    { source: 'cat-trama', target: 'segundo-disparo',label: '', type: 'arc' },
    { source: 'cat-trama', target: 'golpe-gracia',   label: 'clímax', type: 'arc' },
    { source: 'cat-trama', target: 'ataque-troll',   label: 'cierre', type: 'arc' },

    // ── Secuencia narrativa de eventos ─────────────────
    { source: 'escena-caza',    target: 'primer-fallo',    label: 'conduce a', type: 'event' },
    { source: 'primer-fallo',   target: 'segundo-disparo', label: 'conduce a', type: 'event' },
    { source: 'segundo-disparo',target: 'golpe-gracia',    label: 'conduce a', type: 'event' },
    { source: 'golpe-gracia',   target: 'ataque-troll',    label: 'conduce a', type: 'event' },

    // ── Personajes ↔ Eventos ───────────────────────────
    { source: 'kratos', target: 'escena-caza',     label: 'lidera', type: 'event' },
    { source: 'atreus', target: 'escena-caza',     label: 'apunta', type: 'event' },
    { source: 'kratos', target: 'primer-fallo',    label: 'explota / se frena', type: 'event' },
    { source: 'atreus', target: 'primer-fallo',    label: 'cierra los ojos / yerra', type: 'event' },
    { source: 'atreus', target: 'segundo-disparo', label: 'ignora instrucciones / acierta', type: 'event' },
    { source: 'atreus', target: 'golpe-gracia',    label: 'paralizado / mano temblorosa', type: 'event' },
    { source: 'kratos', target: 'golpe-gracia',    label: 'guía la mano / da el golpe', type: 'event' },
    { source: 'kratos', target: 'ataque-troll',    label: 'protege a Atreus', type: 'event' },
    { source: 'troll-bosque', target: 'ataque-troll', label: 'desencadena', type: 'event' },

    // ── Criaturas → Categoría ──────────────────────────
    { source: 'cat-criaturas', target: 'troll-bosque', label: '', type: 'arc' },
    { source: 'cat-criaturas', target: 'ciervo',       label: '', type: 'arc' },
    { source: 'ciervo',        target: 'golpe-gracia', label: 'objeto del acto', type: 'event' },
    { source: 'ciervo',        target: 'ataque-troll', label: 'atrae al troll (olor de sangre)', type: 'event' },

    // ── Mundo → Lugares ────────────────────────────────
    { source: 'cat-mundo', target: 'bosque-midgard', label: 'escenario', type: 'arc' },
    { source: 'cat-mundo', target: 'midgard',        label: 'reino', type: 'arc' },
    { source: 'cat-mundo', target: 'nueve-reinos',   label: 'cosmología', type: 'arc' },
    { source: 'midgard',   target: 'bosque-midgard', label: 'contiene', type: 'geo' },

    // ── Temas → Conexiones ─────────────────────────────
    { source: 'cat-temas', target: 'tension-padre-hijo', label: '', type: 'arc' },
    { source: 'cat-temas', target: 'herencia-natural',   label: '', type: 'arc' },
    { source: 'cat-temas', target: 'duelo-madre',        label: '', type: 'arc' },
    { source: 'cat-temas', target: 'pedagogia-dura',     label: '', type: 'arc' },

    // ── Temas ↔ Personajes ─────────────────────────────
    { source: 'herencia-natural', target: 'loki-atreus',      label: 'naturaleza oculta', type: 'lore' },
    { source: 'pedagogia-dura',   target: 'kratos-filosofia', label: 'expresión de', type: 'rel' },
    { source: 'pedagogia-dura',   target: 'golpe-gracia',     label: 'materializa en', type: 'event' },
    { source: 'duelo-madre',      target: 'atreus-compasion', label: 'origen de', type: 'rel' },

    // ── Videojuego → Nodos ─────────────────────────────
    { source: 'cat-videojuego', target: 'gow-2018',        label: '', type: 'arc' },
    { source: 'cat-videojuego', target: 'novelizacion',    label: '', type: 'arc' },
    { source: 'cat-videojuego', target: 'hacha-leviatán',  label: 'mecánica', type: 'arc' },
    { source: 'cat-videojuego', target: 'leviathan-magic', label: 'sistema mágico', type: 'arc' },
    { source: 'gow-2018',       target: 'novelizacion',    label: 'adaptado en', type: 'rel' },
    { source: 'gow-2018',       target: 'nueve-reinos',    label: 'escenario de', type: 'lore' },
    { source: 'gow-2018',       target: 'dioses-aesir',    label: 'antagonistas', type: 'lore' },

    // ── Mitología ─────────────────────────────────────
    { source: 'nueve-reinos',  target: 'midgard',      label: 'incluye', type: 'lore' },
    { source: 'nueve-reinos',  target: 'dioses-aesir', label: 'regidos por', type: 'lore' },
    { source: 'loki-atreus',   target: 'nueve-reinos', label: 'cambiará su destino', type: 'lore' },

    // ── Objetos ────────────────────────────────────────
    { source: 'vendajes-kratos', target: 'kratos-pasado',  label: 'ocultan marcas de', type: 'lore' },
    { source: 'tatuajes-kratos', target: 'kratos-pasado',  label: 'símbolo de', type: 'lore' },
    { source: 'arco-atreus',     target: 'escena-caza',    label: 'usado en', type: 'event' },
    { source: 'cuchillo-atreus', target: 'golpe-gracia',   label: 'usado en', type: 'event' },

];
