var input= document.getElementsByTagName("input")[0];
var text= document.getElementsByTagName("p")[0];

input.addEventListener("keydown", keydown);
 function keydown(event){
    if(event.key=="Backspace"){
        text.textContent=text.textContent.slice(0,-1);
    }
    else
    text.textContent+=`${event.key}`;
 }