import ModalMovie from "../ModalMovie/modalMovie";
import './card.css';
const Movie = ({ movie }) => {
    const addToFavorites = () => {
      
    };
  
    return (
      <div key={movie.id} className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button onClick={addToFavorites}>Add to Favorites</button>
        <ModalMovie movie={movie} /> 
   
      </div>
    );
  };
  export default Movie;