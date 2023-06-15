import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import MovieCard from "../movie-card";
import button from "bootstrap/js/src/button";
import {APIKEY} from "./apikey";

const SearchResult = () => {
    const {movie_name}= useParams()
    const [result,setResult]=useState([])
const [page,setPage]=useState(1)
    const getResult= async (title)=>{
        const api=await  axios (`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${title}&page=${page}`)
        const {data}=await  api
setResult(data.results)
    }
    useEffect(()=>{
        getResult((movie_name))
    },[page ])
    return (
        <div className="container">
            <h1> Search Results page </h1>
            <div className="row">
                {result?.map(movie=> <MovieCard movie={movie} key={movie.id}/> )}

            </div>
            <div className="py-5">
                {
                    new Array(10).fill(0).map((el,idx)=>(
                        <button className={`btn  mx-2" ${page === idx+1? "btn-danger" :"btn-success "}`}
                                onClick={()=>setPage(idx+1)}
                        >{idx+1} </button>
                    ))}
            </div>
        </div>
    );
};

export default SearchResult;