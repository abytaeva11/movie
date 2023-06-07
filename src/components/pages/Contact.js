import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "./apikey";
import MovieCard from "../movie-card";
import {LanguageContext} from "../../context/LanguageContext";
const  Contact=()=>{
    //https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1    const  [nowPlaying,setNowPlaying]=useState([])
    const [nowUpPLaying,setUpComing]=useState([])
    const  { language }=useContext(LanguageContext)

    const getUpComing=async()=>{
        const bmw=await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=${language}&page=1`)
        const {data}=await bmw
        setUpComing(data.results)
    }

   useEffect (()=>{
        getUpComing()
    },[])
    return(
        <div className="container">
            <h1> Now playing movies</h1>
            <div className="row">
                {nowUpPLaying.map(movie=> <MovieCard movie={movie} key={movie.id}/> )}


            </div>
        </div>
    )
}
export default Contact