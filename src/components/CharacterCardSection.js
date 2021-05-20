import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterCardSection = ({characters}) => {

    return (
    <div>
        {characters.results.map(character => {
            return <CharacterCard key={character.id} character={character} />
        }
        )}
    </div>
)};

export default CharacterCardSection;

// five cards across four row down