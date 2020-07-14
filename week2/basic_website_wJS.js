var h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "I hope I am doing this right"

var p = document.createElement("p")
document.body.append(p)
p.textContent = "if not then i need help"
var ol = document.createElement("ol")
document.body.append(ol)

var  li = document.createElement("li")
li.textContent = "thing .1"
var  li2 = document.createElement("li")
li2.textContent = "thing .2"
var  li3 = document.createElement("li")
li3.textContent = "thing .3"
ol.append(li, li2, li3)

var footer = document.createElement("footer")
document.body.append(footer)
footer.textContent = "I am finally done"