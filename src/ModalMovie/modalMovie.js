import React, { useState } from 'react';
import axios from 'axios';
import './mod.css';
const ModalMovie = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  const handleAddToFavorites = async () => {
    const movieData = {
      title: movie.title,
      overview: movie.overview,
      comment: comment, // Include the comment field from the state
    };
  
    try {
      const response = await axios.post('https://movielibrarydeployedat.onrender.com/addmovie', movieData);
      console.log('Movie added to favorites:', response.data);
      // success message
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
      // Handle any errors that occur during the POST request
    }
  };
       console.log(handleAddToFavorites);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={toggleModal}>View Details</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>Add a comment:</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              cols="50"
            />
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMovie;   