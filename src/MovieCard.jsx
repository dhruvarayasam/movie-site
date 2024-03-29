import React from 'react';
import MenuButton from './components/MenuButton';

const MovieCard = ({ movie }) => {

    // get imdb link
    const imdbLink = `http://imdb.com/title/${movie.imdbID}`

    console.log(movie)

    return (
        <div className="movie-search-object">
            <div className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <a href={imdbLink} target="_blank" rel="noreferrer"> <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={'not available'} /></a>
                </div>
            </div>
            <div className="movie-title-container">
                <a href={imdbLink} target="_blank" rel="noreferrer">{movie.Title}</a>
                <MenuButton 
                    movieTitle={movie.Title}
                    imdbID={movie.imdbID}
                />
            </div>
        </div>
    )

}

export default MovieCard;