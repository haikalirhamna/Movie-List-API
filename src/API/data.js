import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// get popular movie
export const getPopularMoviesList = async() => {
    try {
        const result = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
        return result.data.results;
    } catch (error) {
        return error;
    }
}

// get movie at genre
export const getMovies = async(e) => {
    try {
        const result = await axios.get(`${baseUrl}/discover/movie?sort_by=popularity.desc&with_genres=${e}&api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

// get movie change at 24 hours
export const getMoviesList = async() => {
    try {
        const result = await axios.get(`${baseUrl}/movie/changes?page=1&api_key=${apiKey}`);
        return result.data.results;
    } catch (error) {
        return error;
    }
}

// get genre movie
export const getGenreMovies = async() => {
    try {
        const result = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

// get TV at genre
export const getTV = async(e) => {
    try {
        const result = await axios.get(`${baseUrl}/discover/tv?sort_by=popularity.desc&with_genres=${e}&api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

// get tv change at 24 hours
export const getTVList = async() => {
    try {
        const result = await axios.get(`${baseUrl}/tv/changes?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

// get genre tv
export const getGenreTvSeries = async() => {
    try {
        const result = await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

// export const getCountries = async() => {
//     try {
//         const result = await axios.get(`${baseUrl}/configuration/countries?api_key=${apiKey}`);
//         console.log(result);
//         // return result.data.genres;
//     } catch (error) {
//         return error;
//     }
// }

export const getData = async(e) => {
    try {
        const result = await axios.get(`${baseUrl}/search/multi?query=${e}&api_key=${apiKey}`);
        return result.data.results;
    } catch (error) {
        console.error(error);
    }
}

// getData();

// export { getData };
