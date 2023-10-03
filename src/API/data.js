import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const genreMovies = process.env.REACT_APP_API_GENRE_MOVIE;
const genreTv = process.env.REACT_APP_API_GENRE_TV;

export const getPopularMoviesList = async() => {
    try {
        const result = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
        return result.data.results;
    } catch (error) {
        return error;
    }
}

export const getGenreMovies = async() => {
    try {
        const result = await axios.get(`${genreMovies}?api_key=${apiKey}`);
        // console.log(result);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

export const getGenreTvSeries = async() => {
    try {
        const result = await axios.get(`${genreTv}?api_key=${apiKey}`);
        // console.log(result);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

// async function getData() {
//     try {
//         const result = await axios.get(baseUrl + 'api=' + apiKey);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();

// export { getData };
