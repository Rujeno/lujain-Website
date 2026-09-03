const toggle=document.getElementById('langToggle');
let lang=localStorage.getItem('siteLang')||'en';

const rich={
  heroTitleV2:{
    en:'Technology with <span>control.</span><br>Projects with <span>impact.</span>',
    ar:'تقنية <span>منظمة.</span><br>وحوكمة <span>أوضح.</span>'
  },
  heroIntro:{
    en:"I'm <strong>Lujain Alshamrani</strong>, a Computer Science professional working across IT operations, systems, access governance, digital delivery, and project coordination — with a growing specialization in cybersecurity GRC and security assurance.",
    ar:"أنا <strong>لجين الشمراني</strong>، متخصصة في علوم الحاسب، أعمل عند تقاطع تشغيل تقنية المعلومات والأنظمة والحوكمة والتسليم الرقمي وتنسيق المشاريع، مع تركيز متنامٍ على حوكمة الأمن السيبراني والمخاطر والامتثال (GRC) وضمان الأمن."
  },
  contactTitle:{
    en:'Technology, governance, <span>and ownership.</span>',
    ar:'تقنيةٌ منظّمة، حوكمةٌ واضحة، <span>ومسؤوليةٌ حتى الإنجاز.</span>'
  }
};

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
      <div class="project-meta"><span>09 · AUTOMATION / SYSTEMS</span><span class="project-status" data-en="BUILT" data-ar="مُنجز">BUILT</span></div>
      <h3 data-en="Recruitment CV Email Automation" data-ar="أتمتة معالجة وتنظيم السير الذاتية الواردة بالبريد">Recruitment CV Email Automation</h3>
      <p class="role" data-en="Process Automation / Google Apps Script" data-ar="أتمتة الإجراءات / Google Apps Script">Process Automation / Google Apps Script</p>
      <p class="desc" data-en="Built an automated recruitment workflow that processes incoming CV emails, identifies CV and certificate attachments, classifies candidates by department and role, organizes files into Google Drive candidate folders, and prevents duplicate storage using file hashes." data-ar="طوّرت سير عمل آليًا للتوظيف يعالج رسائل السير الذاتية الواردة، ويميّز بين مرفقات السيرة الذاتية والشهادات، ويصنّف طلبات التوظيف بحسب الإدارة والتخصص، ثم ينظّم الملفات في Google Drive مع منع حفظ الملفات المكررة عبر بصمة رقمية للملف.">Built an automated recruitment workflow that processes incoming CV emails, identifies CV and certificate attachments, classifies candidates by department and role, organizes files into Google Drive candidate folders, and prevents duplicate storage using file hashes.</p>
      <div class="tags"><span>Google Apps Script</span><span>Gmail</span><span>Google Drive</span><span>Automation</span><span>Classification</span><span>Duplicate Prevention</span></div>
    </div>`;
  projects.prepend(article);
  const metric=document.querySelector('.hero-metrics .metric strong');
  if(metric && /^\d+$/.test(metric.textContent.trim())) metric.textContent=String(Number(metric.textContent.trim())+1);
}

const projectFlows={
  'GMAIL / GOOGLE DRIVE / AUTOMATION':{steps:[['Inbox','CV emails arrive','البريد الوارد','استقبال رسائل التوظيف'],['Detect','CV + certificate attachments','تمييز المرفقات','التعرّف على السير الذاتية والشهادات'],['Classify','Department & candidate role','التصنيف','تحديد الإدارة وتخصص المرشح'],['Organize','Candidate folder in Drive','التنظيم','إنشاء مجلد منظم لكل مرشح'],['Protect','Hash check blocks duplicates','منع التكرار','التحقق من بصمة الملف قبل الحفظ']],result:['Result: a repeatable recruitment filing workflow with less manual handling.','النتيجة: مسار آلي ومنظم لملفات التوظيف يقلّل العمل اليدوي ويمنع التكرار.']},
  'ERP / ODOO':{steps:[['Requirements','Capture business needs','المتطلبات','فهم احتياجات الإدارات'],['Process Map','Translate work into workflows','تحليل الإجراءات','تحويل العمل إلى مسارات واضحة'],['Configure','Modules, roles & rules','التهيئة','ضبط الوحدات والأدوار والقواعد'],['UAT','Users validate real scenarios','اختبار القبول','تحقق المستخدمين من سيناريوهات العمل الفعلية'],['Launch','Migration & go-live readiness','الإطلاق','الترحيل والاستعداد للتشغيل']],result:['Result: controlled ERP delivery from requirement to operational use.','النتيجة: تنفيذ منضبط لنظام ERP يبدأ من المتطلبات وينتهي بالاستخدام التشغيلي.']},
  'CITYSCAPE RIYADH':{steps:[['Plan','Booth roles & operating plan','التخطيط','تحديد الأدوار وخطة تشغيل الجناح'],['Coordinate','Team responsibilities','التنسيق','تنظيم مسؤوليات الفريق'],['Flow','Manage visitor movement','إدارة التدفق','تنظيم حركة الزوار داخل الجناح'],['Capture','Register visitor interest','تسجيل الاهتمام','توثيق بيانات واهتمامات الزوار'],['Improve','Document lessons learned','التحسين','توثيق الدروس المستفادة']],result:['Result: coordinated event operations with measurable lead capture.','النتيجة: تشغيل منظم للفعالية مع قياس واضح لاهتمامات الزوار.']},
  'SHARED SERVICES':{steps:[['Assign','Owner + due date','الإسناد','تحديد المسؤول وموعد الاستحقاق'],['Track','Status + completion %','المتابعة','الحالة ونسبة الإنجاز'],['Alert','Detect delayed tasks','التنبيه','رصد المهام المتأخرة'],['Escalate','Flag blockers & dependencies','التصعيد','إظهار العوائق والاعتماديات'],['Report','KPI-oriented management view','التقارير','عرض إداري مرتبط بمؤشرات الأداء']],result:['Result: one structured view of ownership, delay and execution.','النتيجة: رؤية موحدة وواضحة للمسؤوليات والتأخير ومستوى التنفيذ.']},
  'IAM / GOOGLE WORKSPACE':{steps:[['Identity','Create or maintain user','الهوية','إنشاء حساب المستخدم وإدارته'],['Role','Map group & responsibility','الدور','ربط المستخدم بالمجموعة والمسؤولية'],['Access','Grant required permissions','الوصول','منح الصلاحيات اللازمة فقط'],['Review','Check ownership & exposure','المراجعة','مراجعة الملكية ونطاق الوصول'],['Accountability','Keep admin ownership clear','المساءلة','إبقاء المسؤولية الإدارية واضحة']],result:['Result: access tied to identity, role and accountable ownership.','النتيجة: صلاحيات مرتبطة بالهوية والدور ومسؤولية إدارية واضحة.']},
  'KNDL / DIGITAL DELIVERY':{steps:[['Structure','Plan bilingual content','هيكلة المحتوى','تخطيط المحتوى العربي والإنجليزي'],['Domain','DNS + Cloudflare setup','النطاق','إعداد DNS وCloudflare'],['Build','WordPress project pages','البناء','إنشاء صفحات الموقع على WordPress'],['Host','Connect hosting environment','الاستضافة','ربط الموقع ببيئة الاستضافة'],['Launch','Final readiness checks','الإطلاق','التحقق من الجاهزية قبل النشر']],result:['Result: digital delivery coordinated across content, infrastructure and launch.','النتيجة: تسليم رقمي متكامل يربط المحتوى والبنية التقنية والاستضافة وصولًا إلى الإطلاق.']},
  'INFRASTRUCTURE / TELECOM':{steps:[['Fiber','Connectivity foundation','الألياف','تأسيس الاتصال بالشبكة'],['SIP','Voice trunk service','SIP','تهيئة خدمة الاتصال الصوتي'],['PBX','Call routing layer','PBX','إدارة توجيه المكالمات'],['Call Center','Agent service continuity','مركز الاتصال','الحفاظ على استمرارية الخدمة'],['Continuity','Coordinate migration timing','استمرارية الأعمال','تنسيق النقل وتقليل أثر الانقطاع']],result:['Result: dependencies managed as one service chain, not isolated components.','النتيجة: إدارة مكونات الاتصال كسلسلة خدمة مترابطة بدل التعامل معها كأنظمة منفصلة.']},
  'PROCESS AUTOMATION / JAVASCRIPT':{steps:[['Collect','Gather source files','جمع البيانات','تجميع الملفات المصدرية'],['Read','Identify required records','القراءة','استخراج السجلات المطلوبة'],['Validate','Check file relevance','التحقق','فحص ملاءمة الملفات'],['Organize','Store in consistent structure','التنظيم','حفظ الملفات ضمن هيكل موحد'],['Reduce','Remove repetitive manual steps','تقليل الجهد','إلغاء الخطوات اليدوية المتكررة']],result:['Result: a repeatable internal process with fewer manual actions.','النتيجة: إجراء داخلي قابل للتكرار يقلّل الخطوات اليدوية ويزيد اتساق العمل.']},
  'CYBERSECURITY LAB':{steps:[['Users','Accounts & groups','المستخدمون','الحسابات والمجموعات'],['Permissions','Ownership & access','الصلاحيات','الملكية والتحكم في الوصول'],['Network','IP, ports & services','الشبكة','عناوين IP والمنافذ والخدمات'],['Packets','Capture traffic','حزم الشبكة','التقاط حركة مرور الشبكة'],['Analyze','Interpret behavior & risk','التحليل','تفسير السلوك والمخاطر']],result:['Result: security concepts practiced through observable technical behavior.','النتيجة: تطبيق مفاهيم الأمن السيبراني عمليًا من خلال سلوك تقني يمكن ملاحظته وتحليله.']}
};

function buildFlow(flow){
  const rows=flow.steps.map((s,i)=>`<div class="flow-step"><span class="flow-num">0${i+1}</span><span class="flow-copy"><strong data-en="${s[0]}" data-ar="${s[2]}">${lang==='ar'?s[2]:s[0]}</strong><small data-en="${s[1]}" data-ar="${s[3]}">${lang==='ar'?s[3]:s[1]}</small></span><span class="flow-arrow">→</span></div>`).join('');
  return `<div class="flow-map">${rows}</div><div class="flow-result" data-en="${flow.result[0]}" data-ar="${flow.result[1]}">${lang==='ar'?flow.result[1]:flow.result[0]}</div>`;
}
function redesignProjectVisuals(){document.querySelectorAll('.project').forEach(project=>{const label=project.querySelector('.visual-label');const mock=project.querySelector('.mock');if(!label||!mock)return;const flow=projectFlows[label.textContent.trim().toUpperCase()];if(flow)mock.innerHTML=buildFlow(flow);});}
function addWhatsAppContact(){const whatsappUrl='https://wa.me/966540626039';const contact=document.getElementById('contact');if(contact){const info=contact.firstElementChild;const links=contact.querySelector('.contact-links');if(info&&!info.querySelector('.contact-phone')){const phone=document.createElement('p');phone.className='contact-phone';phone.innerHTML='<span data-en="Mobile / WhatsApp" data-ar="الجوال / واتساب">Mobile / WhatsApp</span><a href="tel:+966540626039" dir="ltr">+966 54 062 6039</a>';info.appendChild(phone);}if(links&&!links.querySelector('[data-whatsapp]')){const wa=document.createElement('a');wa.href=whatsappUrl;wa.target='_blank';wa.rel='noreferrer';wa.dataset.whatsapp='true';wa.innerHTML='<span data-en="WhatsApp" data-ar="واتساب">WhatsApp</span> ↗';links.prepend(wa);}}const socials=document.querySelector('.socials');if(socials&&!socials.querySelector('[data-whatsapp]')){const waSmall=document.createElement('a');waSmall.href=whatsappUrl;waSmall.target='_blank';waSmall.rel='noreferrer';waSmall.dataset.whatsapp='true';waSmall.setAttribute('aria-label','WhatsApp');waSmall.textContent='WA';socials.prepend(waSmall);}}
function updateCityscapeMetric(){const label=[...document.querySelectorAll('.visual-label')].find(el=>el.textContent.trim().toUpperCase()==='CITYSCAPE RIYADH');if(!label)return;const project=label.closest('.project');const desc=project?.querySelector('.desc');if(desc){desc.setAttribute('data-en','Led booth operations, team responsibilities, visitor flow, stakeholder follow-up, and approximately 5,000 interest registrations, with lessons learned documented for future participation.');desc.setAttribute('data-ar','قدت تشغيل الجناح، ونظّمت مسؤوليات الفريق وحركة الزوار والمتابعة مع أصحاب المصلحة، مع تسجيل نحو 5,000 حالة اهتمام وتوثيق الدروس المستفادة لتحسين المشاركات اللاحقة.');desc.textContent=lang==='ar'?desc.dataset.ar:desc.dataset.en;}}
function refineArabicCopy(){const replacements=new Map([
['أعمال مختارة توضح كيف أحلل وأنسق وأبني وأحوكم وأحسن التقنية داخل بيئات تشغيلية حقيقية.','نماذج مختارة من أعمالي توضّح كيف أحوّل الاحتياج التشغيلي إلى حل تقني منظم؛ من التحليل والتنسيق إلى التنفيذ والحوكمة والتحسين.'],
['أبدأ بفهم المشكلة التشغيلية والاعتماديات والمستخدمين والمخاطر، ثم أبني الحل بشكل منظم، سواء كان تنفيذ ERP أو قرارًا متعلقًا بالصلاحيات أو نقل بنية تحتية أو إطلاق موقع أو أداة أتمتة تقلل العمل المتكرر.','أبدأ بفهم المشكلة وسياقها التشغيلي والأطراف المعنية والمخاطر، ثم أحوّلها إلى مسار عمل واضح وحل قابل للتنفيذ؛ سواء كان نظام ERP، أو ضبطًا للصلاحيات، أو نقلًا للبنية التحتية، أو إطلاق موقع، أو أتمتة تختصر العمل المتكرر.'],
['تنسيق الفرق، تحمّل المسؤولية، التواصل مع أصحاب المصلحة والمتابعة.','تنسيق الفرق، ووضوح المسؤوليات، والتواصل مع أصحاب المصلحة، والمتابعة حتى إتمام العمل.'],
['الضوابط والمساءلة وملكية الصلاحيات والتوثيق والوعي بالمخاطر والضمان.','الضوابط والمساءلة، وملكية الصلاحيات، والتوثيق، وفهم المخاطر، والتحقق من فاعلية الضوابط.'],
['نطاق عملي الحالي يشمل تشغيل تقنية المعلومات والأنظمة المؤسسية والخدمات الرقمية والحوكمة والموردين والتنسيق التقني.','يمتد نطاق عملي الحالي عبر تشغيل تقنية المعلومات والأنظمة المؤسسية والخدمات الرقمية والحوكمة وإدارة الموردين والتنسيق بين الاحتياج التشغيلي والتنفيذ التقني.']
]);document.querySelectorAll('[data-ar]').forEach(el=>{if(replacements.has(el.dataset.ar))el.dataset.ar=replacements.get(el.dataset.ar);});}
function setLang(next){lang=next;localStorage.setItem('siteLang',lang);document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.classList.toggle('is-ar',lang==='ar');toggle.textContent=lang==='ar'?'EN':'AR';document.querySelectorAll('[data-en]').forEach(el=>{const value=el.dataset[lang]||'';if(value.includes('<'))el.innerHTML=value;else el.textContent=value});Object.entries(rich).forEach(([id,values])=>{const el=document.getElementById(id);if(el)el.innerHTML=values[lang]});}

addCvAutomationProject();
redesignProjectVisuals();
addWhatsAppContact();
updateCityscapeMetric();
refineArabicCopy();
toggle.addEventListener('click',()=>setLang(lang==='en'?'ar':'en'));
setLang(lang);
