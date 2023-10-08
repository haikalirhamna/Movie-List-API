import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// get popular movie
export const getPopularMoviesList = async() => {
    const result = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return result.data.results;
}

// get movie at genre
export const getMovies = async(e) => {
    const result = await axios.get(`${baseUrl}/discover/movie?sort_by=popularity.desc&with_genres=${e}&api_key=${apiKey}`);
    return result.data.results;
}

// get movie change at 24 hours
const getMoviesList = async() => {
    const result = await axios.get(`${baseUrl}/movie/changes?page=1&api_key=${apiKey}`);
    const filteredResults = result.data.results.filter(item => item.id !== null && typeof item.id !== 'undefined');
    return filteredResults.map(mvIds => mvIds.id);
}

const getMovieDetails = async(id) => {
    try {
        const data = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
        if (data.status === 200) {
            return data.data;
        } else {
            throw new Error(`Failed to fetch details for TV show with ID ${id}`);
        }
    } catch (error) {
        return "Not Found";
    }
}

export const movieDetails = async() => {
    const moviesIds = await getMoviesList()
    const movies = await Promise.all(moviesIds.map(id => getMovieDetails(id)))
    const successfulMovies = movies.filter(movie => movie !== null);
    return successfulMovies;
}

// get genre movie
export const getGenreMovies = async() => {
    try {
        const result = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// get TV at genre
export const getTV = async(e) => {
    try {
        const result = await axios.get(`${baseUrl}/discover/tv?sort_by=popularity.desc&with_genres=${e}&api_key=${apiKey}`);
        return result.data.results;
    } catch (error) {
        return error;
    }
}

// get tv change at 24 hours
const getTVList = async() => {
    const result = await axios.get(`${baseUrl}/tv/changes?api_key=${apiKey}`);
    const filteredResults = result.data.results.filter(item => item.id !== null && typeof item.id !== 'undefined');
    return filteredResults.map(id => id.id);
}

const getTVDetails = async (id) => {
    try {
        const data = await axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}`);
        if (data.status === 200) {
            return data.data;
        } else {
            throw new Error(`Failed to fetch details for TV show with ID ${id}`);
        }
    } catch (error) {
        return "Not Found";
    }
};

export const tvDetails = async () => {
    const TvIds = await getTVList();
    const tvSeries = await Promise.all(TvIds.map(id => getTVDetails(id)));
    const successfulTvSeries = tvSeries.filter(series => series !== null);
    return successfulTvSeries;
};

// get genre tv
export const getGenreTvSeries = async() => {
    try {
        const result = await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}`);
        return result.data.genres;
    } catch (error) {
        return error;
    }
}

//search API
export const getData = async(e) => {
    const result = await axios.get(`${baseUrl}/search/multi?query=${e}&api_key=${apiKey}`);
    return result.data.results;
}

    