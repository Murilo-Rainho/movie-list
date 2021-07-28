import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';
import movies from './data';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <Footer />
    </div>
  );
}

export default App;
