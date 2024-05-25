

// div 1
var d1Div= document.getElementById('div1_div');
var d1Btn= document.getElementById("div1_btn");

d1Btn.addEventListener('mouseover',()=>{
    d1Div.style.backgroundColor="aqua";
})

// div 2
var d2text= document.getElementById('div2_text');
var d2Btn=document.getElementById("div2_btn");

d2Btn.addEventListener('mouseover',()=>{
    d2text.innerHTML="Mouseover Event triggered";
    d2text.style.fontSize='30px';
})

// div 3
// var d2= document.querySelector(".div3");
// var btns= d2.querySelectorAll("button");

// btns.forEach(function(btn){
//     btn.addEventListener('mouseover',function(event){
//         event.target.style.padding='20px';
//     })
// })






document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';

// var divs= document.getElementsByTagName("div");
// for(var i=0; i<divs.length; i++){
//     divs[i].style.width='100%';
// }

