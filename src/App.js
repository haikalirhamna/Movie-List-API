import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Genre from './containers/Genre/Genre';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';
import MovieList from './containers/Home/MovieList';
import TV from './containers/TV Series/TV';
import Details from './components/Details';
import NotFound from './containers/Alert/NotFound';
import { MovieListProvider } from './MovieListContext';
import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component  {

  baseURL = process.env.REACT_APP_API_URL;
  apiKey = process.env.REACT_APP_API_KEY;

  constructor(props) {
    super(props);
    this.state = {
      movieDetails: [],
    };

    this.onHandlerClickMovieDetails = this
      .onHandlerClickMovieDetails
      .bind(this);
    this.onHandlerClickTVDetails = this
      .onHandlerClickTVDetails
      .bind(this);
  }


  onHandlerClickMovieDetails(id) {
    let getData = async () => {
      try {
        const response = await axios.get(`${this.baseURL}/movie/${id}?api_key=${this.apiKey}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
      }
    };
  
    getData()
      .then((movieData) => {
        this.setState({ movieDetails: movieData });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  onHandlerClickTVDetails(id) {
    let getData = async () => {
      try {
        const response = await axios.get(`${this.baseURL}/tv/${id}?api_key=${this.apiKey}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
      }
    };
  
    getData()
      .then((movieData) => {
        this.setState({ movieDetails: movieData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Router history={history}>
        <MovieListProvider>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/genre" element={<Genre />}/>
            <Route path="/movie" element={<Movie onClick={this.onHandlerClickMovieDetails} />}/>
            <Route path="/list" element={<MovieList />}/>
            <Route path="/tv-series" element={<TV onClick={this.onHandlerClickTVDetails}/>}/>
            <Route path="/details" element={<Details movie={this.state.movieDetails} />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </MovieListProvider>
      </Router>
    );
  }
}

export default App;
