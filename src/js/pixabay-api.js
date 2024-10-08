import iziToast from "izitoast";
import axios from "axios";
import { appendImagesHits } from "./render-functions";


const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46090964-55e0ede1337bbc868df4332a0";
export const PER_PAGE = 15

export async function fetchImages(searchQuery, currentPage = 1) {
    const options = new URLSearchParams({
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: PER_PAGE,
        page: currentPage,
    });

    const url = `${BASE_URL}?key=${API_KEY}&${options}`;
    
    try {
        const { data: { hits, totalHits }, request: { status } } = await axios.get(url);
        if(status !== 200 || hits.length === 0) {
            refs.loadMoreBtn.classList.add('is-hidden');
            refs.loader.style.display = 'none';
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        }
        return { hits, totalHits }
    } catch (error) {
        refs.loadMoreBtn.classList.add('is-hidden');
        refs.loader.style.display = 'none';
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong',
            position: 'topRight',
        });
    }
}
