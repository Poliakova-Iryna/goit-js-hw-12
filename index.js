import{a as f,i as c}from"./assets/vendor-DIWECCk_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(s,r){const n=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:l,comments:u,downloads:p})=>`
              <li class="gallery-item">
                  <a href="${e}" class="gallery-link">
                      <img src="${o}" alt="${t}" class="gallery-image" />
                  </a>
                  <div class="info">
                      <p class="info-item"><span>Likes</span> ${i}</p>
                      <p class="info-item"><span>Views</span> ${l}</p>
                      <p class="info-item"><span>Comments</span> ${u}</p>
                      <p class="info-item"><span>Downloads</span> ${p}</p>
                  </div>
              </li>`).join("");r.insertAdjacentHTML("beforeend",n)}const d="https://pixabay.com/api/",g="46090964-55e0ede1337bbc868df4332a0";async function y(s){const r=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}),n=`${d}?key=${g}&${r}`,{data:{hits:o,totalHits:e},request:{status:t}}=await f.get(n);if(t!==200)throw new Error(c.error({title:"Error",message:"Something went wrong...",position:"topRight"}));return{hits:o,totalHits:e}}const a={form:document.querySelector(".js-form"),container:document.querySelector(".js-container"),searchBtn:document.querySelector(".js-search-btn"),loadMoreBtn:document.querySelector(".js-load-more-btn"),gallery:document.querySelector(".js-gallery")};a.form.addEventListener("submit",h);async function h(s){s.preventDefault();const r=s.currentTarget,{value:n}=r.elements.query;try{const{hits:o,totalHits:e}=await y(n);a.gallery.innerHTML="",m(o,a.gallery),a.loadMoreBtn.classList.remove("is-hidden"),r.reset(),gallery.refresh()}catch{c.error({title:"Error",message:"Something went wrong",position:"topRight"})}finally{}}
//# sourceMappingURL=index.js.map
