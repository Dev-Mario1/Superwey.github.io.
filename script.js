// ── CHARACTER DATA ───
const CHARACTERS = [
    { id:'Josuke', name:'Josuke Higashikata', clase:'Apoyo', subclase:'Healer/Stand',
    img:'Assets/JosukeAnime.webp',
    desc:'Joven que busca ayudar y proteger a todos en Morioh',
    quote: 'Nunca insultes su cabello',
    audio:'Assets/audios/crazy-diamond.mp3',
    stats:{ Daño:65, Curación:100, Velocidad:75} },

    { id:'Jirachi', name:'Jirachi', clase:'Apoyo', subclase:'Healer/Buff',
    img:'Assets/Jirachi.jfif',
    desc:'El pokemon mítico de los deseos',
    quote: 'el pokemon numero 385',
    stats:{ Daño:60, Curación:100, Velocidad:95} },

    { id:'Shikanoko', name:'Shikanoko', clase:'Apoyo', subclase:'Healer/Buff',
    img:'Assets/Shikanoko.jpg',
    desc:'La legendaria Diosa Ciervo',
    quote: 'Sus verdaderos stats son infinitos',
    audio:'Assets/audios/shikanoko-nokonoko-koshitantan_93qRnvP.mp3',
    stats:{ Daño:100, Curación:100, Velocidad:100} },

    { id:'GoldShip', name:'Gold Ship', clase:'Ataque', subclase:'Tanque/Sprint',
    img:'Assets/Char_GoldShip_caarrera.webp',
    desc:'Integrante caotica e inpredecible del Team Spica',
    quote: '🎶Goal To My SHIP🎶',
    stats:{Ataque:90, Daño:80, Velocidad:100} },

    { id:'Ghost', name:'Ghost', clase:'Ataque', subclase:'Guerrero/Hechizos',
    img:'Assets/The_Knight.webp',
    desc:'Nacido de Dios y del Vacío',
    quote: '-...-',
    stats:{ Ataque:100, Daño:100, Velocidad:95 } },

    { id:'Centella', name:'Centella', clase:'Apoyo', subclase:'Esquivador/Aéreo',
    img:'Assets/Centella_-_Mario_&_Luigi_Dream_Team.webp',
    desc:'Espiritu enviado por las estrellas',
    quote: '-No hace frío-',
    stats:{ Daño:90, Curación:75, Velocidad:100 } },

    { id:'Gingerbrave', name:'Gingerbrave', clase:'Ataque',  subclase:'Tanque/Sprint',
    img:'Assets/gingerbrave.jpg',
    desc:'La valiente de galleta que escapó primero del horno',
    quote: '-¡Es ahora o nunca, vamos!-',
    audio:'Assets/audios/Audio gingerbrave.ogg',
    stats:{ Ataque:100, Daño:95, Velocidad:100 } },

    { id:'Cole', name:'Cole', clase:'Ataque',  subclase:'Fuerza/Elementos',
    img:'Assets/Cole.webp',
    quote: 'Cuidado con sus Puños de Roca',
    desc:'Ninja del Spinjitzu, maestro de la tierra',
    stats:{ Ataque:100, Daño:100, Velocidad:100 } },

    { id:'Rimuru', name:'Rimuru Tempest', clase:'Apoyo', subclase:'Rango/Multi-habilidades',
    img:'Assets/Rimuru_Tempest_29.webp',
    desc:'El mayor líder que existio',
    quote: 'Muchos desean ser nombrados por él',
    stats:{ Alcance:100, Daño:100, Velocidad:100 } },

    { id:'Cientifico', name:'Científico', clase:'Snipper', subclase:'Healer/Corto Alcance',
    img:'Assets/Cientifico.png',
    desc:'Brillante muerto viviente que cura',
    quote: '-Brainz...-',
    stats:{ Alcance:60, Daño:90, Velocidad:75 } },

    { id:'MarioLuigi', name:'Mario y Luigi', clase:'Ataque', subclase:'Familia/Estrtega',
    img:'Assets/mario&luigi.jfif',
    desc:'Los hermanos del reino Champiñón. Juntos son imbatibles.',
    quote: 'Huye si hacen un Ataque Tandem',
    audio:"Assets/audios/Mario & Luigi - Let's go, Oki dokie.mp3",
    stats:{ Ataque:100, Daño:100, Velocidad:95 } },

    { id:'CremeBrulee', name:'Crème Brûlée', clase:'Snipper', subclase:'Música/Ametrallador',
    img:'Assets/Creme_brulee_illustration.webp',
    desc:'Galleta experto en el piano',
    quote: '-Pondre mi corazón y alma en esta actuación-',
    audio:'Assets/audios/Audio creme brule.ogg',
    stats:{ Alcance:100, Daño:95, Velocidad:90 } },

    { id:'Heart', name:'Heart', clase:'Apoyo', subclase:'Sprint/Cónyue',
    img:'Assets/Heart.jpeg',
    desc:'Siempre buscara reunirse con su amado',
    quote: 'Cuando se juntan forman un media luna',
    stats:{ Daño:80, Curación:100, Velocidad:90 } },

    { id:'Star', name:'Star', clase:'Ataque', subclase:'Sprint/Cónyuge',
    img:'Assets/Star.jpeg',
    desc:'Saltara todas las plataformas por su amada',
    quote: 'No le importan los puzzles con tal de estar junto a ella',
    stats:{ Ataque:85, Daño:90, Velocidad:90 } },

    { id:'Rikka', name:'Rikka Takanashi', clase:'Ataque', subclase:'Cónyuge/Corto Alcance',
    img:'Assets/Rikka.jfif',
    desc:'Maestra de magia con el poder del Ojo Maldito',
    quote: 'Ten miedo de su paraguas',
    stats:{ Ataque:95, Daño:100, Velocidad:100 } },

    { id:'Yuuta', name:'Yuuta Togashi', clase:'Snipper', subclase:'Cónyuge/Multi-habilidades',
    img:'Assets/Yuuta.jpg',
    desc:'El Maestro de las Flamas Oscuras',
    quote: 'Siempre logra sorprender con su arma en el brazo',
    stats:{ Alcance:90, Daño:95, Velocidad:80 } },

    { id:'Greninja', name:'Greninja', clase:'Snipper', subclase:'Melee/Sigilo',
    img:'Assets/Greninja.jpg',
    desc:'Sus shurikens de agua son letales.',
    quote: 'Sus habilidad Mutatipo lo hace versatil',
    stats:{ Alcance:100, Daño:100, Velocidad:95 } },

    { id:'WhiteLily', name:'White Lily', clase:'Snipper', subclase:'Bomber/ AoE',
    img:'Assets/White_lily_illustration.webp',
    desc:'La Galleta Ancestral caida',
    quote: 'Algun dia conseguira liberarse de su arrepentimiento',
    audio:'Assets/audios/Audio white lily.ogg',
    stats:{ Alcance:100, Daño:100, Velocidad:90 } },

    { id:'Neru', name:'Akita Neru', clase:'Apoyo', subclase:'Música/Tecno',
    img:'Assets/Akita_Neru_bySmithHioka.webp',
    desc:'Adicta a su telefono y música',
    quote: '- /-.. . .--- . -./ -.. . / -.-. .... .. -. --. .- .-. / -',
    audio:'Assets/audios/neru.mp3',
    stats:{ Daño:75, Curación:90, Velocidad:75} },

    { id:'Girasol', name:'Girasol', clase:'Apoyo', subclase:'Healer/Planta',
    img:'Assets/Girasol.jpg',
    desc:'Planta que irradia soles curativos a sus aliados.',
    quote: '🎶Zombies on your Lawn🎶',
    stats:{ Daño:80, Curación:90, Velocidad:95 } },

    { id:'Lanzaguisantes', name:'Lanzaguisantes', clase:'Snipper', subclase:'Planta/Artillero',
    img:'Assets/Lanzaguisantes.png',
    desc:'Primera linea de defensa del jardín',
    quote: 'Algunos teorizan que el canta Zombie Time',
    stats:{ Alcance:95, Daño:100, Velocidad:95 } },

    { id:'Jay', name:'Jay', clase:'Ataque', subclase:'Elementos/Ninja',
    img:'Assets/Jay.webp',
    desc:'Ninja del rayo con habiles Nunchakus',
    quote: 'Su electrizidad combina con la tecnologia',
    stats:{ Ataque:90, Daño:95, Velocidad:100 } },

    { id:'Zane', name:'Zane', clase:'Snipper', subclase:'Elementos/Tecno',
    img:'Assets/Zane_IB_s7.webp',
    desc:'Ninja de hielo hecho de titanio',
    quote: 'El mayor Nindroide que ha existido',
    stats:{ Alcance:95, Daño:100, Velocidad:100 } },

    { id:'Kagamine-Twins',  name:'Kagamine Rin y Len', clase:'Ataque', subclase:'Familia/Música',
    img:'Assets/Kagamine_Rin_Len.webp',
    desc:'Gran dupla musical Vocaloid',
    quote: '🎶Purple Butterfly on your Right Shoulder🎶',
    stats:{ Ataque:85, Daño:90, Velocidad:100 } },

    { id:'Frisk', name:'Frisk', clase:'Ataque', subclase:'Pacifista/Esquivador',
    img:'Assets/Frisk.webp',
    desc:'El ultimo humano que cayó al subsuelo',
    quote: '"Sigues siendo Tu"',
    stats:{ Ataque:100, Daño:100, Velocidad:95 } },

    { id:'Katara', name:'Katara', clase:'Apoyo', subclase:'Healer/Elementos',
    img:'Assets/katara.jpg',
    desc:'Maestra del agua del Tribu del Agua del Sur.',
    quote: 'Cuidado si hace Luna Llena',
    stats:{ Daño:80, Curación:100, Velocidad:100 } },

    { id:'Mazorcañon', name:'Mazorcañon', clase:'Snipper', subclase:'Planta/AoE',
    img:'Assets/Mazorcañon.jpg',
    desc:'Cañón vegetal de mazorcas de destrucción masiva.',
    stats:{ Alcance:90, Daño:100, Velocidad:30 } },

    { id:'WindArcher', name:'Wind Archer', clase:'Snipper', subclase:'Ametrallador/Elementos',
    img:'Assets/Wind_archer_.webp',
    desc:'Arquero del viento compañero de Millenial Tree',
    quote: 'El bosque nos ha bendecido',
    audio:'Assets/audios/Audio wind archer.ogg',
    stats:{ Alcance:95, Daño:100, Velocidad:100 } },

    { id:'Naruto', name:'Naruto Uzumaki', clase:'Ataque',  subclase:'Melee/Sabio',
    img:'Assets/Naruto.webp',
    desc:'El proximo Hokage de Konoha',
    quote: '-¡Dattebayo!-',
    stats:{ Ataque:100, Daño:100, Velocidad:100 } },

    { id:'Teto', name:'Kasane Teto', clase:'Ataque', subclase:'Tecno/Música',
    img:'Assets/Teto.webp',
    desc:'La peliroja amante de los baguettes',
    quote: '🎶Machine Love🎶',
    audio:"Assets/audios/teto-wav.mp3",
    stats:{ Ataque:80, Daño:100, Velocidad:65 } },

    { id:'Miku', name:'Hatsune Miku', clase:'Snipper', subclase:'Música/ElTecno',
    img:'Assets/Hatsune_Miku-illu.webp',
    desc:'La Vocaloid original',
    quote: '-You can call me Miku-',
    audio:'Assets/audios/miku WEEEEE.mp3',
    stats:{ Alcance:95, Daño:100, Velocidad:80 } },

    { id:'Custard', name:'Custard III', clase:'Apoyo', subclase:'Healer/Esquivador',
    img:'Assets/Sprite_custard_iii_default.webp',
    desc:'Proximo rey del Reino de Galletas con poderes curativos',
    quote: '-Su rey los protegera-',
    audio:'Assets/audios/Custard_skill.mp3.mpeg',
    stats:{ Daño:60, Curación:80, Velocidad:85 } },

    { id:'Gumi', name:'GUMI ', clase:'Apoyo', subclase:'Tecno/Música',
    img:'Assets/GUMI_transparent.webp',
    desc:'Segunda en ser publicada por Internet Co.',
    quote: 'Antes fue llamada Megpoid',
    stats:{ Daño:70, Alcance:75, Velocidad:100 } },

    { id:'Hashirama', name:'Hashirama Senju', clase:'Apoyo',   subclase:'Regenerable/Sabio',
    img:'Assets/Hashirama_Sage_Mode.webp',
    desc:'El Dios de los Shinobi',
    quote: 'Su Ninjutsu madera da vida',
    stats:{ Daño:100, Ataque:100, Velocidad:90 } },

    { id:'Kratos', name:'Kratos', clase:'Ataque',  subclase:'Guerrero/Multi-habilidades',
    img:'Assets/Kratos.jpg',
    desc:'El Dios de la Guerra espartano',
    quote: 'Mató al Olimpo entero',
    stats:{ Ataque:100, Daño:100, Velocidad:85 } },

    { id:'Hornet', name:'Hornet', clase:'Snipper', subclase:'Gurrera/Esquivador',
    img:'Assets/Hornet.webp',
    desc:'Veloz, precisa, imprevisible.',
    quote: '-¡Shaw!-',
    stats:{ Alcance:95, Daño:100, Velocidad:100 } },

    { id:'MasterChief', name:'Master Chief', clase:'Snipper', subclase:'Francotirador/Estratega',
    img:'Assets/Master Chief.png',
    desc:'La última esperanza de la humanidad.',
    quote: 'Extraña a Cortana',
    stats:{ Alcance:95, Daño:100, Velocidad:85 } },

    { id:'Rayquaza', name:'Rayquaza', clase:'Snipper', subclase:'Sprint /AoE',
    img:'Assets/rayquaza.jpg',
    desc:'El guardian de los cielos',
    quote: 'Un pokemon que no necesita una Mega-piedra',
    stats:{ Alcance:100, Daño:100, Velocidad:100 } },

    { id:'Joseph', name:'Joseph Joestar', clase:'Ataque',  subclase:'Stand/Multi-habilidades',
    img:'Assets/JosephJoestar123.webp',
    desc:'Segundo Jojo del linaje Joestar',
    quote: '-¡Nigerundayo!-',
    stats:{ Ataque:80, Daño:100, Velocidad:75 } },

    { id:'PureVanilla', name:'Pure Vanilla', clase:'Apoyo',   subclase:'Healer/Buff',
    img:'Assets/Pure_vanilla_illustration.webp',
    desc:'La Galleta Ancestral que cura a todos',
    quote: '-La verdad siempre prevalecera',
    audio:'Assets/audios/Audio pure vanilla.ogg',
    stats:{ Daño:75, Curación:90, Velocidad:95 } },

    { id:'Rachet', name:'Rachet', clase:'Apoyo',   subclase:'Healer/AoE',
    img:'Assets/Rachet.webp',
    desc:'Oficial Medico de los Autobots',
    quote: 'Sigue buscando reparar la voz de Bumblebee',
    stats:{ Daño:100, Curación:95, Velocidad:100 } },

    { id:'LanzadoraOscura', name:'Lanzadora Oscura', clase:'Snipper', subclase:'Planta/AoE',
    img:'Assets/Lanzadora oscura.webp',
    desc:'Dispara tres proyectiles al estar potenciada',
    quote: 'Aprecia mucho a Flor Lunar y a Sombraseta',
    stats:{ Alcance:100, Daño:100, Velocidad:100 } },
]

// ── STAT COLORS ────
const STAT_COLORS = {
  Daño:      ['#ff4444', '#ff0000'],
  Curación:  ['#44ff88', '#00dd55'],
  Ataque:    ['#ffb040', '#cc6000'],
  Alcance:   ['#70b8ff', '#2060cc'],
  Velocidad: ['#ffe84a', '#c0940a'],
};
function statGrad(key) {
  const [a, b] = STAT_COLORS[key] || ['#ff4444', '#aa0000'];
  return `linear-gradient(90deg, ${b}, ${a})`;
}

// ── STATE ────
let expandedId  = null;
let currentAudio = null;

// ── HELPERS ────
function buildStatBars(stats) {
  return Object.entries(stats).map(([key, val]) => {
    const pct = Math.min(val, 100);
    return `
      <div class="stat-row">
        <span class="stat-label">${key}</span>
        <div class="stat-bar-bg">
          <div class="stat-bar-fill" data-pct="${pct}" data-grad="${statGrad(key)}" style="background:${statGrad(key)};"></div>
        </div>
        <span class="stat-val">${val === 100 ? '★' : val}</span>
      </div>`;
  }).join('');
}

const main = document.getElementById('main-content');
const roster = document.createElement('div');
roster.className = 'roster';

CHARACTERS.forEach(char => {
    const card = document.createElement('div');
    card.className = `card ${char.clase}`;
    card.id        = char.id;
    card.dataset.id = char.id;

    card.innerHTML = `
      <div class="burst-ring"></div>
      <div class="card-inner">
        <div class="card-img-wrap">
          <span class="card-name-mini">${char.name}</span>
          <img src="${char.img}" alt="${char.name}" loading="lazy">
          <span class="class-dot ${char.clase}"></span>
        </div>
        <div class="card-info">
          <div class="info-header">
            <span class="info-name">${char.name}</span>
            <div class="badges">
              <span class="badge clase ${char.clase}">${char.clase}</span>
              <span class="badge subclase">${char.subclase}</span>
            </div>
          </div>
          <p class="info-desc">${char.desc}</p>
          ${(char.quote && char.quote.trim()) ? '<p class="info-quote">' + char.quote + '</p>' : ''}
          <div class="stats">${buildStatBars(char.stats)}</div>
          <button class="choose-btn" data-id="${char.id}">⚔ CHOOSE</button>
        </div>
      </div>`;
    
    roster.appendChild(card);
});

main.appendChild(roster);

// ── EXPAND / COLLAPSE ───
function collapseAll() {
  document.querySelectorAll('.card.expanded').forEach(c => {
    c.classList.remove('expanded');
    c.querySelectorAll('.stat-bar-fill').forEach(b => b.style.width = '0');
  });
  document.querySelectorAll('.roster').forEach(r => r.classList.remove('has-expanded'));
  expandedId = null;
}

function expandCard(card) {
  collapseAll();

  card.classList.add('expanded');
  // Only dim siblings in the same roster
  card.closest('.roster').classList.add('has-expanded');
  expandedId = card.dataset.id;

  setTimeout(() => {
    card.querySelectorAll('.stat-bar-fill').forEach(bar => {
      bar.style.background = bar.dataset.grad;
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 260);
}

// Delegate all card clicks
document.addEventListener('click', e => {
  // Choose button
  const btn = e.target.closest('.choose-btn');
  if (btn) { handleChoose(btn.dataset.id); return; }

  // Card click
  const card = e.target.closest('.card');
  if (card) {
    card.dataset.id === expandedId ? collapseAll() : expandCard(card);
    return;
  }

  // Outside click
  if (expandedId) collapseAll();
});

// ── CHOOSE ─────
function handleChoose(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;

  const card = document.querySelector(`.card[data-id="${id}"]`);

  // Flash + ring animation
  card.classList.remove('chosen');
  void card.offsetWidth;
  card.classList.add('chosen');
  card.addEventListener('animationend', () => card.classList.remove('chosen'), { once: true });

  // Audio
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  if (char.audio) {
    currentAudio = new Audio(char.audio);
    currentAudio.play().catch(() => {});
  }

  // Banner
  document.getElementById('banner-avatar').src  = char.img;
  document.getElementById('banner-name').textContent = char.name;

  const bannerBadges = document.getElementById('banner-badges');
  bannerBadges.innerHTML = `
    <span class="badge clase ${char.clase}">${char.clase}</span>
    <span class="badge subclase">${char.subclase}</span>`;

  document.getElementById('banner').classList.add('visible');

  // Persist
  localStorage.setItem('selectedFighter', JSON.stringify({ id: char.id, name: char.name, clase: char.clase, subclase: char.subclase, img: char.img }));
}

// Clear banner
document.getElementById('banner-clear').addEventListener('click', () => {
  document.getElementById('banner').classList.remove('visible');
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  localStorage.removeItem('selectedFighter');
});

// Restore on load
const saved = localStorage.getItem('selectedFighter');
if (saved) {
  try {
    const s = JSON.parse(saved);
    document.getElementById('banner-avatar').src = s.img;
    document.getElementById('banner-name').textContent = s.name;
    document.getElementById('banner-badges').innerHTML = `
      <span class="badge clase ${s.clase}">${s.clase}</span>
      <span class="badge subclase">${s.subclase}</span>`;
    document.getElementById('banner').classList.add('visible');
  } catch(e) {}
}

// ── COUNTER ──────
document.getElementById('counter').textContent = `${CHARACTERS.length} Fighters`;

// ── SUBCLASS FILTER ───────
const dropdownEl = document.getElementById('subfilter-dropdown');
const toggleBtn  = document.getElementById('subfilter-toggle');
const labelEl    = document.getElementById('subfilter-label');

// Collect unique individual subclases (split by /)
const subclases = [...new Set(
  CHARACTERS.flatMap(c => c.subclase.split('/').map(s => s.trim()))
)];

subclases.forEach(sub => {
  const btn = document.createElement('button');
  btn.className = 'sub-btn';
  btn.dataset.sub = sub;
  btn.textContent = sub;
  dropdownEl.appendChild(btn);
});

// Toggle open/close
toggleBtn.addEventListener('click', e => {
  e.stopPropagation();
  dropdownEl.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

// Close on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('#subfilter-wrap')) {
    dropdownEl.classList.remove('open');
    toggleBtn.classList.remove('open');
  }
});

let activeSubclase = 'all';

dropdownEl.addEventListener('click', e => {
  const btn = e.target.closest('.sub-btn');
  if (!btn) return;

  activeSubclase = btn.dataset.sub;
  labelEl.textContent = activeSubclase === 'all' ? 'Filtrar por subclase' : activeSubclase;

  dropdownEl.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  dropdownEl.classList.remove('open');
  toggleBtn.classList.remove('open');

  document.querySelectorAll('.card').forEach(card => {
    const char = CHARACTERS.find(c => c.id === card.dataset.id);
    const subs = char.subclase.split('/').map(s => s.trim());

    if (activeSubclase === 'all') {
      card.classList.remove('sub-highlight', 'sub-dim');
    } else if (subs.includes(activeSubclase)) {
      card.classList.add('sub-highlight');
      card.classList.remove('sub-dim');
    } else {
      card.classList.add('sub-dim');
      card.classList.remove('sub-highlight');
    }
  });

  if (expandedId) {
    const expChar = CHARACTERS.find(c => c.id === expandedId);
    const expSubs = expChar.subclase.split('/').map(s => s.trim());
    if (activeSubclase !== 'all' && !expSubs.includes(activeSubclase)) collapseAll();
  }
});

// ── BACKGROUND PARTICLES ───
const particleColors = ['#4ecb2d','#29d4f5','#d6b625','#ff5e3a','#a78bfa','#34d9a0'];
const bgEl = document.getElementById('bg-particles');

for (let i = 0; i < 28; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = 4 + Math.random() * 7;
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    bottom: ${-10 - Math.random() * 10}%;
    width: ${size}px;
    height: ${size}px;
    background: ${particleColors[Math.floor(Math.random() * particleColors.length)]};
    animation-duration: ${7 + Math.random() * 12}s;
    animation-delay: ${Math.random() * 10}s;
  `;
  bgEl.appendChild(p);
}
