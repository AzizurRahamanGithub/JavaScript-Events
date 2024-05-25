// div 1

var in1= document.querySelector("#input1");
in1.addEventListener("input",()=>{
     var dm1=document.getElementById("demo1");
   
     if(in1.value
        
        =="Azizur Rahaman") dm1.textContent=("The name is: Ok");
     else dm1.textContent=("The name is: Changed");
})

// div 2

var input= document.getElementById("input2");
var txt= document.getElementById("demo2");
input.addEventListener("input",()=>{
    txt.innerHTML="You wrote: "+input.value;
})


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
