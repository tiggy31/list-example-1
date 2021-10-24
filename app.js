const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=javascript"

const btn = document.querySelector('.btn')
const output = document.querySelector('.output')
const inputval = document.querySelector('.val')

let attemptCounter = false
inputval.value = 'hello'
btn.textContent = "Load JSON"

btn.addEventListener('click', () => {
    fetch(url)
     .then(res => res.json())
     .then(data => {
         console.log(data)
     })
})