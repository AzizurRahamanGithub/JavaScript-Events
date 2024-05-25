// div 1

var btn= document.getElementById("in1");

btn.addEventListener("focusin",()=>{
    document.getElementById("btn1").style.color="aqua";
    document.getElementById("btn1").style.fontSize="40px"
});

btn.addEventListener("focusout",()=>{
    document.querySelector("body").style.backgroundColor="yellow";
    document.getElementById("demo").innerHTML="Focus Out."
})


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
