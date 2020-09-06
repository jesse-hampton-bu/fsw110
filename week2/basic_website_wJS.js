// let nav = document.createElement("ol")
// document.body.append(ol)

// let  li4 = document.createElement("li")
// li.textContent = "link 1"

// let  li5 = document.createElement("li")
// li2.textContent = "link 2"
// ol.append(li4, li5)



let h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "I hope I am doing this right"

let p = document.createElement("p")
document.body.append(p)
p.textContent = "if not then i need help"

let ol = document.createElement("ol")
document.body.append(ol)

let  li = document.createElement("li")
li.textContent = "thing .1"

let  li2 = document.createElement("li")
li2.textContent = "thing .2"

let  li3 = document.createElement("li")
li3.textContent = "thing .3"
ol.append(li, li2, li3)

let footer = document.createElement("footer")
document.body.append(footer)
footer.textContent = "I am finally done"