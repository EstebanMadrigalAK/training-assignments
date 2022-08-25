/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import ObjectContainerHeader from "../components/ObjectsContainerHeader";
import CharacterCard from "../components/CharacterCard";

import Ace from "../svg/ace.svg";
import Luffy from "../svg/monkeydluffy.svg";
import Nico from "../svg/nico.svg";
import Zoro from "../svg/zoro.svg";
import Placeholder from "../svg/placeholder.svg";

function CharacterSection(props){
    function getImage(img) {
        const characters = {
            "monkeydluffy.svg": Luffy,
            "zoro.svg": Zoro,
            "nico.svg": Nico,
            "ace.svg": Ace,
        };
        return characters[img] || Placeholder;
    }

    return(
        <div className="characters-section">
            <ObjectContainerHeader title="Characters" refLink="/characters"></ObjectContainerHeader>
            <div className="characters-container">
                <div id="flex-scroll">
                    {props.data.slice(0, 4).map((data, idx) => (
                        <CharacterCard key={idx} img = {getImage(data.img)} name={data.name}></CharacterCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CharacterSection;