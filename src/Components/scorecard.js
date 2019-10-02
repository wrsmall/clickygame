import React from "react";

function Scorecard(props) {
    return (
        <p className="text-center ranga h2 mt-0">Score:{props.score}</p>
    );
}

export default Scorecard;