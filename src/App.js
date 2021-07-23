import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import allMovies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ allMovies } />
    </div>
  );
}

export default App;
