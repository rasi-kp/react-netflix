import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../axios'
import { API_KEY,img_url } from '../../constannts/constant'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            // setMovie(response.data.results[1])
            setMovie((response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0]))
        })
    },[])
    
    return (
        <div 
        style={{backgroundImage:`url(${movie ? img_url+movie.backdrop_path : ""})`}} 
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_button'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className='fade'></div>
        </div>
    )
}

export default Banner