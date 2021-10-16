var setPositionMore = document.getElementsByClassName('setPositionMore');
var setPositionBox = document.getElementsByClassName('setPositionBox');
var setPosition = document.getElementsByClassName('setPosition');
var setPositionMoreTEXT = document.getElementsByClassName('setPositionMoreTEXT');
console.log(setPosition[0].innerText);


for(var s=0;s<setPosition.length;s++){
    setPositionBox[s].innerHTML = setPosition[s].innerHTML;
    if(setPosition[s].innerText.length>10){
        setPosition[s].style.display= "none";
        setPositionMore[s].style.display = "block";
        setPositionMoreTEXT[s].innerHTML = setPosition[s].innerText;
        
        
    }
    if(document.body.clientWidth<501){
        setPosition[s].style.display= "none";
        setPositionMore[s].style.display = "block";
        setPositionMoreTEXT[s].innerHTML = setPosition[s].innerText;
    }
}

for(var i=0;i<setPositionMore.length;i++){
    setPositionMore[i].addEventListener("mouseover",opensetBox)

}
for(var i=0;i<setPositionMore.length;i++){
    setPositionMore[i].addEventListener("mouseout",closesetBox)
    
}
function opensetBox(){
    
    var x = Number(this.className.substr(31));
    setPositionBox[x].style.display="flex";
    
}
function closesetBox(){
    var x = Number(this.className.substr(31));
    setPositionBox[x].style.display="none";
}

