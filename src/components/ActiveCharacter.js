import React from 'react';
// import CharacterCard from './CharacterCard';

const ActiveCharacter = ({character, splitScreen}) => {
    return(
        <div className={(splitScreen ? "active-character-section" : "no-active-character-section")}>
            {/* <h3>In the spotlight</h3>  */}
            <div className="active-character-card">
                <img id="profile-images" src={character.image} alt={character.name}></img>
                <h3>{character.name.toUpperCase()} <small>({character.gender})</small></h3>
                <p><b>Alive or Dead:</b> {character.status}</p>
                <p><b>Species:</b> {character.species}</p>
                <p><b>Last known location:</b> {character.location.name}</p>
            </div>
        </div>
        
        
    
        
    )
};

export default ActiveCharacter;