import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Genre from './containers/Genre/Genre';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';
import TV from './containers/TV Series/TV';
import NotFound from './containers/Alert/NotFound';

function App() {
  const [input, setInput] = useState();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/genre" element={<Genre />}/>
        <Route path="/movie" element={<Movie />}/>
        <Route path="/tv-series" element={<TV />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
