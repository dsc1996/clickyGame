import React, { Component } from "react";
import Container from "./items/container";
import ImageCard from "./items/imageCard";
import Title from "./items/title";
import pic from "./pic.json";

function shuffle(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


class App extends Component {
  state = {
    pic,
    chosen: [],
    score: 0,
    highScore: 0,
    status: "Click on each hall of famer once and only once."
  };

  scoring = name => {

    console.log("I Clicked on ", { name });

    function checkIfChosen(arr, name) {
      return arr.some(function (arrVal) {
        return name === arrVal;
      });
    }

    let isChosen = checkIfChosen(this.state.chosen, name)

    if (isChosen === true) {
      this.setState({ score: 0 });
      this.setState({ chosen: [] })
      this.setState({ status: "You already chose that one.  Start over!" });

      console.log(this.state.chosen);

    }
    else {

      this.setState({ score: this.state.score + 1 });
      this.setState({ status: "Valid Answer!" });
      this.setState({ chosen: [...this.state.chosen, name] })

      console.log("this is score", this.state.score);
      console.log("this is HIGH score", this.state.highScore);

      console.log(this.state.chosen);
      if (this.state.score +1 > this.state.highScore) {
        this.setState({ highScore: this.state.score +1});
      }
      if (this.state.score +1 === 12) {
        this.setState({ status: "YOU WON!  Click any hall of famer to play again." });
      }
    } 
  }; 

  render() {
    let shuffledEmblems = shuffle(pic);
    return (
      <Container>
        <Title>The History of Baseball</Title>
        <div className="scoreDiv">
          <h3 className="score">{this.state.status}</h3>
          <h2 className="score">Current Score: {this.state.score}</h2>
          <h2 className="score">High Score: {this.state.highScore}</h2>
          <h2>Winning Score: 12</h2>
        </div>
        {shuffledEmblems.map(pic => (
          <ImageCard
            scoring={this.scoring}
            id={pic.id}
            key={pic.id}
            name={pic.name}
            image={pic.image}
          />
        ))}
      </Container>
    );
  };
}

export default App;
