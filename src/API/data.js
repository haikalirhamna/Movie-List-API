import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

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
        const result = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

export const getGenreTvSeries = async() => {
    try {
        const result = await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

export const getCountries = async() => {
    try {
        const result = await axios.get(`${baseUrl}/configuration/countries?api_key=${apiKey}`);
        console.log(result);
        // return result.data.genres;
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
