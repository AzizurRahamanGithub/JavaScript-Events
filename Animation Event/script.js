const div= document.getElementById("ani");

div.addEventListener("mouseenter",()=>{
    div.style.animation="mymove 5s 2";
})

div.addEventListener("animationstart",aniStart);
div.addEventListener("animationiteration",aniRipit);
div.addEventListener("animationend", aniEnd);


function aniStart(event){
    event.target.innerHTML="Started Animation";
    this.style.backgroundColor="yellow";
}

function aniRipit(event){
    event.target.innerHTML="Animation Riited";
    this.style.backgroundColor="Green";
    this.style.color="white";
}


function aniEnd(event){
    event.target.innerHTML="End the Animation";
    this.style.backgroundColor="aqua";
}

