

let page = document.getElementById("bodyodyody");
let text = document.getElementById("clr");
let button = document.querySelector(".btn");


function randNum() {
    return Math.round(Math.random() * 255);
};


function getColour() {
    let rgb = "rgb(" + randNum() + "," + randNum() + "," + randNum() + ")";
    return rgb;
};


button.addEventListener("click", function() {
    let newClr = getColour();
        page.style.backgroundColor = newClr;   
        text.innerHTML = `${newClr}`;
});



//colourChange();

//"click", colourChange());
//button.addEventListener("click", )