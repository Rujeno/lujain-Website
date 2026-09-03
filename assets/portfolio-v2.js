const toggle=document.getElementById('langToggle');
let lang=localStorage.getItem('siteLang')||'en';

const rich={
  heroTitle:{
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
