
// import React from "react";
import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import axios from "axios";
import {APIKEY} from "./apikey";
const MovieVideo = ({movieId} ) => {
    const[video,setVideo]=useState([])
    const getVideo=async (id)=>{
        const api=await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
        const {data}=await api
        setVideo(data.results)

    }

    console.log( video )
    useEffect(()=>{
        getVideo(movieId)
    },[])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
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
        <Slider{...settings}>
        {/*<iframe width="350" height="175" src="https://www.youtube.com/embed/yKrzARVuePw"*/}
        {/*        title="YouTube video player"*/}
        {/*        frameBorder="0"*/}
        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
        {/*        allowFullScreen></iframe>*/}

          {
                video.map(item=>(

            <div>
                <iframe width="300" height="200" src={`https://www.youtube.com/embed/${item.key}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            ))
            }

        </Slider>
    );
};

export default MovieVideo;


