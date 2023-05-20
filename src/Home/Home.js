import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieList from '../MovieList/movieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=0a2f607817c9b6e6df093289ee34c09a`);
        setMovies(response.data.results); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
      
    fetchMovies();
  }, []);

  return (
    <div>
      
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;