const buttons=document.querySelectorAll('[data-lang]');function setLang(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-ro]').forEach(el=>{el.textContent=el.dataset[lang]});buttons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('radu-lang',lang)}buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));setLang(localStorage.getItem('radu-lang')||'en');
// Categorized portfolio tabs
const portfolioTabs=document.querySelectorAll('.portfolio-tab');
const portfolioPanels=document.querySelectorAll('.portfolio-panel');
portfolioTabs.forEach(tab=>tab.addEventListener('click',()=>{
  const filter=tab.dataset.filter;
  portfolioTabs.forEach(item=>item.classList.toggle('active',item===tab));
  portfolioPanels.forEach(panel=>panel.classList.toggle('active',panel.dataset.panel===filter));
}));
