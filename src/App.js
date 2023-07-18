import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=5fb3764e"

function App() {

    const [movies, setMovies] = useState([])

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`).catch(err => {

            console.log('error hit')

            return (<div className="empty">
                <h2>API Error, come back later ☹️</h2>
            </div>)
        })

        const data = await response.json();

        console.log(data.Search)

        if (data.Search === undefined) {

            console.log('hit')

            setMovies();

        }

        setMovies(data.Search);

    }


    return (
        <div className="app">
            <h1>Movie Browser</h1>
            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ? searchMovies(searchTerm) : console.log(e.key)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {

                // // add consideration for when movies is empty
                (movies === undefined)
                    ? (
                        <div className="empty">
                            <h2>No movies found ☹️</h2>
                        </div>

                    ) : (
                        <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>                        
                    )
            }


        </div>
    );

}

export default App;