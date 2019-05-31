import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharList = props => {
  return (
    <div className="char-list">
      {props.characters.map(character => {
        return <Character 
                key={character.created} 
                character={character} 
                />;
      })}
    </div>
  );
};

export default CharList;