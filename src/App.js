import React, { useState } from 'react';

//9e9d8c1
import {  useEffect } from 'react';
import './App.css';
import './search.svg'
import MovieCard from './MovieCard';
import searchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=9e9d8c1'

const movie1= 
    {
        "Title": "Superman & Lois",
        "Year": "2021–",
        "imdbID": "tt11192306",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    }


const App =() =>{

    const [movies,setMovies] = useState([]);
    const [serachTerm,setSearchTerm] = useState(''); // empty string cause out st at start is empty


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)

    }

    useEffect( ()=> {
        
        searchMovies('Superman');
    }   
    ,[]); 


    return(
        <div className ="app">
            <h1>MovieLAnd </h1>
            <div className ="search">
                <input
                placeholder ="Search for movies"
                value ={serachTerm}
                onChange ={(e) =>setSearchTerm(e.target.value)}  // static for now
            
                />
                <img 
                    src ={searchIcon}
                    alt="Search"
                    onClick={()=>searchMovies({serachTerm})}
                    />
            </div>
            { movies?.length > 0 
                ? (
                    <div className="container">
                    {movies.map((movie) => (
                    <MovieCard movie ={movie} />
                ))}
                    
                </div>
                ) : 
                (
                    <div className = "empty">
                        <h2>No movies found</h2>
                     </div>
                )
            }
           
        </div>
    ); 
}

export default App;   // so we can call "App" from anywhere