import Movies from '../movies.js';
import MovieCard from './moviecard.jsx';

const MovieList = ({ show = false, searchResults = [], movies}) => {
    const moviesToDisplay = show ? searchResults : movies;
const handleCardClick = (movie) => {
    console.log('Movie clicked:', movie);
    <Route path={`/movies/${movie.title }`} element={<MovieDetail movie={movie} />} />

}
    return (
        <div className="container-fluid">
            {moviesToDisplay.length > 0 ? (
                <div className="movie-grid">
                    {moviesToDisplay.map((movie, index) => (
                        <MovieCard 
                            key={ index} 
                            title={movie.title} 
                            posterUrl={movie.posterUrl}
                            description={movie.description}
                            rating={movie.rating}
                            onclick={() => handleCardClick(movie)}
                        />
                    ))}
                </div>
            ) : (
                <div style={{textAlign: 'center', marginTop: '50px', color: 'var(--text-main)'}}>
                    <h3>No result found 😢</h3>
                </div>
            )}
        </div>
    );
}

export default MovieList;