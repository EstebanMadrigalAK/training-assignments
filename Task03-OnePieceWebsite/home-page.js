/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
 function showSipnosis() {
    let moreText = document.getElementById("extra-sipnosis-description");
    let btnText = document.getElementsByClassName("read-all-label")[0];
    let icon = document.getElementsByClassName("material-icons")[0];
    let logo = document.getElementsByClassName("logo-header")[0];
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
}
function showMenu() {
    let menu = document.getElementsByClassName("navbar-menu")[0];
    let cancelIcon = document.getElementById("close-icon")
    let menuIcon = document.getElementById("menu-icon");
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