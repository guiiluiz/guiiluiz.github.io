import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;