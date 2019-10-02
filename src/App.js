import React, { Component } from "react";
import Title from "./Components/home";
import Gamespace from "./Components/gameSpace";
import Creatures from "./Creature.json";
import Creat from "./Components/creat";
import Scorecard from "./Components/scorecard";
class App extends Component {

  state = {
    Creatures,
    score: 0
  };

  imageClick = event => {
    console.log(event.target.id)
   const Creature=shuffle(this.state.Creatures);
   const score=this.state.score+1
   console.log("done");
   this.setState({
     Creatures:Creature,
     score:score
   })
  }
  render() {
    return (
      <div>
        <Title/>
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