import React, { useState } from 'react';
import CharacterCardSection from './CharacterCardSection';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
          info {
            count
          }
          results {
            id
            name
            status
            species
            type
            gender
            image
            created
          }
        }
    }
`;

const Overview = () => {
    const [activeCharacter, setActiveCharacter] = useState('');

    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    console.log(data)

    return(
        <div>
            <h1>Rick and Morty Characters</h1>
            <p>Active Character Name </p>
            <CharacterCardSection characters={data.characters}/>
        </div>
    )
};

export default Overview;