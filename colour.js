

function colourChange() {
	let randNum = Math.floor(Math.random() * 11);
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
	} 

	let page = document.getElementById("bodyodyody");
	page.style.backgroundColor = newPage;

	let text = document.getElementById("clr");
	text.innerHTML = newClr
};






/*==========---------------
function colourChange() {
	let randNum = Math.Floor(Math.Random() * 4);
	let clrName = "";
	let page = "";
	if (randNum === 0) {
		page = "red";
		clrName = "Red";
	} else if (randNum === 1) {
		page = "blue";
		clrName = "Blue";		
	} else if (randNum === 2) {
		page = "pink";
		clrName = "Pink";		
	} else if (randNum === 3) {
		page = "yellow";
		clrName = "Yellow";		
	}
};

	let clrName = document.getElementById("clr");
	let page = document.querySelector("body");

	page.style.color = clrName;
	clrName.innerHTML = page;

//document.getElementById("btn").onclick = "colourChange";
//page.onclick = colourChange;

-------------==============*/