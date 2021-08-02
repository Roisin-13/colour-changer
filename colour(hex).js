
let page = document.getElementById("bodyodyody");
let text = document.getElementById("clr");
let button = document.querySelector(".btn");
let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"a", "b", "c", "d", "e", "f"];



function randNum() {
    return hexArray[Math.floor(Math.random() * hexArray.length)];
};


function getColour() {
    let hex = "#" + randNum() + randNum() + randNum() + randNum() + randNum() + randNum();
    return hex;
};


button.addEventListener("click", function() {
    let newClr = getColour();
        page.style.backgroundColor = newClr;   
        text.innerHTML = `${newClr}`;
});
