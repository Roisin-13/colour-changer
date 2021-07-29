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
console.log(getColour());


function colourChange() {
    button.addEventListener("click", function(){
        page.style.backgroundColor = rgb;
        text.innerHTML = `${rgb}`;
    });
};