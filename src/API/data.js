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

export const getData = async(e) => {
    try {
        const result = await axios.get(`${baseUrl}/search/keyword?query=${e}&api_key=${apiKey}`);
        return result.data.results;
    } catch (error) {
        console.error(error);
    }
}

// getData();

// export { getData };
