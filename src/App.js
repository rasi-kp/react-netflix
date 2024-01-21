import React from 'react';
import axios from 'axios';
import Navbar from './Components/navbar/navbar';
import Banner from './Components/banner/banner';
import Poster from './Components/poster/poster';
import './App.css';
import { useState } from 'react';
function App() {
  const [state,setState]=useState([])
  return (
    <div className="App">
      <Navbar/>
      
      <Banner/>
      <Poster/>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data);
          setState(response.data)
        })
      }}>click</button>
      {state.map((obj,index)=>{
        return(
          <div>
            <h2>{index}</h2>
            <h3>{obj.body}</h3>
            <h4>{obj.title}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default App;
