import{a as p,S as m,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="55702648-64b3acfb28daf85718edb0503",g="https://pixabay.com/api/";function h(i){return p.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function S(){u.classList.add("visible")}function q(){u.classList.remove("visible")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(v(),S(),h(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(o)}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
