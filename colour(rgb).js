

let page = document.getElementById("bodyodyody");
let text = document.getElementById("clr");
let button = document.querySelector(".btn");


function randNum() {
    return Math.round(Math.random() * 255);
};
randNum();

function getColour() {
    let rgb = "rgb (" + randNum() + "," + randNum() + "," + randNum() + ")";
    return rgb;
};
getColour();

function colourChange() {
    let newClr = getColour();
        page.style.backgroundColor = newClr;   
        text.innerHTML = `${newClr}`;
};
colourChange();

button.addEventListener("click", colourChange());
//button.addEventListener("click", )