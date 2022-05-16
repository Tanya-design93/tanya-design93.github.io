import logo from './moviebackground.jpg';
import './App.css';
import InputSearch from './InputSearch';

import * as MovieSearchEngine from './MovieSearchEngine.js';
import React, { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    MovieSearchEngine.GetMovieType("Action");
  }, [])
  return (
    
    
    <div className="App">


    <div className="AlignSearchInputCenter">
        <InputSearch/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </div>
    </div>
  );
}

export default App;
