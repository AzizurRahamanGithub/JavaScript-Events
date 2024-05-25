// div 1

var btn= document.getElementById("in1");

btn.addEventListener("focusin",()=>{
    document.getElementById("btn1").style.color="aqua";
    document.getElementById("btn1").style.fontSize="40px"
});


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
