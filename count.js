let countEl = document.getElementById("count-el")
let count=0

function increment()
{
    count = count + 1
    countEl.innerText = count
} 
function save()
{
    console.log(count)
}
let welcomeEl = document.getElementById("welcome-el")
let name = "Ruchita"
let greeting = "welcome onborad"
welcomeEl.innerText = greeting +" "+ name

let saveEl = document.getElementById("save-el")
function save()
{
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


