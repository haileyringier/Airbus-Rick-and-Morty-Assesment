import React, { useState } from 'react';
import CharacterCardSection from './CharacterCardSection';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
        characters(page: $page) {
        info {
            count
            pages
            next
            prev
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
    const [ activeCharacter, setActiveCharacter ] = useState('');
    // inital page for query to render
    const [ pageVariable, setPageVariable ] = useState(1);

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page: pageVariable
        }
    })
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    const nextPageQuery = () => {
        setPageVariable(data?.characters?.info?.next)
    }

    const prevPageQuery = () => {
        setPageVariable(data?.characters?.info?.prev)
    }

    return(
        <div>
            <h1>Rick and Morty Characters</h1>
            <p>In the spotlight:  </p>
            <CharacterCardSection characters={data.characters}/>
            <button onClick={prevPageQuery}>Previous</button>
            <button onClick={nextPageQuery}>Next</button>
        </div>
    )
};

export default Overview;