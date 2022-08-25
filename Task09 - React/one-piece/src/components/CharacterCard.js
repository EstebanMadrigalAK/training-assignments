/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function CharacterCard(props) {
    return (
        <div className="characters-item">
            <div className="filter-item"></div>
            <img id="character-img" className="item-img" src={props.img} alt={`${props.name} character card`} />
            <b className="text-item">{props.name}</b>
        </div>
    );
}

export default CharacterCard;