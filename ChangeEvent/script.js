// div 1

document.getElementById('mySelect').addEventListener('change', function() {
    console.log('Selected value: ' + this.value);
});

// div 2

var input= document.getElementById("inputF");
var para=document.getAnimations("newI");

input.addEventListener("change", ()=>{
    console.log(input.value);
})


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
