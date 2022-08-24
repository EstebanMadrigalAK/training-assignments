/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function Sipnosis(){
    return (
        <div className="sipnosis-container">
            <b className="sipnosis-title">Sipnosis</b>
            <small className="sipnosis-description">
                Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.<br /><br />
                It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as
                well as
                the home island of his father, Monkey D. Dragon.
                <span id="extra-sipnosis-description">
                    <br /><br />
                    This is also the adopted home of Portgas D. Ace after the death of his mother and the home
                    of Sabo
                    and his family.<br /><br />
                    Reverse Mountain is an extremely tall mountain at one of the points where the four Blues
                    meet and is
                    one of the two known entrances to the Grand Line.<br /><br />
                    It is located in the Red Line and is the geographical antipode of Mary Geoise.
                </span>
            </small>
            <div className="line"></div>
            <div className="expand-section" id="read-all-btn">
                <span className="material-icons" id="read-more-icon">expand_more</span>
                <small className="read-all-label">Read All</small>
            </div>
        </div>
    );
}

export default Sipnosis;