// div 1

var btn= document.getElementById("btn1");

btn.addEventListener("mouseenter",()=>{
    document.getElementById("divB").style.backgroundColor="aqua";
});
btn.addEventListener("mouseleave",()=>{
    document.getElementById("divB").style.backgroundColor="black";
});

// div 2

var btn1=document.getElementById("btn2");
btn1.addEventListener("mouseenter",mouse);
function mouse(){
    document.querySelector("body").style.backgroundColor="aqua";
}
btn1.addEventListener("mouseleave",()=>{
    document.querySelector("body").style.backgroundColor="#FDA172"
})


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
