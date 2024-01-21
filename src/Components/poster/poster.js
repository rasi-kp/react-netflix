import React, { useEffect, useState } from 'react'
import './poster.css'
import axios from '../../axios'
import { img_url } from '../../constannts/constant'

function Poster(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            // console.log(response.data.results[0]);
            setMovie(response.data.results)
        })
    },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movie.map((obj)=>
                <img className={ props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${img_url+obj.backdrop_path}`}></img>
            )}
            
            
        </div>
    </div>
  )
}

export default Poster