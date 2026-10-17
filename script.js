const mb=document.getElementById("mb"),nv=document.getElementById("nv");
mb.onclick=()=>{const o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nv.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nv.classList.remove("open");mb.setAttribute("aria-expanded","false")}));
const ls=[...nv.querySelectorAll("a.l")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(s=>io.observe(s));
document.getElementById("y").textContent="\u00a9 "+new Date().getFullYear();
