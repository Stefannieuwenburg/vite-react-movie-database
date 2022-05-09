import React from 'react';
import { v4 as uuidv4 } from "uuid";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie) => (
                <div
                    key={uuidv4()}
                    className="image-container d-flex justify-content-start m-3"
                >
                    <img src={movie.Poster} alt="movie"></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;