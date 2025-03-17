import{a as u,i as c,S as m}from"./assets/vendor-h_xsmXee.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=l=>l.map(t=>{const{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:n,downloads:d}=t;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}" 
            title="${e}"
            width="360"
            height="152"
          />
          </a>
          <div class="img-descr">
            <ul class="list-descr">
              <li class="item-descr">
                <p class="descr-name">Likes</p>
                <p class="descr-value">${r}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Views</p>
                <p class="descr-value">${a}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${n}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${d}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join(""),f="49388465-88aa64a30b18d669aa90a58a7",g="https://pixabay.com/api/";function y(){return u.get(g,{params:{key:f,q:s.searchInput.value,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const s={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input")};s.formEl.addEventListener("submit",h);function h(l){if(l.preventDefault(),s.searchInput.value.trim()==="")return c.warning({position:"topRight",message:"Please enter a search term! something"});s.loaderEl.classList.remove("visually-hidden"),s.galleryEl.innerHTML="",y().then(t=>{if(t.data.hits.length===0)return s.formEl.reset(),c.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:errorIcon,message:"Sorry, there are no images matching your search query. Please try again!"});s.galleryEl.insertAdjacentHTML("beforeend",p(t.data.hits)),s.formEl.reset(),new m(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1}).refresh()}).catch(t=>console.log(t)).finally(()=>s.loaderEl.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
