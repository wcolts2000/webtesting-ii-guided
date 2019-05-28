import React, { Component } from "react";
import "./App.css";
import Players from "./players/Players";

class App extends Component {
  // state= {greeting: ""}
  state = {
    players: [
      { id: 1, name: "Sam" },
      { id: 2, name: "Bilbo" },
      { id: 3, name: "Frodo" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Players players={this.state.players} />
        <div>
          <button onClick={this.greet}>greet</button>
          <div>{this.state.greeting}</div>
        </div>
      </div>
      // <div className="App">
      //   <h2>Hello World</h2>
      //   <div>
      //     <button onClick={this.greet}>greet</button>
      //     <div>{this.state.greeting}</div>
      //   </div>
      // </div>
    );
  }

  greet = () => {
    this.setState({ greeting: "Hello Web Students" });
  };
}

export default App;
