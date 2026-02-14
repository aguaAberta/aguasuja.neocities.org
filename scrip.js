// EU ODEIO JAVASCRIIIIIIIIIIIIIIIPT
document.getElementById("wpp").onclick = function() {
	console.log("fuck you m8!")
}

let wppV=document.querySelector("#wppV");
let wppS=document.querySelector("#wppS");
let wpp6=document.querySelector("#wpp6");
let wppF=document.querySelector("#wppF");

wppV.addEventListener('click',() =>{
	document.body.style.backgroundImage="url('./vista.png')";
});

wppS.addEventListener('click',() =>{
	document.body.style.backgroundImage="url('./sotc.jpg')";
});

wpp6.addEventListener('click',() =>{
	document.body.style.backgroundImage="url('./old7.png')";
});

wppF.addEventListener('click',() =>{
	document.body.style.backgroundImage="url('./sfoth.png')";
});

const element = document.getElementById("menu");

const elment = document.getElementById("coisas");

const elmen = document.getElementById("pfp");

const elme = document.getElementById("b1");

const elmo = document.getElementById("img1");
let orb=document.querySelector("#orb");
document.getElementById("orb").onclick = function() {
	console.log("start bleh lalala");
	element.classList.toggle("menu");
	elment.classList.toggle("coisas");
	elmen.classList.toggle("pfp");
	elme.classList.toggle("b1");
	elmo.classList.toggle("img1");
}
