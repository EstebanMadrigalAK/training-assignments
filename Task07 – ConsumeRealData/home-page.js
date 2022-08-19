/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import {getOnePieceData} from './json-reader.mjs';

window.onload = async() => {
    const onePieceData = await getOnePieceData();
    console.log(onePieceData);
    let charContainer = document.querySelector('.characters-container #flex-scroll');

    onePieceData.characters.forEach(element => {
        charContainer.innerHTML += `<div class="characters-item">
                                        <div class="filter-item"></div>
                                        <img src="./svg/${element.img}" alt=${element.name}>
                                        <b class="text-item">${element.name}</b>
                                    </div>`
    });
};


function showSipnosis() {
    const moreText = document.getElementById('extra-sipnosis-description');
    const btnText = document.querySelector('.read-all-label');
    const icon = document.querySelector('.material-icons');
    const logo = document.querySelector('.logo-header');

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        btnText.innerHTML = "Read All";
        icon.innerHTML = "expand_more";
        logo.style.display = "none";
    } else {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less";
        icon.innerHTML = "expand_less";
        logo.style.display = "inline";
    }

    let mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
        logo.style.display = "none";
    }
}

function showMenu() {
    const menu = document.querySelector('.navbar-menu');
    const cancelIcon = document.getElementById('close-icon')
    const menuIcon = document.getElementById('menu-icon');
    if (menu.style.display == "flex") {
        menu.style.display = "none";
        cancelIcon.style.display = "none";
        menuIcon.style.display = "inline";
    } else {
        menu.style.display = "flex";
        cancelIcon.style.display = "inline";
        menuIcon.style.display = "none";
    }
}