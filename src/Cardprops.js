import React from "react";
/*import Article from "/Article";*/
function Cardprops(props){
    return(
        
         <div className="presenta-css"> 
          <img src={props.image} alt=""/> 
          <h3>{props.name}</h3>
          <p>phone: {props.phone}</p>
          <p>email: {props.email}</p> 
          <button className="alineboto"> Saiba mais </button>
         </div>
    );
}
 
export default Cardprops;
