newElement = () => {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  (inputValue === "") ? alert("you must make an input") : (inputValue != "") ? document.getElementById("myUL").appendChild(li) : document.getElementById("myUL").appendChil(li)

    document.getElementById("myInput").value = "";
}