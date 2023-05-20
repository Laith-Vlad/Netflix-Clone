import React from 'react';
import Movie from '../Movie/movie';
import './list.css'

const MovieList = ({ movies }) => {
    return (
      <div className="movieList">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    );
  };
  export default MovieList;