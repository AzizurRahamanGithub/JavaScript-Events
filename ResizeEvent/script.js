// div 1

var win= document.querySelector("p");
window.addEventListener("resize",()=>{
    const width= window.innerWidth;
    const height= window.innerHeight;

    document.getElementById("display").textContent=`Window Size Now Is: ${width} x ${height}`;
});


// div 2

function resize(){
    const w= window.innerWidth;
    const h= window.innerHeight;
    document.querySelector("#display2").innerHTML=`Windows Size: ${w} x ${h}`;

    if(w>1200){
          
          document.querySelector("body").style.backgroundColor="black";
          document.querySelector("body").style.color="white";
    }
    else if(w>900){
        document.querySelector("body").style.backgroundColor="aqua";
        document.querySelector("body").style.color="yellow";

    }
    else {
        document.querySelector("body").style.backgroundColor="red";
        document.querySelector("body").style.color="green";
    }
}

window.addEventListener("resize", resize);

resize();


document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
