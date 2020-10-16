let h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "Marios Integrated Pest Managment"

let headLine = document.createElement("headLine")
document.body.append(headLine)
headLine.textContent =  "the only pest management service where you literally pay for the results" 

let prices = document.createElement("ul")
document.body.append(prices)

let goombas = document.createElement("li")
goombas.textContent = "Goombas cost 5 coins to manage"

let lilGoombas = document.createElement("li")
lilGoombas.textContent = "lil-Goombas cost 1 coin to manage"

let cheepCheeps = document.createElement("li")
cheepCheeps.textContent = "cheepCheeps cost 7 coins to manage"

let bobOmbs = document.createElement("li")
bobOmbs.textContent = " bobOmbs cost 11 coins to manage"

prices.append(goombas, lilGoombas, cheepCheeps, bobOmbs)

let calculator = document.getElementById("calculator")
document.body.append(calculator)
