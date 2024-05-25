// div 1
function DblClick(){
    window.alert("Hi");
}
document.getElementById("click1").addEventListener("dblclick",()=>{
    document.getElementsByTagName("body")[0].style.backgroundColor="aqua";
})

document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
