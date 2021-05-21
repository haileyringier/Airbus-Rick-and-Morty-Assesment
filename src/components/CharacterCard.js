import React from 'react';

const CharacterCard = ({ character, activeCharacter }) => {

    const handleClick = () => {
        activeCharacter(character.name)
    }
    return(
    <div className="character-card" onClick={handleClick}>
        <img src={character.image} alt={character.name}></img>
        <h3>{character.name.toUpperCase()} <small>({character.gender})</small></h3>
        <p><b>Alive or Dead:</b> {character.status}</p>
        <p><b>Species:</b> {character.species}</p>
        <p><b>Last known location:</b> {character.location.name}</p>
    </div>
    )
};

export default CharacterCard;