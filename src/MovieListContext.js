import React, { createContext, useContext, useState } from 'react';

const MovieListContext = createContext();

export function useMovieList() {
  return useContext(MovieListContext);
}

export function MovieListProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  // console.log(movieList);

  return (
    <MovieListContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </MovieListContext.Provider>
  );
}
