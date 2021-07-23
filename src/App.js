import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import allMovies from './data';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ allMovies } />
      <Footer />
    </div>
  );
}

export default App;
