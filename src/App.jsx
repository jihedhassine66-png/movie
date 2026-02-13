import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/movielist.jsx';
import Header from './components/header.jsx';
import Movies from './movies.js';
import AddMovie from './components/addmovie.jsx';
import Filter from './components/filter.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [movies, setMovies] = useState(Movies);
  const [showfilterform, setShowFilterForm] = useState(false);
  const [originalMovies] = useState(Movies);

  const searchResults = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        setShow={setShow}
        searchResults={searchResults}
        setShowAddForm={setShowAddForm}
        setShowFilterForm={setShowFilterForm}
      />
      
      <h1 style={{textAlign:'center', margin: '40px 0', fontWeight: '800', fontSize: '3rem', letterSpacing: '-1px'}}>
        Trending Movies
      </h1>

      {showAddForm && <AddMovie movies={movies} setMovies={setMovies} setShowAddForm={setShowAddForm} />}
      
      {showfilterform && <Filter onApply={(min, max) => {
        setMovies(originalMovies.filter(m => m.rating >= min && m.rating <= max));
      }} setShowFilterForm={setShowFilterForm} />}
      
      <MovieList show={show} searchResults={searchResults} movies={movies} />
    </div>
  )
}

export default App;