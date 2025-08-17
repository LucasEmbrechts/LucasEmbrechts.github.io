const myCalendar = []; 
let cases;

/* -------- Init values of tab -------- */
for (let i = 0; i<31; i++){
	myCalendar[i] = "";
}

window.onload = () => {
	cases = document.getElementById("cases");
	generateTab();
}

function generateTab(){
	cases.innerHTML = "";
	for (let i in myCalendar){
		let div = document.createElement("div");
		div.classList.add("case");

		if (myCalendar[i] != ""){
			div.classList.add("yellow");
		}
		div.innerHTML = 
					(parseInt(i)+1) + "<br/>"
					+ myCalendar[i]
					+ "</div>";
		cases.appendChild(div)
	}
}


function recordEvent(eventToRecord, caseTab){
	myCalendar[caseTab-1] = eventToRecord; 
	generateTab();
}



