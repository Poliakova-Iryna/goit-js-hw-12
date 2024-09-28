import iziToast from "izitoast";
import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46090964-55e0ede1337bbc868df4332a0";

export async function fetchImags(searchQuery) {
    const options = new URLSearchParams({
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15
    });

    const url = `${BASE_URL}?key=${API_KEY}&${options}`;

    const { data: {hits, totalHits}, request: {status} } = await axios.get(url);

    if(status !== 200) {
        throw new Error(
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong...',
                position: 'topRight',
            })
        )
    };

    return {hits, totalHits};
}

