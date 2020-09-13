 let h1 = document.createElement("h1")
h1.textContent = "Hello World"
document.body.append(h1)


 function repeatTenTimes (){
    for (let i = 0; i < 10; i++){
        let h1 = document.createElement("h1")
        h1.textContent = "Hello World"
        h1.style.color = "red"
        document.body.append(h1)
        console.log("Hello World")
    }
}

repeatTenTimes()

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

function listNames (){
    for (i = 0; i < names.length; i++){
        let listItems =  document.createElement("p")
        listItems.textContent = names[i]
        document.body.append(listItems)
    }

}

listNames()

