import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "./apikey";
import MovieCard from "../movie-card";
import {LanguageContext} from "../../context/LanguageContext";
const  About=()=>{

    const [topRated,setTopRated]=useState([])
    const  { language }=useContext(LanguageContext)


    const getTopRated=async()=>{
        const  api=await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
        const {data}=await api
        setTopRated(data.results)
    }
    useEffect(()=>{
        getTopRated()
    },[language])
    return(
        <div className="container"> 
            <h1> Top rated movies page</h1>
            <div className="row">
                {        topRated?.map(movie=> <MovieCard movie={movie} key={movie.id}/> )
                }
            </div>
        </div>
    )
}
export default About