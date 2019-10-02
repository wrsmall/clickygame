import React from "react";
import "../style/ranga.css";
import { tsPropertySignature } from "@babel/types";

function Title(props) {
    return (
        <div className="container mb-1">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="jumbotron mt-2 p-0 bg-info">
                    <p className="text-center h1 ranga bg-warning mb-3 p-2 rounded bg-light border border-dark">Clicky Game</p>
                    <p className="text-center texty h3">
                        Welcome to Ocean clicky. The memory game where you the user has to remember
                        which ocean creature images you have already clicked. To win click each image
                        only once, otherwise the game will start over.
                    </p>
                    <p className="mt-3 mb-0">{props.children}</p>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
}

export default Title;