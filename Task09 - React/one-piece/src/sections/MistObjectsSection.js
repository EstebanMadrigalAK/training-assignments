/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import ObjectContainerHeader from "../components/ObjectsContainerHeader";
import MistObjectCard from "../components/MistObjectCard";

import Object from "../svg/object.svg";
import Placeholder from "../svg/placeholder.svg";

function MistObjectsSection(props) {

    function getImage(img) {
        const characters = {
            "object.svg": Object,
        };
        return characters[img] || Placeholder;
    }

    return (
        <div className="mist-object-section">
            <ObjectContainerHeader title="Mist Objects" refLink="/mist-objects"></ObjectContainerHeader>
            <div className="mist-object-container">
                {props.data.slice(0, 4).map((data, idx) => (
                    <MistObjectCard key={idx} img={getImage(data.img)} name={data.name} description={data.description}></MistObjectCard>
                ))}
            </div>
        </div>
    );
}

export default MistObjectsSection;