import React from 'react';

import Navbar from './Components/navbar/navbar';
import Banner from './Components/banner/banner';
import Poster from './Components/poster/poster';
import Footer from './Components/footer/footer';
import { originals,action,comedy,horror,romance,documentary} from './urls';
import './App.css';
// import { useState } from 'react';
function App() {
  // const [state,setState]=useState([])
  return (
    <div className="App">
      <Navbar/>
      
      <Banner/>
      <Poster url={originals} title='Netflix Originals' />
      <Poster url={action} title='Action' isSmall />
      <Poster url={comedy} title='Comedy' />
      <Poster url={horror} title='Horror'  />
      <Poster url={romance} title='Romance'  />
      <Poster url={originals} title='Documentary'  />
      <Footer/>
    </div>
  );
}

export default App;
