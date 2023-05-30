import React from 'react';

const MovieCard = ({ movie }) => {

    // get imdb link
    const imdbLink = `http://imdb.com/title/${movie.imdbID}`

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <a href={imdbLink} target="_blank" rel="noreferrer"> <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} /></a>
            </div>
        </div>
    )

}

export default MovieCard;