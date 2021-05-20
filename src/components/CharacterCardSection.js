import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterCardSection = ({characters, activeCharacter}) => {

    return (
    <div className="character-card-section">
        {characters.results.map(character => {
            return <CharacterCard key={character.name} id={character.id} character={character} activeCharacter={activeCharacter} />
        }
        )}
    </div>
)};

export default CharacterCardSection;

