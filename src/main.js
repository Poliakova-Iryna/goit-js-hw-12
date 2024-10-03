import { appendImagesHits } from "./js/render-functions";
import { fetchImags, PER_PAGE } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const lightbox = new SimpleLightbox('.js-gallery a', { 
    captionsData: 'alt', 
    captionDelay: 250 
});


let currentPage = 1;
let searchQuery = null;
let pages = 0;

const refs = {
    form: document.querySelector('.js-form'),
    container: document.querySelector('.js-container'),
    searchBtn: document.querySelector('.js-search-btn'),
    loadMoreBtn: document.querySelector('.js-load-more-btn'),
    gallery: document.querySelector('.js-gallery'),
}; 

refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMore);


async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    searchQuery  = form.elements.query.value;
    refs.gallery.innerHTML = '';
    currentPage = 1;

    try {
        const { hits, totalHits } = await fetchImags(searchQuery, currentPage);
        pages = Math.ceil(totalHits / PER_PAGE);
        appendImagesHits(hits, refs.gallery);
        if(totalHits > PER_PAGE) {
            refs.loadMoreBtn.classList.remove('is-hidden');
        }

        if (currentPage >= Math.min(pages, 34)) {
            refs.loadMoreBtn.classList.add('is-hidden');
            iziToast.error({
                title: 'Error',
                message: 'We are sorry, but you have reached the end of search results.',
                position: 'topRight',
            })
        }
        form.reset();
        lightbox.refresh();

    }
    catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        })
    }

}


async function handleLoadMore() {
    currentPage += 1; 
    try {
        refs.loadMoreBtn.classList.remove('is-hidden');

        const { hits } = await fetchImags(searchQuery, currentPage); 
        appendImagesHits(hits, refs.gallery);
        handleScrollView();

        lightbox.refresh();
        
        if (currentPage >= Math.min(pages, 34)) {
            refs.loadMoreBtn.classList.add('is-hidden');
            iziToast.error({
                title: 'Error',
                message: 'We are sorry, but you have reached the end of search results.',
                position: 'topRight',
            })
        }
    } catch (error) {
        console.error(error);
    } finally {
        
    }
}

function handleScrollView() {
    const lastHit = refs.gallery.lastElementChild;
    const hitHeight = lastHit.getBoundingClientRect().height;
    const scrollHeight = hitHeight * 2;

    window.scrollBy({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
    });
}


