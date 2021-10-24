const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=javascript"

const btn = document.querySelector('.btn')
const output = document.querySelector('.output')
const inputval = document.querySelector('.val')
const box  = document.querySelector('.box')
let attemptCounter = false
inputval.value = 'hello'
btn.textContent = "Load JSON"

btn.addEventListener('click', () => {
    fetch(url)
     .then(res => res.json())
     .then(data => {
         dataMaker(data.query)
     })
})


const dataMaker = (content) => {
    output.innerHTML = "Result for"
  content.search.forEach(lineContent => {
      const div = document.createElement('div')
            div.classList.add('box')
            div.innerHTML = `${lineContent.title}`
            div.innerHTML = `${lineContent.snippet}`
            output.append(div)
  })
}