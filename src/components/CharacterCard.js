import React from 'react';

const CharacterCard = ({ character }) => (
    <div className="character-card">
        <p>{character.name}</p>
        <p>{character.status}</p>
        <p>{character.gender}</p>
        <p>{character.species}</p>
        {/* <img href={character.image} alt={character.name}></img> */}
    </div>
);

export default CharacterCard;