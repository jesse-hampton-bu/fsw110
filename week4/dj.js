let div = document.createElement("div");
document.body.append(div);
div.id = "mouse";
div.style.cssText = " border: 1px solid black; height: 50px; width: 50px "

let mouseActions = document.getElementById("mouse");

mouseActions.addEventListener("mouseover", () => mouseActions.style.backgroundColor = "blue");

mouseActions.addEventListener("mousedown", () => mouseActions.style.backgroundColor = "red");

mouseActions.addEventListener("dblclick", () => mouseActions.style.backgroundColor = "green");

addEventListener("wheel", () => mouseActions.style.backgroundColor = "orange");

mouseActions.addEventListener("mouseup", () => mouseActions.style.backgroundColor = "yellow");

document.addEventListener("keydown", (event) => 
(event.which === 82) ? mouseActions.style.backgroundColor = "red" :
(event.which === 89) ? mouseActions.style.backgroundColor = "yellow" :
(event.which === 79) ? mouseActions.style.backgroundColor = "orange" :
(event.which === 66) ? mouseActions.style.backgroundColor = "blue" : 
(event.which === 71) ? mouseActions.style.backgroundColor = "green":
 mouseActions.style.backgroundColor = "white")