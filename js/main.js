/* =========================================================
   Abdullah Softwarewala — Portfolio
   To add or edit a project, edit the PROJECTS array below.
   ========================================================= */

/* ---------- Icon set (inline SVG paths) ---------- */
const ICONS = {
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15.5v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19 19 0 0 1-5.9-5.9 19.5 19.5 0 0 1-3-8.6A2 2 0 0 1 3.4 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.5 8.8a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>',
  bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 7V3.5M8.5 13h.01M15.5 13h.01M9.5 17h5M2 12h2M20 12h2"/></svg>',
  mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/><path d="M9.5 6.5h5"/></svg>',
  network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5v4M12 11.5 6.5 16M12 11.5 17.5 16"/></svg>',
  music:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="3"/><path d="m16 11 6-3.5v9L16 13z"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6 8.4 8.4M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="6" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18" cy="12" r="1.8"/><circle cx="12" cy="6" r="1.8"/><circle cx="12" cy="18" r="1.8"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4m-7 9 2 2 4-4"/></svg>',
  code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 17-5-5 5-5M16 7l5 5-5 5M13 4l-2 16"/></svg>',
  claw:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v7M8 5v6M16 5v6"/><path d="M5 11h14l-1.4 7a3 3 0 0 1-3 2.4H9.4a3 3 0 0 1-3-2.4z"/></svg>'
};

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>';
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

/* =========================================================
   PROJECT DATA  — edit here to update the portfolio
   status: active | built | exp | concept
   ========================================================= */
const PROJECTS = [
  {
    id:'phoneopia', icon:'phone', featured:true,
    name:'Phoneopia',
    status:'active', statusLabel:'In Active Development',
    tagline:'AI-powered communication platform',
    short:'A communication platform combining real-time messaging, voice and video calling with AI features — built with a Flutter mobile client and a PHP + Node.js backend.',
    stack:['Flutter','PHP','Node.js','WebSockets','WebRTC','MySQL'],
    about:'Phoneopia is my main product — a communication platform that brings messaging, calling and AI into one place. The backend combines PHP for core application logic and APIs with Node.js services handling the real-time layer, while MySQL stores users, conversations and message history. A Flutter application delivers the mobile experience across Android and iOS.',
    points:[
      'Real-time one-to-one and group messaging over WebSockets',
      'Voice and video calling implemented with WebRTC',
      'PHP application backend with REST APIs and a MySQL data layer',
      'Node.js services for live connections, presence and events',
      'Flutter mobile client sharing one backend with the web interface',
      'Push notifications for message and call delivery'
    ],
    role:'Designed and built the full system — database schema, backend services, real-time layer and the mobile client.'
  },
  {
    id:'ginbaba', icon:'bot', featured:true,
    name:'GINBABA',
    status:'active', statusLabel:'In Active Development',
    tagline:'AI personal assistant with agents and device control',
    short:'A personal AI assistant supporting chat and voice interaction, backed by AI agents that can carry out tasks and control connected devices.',
    stack:['LLM Integration','AI Agents','Voice','Node.js','REST APIs'],
    about:'GINBABA is a personal AI assistant built around the idea that an assistant should be able to act, not only reply. It supports both text chat and voice interaction, and routes requests through AI agents that can call tools, run multi-step tasks and interact with connected devices.',
    points:[
      'Chat interface with conversational context handling',
      'Voice input and spoken responses',
      'AI agent layer for tool use and multi-step tasks',
      'Device-control capabilities for connected actions',
      'Model flexibility through multiple LLM provider APIs'
    ],
    role:'Solo developer — assistant architecture, agent logic, prompt design and integrations.'
  },
  {
    id:'rehanbot', icon:'network', featured:true,
    name:'Rehan Bot',
    status:'active', statusLabel:'In Active Development',
    tagline:'AI coordination, reporting and automation system',
    short:'An AI system for coordination and automation — handling reporting, knowledge lookup and routine operational tasks through a conversational interface.',
    stack:['AI Automation','LLM Integration','Node.js','REST APIs','MySQL'],
    about:'Rehan Bot is an automation and coordination system built around a conversational interface. It handles structured reporting, answers questions from a knowledge base and automates routine tasks that would otherwise be handled manually, acting as a single point of contact for repetitive operational work.',
    points:[
      'Conversational interface for coordination and task handling',
      'Automated report generation and structured data collection',
      'Knowledge lookup from a maintained information base',
      'Workflow automation for repetitive operational tasks',
      'LLM-driven intent handling with structured outputs'
    ],
    role:'Built the system end to end — conversation flow, automation logic and data handling.'
  },
  {
    id:'videollm', icon:'video', featured:true,
    name:'VideoLLM',
    status:'built', statusLabel:'Built · Project',
    tagline:'AI video processing with FastAPI',
    short:'A video processing project that runs footage through cloud-based AI models, exposed as a FastAPI service for analysis and understanding tasks.',
    stack:['FastAPI','Python','Cloud AI Models','REST APIs'],
    about:'VideoLLM explores applying large AI models to video content. A FastAPI service handles upload and job management, then passes media to cloud-based AI models for processing, returning structured results that can be consumed by other applications.',
    points:[
      'FastAPI service handling upload and job orchestration',
      'Integration with cloud-hosted AI models for video understanding',
      'Structured output returned through a clean REST interface',
      'Built as a reusable backend component rather than a closed app'
    ],
    role:'Designed the API, processing pipeline and model integration.'
  },
  {
    id:'rehanmusic', icon:'music', featured:true,
    name:'Rehan Music',
    status:'active', statusLabel:'In Development',
    tagline:'AI music generation platform',
    short:'A platform for generating music with AI — turning text and parameter input into audio tracks through a web interface.',
    stack:['AI Generation','Node.js','REST APIs','Web Audio'],
    about:'Rehan Music (also written Rihan Music) is a platform for AI-generated audio. Users provide prompts and parameters, and the system produces music tracks through AI generation models, with a web interface for creating, playing back and managing results.',
    points:[
      'Prompt-driven music generation through AI models',
      'Web interface for creation, playback and library management',
      'Backend job handling for generation requests',
      'Ongoing work on quality, controls and output options'
    ],
    role:'Developing the platform — interface, backend and model integration.'
  },
  {
    id:'clubhouse', icon:'mic', featured:true,
    name:'Clubhouse Clone',
    status:'built', statusLabel:'Built · Project',
    tagline:'Real-time social audio app with an AI assistant',
    short:'A live social audio application with rooms, speakers and listeners, built on WebRTC — with an AI assistant participating in the experience.',
    stack:['WebRTC','WebSockets','Node.js','JavaScript','Real-Time Audio'],
    about:'A social audio application in the style of Clubhouse — users join rooms, speak or listen, and move between roles in real time. Audio runs over WebRTC while WebSockets handle room state, presence and role changes. An AI assistant is integrated into the experience alongside human participants.',
    points:[
      'Live audio rooms with speaker and listener roles',
      'WebRTC audio streaming between participants',
      'WebSocket-driven room state, presence and role management',
      'Integrated AI assistant within the audio experience',
      'Built as a deep exercise in real-time media architecture'
    ],
    role:'Built the full real-time stack — signalling, media handling and room logic.'
  },

  /* ---------- Experiments / smaller projects ---------- */
  {
    id:'eventsapplier', icon:'calendar', featured:false,
    name:'Events Opportunity Applier',
    status:'built', statusLabel:'Built · Automation',
    tagline:'Automation for opportunity applications',
    short:'An automation project that finds relevant events and opportunities and handles the repetitive parts of applying to them.',
    stack:['Automation','Node.js','REST APIs','Scripting'],
    about:'A practical automation tool built to remove manual effort from applying to events and opportunities — gathering listings, filtering them against criteria and automating the repetitive form and submission steps.',
    points:[
      'Automated collection of event and opportunity listings',
      'Filtering against defined criteria',
      'Automation of repetitive application steps',
      'Built to solve a real recurring task'
    ],
    role:'Built the automation pipeline end to end.'
  },
  {
    id:'phoneopiabot', icon:'bot', featured:false,
    name:'Phoneopia Bot',
    status:'active', statusLabel:'In Development',
    tagline:'Communication automation and bot integration',
    short:'A bot layer for communication automation — automated responses, message handling and integration with messaging channels.',
    stack:['Node.js','Baileys','WebSockets','AI Automation'],
    about:'Phoneopia Bot extends the Phoneopia work into automated messaging — handling incoming messages, generating responses and connecting messaging channels to backend logic through bot integration.',
    points:[
      'Automated message handling and responses',
      'Messaging channel integration via Baileys',
      'Connection between chat channels and backend services',
      'Developed alongside the main Phoneopia platform'
    ],
    role:'Developing the bot layer and its integrations.'
  },
  {
    id:'aibuilder', icon:'code', featured:false,
    name:'AI Website &amp; App Builder',
    status:'concept', statusLabel:'Concept',
    tagline:'Replit-style AI builder concept',
    short:'A concept for an AI-powered builder that generates and edits websites and applications from natural-language instructions.',
    stack:['LLM Integration','Code Generation','React','Node.js'],
    about:'A concept for an AI development environment in the spirit of Replit — describe what you want, and the system generates project files, lets you edit them and previews the result live. It explores structured code generation, project scaffolding and AI-assisted editing.',
    points:[
      'Natural-language input producing project files',
      'Live preview of generated applications',
      'AI-assisted editing of existing code',
      'Currently a concept and architecture exploration'
    ],
    role:'Concept design and technical exploration.'
  }
];

/* =========================================================
   Render projects
   ========================================================= */
function statusHTML(p){
  return `<span class="status status--${p.status}"><i></i>${p.statusLabel}</span>`;
}

function renderProjects(){
  const feat = document.getElementById('featuredGrid');
  const exp  = document.getElementById('expGrid');
  if(!feat || !exp) return;

  let fi = 0, ei = 0;
  PROJECTS.forEach(p=>{
    if(p.featured){
      fi++;
      const el = document.createElement('button');
      el.type='button'; el.className='pcard card-3d reveal'; el.dataset.id=p.id;
      el.dataset.d = String(Math.min(fi,6));
      el.setAttribute('aria-label',`Open details for ${p.name}`);
      el.innerHTML = `
        <div class="pcard__top">
          <span class="pcard__ico">${ICONS[p.icon]}</span>
          ${statusHTML(p)}
        </div>
        <h3>${p.name}</h3>
        <p class="pcard__desc">${p.short}</p>
        <div class="pcard__stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
        <span class="pcard__more">View project ${ARROW}</span>`;
      feat.appendChild(el);
    } else {
      ei++;
      const el = document.createElement('button');
      el.type='button'; el.className='ecard card-3d reveal'; el.dataset.id=p.id;
      el.dataset.d = String(Math.min(ei,6));
      el.setAttribute('aria-label',`Open details for ${p.name}`);
      el.innerHTML = `
        <div class="ecard__top">
          <span class="ecard__ico">${ICONS[p.icon]}</span>
          ${statusHTML(p)}
        </div>
        <h3>${p.name}</h3>
        <p>${p.short}</p>`;
      exp.appendChild(el);
    }
  });
}

/* =========================================================
   Modal
   ========================================================= */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
let lastFocus = null;

function openProject(id){
  const p = PROJECTS.find(x=>x.id===id);
  if(!p) return;
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <div class="m-hero">
      <span class="m-ico">${ICONS[p.icon]}</span>
      <div>
        <h3 id="modalTitle">${p.name}</h3>
        <p class="m-tagline">${p.tagline}</p>
      </div>
    </div>
    ${statusHTML(p)}
    <div class="m-section">
      <h4>Overview</h4>
      <p>${p.about}</p>
    </div>
    <div class="m-section">
      <h4>What it does</h4>
      <ul class="m-list">${p.points.map(x=>`<li>${CHECK}<span>${x}</span></li>`).join('')}</ul>
    </div>
    <div class="m-section">
      <h4>Technologies</h4>
      <div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
    </div>
    <div class="m-section">
      <h4>My role</h4>
      <p>${p.role}</p>
    </div>
    <div class="m-divider"></div>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('is-locked');
  modal.querySelector('.modal__close').focus();
}

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-locked');
  if(lastFocus) lastFocus.focus();
}

/* =========================================================
   Boot
   ========================================================= */
document.addEventListener('DOMContentLoaded', ()=>{

  renderProjects();
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- Loader ---- */
  window.addEventListener('load', ()=>{
    setTimeout(()=>document.getElementById('loader').classList.add('done'), 320);
  });
  setTimeout(()=>document.getElementById('loader').classList.add('done'), 2600);

  /* ---- Theme ---- */
  const root = document.documentElement;
  // Light is the default. Dark only if the visitor chose it with the toggle.
  const saved = localStorage.getItem('as-theme');
  root.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');

  document.getElementById('themeToggle').addEventListener('click', ()=>{
    const next = root.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('as-theme', next);
    if(window.__setSceneTheme) window.__setSceneTheme(next);
  });

  /* ---- Mobile menu ---- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    navLinks.classList.remove('open'); burger.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
  }));

  /* ---- Scroll: nav state, progress bar, active link ---- */
  const nav = document.getElementById('nav');
  const bar = document.getElementById('scrollBar');
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...navLinks.querySelectorAll('a')];
  let ticking = false;

  function onScroll(){
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 24);

    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y/h)*100 : 0) + '%';

    let current = '';
    sections.forEach(s=>{ if(y >= s.offsetTop - 140) current = s.id; });
    links.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#'+current));
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(!ticking){ ticking = true; requestAnimationFrame(onScroll); }
  }, {passive:true});
  onScroll();

  /* ---- Reveal on scroll ---- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* Safety net: anything already inside the viewport (e.g. a direct #hash load)
     is revealed immediately, so content can never stay invisible. */
  function sweepReveals(){
    document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight && r.bottom > 0){ el.classList.add('in'); io.unobserve(el); }
    });
  }
  window.addEventListener('load', ()=>{ sweepReveals(); setTimeout(sweepReveals, 400); });
  setTimeout(sweepReveals, 900);

  /* ---- 3D tilt on cards ---- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  if(!reduce && !isTouch){
    document.querySelectorAll('.pcard, .ecard, .skillset, .svc').forEach(card=>{
      card.addEventListener('mousemove', (ev)=>{
        const r = card.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width;
        const py = (ev.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px*100)+'%');
        card.style.setProperty('--my', (py*100)+'%');
        const rx = (.5 - py) * 7;
        const ry = (px - .5) * 9;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
    });

    /* Portrait follows the cursor */
    const portrait = document.getElementById('portrait');
    const chips = document.querySelectorAll('.chip');
    if(portrait){
      const hero = document.getElementById('hero');
      hero.addEventListener('mousemove', (ev)=>{
        const r = hero.getBoundingClientRect();
        const px = (ev.clientX - r.left)/r.width - .5;
        const py = (ev.clientY - r.top)/r.height - .5;
        portrait.style.transform = `rotateY(${px*14}deg) rotateX(${-py*12}deg)`;
        chips.forEach(c=>{
          const d = parseFloat(c.dataset.depth || 0);
          c.style.marginLeft = (px*d)+'px';
          c.style.marginTop  = (py*d*.6)+'px';
        });
      });
      hero.addEventListener('mouseleave', ()=>{ portrait.style.transform=''; });
    }
  }

  /* ---- Modal wiring ---- */
  document.addEventListener('click', (ev)=>{
    const card = ev.target.closest('.pcard, .ecard');
    if(card){ openProject(card.dataset.id); return; }
    if(ev.target.closest('[data-close]')) closeModal();
  });
  document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  /* ---- Contact form ---- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const label = submitBtn.querySelector('.btn__label');

  form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    status.className = 'form__status';
    status.textContent = '';

    const fields = ['name','email','subject','message'];
    let bad = false;
    fields.forEach(f=>{
      const el = form[f];
      const ok = el.value.trim() !== '' && (f !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
      el.classList.toggle('err', !ok);
      if(!ok) bad = true;
    });
    if(bad){
      status.className = 'form__status bad';
      status.textContent = 'Please fill in every field with a valid email address.';
      return;
    }

    submitBtn.disabled = true;
    label.textContent = 'Sending…';

    try{
      const res = await fetch('contact.php', { method:'POST', body:new FormData(form) });
      const data = await res.json();
      if(data.ok){
        status.className = 'form__status ok';
        status.textContent = data.message || 'Thanks — your message has been sent.';
        form.reset();
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch(err){
      status.className = 'form__status bad';
      status.innerHTML = 'Could not send right now. Please email <a href="mailto:mk.abdullah8976@gmail.com" style="color:inherit;text-decoration:underline">mk.abdullah8976@gmail.com</a> directly.';
    } finally {
      submitBtn.disabled = false;
      label.textContent = 'Send message';
    }
  });

  /* ---- 3D background scene ---- */
  initScene();
});

/* =========================================================
   Three.js background — floating geometry reacting to scroll
   ========================================================= */
function initScene(){
  const canvas = document.getElementById('scene3d');
  if(!canvas || typeof THREE === 'undefined') return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, window.innerWidth/window.innerHeight, 0.1, 200);
  camera.position.z = 26;

  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  const group = new THREE.Group();
  scene.add(group);

  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';
  const palette = [0x3b5bfd, 0x7a4df5, 0x00b2c7];

  const geos = [
    new THREE.IcosahedronGeometry(1.5, 0),
    new THREE.OctahedronGeometry(1.5, 0),
    new THREE.TorusGeometry(1.1, .36, 10, 28),
    new THREE.DodecahedronGeometry(1.4, 0),
    new THREE.TetrahedronGeometry(1.7, 0)
  ];

  const shapes = [];
  const COUNT = window.innerWidth < 760 ? 12 : 22;

  for(let i=0;i<COUNT;i++){
    const mat = new THREE.MeshBasicMaterial({
      color: palette[i % palette.length],
      wireframe: true,
      transparent: true,
      opacity: isDark() ? .26 : .17
    });
    const mesh = new THREE.Mesh(geos[i % geos.length], mat);
    mesh.position.set(
      (Math.random()-.5) * 46,
      (Math.random()-.5) * 52,
      (Math.random()-.5) * 26 - 6
    );
    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
    const s = .45 + Math.random()*.85;
    mesh.scale.setScalar(s);
    mesh.userData = {
      rx:(Math.random()-.5)*.004,
      ry:(Math.random()-.5)*.004,
      fy:(Math.random()-.5)*.9,
      ph:Math.random()*Math.PI*2
    };
    group.add(mesh);
    shapes.push(mesh);
  }

  /* particle dust */
  const pGeo = new THREE.BufferGeometry();
  const pCount = window.innerWidth < 760 ? 260 : 620;
  const pos = new Float32Array(pCount*3);
  for(let i=0;i<pCount*3;i+=3){
    pos[i]   = (Math.random()-.5)*70;
    pos[i+1] = (Math.random()-.5)*70;
    pos[i+2] = (Math.random()-.5)*34 - 8;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos,3));
  const pMat = new THREE.PointsMaterial({
    color:0x3b5bfd, size:.09, transparent:true, opacity:isDark()?.45:.3, sizeAttenuation:true
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  window.__setSceneTheme = (theme)=>{
    const dark = theme === 'dark';
    shapes.forEach(m=>{ m.material.opacity = dark ? .26 : .17; });
    pMat.opacity = dark ? .45 : .3;
  };

  let mx = 0, my = 0, tx = 0, ty = 0, scrollY = 0;
  window.addEventListener('mousemove', (e)=>{
    tx = (e.clientX / window.innerWidth - .5);
    ty = (e.clientY / window.innerHeight - .5);
  }, {passive:true});
  window.addEventListener('scroll', ()=>{ scrollY = window.scrollY; }, {passive:true});

  let raf, t = 0, visible = true;
  document.addEventListener('visibilitychange', ()=>{ visible = !document.hidden; });

  function tick(){
    raf = requestAnimationFrame(tick);
    if(!visible) return;
    t += .01;

    mx += (tx - mx) * .045;
    my += (ty - my) * .045;

    const prog = scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    group.rotation.y = mx * .5 + prog * 1.7;
    group.rotation.x = my * .35 + prog * .55;
    group.position.y = prog * 16;

    points.rotation.y = -mx * .25 + prog * .6;
    points.position.y = prog * 9;

    shapes.forEach((m,i)=>{
      m.rotation.x += m.userData.rx;
      m.rotation.y += m.userData.ry;
      m.position.y += Math.sin(t + m.userData.ph) * .006 * m.userData.fy;
    });

    camera.position.x = mx * 2.4;
    camera.position.y = -my * 1.8;
    camera.lookAt(0,0,0);

    renderer.render(scene, camera);
  }
  tick();
  canvas.classList.add('ready');

  let rt;
  window.addEventListener('resize', ()=>{
    clearTimeout(rt);
    rt = setTimeout(()=>{
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 150);
  });
}
