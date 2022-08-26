/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import menu from '../svg/menu.png';
import onePieceLogo from '../svg/One-Piece-Logo 1.png';
import spnFlag from '../svg/spn.svg';
import usdFlag from '../svg/usd.svg';

function Navbar() {
    function showMenu() {
        const menu = document.querySelector('.navbar-menu');
        const cancelIcon = document.getElementById('close-icon')
        const menuIcon = document.getElementById('menu-icon');
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            cancelIcon.style.display = "none";
            menuIcon.style.display = "inline";
        } else {
            menu.style.display = "flex";
            cancelIcon.style.display = "inline";
            menuIcon.style.display = "none";
        }
    }

    return (
        <div className="navbar">
            <section className="bar">
                <button className="navbar-item" id="menu-btn" onClick={showMenu}>
                    <img id="menu-icon" src={menu} alt="Navbar menu icon" />
                    <span className="material-icons" id="close-icon">close</span>
                </button>
                <img className="navbar-logo" src={onePieceLogo} alt="Navbar One-Piece logo" />
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
                        <img src={usdFlag} alt="United States flag icon" />
                    </button>
                    <button className="lang-option">
                        <small className="navbar-option" id="lang-text">Spanish</small>
                        <img src={spnFlag} alt="Spain flag icon" />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Navbar;