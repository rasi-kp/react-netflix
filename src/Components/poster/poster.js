import React, { useEffect, useState } from 'react'
import './poster.css'
import axios from '../../axios'
import {API_KEY,img_url } from '../../constannts/constant'
import YouTube from 'react-youtube'

function Poster(props) {
    const [movie, setMovie] = useState([])
    const [urlid,seturlid]=useState(null)
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            // console.log(response.data.results[0]);
            setMovie(response.data.results)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars:{
            autoplay: 1,
        }
    };
    const handleMovei=(id)=>{
        console.log(urlid);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            // console.log(response.data);
            if(response.data.results.length!==0){
                seturlid(response.data.results[0])
                // console.log(response.data.results[0]);
                // console.log(urlid.key);
            }else{
                console.log("Array Empty");
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movie.map((obj)=>
                <img onClick={()=>handleMovei(obj.id)} className={ props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${img_url+obj.backdrop_path}`}></img>
            )}
        </div>
        {/* {urlid && <YouTube videoId={urlid.key} opts={opts}/>} */}
        {urlid !== null && <YouTube videoId={urlid.key} opts={opts}/>}

    </div>
  )
}

export default Poster