import React, { useState} from 'react';
import CharacterCardSection from './CharacterCardSection';
import TitleImage from './TitleImage';
import ActiveCharacter from './ActiveCharacter';

const Overview = () => {
    const [ activeCharacter, setActiveCharacter ] = useState();
    const [ splitScreen, setSplitScreen ] = useState(false);

    const showActiveCharacter = (character) => {
        setActiveCharacter(character)
        setSplitScreen(true)
    };
    
    return(
        <div className="overview-section">
            <TitleImage />
            {splitScreen ? <h3>In the spotlight: {activeCharacter.name}</h3> : <h3>Click on a character to put them in the spotlight!</h3>}
            <div className={(splitScreen ? "test-section" : "original-view")}>
                {activeCharacter ? <ActiveCharacter character={activeCharacter} splitScreen={splitScreen}/> : null}
                <CharacterCardSection showActiveCharacter={showActiveCharacter} splitScreen={splitScreen}/>
            </div>
        </div>
    )
};

export default Overview;