import React from "react";
import "../style/ranga.css";


function Gamespace(props) {
    return (
        <div className="container mt-1">
            <div className="row">
                <div className="jumbotron rounded p-0 bg-primary">
                    <div className="container">
                        <div className="row justify-content-center">


                            {props.children}


                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Gamespace;