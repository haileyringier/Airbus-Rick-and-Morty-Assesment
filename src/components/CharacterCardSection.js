import React from 'react';
// import CharacterCard from './CharacterCard';

const CharacterCardSection = ({characters}) => {

    return (
    <div>
        <p>Character Card Section</p>
        {characters.results.map(character => {
            return (
            <div>
                <p>{character.name}</p>
            </div>
            )
        }
        )}

    </div>
)};

export default CharacterCardSection;