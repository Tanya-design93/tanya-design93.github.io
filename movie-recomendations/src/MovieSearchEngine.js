
import { movieGenres } from "./MovieGenres.js";
import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstContainerMovies from './FirstContainerMovies';
import GenreHeader from './GenreHeader';
export  function GetMovieType(movieName) {
    try {
      let movieId = movieGenres.find((o) => o.name === movieName);
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f76697f079ac4cc9cba2d8f4db3a80d4&with_genres=${movieId.id}`
        )
        .then((response) => {
          populateContainer(response.data.results,movieName);
        });
    } catch (e) {
      
    }
  }

export function populateContainer(populateRows,movieName) {

    const genreHeaders = ReactDOM.createRoot(
        document.getElementById("genreHeader")
      );
  
      genreHeaders.render(
        <React.StrictMode>    
            <GenreHeader genreName={movieName}/>
        </React.StrictMode>
        ); 

    const firstcontainermovies = ReactDOM.createRoot(
      document.getElementById("firstcontainermovies")
    );

    firstcontainermovies.render(
    <React.StrictMode>    
        <FirstContainerMovies MovieData={populateRows}/>
    </React.StrictMode>
    );


  }