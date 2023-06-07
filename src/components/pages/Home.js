import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "./apikey";
import MovieCard from "../movie-card";
import button from "bootstrap/js/src/button";
import {LanguageContext} from "../../context/LanguageContext";
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

const  Home=()=>{
const [ popular,setPopular]=useState([])
    const [page,setPage]=useState(1)
    // const [language,setLanguage]=useState("en-US")

    const  { language }=useContext(LanguageContext)


const getPopular=async (page,language)=>{
const  url=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
    const {data}=await  url
    setPopular(data.results)
        //https://www.themoviedb.org/t/p/w600_and_h900_bestv2
}
useEffect(()=>{
    getPopular(page,language)
    window.scroll(0,0)
},[page,language])
    return(
        <div className="container">
            <h1>Home page </h1>

<div className="row">
        {popular?.map(movie=> <MovieCard movie={movie} key={movie.id}/> )}

</div>
           <div className="py-5">
               {
                   new Array(10).fill(0).map((el,idx)=>(
                           <button className={`btn  mx-2" ${page===idx+1? "btn-danger" :"btn-success "}`}
                                   onClick={()=>setPage(idx+1)}
                           >{idx+1} </button>
                       ))}
           </div>
        </div>
);
};
export default Home

