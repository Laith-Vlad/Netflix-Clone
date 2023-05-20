import React, { useState } from 'react';
import ModalMovie from '../ModalMovie/modalMovie';
import './card.css';

const Movie = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div key={movie.id} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <button onClick={toggleModal}>Add to Favorites</button>
      {showModal && <ModalMovie movie={movie} toggleModal={toggleModal} />}
    </div>
  );
};

export default Movie;