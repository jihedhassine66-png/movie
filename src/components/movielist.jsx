import Movies from '../movies.js';
import MovieCard from './moviecard.jsx';

const MovieList = ({ show = false, searchResults = [], movies}) => {
    const moviesToDisplay = show ? searchResults : movies;

    return (
        <>
            {moviesToDisplay.length > 0 ? (
                <div className="movie-grid">
                    {moviesToDisplay.map((movie, index) => (
                        <MovieCard key={movie.id || index} title={movie.title} posterUrl={movie.posterUrl}>
                            <p>{movie.description}</p>
                            <p>Rating: {movie.rating}</p>
                        </MovieCard>
                    ))}
                </div>
            ) : (
                <div className="movie-grid">
                    <p className="no-results">No results found</p>
                </div>
            )}
        </>
    );
}

export default MovieList;