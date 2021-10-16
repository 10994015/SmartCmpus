function toggle(){
	var bar = document.getElementById("bars");
	var menu = document.getElementById("menu");
	if(bar.className=="fas fa-bars"){
		bar.classList.add("fa-times");
		menu.style.display="flex";
	}else{
		bar.classList.remove("fa-times");
		menu.style.display="none";
	}
	
}

function set_toggle(x){
	let set = document.getElementById('set-s-toggle'+x);

	if(set.style.display=="block"){
		set.style.display="none";
	}else{
		set.style.display="block";
	}
}


const airModel = document.getElementsByClassName("airModel");
const airModelBox = document.getElementsByClassName("airModelBox");
const air = document.getElementsByClassName("air-p-s");
const airClose = document.getElementsByClassName("air-close");
let airIdx = 0;
for(var i=0;i<air.length;i++){
	air[i].addEventListener("click",showModel);
}
for(var n=0;air.length;n++){
	airClose[n].addEventListener("click",closeModel);
}
function showModel(){
	airIdx = Number(this.className.substr(15));
	clearShow();
	airModel[0].style.display = "block";
	document.getElementById("airModelBox"+airIdx).style.display = "block";
}
function closeModel(){
	airModel[0].style.display = "none";
}
function clearShow(){
	for(var x=0;x<air.length;x++){
		airModelBox[x].style.display="none";
	}
}

const faTimesCircle = document.getElementsByClassName("fa-times-circle");
for(var y=0;y<faTimesCircle.length;y++){
	faTimesCircle[y].addEventListener("click",alterFn);
}
function alertFn(){
	confirm("確定要刪除嗎?????");
}


