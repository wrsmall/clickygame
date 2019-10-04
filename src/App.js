import React, { Component } from "react";
import Title from "./Components/home";
import Gamespace from "./Components/gameSpace";
import Creatures from "./Creature.json";
import Creat from "./Components/creat";
import Scorecard from "./Components/scorecard";
import { checkServerIdentity } from "tls";
class App extends Component {

  state = {
    Creatures,
    score: 0,
    Clicked: []
  };

  imageClick = event => {
    const id = (event.target.id)
    const Creature = shuffle(this.state.Creatures);
    console.log("done");
    this.setState({
      Creatures: Creature,
    })
    this.check(id)
  }

  check = id => {
    var clickedArray = this.state.Clicked;
    if (clickedArray.includes(id)) {
      this.setState({
        score: 0,
        Clicked:[]
      })
    }
    else {
      clickedArray.push(id);
      console.log(clickedArray);
      this.setState({
        Clicked: clickedArray,
        score: this.state.score + 1
      })
      var totalscore=this.state.score
      console.log("this is"+totalscore);
      this.won(totalscore);
    }
  }
  won= totalscore =>{
    console.log("this is"+totalscore);
    if ( totalscore === 14)
    {alert("congratulations you won!")
  this.setState({score:0})}
  }
  render() {
    return (
      <div>
        <Title />
        <Gamespace>
          {this.state.Creatures.map(Creature => (
            <Creat
              key={Creature.id}
              id={Creature.id}
              image={Creature.image}
              ImageClick={this.imageClick} />

          ))}
        </Gamespace>
        <Scorecard
          score={this.state.score}
        />
      </div>
    );
  }
}
function shuffle(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log("shuffle");
  return array;
};



export default App;