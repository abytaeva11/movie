import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "./apikey";
import {useParams} from "react-router-dom";
import MovieVideo from "./MovieVideo";
import Cast from "./Cast";
import {logDOM} from "@testing-library/react";
import {LanguageContext} from "../../context/LanguageContext";

const MovieInfo = () => {
    const [details,setDetails]=useState({})
const time="мин"
    console.log(time)
    const {movieId}=useParams()
    const  { language }=useContext(LanguageContext)

    console.log(movieId)
    // let  time="-min"
    // console.log(time)
    const getDetails=async (id)=>{

        const api=await  axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${language}`)
        const  {data}=await api
        setDetails(data)
    }


    useEffect(()=>{
        getDetails(movieId)
    },[language])
    return(
        <div style={{
            background:`url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}") no-repeat center/cover`

        }}>
            <div className="container text-white   ">
                            <h1 className=" text-white"> Primary details about a movies</h1>
                                <div className="row ">
                                    <div className="col-5">
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`} alt=""/>
                                  </div>
                                    <div className="col-7 " >
                                       <div  style={{
                                           background:"black",
                                           opacity: 0.5
                                       }}>
                                           <h1>{details.title}</h1>
                                           <h3>{details.release_date} </h3>
                                           <h3>{details.runtime+time}</h3>
                                           <p>{details.overview}</p>
                                       </div>
<MovieVideo  movieId={movieId}/>


</div>
        </div>
                <Cast movieId={movieId}/>

            </div>
        </div>
                )
            }

            export default MovieInfo;

// ${item.key}