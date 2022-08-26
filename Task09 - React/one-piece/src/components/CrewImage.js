/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import crew from '../svg/crew.svg';

function CrewImage() {
    return (
        <div className="crew-image-container">
            <div className="crew-filter"></div>
            <img className="crew-image" src={crew} alt="Top One-Piece crew" />
        </div>
    );
}

export default CrewImage;