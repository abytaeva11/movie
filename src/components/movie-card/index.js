import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    return (

            <div className="col-4">
                <div className="my-2">
                    <Link to={`/movie_info/${movie.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt=""/>

                    </Link>
                    <p>  {movie.title}   </p>
                </div>

        </div>
    );
};

export default MovieCard;