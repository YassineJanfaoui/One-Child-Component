import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photo from "./photo.png";
import yahya from "./yahyabouhlel.jpg"
import amine from "./aminebouhlel.jpg"
import Box from './components/box';
import Box2 from './components/box2';

class App extends Component {
  render() {
    return (

      <div>
        <p className="equipe">Notre équipe</p>  <br/>
        <div className="boxes">
        <div>
        <img src={yahya} className="photos"/>
          <Box style={{color : "grey"}}  name='Yahya bouhlel' des="Founder" desc="CEO" /> 
          </div>  
          <div> 
          <img src={amine} className="photos"/>    
          <Box style={{color : "grey"}}   name='Amine Bouhlel' des="Founder" desc="COO" />        
          </div> 
          <div>
          <img src={photo} className="photos"/>
          <Box style={{color : "grey"}}   name='Arsslen Idadi' des="Software Engineer" desc="Part Time Prg. Manager" />
          </div>
          <div>
          <img src={photo} className="photos"/>
          <Box style={{color : "grey"}}   name='Sameh Ghanmi' des="Full Time Program Manager" />
          </div>
          </div>
      </div>

    );
  }
}

export default App;
