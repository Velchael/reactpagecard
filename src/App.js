import React from "react";
import Cardprops from "./Cardprops";
import './style.css';
function App() {
    return(
     <div className="presenta_css">
      <div>
        <Cardprops
         image="http://placekitten.com/300/200"
         name="Mr. Kit Kat"
         phone="(21) 98765-4321"
         email="kitkat@catnap.meow"/>
        <Cardprops
          image="http://placekitten.com/400/200"
          name="Giraldi"
          phone="Phone: (21) 98765-1234"
          email="fluff@me.com"
        />
        <Cardprops
          image="http://placekitten.com/400/300"
          name="Darth Vader"
          phone="Phone: (21) 98475-4321"
          email="ofworlds@yahoo.com"
        />  
        <Cardprops
          image="http://placekitten.com/350/180"
          name="Felix"
          phone="(21) 93124-4321"
          email="thecat@hotmail.com"
        /> 
    
      </div>
      </div>
    );
  }

export default App
