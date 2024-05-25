// div 1

var in1= document.querySelector("#myDIV");
// in1.addEventListener("wheel",()=>{
//      in1.style.fontSize="50px";
// });

// another way using object

// in1.onwheel= function(){myfun()};

// function myfun(){
//     in1.style.fontSize="40px";
// }

in1.addEventListener('wheel', (event) => {
    const red = Math.floor(Math.random() * 650);
    const green = Math.floor(Math.random() * 650);
    const blue = Math.floor(Math.random() * 650
);
    in1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    event.preventDefault(); // Prevent default scroll behavior for demonstration purposes
});




document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
