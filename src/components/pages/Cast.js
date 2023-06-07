import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "./apikey";
import Slider from "react-slick";
import Profile from "../../images/profile-.webp"
import {Link} from "react-router-dom";
const Cast = ({movieId}) => {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
    const [actors,setActors]=useState([])
    const getActors=async (id)=>{
        try{
const  api=await axios (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
            const {data}=await api
            setActors(data.cast)
        }
        catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getActors(movieId)
    },[])

   const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
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
    return (
        <Slider{...settings}>{
actors.map(item=>(
    <div>
        <Link to={`/actor_info/${item.id}`}>
            <img src={item.profile_path?`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`:""} alt={item.name}/>

        </Link>
    <p className="text-white"> {item.name}</p>
        <i className="text-white">{item.character} </i>
    </div>

            ))
        }

        </Slider>
    );
};

export default Cast;