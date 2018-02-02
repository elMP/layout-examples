let menuButton = document.getElementById('menu');
menuButton.onclick = function() {
    let sideBar = document.getElementsByClassName('side-bar')[0];
    if(sideBar.style.display)
        sideBar.style.display = "";
    else
        sideBar.style.display = "block";
}