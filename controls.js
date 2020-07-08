const commands = [20, 90, 80];
let check = true;
let currentCom = null;

//eventListener for the rotation
window.addEventListener("deviceorientation", function(event) {

    const alpha = Math.round(event.alpha);  //"compass direction"
    const beta = Math.round(event.beta);   //up or down
    const gamma = Math.round(event.gamma);

    current(alpha);

    callCommand(alpha);

}, true);


function callCommand(alpha) {

    if(commands.length > 0 && check) {
        check = false;
        currentCom = commands.pop();
        document.querySelector('#command').innerHTML ="Dreh dich zu " + currentCom + "Grad";
    } else {
        finale();
        return;
    }

    if(currentCom === alpha) {
        check = true;
    }

}

function finale(){
    show_image("gotyou.jpg");
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

/**
 * change the volume depending on the rotation of the alpha z axis
 * @param alpha
 */
function current(alpha) {
    document.querySelector('#current').innerHTML ="Derzeitge Rotation: " + alpha + "Grad";

}

//themeChanger Code
function toggleTheme() {
    const oL = document.getElementById("css");
    const href = oL.getAttribute("href");
    const nL = document.createElement("link");

    nL.setAttribute("id", "css");
    nL.setAttribute("rel", "stylesheet");
    nL.setAttribute("type", "text/css");

    if (href == "css/music.css") {
        nL.setAttribute("href", "css/musicLight.css");
        document.getElementById("btn").innerHTML = "Dunkel";
    } else {
        nL.setAttribute("href", "css/music.css");
        document.getElementById("btn").innerHTML = "Hell";
    }

    const parent = oL.parentNode;
    parent.replaceChild(nL, oL);
}

var toggletheme = document.getElementById('btn');
toggletheme.addEventListener('click',
    function () {
        toggleTheme();
    },
    true);




/*
//not quit sure, whether i need this code or not. But maybe useful for other stuff
//eventListener for device Motion
window.ondevicemotion = function(event) {
    const ax = Math.round((event.accelerationIncludingGravity.x));
    const ay = Math.round((event.accelerationIncludingGravity.y));
    const az = Math.round((event.accelerationIncludingGravity.z));
    document.querySelector("#acc").innerHTML = "X = " + ax + "<br>" + "Y = " + ay + "<br>" + "Z = " + az;
};
*/