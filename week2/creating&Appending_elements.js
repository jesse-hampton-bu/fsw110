let h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "Welcome to my JS site"

let p = document.createElement("p")
document.body.append(p)
p.textContent = "All of this was created by JavaScript"

let ol = document.createElement("ol")
document.body.append(ol)

let  li = document.createElement("li")
li.textContent = "Item 1"

let  li2 = document.createElement("li")
li2.textContent = "Item 2"

let  li3 = document.createElement("li")
li3.textContent = "Item 3"
ol.append(li, li2, li3)