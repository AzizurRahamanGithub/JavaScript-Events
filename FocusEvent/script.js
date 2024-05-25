
// div 1
// var input= document.querySelector("input");
// function ColorChange(){
//   input.style.backgroundColor="green";
// }

// input.addEventListener("focus",ColorChange);

// Another way

function ColorChange(event){
  event.style.backgroundColor="yellow";
}



document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
