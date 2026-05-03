import{a as m,S as y,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="55702648-64b3acfb28daf85718edb0503",h="https://pixabay.com/api/";function b(i){return m.get(h,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${p}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){u.innerHTML=""}function q(){f.classList.add("visible")}function c(){f.classList.remove("visible")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(S(),q(),b(r).then(o=>{if(c(),o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{c(),a.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(o)}))});
//# sourceMappingURL=index.js.map
