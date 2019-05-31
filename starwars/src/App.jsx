import React, { Component } from "react";
import "./App.css";
import CharList from "./components/StarWarsComponents/CharList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="star-wars">
          <div className="star-wars-comps">
            <button className="next-button">Next Page</button>
          </div>
          <CharList characters={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
