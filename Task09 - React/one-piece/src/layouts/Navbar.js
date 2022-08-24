/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

 import menu from '../svg/menu.png';
 import onePieceLogo from '../svg/One-Piece-Logo 1.png';


 function Navbar() {
    return (
      <div className="navbar">
        <section className="bar">
            <button className="navbar-item" id="menu-btn">
                <img id="menu-icon" src={menu} alt="Navbar menu icon"/>
                    <span className="material-icons" id="close-icon">close</span>
            </button>
            <img className="navbar-logo" src={onePieceLogo} alt="Navbar One-Piece logo"/>
            <div className="navbar-item"></div>
        </section>
        <section className="navbar-menu">
            <a className="navbar-option" href="/">Home</a>
            <a className="navbar-option" href="/characters">Characters</a>
            <a className="navbar-option" href="/islands">Islands</a>
            <a className="navbar-option" href="/mist-objects">Mist Objects</a>
            <div className="lang-option-container">
                <button className="lang-option">
                    <small className="navbar-option" id="lang-text">English</small>
                    <img src="./svg/usd.svg" alt="United States flag icon"/>
                </button>
                <button className="lang-option">
                    <small className="navbar-option" id="lang-text">Spanish</small>
                    <img src="./svg/spn.svg" alt="Spain flag icon"/>
                </button>
            </div>
        </section>
      </div>
    );
}
  
  export default Navbar;