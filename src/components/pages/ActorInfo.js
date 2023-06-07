import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import {APIKEY} from "./apikey";
import {LanguageContext} from "../../context/LanguageContext";
const ActorInfo = () => {
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

    const {actorId}=useParams()
    const  { language }=useContext(LanguageContext)
    const [details,setDetails]=useState({})
    const [movies,setMovies]=useState([])
    const getMovies=async (id)=>{
        const api=await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&append_to_response=combined_credits`)
        const {data}=await api
        setMovies(data .combined_credits.cast)
    }
    const getDetailse=async (id)=>{
        const api=await  axios(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=${language}`)
        const {data}=await api
        setDetails(data)
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(()=>{
        getDetailse(actorId)
        getMovies(actorId)
    },[language])

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-4">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.profile_path}`} alt=""/>

                </div>
                <div className="col-8">
<h2> {details.name}</h2>
                    <h4> {details.birthday}</h4>
                    <h4> {details.place_of_birth}</h4>
                    <p>{details.biography }</p>
                    <Slider{...settings}>
                        {
                            movies.map(el=>(
                                <div>
                                    <Link to={`/movie_info/${el.id}`}>

                                    <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt="{el.title"/>
                                    <p> {el.title}</p>
                                        </Link>
                                </div>
                            ))
                        }

                    </Slider >

                </div>
            </div>

<div>
    <ul className="list-group">
        {
            movies.slice(0,20).map(el=>(
                <li className="list-group-item">
                    <span> {el.release_date}</span> |
                    &nbsp;

                    <Link to={`/movie_info/${el.id}`}>
                        {el.title}

                    </Link>

                </li>
            ))
        }

    </ul>
</div>
        </div>

    );
};

export default ActorInfo;