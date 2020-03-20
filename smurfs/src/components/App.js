import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfVillage from "./SmurfVillage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfVillage />
      </div>
    );
  }
}

export default App;
