import React, { Component } from "react";
import "./App.css";
import CharList from "./components/StarWarsComponents/CharList";
import Pagination from "./components/StarWarsComponents/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: 2,
      prevPage: 1
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  prevPage = () => {
    debugger
    this.getCharacters(
      `https://swapi.co/api/people/?page=${this.state.prevPage}`
    );
    this.setState(prevState => {
      return ( prevState.prevPage -= 1 );
    });
    debugger
  };

  nextPage = () => {
    this.getCharacters(
      `https://swapi.co/api/people/?page=${this.state.nextPage}`
    );
    this.setState(prevState => {
      return (prevState.nextPage += 1);
    });
  };

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
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
          <Pagination handlePaginationPrev={this.prevPage} handlePaginationNext={this.nextPage} />
          <CharList characters={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
