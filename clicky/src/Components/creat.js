import React from "react";


function Creat(props){
   return(
       <div>
    <img id={props.id} className="float-left m-2 rounded" src={props.image} width="175px" height="175px" onClick={props.ImageClick}/>
    </div>
);
}

export default Creat;