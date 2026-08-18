const cfg=window.TEM_CONFIG||{};

const I18N=window.TEM_I18N||{}; const SERVICE_I18N=window.TEM_SERVICE_I18N||{};
function tt(lang,key){return (I18N[lang]&&I18N[lang][key])||(I18N.en&&I18N.en[key])||key}
function applySiteTranslations(lang){
  $$('[data-i18n]').forEach(el=>{el.textContent=tt(lang,el.dataset.i18n)});
  $$('[data-i18n-html]').forEach(el=>{el.innerHTML=tt(lang,el.dataset.i18nHtml)});
  $$('[data-i18n-placeholder]').forEach(el=>{el.placeholder=tt(lang,el.dataset.i18nPlaceholder)});
  // Shared navigation/service-page chrome. Logo text is intentionally excluded.
  $$('.nav-links a').forEach(a=>{const h=a.getAttribute('href')||''; if(h.endsWith('#top'))a.textContent=tt(lang,'nav.home'); else if(h.endsWith('#services'))a.textContent=tt(lang,'nav.services'); else if(h.endsWith('#approach'))a.textContent=tt(lang,'nav.approach'); else if(h.endsWith('#about'))a.textContent=tt(lang,'nav.about'); else if(h.endsWith('#contact')&&!a.classList.contains('nav-cta'))a.textContent=tt(lang,'nav.contact');});
  $$('.breadcrumbs').forEach(el=>el.innerHTML=`<a data-transition href="../index.html">${tt(lang,'common.home')}</a> / ${tt(lang,'common.services')}`);
  $$('.page-hero .eyebrow').forEach(el=>el.innerHTML=`<span></span> ${tt(lang,'common.temService')}`);
  $$('.outcome strong').forEach(el=>el.textContent=tt(lang,'common.businessOutcome'));
  $$('.service-sidebar .btn').forEach(el=>el.textContent=tt(lang,'common.discussService'));
  $$('.deliverables h3').forEach(el=>el.textContent=tt(lang,'common.deliverables'));
  $$('.footer-links a').forEach(a=>{const h=a.getAttribute('href')||''; if(h.endsWith('#top'))a.textContent=tt(lang,'nav.home'); else if(h.endsWith('#services'))a.textContent=tt(lang,'nav.services'); else if(h.endsWith('#contact'))a.textContent=tt(lang,'nav.contact');});
  $$('.chat-head strong').forEach(el=>el.textContent=tt(lang,'chat.title')); $$('.chat-head small').forEach(el=>el.textContent=tt(lang,'chat.sub'));
  $$('#chatMessage').forEach(el=>el.placeholder=tt(lang,'chat.placeholder'));
}
const services=window.TEM_SERVICES||{};
const icons=window.TEM_ICONS||{};
const $=(s,c=document)=>c.querySelector(s); const $$=(s,c=document)=>[...c.querySelectorAll(s)];

// Browser-tab titles. Branding stays fixed; only the current site section/page changes.
const TEM_BROWSER_TITLE='TEM Techs';
const HOME_SECTION_TITLES={
  '#top':'Home',
  '#services':'Services',
  '#approach':'Approach',
  '#about':'About',
  '#contact':'Contact'
};
function setBrowserTitle(label){document.title=`${TEM_BROWSER_TITLE} | ${label}`}
function updateHomeBrowserTitle(){
  if(document.body.dataset.page!=='home')return;
  const hash=location.hash||'#top';
  setBrowserTitle(HOME_SECTION_TITLES[hash]||'Home');
}
function setupBrowserTitles(){
  if(document.body.dataset.page==='home'){
    updateHomeBrowserTitle();
    window.addEventListener('hashchange',updateHomeBrowserTitle);
    $$('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
      const h=a.getAttribute('href');
      if(HOME_SECTION_TITLES[h])setBrowserTitle(HOME_SECTION_TITLES[h]);
    }));
  }
}
window.addEventListener('DOMContentLoaded',()=>{document.body.classList.add('loaded');initCommon(); if(document.body.dataset.page==='home')initHome(); if(document.body.dataset.page==='service')initService();});
function initCommon(){
  $('#year') && ($('#year').textContent=new Date().getFullYear());
  const nav=$('.nav-links'),toggle=$('.nav-toggle'); toggle?.addEventListener('click',()=>nav.classList.toggle('open')); $$('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12}); $$('.reveal').forEach(el=>io.observe(el));
  $$('a[data-transition]').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||a.target==='_blank')return;e.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=a.href,180)}));
  setupConfig(); setupLanguage(); setupChat(); setupContactForm(); setupBrowserTitles();
}
function setupConfig(){
  $$('[data-email]').forEach(el=>{el.textContent=cfg.email||'YOUR_EMAIL'; if(el.tagName==='A')el.href=`mailto:${cfg.email}`});
  $$('[data-phone]').forEach(el=>{el.textContent=cfg.phone||''; if(el.tagName==='A')el.href=`tel:${(cfg.phone||'').replace(/\s/g,'')}`});
  $$('[data-location]').forEach(el=>el.textContent=cfg.location||'Germany · Europe · Remote');
  const social=cfg.social||{};
  ['linkedin','facebook','instagram','x'].forEach(key=>{
    const url=social[key]||'';
    $$(`[data-social="${key}"]`).forEach(el=>{
      if(url){el.href=url;el.classList.add('linked');el.target='_blank';el.rel='noopener'}
      else {el.removeAttribute('href');el.classList.remove('linked');el.setAttribute('aria-disabled','true')}
    });
  });
}

function populateServiceSelect(lang){
  const sel=$('#serviceSelect'); if(!sel)return;
  const current=sel.value;
  sel.innerHTML=Object.entries(services).map(([slug,s])=>`<option value="${s.title.en}">${s.title[lang]||s.title.en}</option>`).join('')+`<option value="Other">${tt(lang,'form.other')}</option>`;
  if([...sel.options].some(o=>o.value===current))sel.value=current;
}
function setupLanguage(){
  const saved=localStorage.getItem('tem-language');const browser=(navigator.language||'en').slice(0,2);setLang(saved||(['en','fr','de'].includes(browser)?browser:'en'));
  $$('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
}
function setLang(lang){localStorage.setItem('tem-language',lang);document.documentElement.lang=lang;populateServiceSelect(lang);$$('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));applySiteTranslations(lang);document.dispatchEvent(new CustomEvent('tem:lang',{detail:lang}));if(document.body.dataset.page==='service')renderService(lang)}
function initHome(){renderServiceCards();document.addEventListener('tem:lang',()=>renderServiceCards());}
function renderServiceCards(){const grid=$('#serviceGrid');if(!grid)return;const lang=localStorage.getItem('tem-language')||'en';grid.innerHTML='';Object.entries(services).forEach(([slug,s],i)=>{const title=s.title[lang]||s.title.en;const intro=s.intro[lang]||s.intro.en;const loc=(SERVICE_I18N[slug]&&SERVICE_I18N[slug][lang])||{};const caps=loc.capabilities||s.capabilities;const c=caps.slice(0,3);const card=document.createElement('article');card.className='service-card reveal visible';card.innerHTML=`<div class="service-top"><div class="service-icon">${icons[s.icon]}</div><span class="service-num">0${i+1}</span></div><h3>${title}</h3><p>${intro}</p><div class="service-actions"><a class="service-link" data-transition href="services/${slug}.html">${tt(lang,'common.viewService')} →</a><button class="expand-btn" aria-label="Expand">+</button></div><div class="service-extra"><div><div class="extra-inner"><strong>${tt(lang,'common.includes')}</strong><ul>${c.map(x=>`<li>${x[0]}</li>`).join('')}</ul><div class="example-box"><b>${tt(lang,'common.example')}:</b> ${c[0][2]}</div></div></div></div>`;grid.appendChild(card);const btn=$('.expand-btn',card),extra=$('.service-extra',card);btn.addEventListener('click',()=>{btn.classList.toggle('open');extra.classList.toggle('open')});});$$('a[data-transition]',grid).forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=a.href,180)}));}
function initService(){renderService(localStorage.getItem('tem-language')||'en')}
function renderService(lang){const slug=document.body.dataset.service;const s=services[slug];if(!s)return;const title=s.title[lang]||s.title.en;const loc=(SERVICE_I18N[slug]&&SERVICE_I18N[slug][lang])||{};const caps=loc.capabilities||s.capabilities;const dels=loc.deliverables||s.deliverables;const outcome=loc.outcome||s.outcome;$('#serviceTitle').textContent=title;$('#serviceIntro').textContent=s.intro[lang]||s.intro.en;$('#serviceIcon').innerHTML=icons[s.icon];$('#serviceOutcome').textContent=outcome;$('#serviceCapabilities').innerHTML=caps.map((c,i)=>`<article class="capability reveal visible"><div class="eyebrow"><span></span> 0${i+1}</div><h3>${c[0]}</h3><p>${c[1]}</p><div class="case"><strong>${tt(lang,'common.example')}:</strong> ${c[2]}</div></article>`).join('');$('#deliverablesList').innerHTML=dels.map(x=>`<li>${x}</li>`).join('');$('#techPills').innerHTML=s.tech.map(x=>`<span>${x}</span>`).join('');setBrowserTitle(title);applySiteTranslations(lang)}
function setupContactForm(){const form=$('#contactForm');if(!form)return;form.addEventListener('submit',async e=>{e.preventDefault();const status=$('#formStatus');const fd=new FormData(form);const data=Object.fromEntries(fd.entries());status.textContent=tt(localStorage.getItem('tem-language')||'en','common.sending');if(cfg.formEndpoint){try{const r=await fetch(cfg.formEndpoint,{method:'POST',headers:{'Accept':'application/json'},body:fd});if(!r.ok)throw new Error('send failed');status.textContent=tt(localStorage.getItem('tem-language')||'en','common.sent');form.reset();return}catch(err){status.textContent=tt(localStorage.getItem('tem-language')||'en','common.sendFail')}}const subject=encodeURIComponent(`TEM Techs enquiry — ${data.service||'General'}`);const body=encodeURIComponent(`Name: ${data.name}\nCompany: ${data.company||''}\nEmail: ${data.email}\nService: ${data.service||''}\n\n${data.message}`);location.href=`mailto:${cfg.email}?subject=${subject}&body=${body}`;});}
function setupChat(){const launch=$('#chatLaunch'),panel=$('#chatPanel'),msg=$('#chatMessage');launch?.addEventListener('click',()=>panel?.classList.toggle('open'));$('#chatWhatsApp')?.addEventListener('click',()=>{const number=(cfg.whatsapp||'').replace(/\D/g,'');if(!number)return alert('Add your WhatsApp number in config.js');window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg.value||'Hello TEM Techs, I would like to discuss a project.')}`,'_blank')});$('#chatEmail')?.addEventListener('click',()=>{location.href=`mailto:${cfg.email}?subject=${encodeURIComponent('TEM Techs website enquiry')}&body=${encodeURIComponent(msg.value||'Hello TEM Techs, I would like to discuss a project.')}`});}

// Dynamic corporate hero: synchronized words, services and capability cards.
(function initDynamicHero(){
  const visual=document.getElementById('heroVisual');
  const panel=document.getElementById('visualPanel');
  const label=document.getElementById('capabilityLabel');
  const words=[...document.querySelectorAll('#dynamicHeroWords span')];
  const cards=[...document.querySelectorAll('.dynamic-card')];
  const progress=document.getElementById('visualProgress');
  const counter=document.getElementById('visualCounter');
  const backgrounds=[...document.querySelectorAll('.hero-bg')];
  if(!visual||!panel||!label||cards.length<2||words.length<3)return;
  const getSequences=()=>{const lang=localStorage.getItem('tem-language')||'en'; return lang==='fr'?[
    {label:'Réseau',words:['Connecté.','Sécurisé.','Évolutif.'],a:['Architecture réseau','LAN · WAN · SD-WAN'],b:['Connectivité sécurisée','Pare-feu · VPN · Segmentation']},
    {label:'Cloud',words:['Moderne.','Flexible.','Cloud-ready.'],a:['Architecture cloud','Azure · AWS · GCP'],b:['Services de migration','Évaluer · Migrer · Optimiser']},
    {label:'Sécurité',words:['Protégé.','Résilient.','Fiable.'],a:['Architecture sécurité','Pare-feu · IAM · Zero Trust'],b:['Cyber-résilience','Sauvegarde · PRA · Détection']},
    {label:'Services managés',words:['Supervisé.','Optimisé.','Accompagné.'],a:['Cloud managé','Superviser · Corriger · Optimiser'],b:['NOC & SOC','Visibilité · Alertes · Réponse']},
    {label:'DevOps',words:['Automatisé.','Reproductible.','Efficace.'],a:['Automatisation DevOps','CI/CD · IaC · Tests'],b:['Cloud native','Docker · Kubernetes · Git']},
    {label:'Logiciels',words:['Conçu.','Intégré.','Livré.'],a:['Applications numériques','Web · Mobile · API'],b:['Support logiciel','UX · Intégration · Maintenance']}
  ]:lang==='de'?[
    {label:'Netzwerk',words:['Vernetzt.','Sicher.','Skalierbar.'],a:['Netzwerkarchitektur','LAN · WAN · SD-WAN'],b:['Sichere Konnektivität','Firewall · VPN · Segmentierung']},
    {label:'Cloud',words:['Modern.','Flexibel.','Cloud-ready.'],a:['Cloud-Architektur','Azure · AWS · GCP'],b:['Migrationsservices','Bewerten · Migrieren · Optimieren']},
    {label:'Sicherheit',words:['Geschützt.','Resilient.','Vertrauenswürdig.'],a:['Security-Architektur','Firewall · IAM · Zero Trust'],b:['Cyber-Resilienz','Backup · DR · Erkennung']},
    {label:'Managed Services',words:['Überwacht.','Optimiert.','Unterstützt.'],a:['Managed Cloud','Überwachen · Patchen · Optimieren'],b:['NOC & SOC','Transparenz · Alarme · Reaktion']},
    {label:'DevOps',words:['Automatisiert.','Wiederholbar.','Effizient.'],a:['DevOps-Automatisierung','CI/CD · IaC · Tests'],b:['Cloud Native','Docker · Kubernetes · Git']},
    {label:'Software',words:['Entworfen.','Integriert.','Geliefert.'],a:['Digitale Anwendungen','Web · Mobile · APIs'],b:['Software-Support','UX · Integration · Wartung']}
  ]:[
    {label:'Network',words:['Connected.','Secure.','Scalable.'],a:['Network Architecture','LAN · WAN · SD-WAN'],b:['Secure Connectivity','Firewall · VPN · Segmentation']},
    {label:'Cloud',words:['Modern.','Flexible.','Cloud-ready.'],a:['Cloud Architecture','Azure · AWS · GCP'],b:['Migration Services','Assess · Move · Optimize']},
    {label:'Security',words:['Protected.','Resilient.','Trusted.'],a:['Security Architecture','Firewall · IAM · Zero Trust'],b:['Cyber Resilience','Backup · DR · Detection']},
    {label:'Managed Services',words:['Monitored.','Optimized.','Supported.'],a:['Managed Cloud','Monitor · Patch · Optimize'],b:['NOC & SOC','Visibility · Alerts · Response']},
    {label:'DevOps',words:['Automated.','Repeatable.','Efficient.'],a:['DevOps Automation','CI/CD · IaC · Testing'],b:['Cloud Native','Docker · Kubernetes · Git']},
    {label:'Software',words:['Designed.','Integrated.','Delivered.'],a:['Digital Applications','Web · Mobile · APIs'],b:['Software Support','UX · Integration · Maintenance']}
  ];};
  let idx=0,timer;
  const swap=()=>{
    const sequences=getSequences(); idx=(idx+1)%sequences.length; const s=sequences[idx];
    backgrounds.forEach((bg,i)=>bg.classList.toggle('active',i===idx));
    label.classList.add('switching'); cards.forEach(c=>c.classList.add('switching')); words.forEach(w=>w.classList.add('word-out'));
    setTimeout(()=>{
      label.textContent=s.label;
      words.forEach((w,i)=>{w.textContent=s.words[i];w.classList.remove('word-out');w.classList.add('word-in');setTimeout(()=>w.classList.remove('word-in'),520)});
      cards[0].querySelector('strong').textContent=s.a[0]; cards[0].querySelector('small').textContent=s.a[1];
      cards[1].querySelector('strong').textContent=s.b[0]; cards[1].querySelector('small').textContent=s.b[1];
      progress && (progress.style.width=`${((idx+1)/sequences.length)*100}%`); counter && (counter.textContent=`${String(idx+1).padStart(2,'0')} / ${String(sequences.length).padStart(2,'0')}`);
      label.classList.remove('switching'); cards.forEach(c=>{c.classList.remove('switching');c.classList.add('active-flash');setTimeout(()=>c.classList.remove('active-flash'),650)});
    },520);
  };
  counter && (counter.textContent='01 / 06'); document.addEventListener('tem:lang',()=>{idx=-1;swap();});
  const start=()=>{clearInterval(timer);timer=setInterval(swap,3000)}; start();
  visual.addEventListener('mouseenter',()=>clearInterval(timer)); visual.addEventListener('mouseleave',()=>{panel.style.transform='';start()});
  visual.addEventListener('mousemove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=visual.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;panel.style.transform=`rotateY(${x*3.2}deg) rotateX(${-y*3.2}deg) translateY(-2px)`});
})();
