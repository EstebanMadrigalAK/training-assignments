/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function CharacterSection(){
    return(
        <div class="characters-section">
            <div class="section-header">
                <b class="section-title">Characters</b>
                <a class="see-all-btn" href="/characters">See all</a>
            </div>
            <div class="characters-container">
                <div id="flex-scroll">
                </div>
            </div>
        </div>
    );
}

export default CharacterSection;