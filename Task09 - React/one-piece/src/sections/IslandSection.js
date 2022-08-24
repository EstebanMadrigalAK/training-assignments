/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function IslandSection(){
    return(
        <div className="islands-section">
            <div className="section-header">
                <b className="section-title">Islands</b>
                <a className="see-all-btn" href="/islands">See all</a>
            </div>
            <div className="islands-container">
                <div id="flex-scroll">
                </div>
            </div>
        </div>
    );
}

export default IslandSection;