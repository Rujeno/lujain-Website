const toggle=document.getElementById('langToggle');
let lang=localStorage.getItem('siteLang')||'en';

const rich={
  heroTitle:{
    en:'Technology with <span>control.</span><br>Projects with <span>impact.</span>',
    ar:'تقنية مع <span>ضبط.</span><br>ومشاريع ذات <span>أثر.</span>'
  },
  heroIntro:{
    en:"I'm <strong>Lujain Alshamrani</strong>, a Computer Science professional working across IT operations, systems, access governance, digital delivery, and project coordination — with a growing specialization in cybersecurity GRC and security assurance.",
    ar:"أنا <strong>لجين الشمراني</strong>، متخصصة في علوم الحاسب أعمل في تشغيل تقنية المعلومات والأنظمة وحوكمة الصلاحيات والتسليم الرقمي وتنسيق المشاريع، مع توجه متنامٍ نحو GRC والأمن السيبراني وضمان الأمن."
  },
  contactTitle:{
    en:'Technology, governance, <span>and ownership.</span>',
    ar:'تقنية، حوكمة، <span>وتحمّل للمسؤولية.</span>'
  }
};

function addWhatsAppContact(){
  const whatsappUrl='https://wa.me/966540626039';

  const contact=document.getElementById('contact');
  if(contact){
    const info=contact.firstElementChild;
    const links=contact.querySelector('.contact-links');

    if(info && !info.querySelector('.contact-phone')){
      const phone=document.createElement('p');
      phone.className='contact-phone';
      phone.style.cssText='margin-top:18px;display:flex;flex-wrap:wrap;align-items:center;gap:10px;color:#9c9ca6;font-size:12px;';
      phone.innerHTML='<span data-en="Mobile / WhatsApp" data-ar="الجوال / واتساب">Mobile / WhatsApp</span><a href="tel:+966540626039" dir="ltr" style="color:#f7f7f8;font-size:14px;font-weight:800;text-decoration:none;">+966 54 062 6039</a>';
      info.appendChild(phone);
    }

    if(links && !links.querySelector('[data-whatsapp]')){
      const wa=document.createElement('a');
      wa.href=whatsappUrl;
      wa.target='_blank';
      wa.rel='noreferrer';
      wa.dataset.whatsapp='true';
      wa.style.cssText='background:#25D366;border-color:#25D366;color:#07130b;';
      wa.innerHTML='<span data-en="WhatsApp" data-ar="واتساب">WhatsApp</span> ↗';
      links.prepend(wa);
    }
  }

  const socials=document.querySelector('.socials');
  if(socials && !socials.querySelector('[data-whatsapp]')){
    const waSmall=document.createElement('a');
    waSmall.href=whatsappUrl;
    waSmall.target='_blank';
    waSmall.rel='noreferrer';
    waSmall.dataset.whatsapp='true';
    waSmall.setAttribute('aria-label','WhatsApp');
    waSmall.textContent='WA';
    waSmall.style.cssText='background:#25D366;border-color:#25D366;color:#07130b;';
    socials.prepend(waSmall);
  }
}

function updateCityscapeMetric(){
  const label=[...document.querySelectorAll('.visual-label')].find(el=>el.textContent.trim().toUpperCase()==='CITYSCAPE RIYADH');
  if(!label) return;

  const project=label.closest('.project');
  const mock=project?.querySelector('.mock');
  if(mock && mock.children.length>=2){
    mock.children[0].textContent='≈ 5,000';
    const metricLabel=mock.children[1];
    metricLabel.setAttribute('data-en','INTEREST REGISTRATIONS');
    metricLabel.setAttribute('data-ar','تسجيل اهتمام');
    metricLabel.textContent=lang==='ar'?'تسجيل اهتمام':'INTEREST REGISTRATIONS';
  }

  const desc=project?.querySelector('.desc');
  if(desc){
    desc.setAttribute('data-en','Led booth operations, team responsibilities, visitor flow, stakeholder follow-up, and approximately 5,000 interest registrations, with lessons learned documented for future participation.');
    desc.setAttribute('data-ar','قيادة عمليات الجناح وتوزيع مهام الفريق وتدفق الزوار والمتابعة مع أصحاب المصلحة، مع تسجيل حوالي 5,000 حالة اهتمام وتوثيق الدروس المستفادة للمشاركات القادمة.');
    desc.textContent=lang==='ar'?desc.dataset.ar:desc.dataset.en;
  }
}

function setLang(next){
  lang=next;
  localStorage.setItem('siteLang',lang);
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  toggle.textContent=lang==='ar'?'EN':'AR';
  document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});
  Object.entries(rich).forEach(([id,values])=>{const el=document.getElementById(id);if(el)el.innerHTML=values[lang]});
}

addWhatsAppContact();
updateCityscapeMetric();
toggle.addEventListener('click',()=>setLang(lang==='en'?'ar':'en'));
setLang(lang);