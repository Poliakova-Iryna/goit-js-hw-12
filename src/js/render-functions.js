import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function appendImagesHits(hits, wrapper) {
    const hitsMarkup = hits.map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
              <li class="gallery-item">
                  <a href="${largeImageURL}" class="gallery-link">
                      <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
                  </a>
                  <div class="info">
                      <p class="info-item"><span>Likes</span> ${likes}</p>
                      <p class="info-item"><span>Views</span> ${views}</p>
                      <p class="info-item"><span>Comments</span> ${comments}</p>
                      <p class="info-item"><span>Downloads</span> ${downloads}</p>
                  </div>
              </li>`)
              .join('');
    wrapper.insertAdjacentHTML('beforeend',hitsMarkup);
}
