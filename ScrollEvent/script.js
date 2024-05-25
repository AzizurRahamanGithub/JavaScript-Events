
// div 1
document.getElementsByTagName("body")[0].style.height="2000px";

function Scrolling(){
  const scrolly=window.scrollY;
  console.log(`The current scrolling size: ${scrolly}`);

  document.querySelector("p").innerHTML=`The current scrolling size: ${scrolly}`;
}

window.addEventListener("scroll",Scrolling);

// div 2

function Scrolling2(){
   const scrolly2 = window.scrollY;
            const abdscrolly2 = Math.round(scrolly2);
            document.getElementById("d2p").innerHTML = `${abdscrolly2}`;
}

window.addEventListener("scroll",Scrolling2);
Scrolling2();



document.getElementsByTagName("body")[0].style.display='flex';
document.getElementsByTagName("body")[0].style.gap='50px';
document.getElementsByTagName("body")[0].style.flexDirection='column';
