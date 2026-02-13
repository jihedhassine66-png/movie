import Movies from '../movies.js';
import MovieCard from './moviecard.jsx';

const MovieList = ({ show = false, searchResults = [], movies}) => {
    const moviesToDisplay = show ? searchResults : movies;

    return (
        <div className="container-fluid">
            {moviesToDisplay.length > 0 ? (
                <div className="movie-grid">
                    {moviesToDisplay.map((movie, index) => (
                        // Nous passons les props directement ici au lieu d'utiliser children
                        <MovieCard 
                            key={movie.id || index} 
                            title={movie.title} 
                            posterUrl={movie.posterUrl}
                            description={movie.description}
                            rating={movie.rating}
                        />
                    ))}
                </div>
            ) : (
                <div style={{textAlign: 'center', marginTop: '50px', color: '#16181e'}}>
                    <h3>No result found 😢</h3>
                </div>
            )}
        </div>
    );
}

export default MovieList;