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

function applyBurgundyIdentity(){
  const style=document.createElement('style');
  style.textContent=`
    :root{--bg:#170708;--panel:#230b0d;--panel2:#2d1013;--text:#f8f1e8;--muted:#bca8a4;--line:#4a2427;--purple:#7a2028;--purple-soft:#d4ad72;--green:#d4ad72;--white:#fffaf2}
    body{background:radial-gradient(circle at 18% 0%,rgba(122,32,40,.34),transparent 30%),radial-gradient(circle at 88% 18%,rgba(212,173,114,.07),transparent 25%),#170708}
    .sidebar{background:linear-gradient(180deg,#2b0e11,#1d090b);border-color:#4a2427}
    .section{background:linear-gradient(145deg,rgba(48,15,18,.96),rgba(28,8,10,.98));border-color:#4a2427}
    .side-links a,.socials a,.lang,.metric,.about-card,.about-item,.skill-card,.credential,.experience{background:#2b0e11;border-color:#4a2427}
    .side-note{background:rgba(212,173,114,.07);border-color:rgba(212,173,114,.22);color:#e2c18e}
    .hero:after{border-color:rgba(212,173,114,.09)}
    .btn-primary,.contact-links a:first-child{background:#7a2028;border-color:#9b3942}
    .hero h1 span,.skill-card>span,.project-meta .project-status,.role{color:#d4ad72}
    .status{background:rgba(212,173,114,.08);border-color:rgba(212,173,114,.24);color:#d4ad72}
    ::selection{background:#7a2028;color:#fff}

    .projects{display:flex;flex-direction:column;gap:18px}
    .project{display:grid;grid-template-columns:minmax(340px,.95fr) minmax(0,1.05fr);min-height:320px;background:linear-gradient(120deg,#2c0d10,#1e090b);border:1px solid #4a2427;border-radius:26px;overflow:hidden;box-shadow:0 20px 55px rgba(0,0,0,.16)}
    .project:nth-child(even){grid-template-columns:minmax(0,1.05fr) minmax(340px,.95fr)}
    .project:nth-child(even) .visual{order:2}
    .project:hover{transform:translateY(-3px);border-color:#8e4b4f;box-shadow:0 24px 65px rgba(0,0,0,.24)}
    .visual{height:auto;min-height:320px;background:radial-gradient(circle at 76% 16%,rgba(212,173,114,.13),transparent 27%),linear-gradient(145deg,#3a1115,#21090c);padding:24px;display:flex;flex-direction:column}
    .visual:before{border-color:rgba(212,173,114,.08)}
    .visual-label{color:#d8bd93;position:relative;z-index:3}
    .mock{position:relative;left:auto;right:auto;bottom:auto;margin:auto 0 0;background:rgba(31,8,11,.78);border-color:#684044;backdrop-filter:blur(8px);padding:18px}
    .project-body{padding:34px;display:flex;flex-direction:column;justify-content:center}
    .project h3{font-size:30px;max-width:760px}
    .tags span{border-color:#563034;color:#cdbbb6;background:rgba(255,255,255,.02)}

    .flow-map{display:grid;gap:9px}
    .flow-step{display:grid;grid-template-columns:31px minmax(0,1fr) auto;align-items:center;gap:11px;padding:10px 11px;border:1px solid rgba(212,173,114,.14);border-radius:11px;background:rgba(255,255,255,.025);transition:.2s}
    .flow-step:hover{background:rgba(212,173,114,.07);border-color:rgba(212,173,114,.32);transform:translateX(3px)}
    html[dir="rtl"] .flow-step:hover{transform:translateX(-3px)}
    .flow-num{width:31px;height:31px;border-radius:9px;display:grid;place-items:center;background:#7a2028;border:1px solid #9b3942;color:#f5d7aa;font-size:9px;font-weight:900;letter-spacing:.04em}
    .flow-copy{min-width:0}
    .flow-copy strong{display:block;color:#f3e8dc;font-size:11px;line-height:1.25}
    .flow-copy small{display:block;margin-top:3px;color:#9f8886;font-size:8px;line-height:1.35}
    .flow-arrow{color:#d4ad72;font-size:13px;opacity:.72}
    html[dir="rtl"] .flow-arrow{transform:scaleX(-1)}
    .flow-result{margin-top:10px;padding:10px 12px;border:1px solid rgba(212,173,114,.28);border-radius:11px;background:linear-gradient(90deg,rgba(122,32,40,.42),rgba(212,173,114,.06));color:#e6c58f;font-size:9px;font-weight:800;line-height:1.5}

    @media(max-width:820px){.project,.project:nth-child(even){grid-template-columns:1fr}.project:nth-child(even) .visual{order:0}.visual{min-height:280px}.project-body{padding:24px}.project h3{font-size:24px}}
  `;
  document.head.appendChild(style);
}

function addCvAutomationProject(){
  const projects=document.querySelector('.projects');
  if(!projects || document.getElementById('cvAutomationProject')) return;
  const article=document.createElement('article');
  article.className='project';
  article.id='cvAutomationProject';
  article.innerHTML=`
    <div class="visual">
      <span class="visual-label">GMAIL / GOOGLE DRIVE / AUTOMATION</span>
      <div class="mock"></div>
    </div>
    <div class="project-body">
      <div class="project-meta"><span>09 · AUTOMATION / SYSTEMS</span><span class="project-status" data-en="BUILT" data-ar="تم بناؤه">BUILT</span></div>
      <h3 data-en="Recruitment CV Email Automation" data-ar="أتمتة تنظيم السير الذاتية من البريد">Recruitment CV Email Automation</h3>
      <p class="role" data-en="Process Automation / Google Apps Script" data-ar="أتمتة إجراءات / Google Apps Script">Process Automation / Google Apps Script</p>
      <p class="desc" data-en="Built an automated recruitment workflow that processes incoming CV emails, identifies CV and certificate attachments, classifies candidates by department and role, organizes files into Google Drive candidate folders, and prevents duplicate storage using file hashes." data-ar="بناء سير عمل آلي للتوظيف يعالج رسائل السير الذاتية الواردة، ويتعرف على مرفقات السيرة والشهادات، ويصنف المرشحين حسب الإدارة والتخصص، وينظم الملفات داخل مجلدات المرشحين في Google Drive، مع منع التكرار باستخدام بصمة الملفات.">Built an automated recruitment workflow that processes incoming CV emails, identifies CV and certificate attachments, classifies candidates by department and role, organizes files into Google Drive candidate folders, and prevents duplicate storage using file hashes.</p>
      <div class="tags"><span>Google Apps Script</span><span>Gmail</span><span>Google Drive</span><span>Automation</span><span>Classification</span><span>Duplicate Prevention</span></div>
    </div>`;
  projects.prepend(article);
  const metric=document.querySelector('.hero-metrics .metric strong');
  if(metric && /^\d+$/.test(metric.textContent.trim())) metric.textContent=String(Number(metric.textContent.trim())+1);
}

const projectFlows={
  'GMAIL / GOOGLE DRIVE / AUTOMATION':{
    steps:[
      ['Inbox','CV emails arrive','البريد الوارد','وصول رسائل السير الذاتية'],
      ['Detect','CV + certificate attachments','اكتشاف','تحديد السيرة والشهادات'],
      ['Classify','Department & candidate role','تصنيف','الإدارة وتخصص المرشح'],
      ['Organize','Candidate folder in Drive','تنظيم','مجلد خاص بالمرشح في Drive'],
      ['Protect','Hash check blocks duplicates','حماية','بصمة الملف تمنع التكرار']
    ],
    result:['Result: a repeatable recruitment filing workflow with less manual handling.','النتيجة: سير عمل متكرر ومنظم للتوظيف مع تقليل المعالجة اليدوية.']
  },
  'ERP / ODOO':{
    steps:[
      ['Requirements','Capture business needs','المتطلبات','جمع احتياجات الإدارات'],
      ['Process Map','Translate work into workflows','تحليل الإجراءات','تحويل العمل إلى مسارات واضحة'],
      ['Configure','Modules, roles & rules','التهيئة','الوحدات والأدوار والقواعد'],
      ['UAT','Users validate real scenarios','اختبار المستخدم','التحقق من السيناريوهات الفعلية'],
      ['Launch','Migration & go-live readiness','الإطلاق','الترحيل والاستعداد للتشغيل']
    ],
    result:['Result: controlled ERP delivery from requirement to operational use.','النتيجة: تنفيذ ERP منظم من المتطلب وحتى الاستخدام التشغيلي.']
  },
  'CITYSCAPE RIYADH':{
    steps:[
      ['Plan','Booth roles & operating plan','التخطيط','الأدوار وخطة تشغيل الجناح'],
      ['Coordinate','Team responsibilities','التنسيق','توزيع مسؤوليات الفريق'],
      ['Flow','Manage visitor movement','التدفق','إدارة حركة الزوار'],
      ['Capture','Register visitor interest','التسجيل','تسجيل اهتمامات الزوار'],
      ['Improve','Document lessons learned','التحسين','توثيق الدروس المستفادة']
    ],
    result:['Result: coordinated event operations with measurable lead capture.','النتيجة: تشغيل منظم للفعالية مع تسجيل اهتمامات قابلة للقياس.']
  },
  'SHARED SERVICES':{
    steps:[
      ['Assign','Owner + due date','إسناد','مسؤول وتاريخ استحقاق'],
      ['Track','Status + completion %','متابعة','الحالة ونسبة الإنجاز'],
      ['Alert','Detect delayed tasks','تنبيه','اكتشاف المهام المتأخرة'],
      ['Escalate','Flag blockers & dependencies','تصعيد','إظهار العوائق والاعتماديات'],
      ['Report','KPI-oriented management view','تقارير','عرض إداري مرتبط بالمؤشرات']
    ],
    result:['Result: one structured view of ownership, delay and execution.','النتيجة: رؤية موحدة للمسؤوليات والتأخير والتنفيذ.']
  },
  'IAM / GOOGLE WORKSPACE':{
    steps:[
      ['Identity','Create or maintain user','الهوية','إنشاء المستخدم أو إدارته'],
      ['Role','Map group & responsibility','الدور','ربط المجموعة والمسؤولية'],
      ['Access','Grant required permissions','الصلاحية','منح الوصول المطلوب'],
      ['Review','Check ownership & exposure','المراجعة','مراجعة الملكية ونطاق الوصول'],
      ['Accountability','Keep admin ownership clear','المساءلة','وضوح الملكية الإدارية']
    ],
    result:['Result: access tied to identity, role and accountable ownership.','النتيجة: صلاحيات مرتبطة بالهوية والدور وملكية إدارية واضحة.']
  },
  'KNDL / DIGITAL DELIVERY':{
    steps:[
      ['Structure','Plan bilingual content','الهيكلة','تخطيط المحتوى الثنائي'],
      ['Domain','DNS + Cloudflare setup','النطاق','إعداد DNS وCloudflare'],
      ['Build','WordPress project pages','البناء','صفحات المشروع على WordPress'],
      ['Host','Connect hosting environment','الاستضافة','ربط بيئة الاستضافة'],
      ['Launch','Final readiness checks','الإطلاق','فحوصات الجاهزية النهائية']
    ],
    result:['Result: digital delivery coordinated across content, infrastructure and launch.','النتيجة: تسليم رقمي منسق بين المحتوى والبنية التحتية والإطلاق.']
  },
  'INFRASTRUCTURE / TELECOM':{
    steps:[
      ['Fiber','Connectivity foundation','الألياف','أساس الاتصال'],
      ['SIP','Voice trunk service','SIP','خدمة خطوط الاتصال الصوتي'],
      ['PBX','Call routing layer','PBX','طبقة توجيه المكالمات'],
      ['Call Center','Agent service continuity','مركز الاتصال','استمرارية خدمة الموظفين'],
      ['Continuity','Coordinate migration timing','الاستمرارية','تنسيق توقيت النقل']
    ],
    result:['Result: dependencies managed as one service chain, not isolated components.','النتيجة: إدارة الاعتماديات كسلسلة خدمة واحدة وليس كأجزاء منفصلة.']
  },
  'PROCESS AUTOMATION / JAVASCRIPT':{
    steps:[
      ['Collect','Gather source files','جمع','تجميع الملفات المصدرية'],
      ['Read','Identify required records','قراءة','تحديد السجلات المطلوبة'],
      ['Validate','Check file relevance','تحقق','فحص ملاءمة الملفات'],
      ['Organize','Store in consistent structure','تنظيم','حفظ بهيكل موحد'],
      ['Reduce','Remove repetitive manual steps','تقليل العمل','إلغاء الخطوات اليدوية المتكررة']
    ],
    result:['Result: a repeatable internal process with fewer manual actions.','النتيجة: إجراء داخلي قابل للتكرار بعدد أقل من الخطوات اليدوية.']
  },
  'CYBERSECURITY LAB':{
    steps:[
      ['Users','Accounts & groups','المستخدمون','الحسابات والمجموعات'],
      ['Permissions','Ownership & access','الصلاحيات','الملكية والتحكم بالوصول'],
      ['Network','IP, ports & services','الشبكة','العناوين والمنافذ والخدمات'],
      ['Packets','Capture traffic','الحزم','التقاط حركة الشبكة'],
      ['Analyze','Interpret behavior & risk','التحليل','فهم السلوك والمخاطر']
    ],
    result:['Result: security concepts practiced through observable technical behavior.','النتيجة: تطبيق مفاهيم الأمن عبر سلوك تقني يمكن ملاحظته وتحليله.']
  }
};

function buildFlow(flow){
  const rows=flow.steps.map((s,i)=>`
    <div class="flow-step">
      <span class="flow-num">0${i+1}</span>
      <span class="flow-copy">
        <strong data-en="${s[0]}" data-ar="${s[2]}">${lang==='ar'?s[2]:s[0]}</strong>
        <small data-en="${s[1]}" data-ar="${s[3]}">${lang==='ar'?s[3]:s[1]}</small>
      </span>
      <span class="flow-arrow">→</span>
    </div>`).join('');
  return `<div class="flow-map">${rows}</div><div class="flow-result" data-en="${flow.result[0]}" data-ar="${flow.result[1]}">${lang==='ar'?flow.result[1]:flow.result[0]}</div>`;
}

function redesignProjectVisuals(){
  document.querySelectorAll('.project').forEach(project=>{
    const label=project.querySelector('.visual-label');
    const mock=project.querySelector('.mock');
    if(!label||!mock) return;
    const flow=projectFlows[label.textContent.trim().toUpperCase()];
    if(flow) mock.innerHTML=buildFlow(flow);
  });
}

function addWhatsAppContact(){
  const whatsappUrl='https://wa.me/966540626039';
  const contact=document.getElementById('contact');
  if(contact){
    const info=contact.firstElementChild;
    const links=contact.querySelector('.contact-links');
    if(info && !info.querySelector('.contact-phone')){
      const phone=document.createElement('p');
      phone.className='contact-phone';
      phone.style.cssText='margin-top:18px;display:flex;flex-wrap:wrap;align-items:center;gap:10px;color:#bca8a4;font-size:12px;';
      phone.innerHTML='<span data-en="Mobile / WhatsApp" data-ar="الجوال / واتساب">Mobile / WhatsApp</span><a href="tel:+966540626039" dir="ltr" style="color:#f8f1e8;font-size:14px;font-weight:800;text-decoration:none;">+966 54 062 6039</a>';
      info.appendChild(phone);
    }
    if(links && !links.querySelector('[data-whatsapp]')){
      const wa=document.createElement('a');
      wa.href=whatsappUrl;wa.target='_blank';wa.rel='noreferrer';wa.dataset.whatsapp='true';
      wa.innerHTML='<span data-en="WhatsApp" data-ar="واتساب">WhatsApp</span> ↗';
      links.prepend(wa);
    }
  }
  const socials=document.querySelector('.socials');
  if(socials && !socials.querySelector('[data-whatsapp]')){
    const waSmall=document.createElement('a');
    waSmall.href=whatsappUrl;waSmall.target='_blank';waSmall.rel='noreferrer';waSmall.dataset.whatsapp='true';waSmall.setAttribute('aria-label','WhatsApp');waSmall.textContent='WA';
    socials.prepend(waSmall);
  }
}

function updateCityscapeMetric(){
  const label=[...document.querySelectorAll('.visual-label')].find(el=>el.textContent.trim().toUpperCase()==='CITYSCAPE RIYADH');
  if(!label) return;
  const project=label.closest('.project');
  const desc=project?.querySelector('.desc');
  if(desc){
    desc.setAttribute('data-en','Led booth operations, team responsibilities, visitor flow, stakeholder follow-up, and approximately 5,000 interest registrations, with lessons learned documented for future participation.');
    desc.setAttribute('data-ar','قيادة عمليات الجناح وتوزيع مهام الفريق وتدفق الزوار والمتابعة مع أصحاب المصلحة، مع تسجيل حوالي 5,000 حالة اهتمام وتوثيق الدروس المستفادة للمشاركات القادمة.');
    desc.textContent=lang==='ar'?desc.dataset.ar:desc.dataset.en;
  }
}

function setLang(next){
  lang=next;localStorage.setItem('siteLang',lang);document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';toggle.textContent=lang==='ar'?'EN':'AR';
  document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});
  Object.entries(rich).forEach(([id,values])=>{const el=document.getElementById(id);if(el)el.innerHTML=values[lang]});
}

applyBurgundyIdentity();
addCvAutomationProject();
redesignProjectVisuals();
addWhatsAppContact();
updateCityscapeMetric();
toggle.addEventListener('click',()=>setLang(lang==='en'?'ar':'en'));
setLang(lang);

// GitHub Pages redeploy trigger: 2026-08-13 Asia/Riyadh