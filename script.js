var css = document.querySelector(".colorCSS");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var title = document.getElementById("title");

function changeColorBackground(){
	body.style.background = "linear-gradient(to bottom right, " 
	+ color1.value
	+", "
	+color2.value 
	+") no-repeat";
}

function changeColorTitle(){
	title.style.background = "linear-gradient(" 
	+ color1.value
	+", "
	+color2.value 
	+")";
	title.style.webkitBackgroundClip = "text";
	title.style.webkitTextFillColor ="transparent";
	title.style.webkitTextStroke="1px black";

	css.textContent = body.style.background + ";";
}

function randomizeColors(){
	
	color1.value ="#"+Math.floor(Math.random()*16777215).toString(16);
	color2.value ="#"+ Math.floor(Math.random()*16777215).toString(16);
	console.log(color1+", "+ color2);
	changeColorBackground();
	changeColorTitle();
}

color1.addEventListener("input", changeColorBackground);
color1.addEventListener("input", changeColorTitle);
color2.addEventListener("input", changeColorBackground);
color2.addEventListener("input", changeColorTitle);