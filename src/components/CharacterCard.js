import React from 'react';

const CharacterCard = ({ character, activeCharacter }) => {

    const handleClick = () => {
        console.log(character.name)
        activeCharacter(character.name)
    }
    return(
    <div className="character-card" onClick={handleClick}>
        <img src={character.image} alt={character.name}></img>
        <h3>{character.name} ({character.gender})</h3>
        <p>Alive or Dead: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Last known location: {character.location.name}</p>
    </div>
    )
};

export default CharacterCard;