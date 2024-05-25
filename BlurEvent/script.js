
// div 1
var input= document.querySelector("input");
var text= input.value;

function ColorAdd(){
  input.style.backgroundColor="yellow";
}
function ColorRemove(){
 
  input.style.backgroundColor="";
  input.value=text.toUpperCase();
}

input.addEventListener("focus",ColorAdd);
input.addEventListener("blur",ColorRemove);


// Another way


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
