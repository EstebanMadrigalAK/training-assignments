/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import {getOnePieceData} from './json-reader.mjs';

let onePieceData;

window.onload = async() => {
    onePieceData = await getOnePieceData();
    console.log(onePieceData);
    showCharacters();
    showIslands();
    showMistObjects();
};

function showCharacters(){
    let charContainer = document.querySelector('.characters-container #flex-scroll');
    onePieceData.characters.forEach(element => {
        charContainer.innerHTML += `<div class="characters-item">
                                        <div class="filter-item"></div>
                                        <img id="character-img" class="item-img" src="./svg/${element.img}" alt="${element.name} character card">
                                        <b class="text-item">${element.name}</b>
                                    </div>`
    });
}

function showIslands(){
    let islandContainer = document.querySelector('.islands-container #flex-scroll');
    onePieceData.islands.forEach(element => {
        if(element.img !== "placeolder.svg"){
            islandContainer.innerHTML += `<div class="island-item">
                                            <img id="island-img" class="item-img" src="./svg/${element.img}" alt="${element.name} island card">
                                            <div class="island-caption-container">
                                                <div class="island-text">
                                                    <label class="island-caption-title">${element.name}</label><br>
                                                    <span class="material-icons location-icon">fmd_good</span>
                                                    <small class="island-caption-location">${element.Location}</small>
                                                </div>
                                            </div>
                                        </div>`
        }
    });
}

function showMistObjects(){
    let mistObjectContainer = document.querySelector('.mist-object-container');
    onePieceData.mysticObjects.forEach(element => {
        if(element.img !== "placeolder.svg"){
            mistObjectContainer.innerHTML += `<div class="mist-object-item">
                                                <img class="mist-object-img" src="./svg/${element.img}" alt="${element.name} object-mist card">
                                                <div class="mist-object-text">
                                                    <label class="mist-object-caption-title">${element.name}</label>
                                                    <small class="mist-object-caption-description">${element.description}.</small>
                                                </div>
                                            </div>`
        }
    });
}

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () => showMenu());
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

const readAllBtn = document.querySelector('#read-all-btn');
readAllBtn.addEventListener('click', () => showSipnosis());
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







