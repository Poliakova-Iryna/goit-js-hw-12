import{a as L,i as c,S as b}from"./assets/vendor-DjDxajEQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r,o){const s=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:g,comments:y,downloads:w})=>`
              <li class="gallery-item">
                  <a href="${e}" class="gallery-link">
                      <img src="${i}" alt="${t}" class="gallery-image" />
                  </a>
                  <div class="info">
                      <p class="info-item"><span>Likes</span> ${a}</p>
                      <p class="info-item"><span>Views</span> ${g}</p>
                      <p class="info-item"><span>Comments</span> ${y}</p>
                      <p class="info-item"><span>Downloads</span> ${w}</p>
                  </div>
              </li>`).join("");o.insertAdjacentHTML("beforeend",s)}const S="https://pixabay.com/api/",E="46090964-55e0ede1337bbc868df4332a0",d=15;async function h(r,o=1){const s=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:d,page:o}),i=`${S}?key=${E}&${s}`,{data:{hits:e,totalHits:t},request:{status:a}}=await L.get(i);return a!==200&&c.error({title:"Error",message:"Something went wrong...",position:"topRight"}),e.length===0&&c.error({title:"Error",message:"Something went wrong...",position:"topRight"}),{hits:e,totalHits:t}}const f=new b(".js-gallery a",{captionsData:"alt",captionDelay:250});let l=1,u=null,m=0;const n={form:document.querySelector(".js-form"),container:document.querySelector(".js-container"),searchBtn:document.querySelector(".js-search-btn"),loadMoreBtn:document.querySelector(".js-load-more-btn"),gallery:document.querySelector(".js-gallery")};n.form.addEventListener("submit",M);n.loadMoreBtn.addEventListener("click",v);async function M(r){r.preventDefault();const o=r.currentTarget;u=o.elements.query.value,n.gallery.innerHTML="",l=1;try{const{hits:s,totalHits:i}=await h(u,l);m=Math.ceil(i/d),p(s,n.gallery),i>d&&n.loadMoreBtn.classList.remove("is-hidden"),o.reset()}catch{c.error({title:"Error",message:"Something went wrong",position:"topRight"})}}async function v(){l+=1;try{n.loadMoreBtn.classList.remove("is-hidden");const{hits:r}=await h(u,l);p(r,n.gallery),H(),f.refresh(),l>=Math.min(m,33)&&(n.loadMoreBtn.classList.add("is-hidden"),c.error({title:"Error",message:"We are sorry, but you have reached the end of search results.",position:"topRight"}))}catch(r){console.error(r)}finally{}}function H(){const s=n.gallery.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
