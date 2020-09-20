let addNum1 = document.getElementById("addFirstNumber");
let addNum2 = document.getElementById("addSecondNumber");
let add = document.getElementById("add");

add.addEventListener("mousedown", add = () => {
    let addFirstNumber = addNum1.value;
    let addSecondNumber = addNum2.value;
    let addResults = document.getElementById("totaladd").textContent =
    ` The  sum is ${Number(addFirstNumber) + Number(addSecondNumber)}`;
console.log(addResults)});



let subNum1 = document.getElementById("subFirstNumber");
let subNum2 = document.getElementById("subSecondNumber");
let sub = document.getElementById("sub");

sub.addEventListener("mousedown", sub = () => {
    let subFirstNumber = subNum1.value;
    let subSecondNumber = subNum2.value;
    let subResults = document.getElementById("totalsub").textContent =
    ` The remainder is ${Number(subFirstNumber) - Number(subSecondNumber)}`;
console.log(subResults)});



let multNum1 = document.getElementById("multFirstNumber");
let multNum2 = document.getElementById("multSecondNumber");
let mult = document.getElementById("mult");

mult.addEventListener("mousedown", mult = () => {
    let multFirstNumber = multNum1.value;
    let multSecondNumber = multNum2.value;
    let multResults = document.getElementById("totalmult").textContent =
    ` The grand total is ${Number(multFirstNumber) * Number(multSecondNumber)}`;
console.log(multResults)});


