import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import Footer from './Footer';
import { useQuery } from '@apollo/client';
import GET_CHARACTERS from '../query/characterQuery';

const CharacterCardSection = ({ showActiveCharacter, splitScreen}) => {

    // inital page for query to render
    const [ pageVariable, setPageVariable ] = useState(1);
    const [ showPrev, setShowPrev ] = useState(true);


    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page: pageVariable
        }
    });

    useEffect(() => {
        if (pageVariable > 1) {
            setShowPrev(false)
        } 
        else {
            setShowPrev(true)
        }
    }, [pageVariable, showPrev]);

    const nextPageQuery = () => {
        setPageVariable(data?.characters?.info?.next)
    };

    const prevPageQuery = () => {
        setPageVariable(data?.characters?.info?.prev)
    };

    if (error) return <p>Error</p>;
    if (loading) return <p>Loading</p>

    return (
        <div>
            <div className={(splitScreen ? "character-card-section" : "original-character-card-section")}>
                {data.characters.results.map(character => {
                    return <CharacterCard key={character.id} character={character} showActiveCharacter={showActiveCharacter} />
                }
                )}
            </div>
            <Footer showPrev={showPrev} prevPageQuery={prevPageQuery} nextPageQuery={nextPageQuery}/>
        </div>
    
)};

export default CharacterCardSection;

