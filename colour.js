

function colourChange() {
	let randNum = Math.floor(Math.random() * 21);
	let newPage = "";
	let newClr = "";
	if (randNum === 0) {
		newPage = "red";
		newClr = "Red";
	} else if (randNum === 1) {
		newPage = "blue";
		newClr = "Blue";	
	} else if (randNum === 2) {
		newPage = "pink";
		newClr = "Pink";		
	} else if (randNum === 3) {
		newPage = "yellow";
		newClr = "Yellow";	
	}  else if (randNum === 4) {
		newPage = "aqua";
		newClr = "Aqua";	
	}   else if (randNum === 5) {
		newPage = "coral";
		newClr = "Coral";	
	}   else if (randNum === 6) {
		newPage = "crimson";
		newClr = "Crimson";	
	}   else if (randNum === 7) {
		newPage = "indigo";
		newClr = "Indigo";	
	}   else if (randNum === 8) {
		newPage = "navy";
		newClr = "Navy";	
	}   else if (randNum === 9) {
		newPage = "orchid";
		newClr = "Orchid";	
	}   else if (randNum === 10) {
		newPage = "plum";
		newClr = "Plum";	
	} 	else if (randNum === 11) {
		newPage = "CornflowerBlue";
		newClr = "Cornflower Blue";	
	} else if (randNum === 12) {
		newPage = "Thistle";
		newClr = "Thistle";		
	} else if (randNum === 13) {
		newPage = "violet";
		newClr = "Violet";	
	}  else if (randNum === 14) {
		newPage = "Tomato";
		newClr = "Tomato";	
	}   else if (randNum === 15) {
		newPage = "Wheat";
		newClr = "Wheat";	
	}   else if (randNum === 16) {
		newPage = "SlateBlue";
		newClr = "Slate Blue";	
	}   else if (randNum === 17) {
		newPage = "SeaGreen";
		newClr = "Sea Green";	
	}   else if (randNum === 18) {
		newPage = "Salmon";
		newClr = "Salmon";	
	}   else if (randNum === 19) {
		newPage = "RebeccaPurple";
		newClr = "Rebecca Purple";	
	}   else if (randNum === 20) {
		newPage = "PapayaWhip";
		newClr = "Papaya Whip";	
	} 

	let page = document.getElementById("bodyodyody");
	page.style.backgroundColor = newPage;

	let text = document.getElementById("clr");
	text.innerHTML = newClr
};


