
// div 1
var maindiv= document.getElementById("class");
var visi= document.getElementsByClassName("menu")[0];

maindiv.addEventListener("contextmenu",(e)=>{
  e.preventDefault();
  visi.style.visibility= "visible";
})


// Another way


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
