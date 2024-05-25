

var btn= document.getElementsByTagName("button")[0];
var text= document.getElementById("change");

// div 1
var isChanged= false;
btn.addEventListener('click', ()=>{
    if(!isChanged){
        text.innerHTML="You see the txt is changed.";
        isChanged=true;
    }
    else {
        text.innerHTML="If you click the button this text will change.";
        isChanged=false;
    }
});

// div 2
var btn1= document.getElementById("btn1");
var text1= document.getElementById("change1");
var textChanged=false;
btn1.addEventListener('click',()=>{
    if(!textChanged){
        text1.style.color='blue';
        textChanged=true;
    }
    else {
        text1.style.color='black';
        textChanged=false;
    }
})

// div 3
var b1= document.getElementById("b1");
var b2= document.getElementById("b2");
var b3= document.getElementById("b3");
var reset=document.getElementById('r');
b1.addEventListener('click',()=>{
    b2.style.backgroundColor='blue';
})
b2.addEventListener('click',()=>{
    b3.style.backgroundColor='green';
})
b3.addEventListener('click',()=>{
    b1.style.backgroundColor='red';
})
reset.addEventListener('click',()=>{
    b1.style.backgroundColor='white';
    b2.style.backgroundColor='white';
    b3.style.backgroundColor='white';
})

document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';

// var divs= document.getElementsByTagName("div");
// for(var i=0; i<divs.length; i++){
//     divs[i].style.width='100%';
// }

