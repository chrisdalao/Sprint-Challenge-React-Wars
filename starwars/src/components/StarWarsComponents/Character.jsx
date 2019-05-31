import React from 'react';
import './StarWars.css'

const Character = props => {
    return (
        <div className="character-name">{props.character.name}
            <div className="character-details">Birth Year: {props.character.birth_year} </div>
            <div className="character-details">Eye Color: {props.character.eye_color} </div>
            <div className="character-details">Gender: {props.character.gender} </div>
            <div className="character-details">Hair Color: {props.character.hair_color} </div>
            <div className="character-details">Height: {props.character.height} </div>
            <div className="character-details">Mass: {props.character.mass} </div>
            <div className="character-details">Skin Color: {props.character.skin_color} </div>
        </div>
    )
}

export default Character;