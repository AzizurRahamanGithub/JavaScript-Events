function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
  event.target.style.border = "4px dotted red";
  document.getElementById("demo").innerHTML = "The text is over the box!";
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  event.target.style.border = "2px dashed #ccc"; // Reset the border style
  document.getElementById("demo").innerHTML = "The work is done!";
}
