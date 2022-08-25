/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function IslandCard(props) {
    return (
        <div className="island-item">
            <img id="island-img" className="item-img" src={props.img} alt={`${props.name} island card`} />
            <div className="island-caption-container">
                <div className="island-text">
                    <label className="island-caption-title">{props.name}</label><br />
                    <span className="material-icons location-icon">fmd_good</span>
                    <small className="island-caption-location">{props.location}</small>
                </div>
            </div>
        </div>
    );
}

export default IslandCard;