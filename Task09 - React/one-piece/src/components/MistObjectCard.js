/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function MistObjectCard(props){
    return(
        <div className="mist-object-item">
            <img className="mist-object-img" src={props.img} alt={`${props.name} object-mist card`}/>
            <div className="mist-object-text">
                <label className="mist-object-caption-title">{props.name}</label>
                <small className="mist-object-caption-description">{props.description}.</small>
            </div>
        </div>
    );
}

export default MistObjectCard;