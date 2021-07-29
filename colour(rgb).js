
function randNum() {
    return Math.round(Math.random() * 255);
};

console.log(randNum());
function getColour() {
    return `(${randNum},${randNum},${randNum})`
};
console.log(getColour());