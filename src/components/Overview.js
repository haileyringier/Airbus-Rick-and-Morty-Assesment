import React, { useState, useEffect } from 'react';
import CharacterCardSection from './CharacterCardSection';
import { useQuery } from '@apollo/client';
import TitleImage from './TitleImage';
import GET_CHARACTERS from '../query/characterQuery';

const Overview = () => {
    const [ activeCharacter, setActiveCharacter ] = useState('');
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

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;

    const nextPageQuery = () => {
        setPageVariable(data?.characters?.info?.next)
    };

    const prevPageQuery = () => {
        setPageVariable(data?.characters?.info?.prev)
    };

    const showActiveCharacter = (name) => {
        setActiveCharacter(name)
    }
    

    return(
        <div className="overview-section">
            <TitleImage />
            {activeCharacter ? <h3>In the spotlight: {activeCharacter} </h3> : <h3>Click on a character to put them in the spotlight!</h3> }
            <CharacterCardSection characters={data.characters} activeCharacter={showActiveCharacter}/>
            <button className="overview-buttons" disabled={showPrev} onClick={prevPageQuery}>❮ Previous</button>
            <button className="overview-buttons" onClick={nextPageQuery}>Next ❯</button>
        </div>
    )
};

export default Overview;