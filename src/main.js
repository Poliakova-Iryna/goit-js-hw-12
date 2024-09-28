import { appendImagesHits } from "./js/render-functions";
import { fetchImags } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const refs = {
    form: document.querySelector('.js-form'),
    container: document.querySelector('.js-container'),
    searchBtn: document.querySelector('.js-search-btn'),
    loadMoreBtn: document.querySelector('.js-load-more-btn'),
    gallery: document.querySelector('.js-gallery'),
}; 

refs.form.addEventListener('submit', handleSubmit) 


async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const { value: searchQuery } = form.elements.query;

    try {
        const { hits, totalHits } = await fetchImags(searchQuery);

        refs.gallery.innerHTML = '';

        appendImagesHits(hits, refs.gallery);
        refs.loadMoreBtn.classList.remove('is-hidden');

        form.reset();
        gallery.refresh();

    }
    catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong',
            position: 'topRight',
        })
    }
    finally {}  

}




