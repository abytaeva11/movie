import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "./apikey";
import MovieCard from "../movie-card";
import {LanguageContext} from "../../context/LanguageContext";
const  Projects=()=>{
    //https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
    const  [nowPlaying,setNowPlaying]=useState([])
    const  { language }=useContext(LanguageContext)

    const getNowPlaying=async()=>{
        const api=await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=${ language}&page=1`)
        const {data}=await api
        setNowPlaying(data.results)
    }

    useEffect(()=>{
        getNowPlaying()
    },[])
    return(
        <div className="container"
             style={{
                 backgroundImage: "url(\"https://catherineasquithgallery.com/uploads/posts/2023-01/1674282844_catherineasquithgallery-com-p-krasivii-fon-temno-serii-foto-147.jpg\")"

             }}
        >
            <h1> Now playing movies</h1>
            <div className="row">
                {nowPlaying.map(movie=> <MovieCard movie={movie} key={movie.id}/> )}


            </div>
        </div>
    )
}
export default Projects