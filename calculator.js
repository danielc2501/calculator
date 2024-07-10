const output = document.getElementById("screen");

const b0 = document.getElementById("button-0");
const b1 = document.getElementById("button-1");
const b2 = document.getElementById("button-2");
const b3 = document.getElementById("button-3");
const b4 = document.getElementById("button-4");
const b5 = document.getElementById("button-5");
const b6 = document.getElementById("button-6");
const b7 = document.getElementById("button-7");
const b8 = document.getElementById("button-8");
const b9 = document.getElementById("button-9");

const bplus = document.getElementById("button-plus");
const bminus = document.getElementById("button-minus");

const beq = document.getElementById("button-eq");


beq.addEventListener("click", function(e) {
	const currentScreen = output.innerHTML;
	// If currentScreen has a plus, take numbers either side of the plus, add them, and output to screen. Same for if there's a minus.
	const parts = currentScreen.split(/([\+\-])/g)

	let operator = "";

	let total = Number(parts[0]);

	for(let i=1; i<parts.length; i++){

		if( isNaN(parts[i])){

			operator = parts[i];	

		}else{
			if(operator=="+"){
				total = total + Number(parts[i]);	
			}
		else{

			if(operator=="-"){
				total = total - Number(parts[i]);	
			}

	}}}
	output.innerHTML=total;
});



bplus.addEventListener("click", function(e) {
	output.innerHTML+="+";	
});

bminus.addEventListener("click", function(e) {
	output.innerHTML+="-";	
});

b0.addEventListener("click", function(e) {
	output.innerHTML+="0";	
});

b1.addEventListener("click", function(e) {
	output.innerHTML+="1";	
});

b2.addEventListener("click", function(e) {
	output.innerHTML+="2";	
});

b3.addEventListener("click", function(e) {
	output.innerHTML+="3";	
});

b4.addEventListener("click", function(e) {
	output.innerHTML+="4";	
});

b5.addEventListener("click", function(e) {
	output.innerHTML+="5";	
});

b6.addEventListener("click", function(e) {
	output.innerHTML+="6";	
});

b7.addEventListener("click", function(e) {
	output.innerHTML+="7";	
});

b8.addEventListener("click", function(e) {
	output.innerHTML+="8";	
});

b9.addEventListener("click", function(e) {
	output.innerHTML+="9";	
});
