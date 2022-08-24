/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function Searchbar(){
    return(
        <div className="searchbar-container">
            <span className="material-icons" id="search-icon">search</span>
            <input className="searchbar" placeholder="Search Characters, Islands or Objects"/>
        </div>
    );
}

export default Searchbar;