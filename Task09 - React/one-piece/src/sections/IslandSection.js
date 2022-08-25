/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import ObjectContainerHeader from "../components/ObjectsContainerHeader";
import IslandCard from "../components/IslandCard";

import Dawn from "../svg/dawn.svg";
import Reverse from "../svg/reverse.svg";
import Placeholder from "../svg/placeholder.svg";

function IslandSection(props){
    function getImage(img) {
        const characters = {
            "reverse.svg": Reverse,
            "dawn.svg": Dawn,
        };
        return characters[img] || Placeholder;
    }

    return(
        <div className="islands-section">
            <ObjectContainerHeader title="Islands" refLink="/islands"></ObjectContainerHeader>
            <div className="islands-container">
                <div id="flex-scroll">
                {props.data.slice(0, 3).map((data, idx) => (
                    <IslandCard key={idx} img = {getImage(data.img)} name={data.name} location={data.Location}></IslandCard>
                ))}
                </div>
            </div>
        </div>
    );
}

export default IslandSection;