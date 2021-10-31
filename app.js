let btn = document.querySelector('.btn')
let input = document.querySelector('.val')
let output = document.querySelector('.output')
    input.value= "hello"
    const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=;';


    btn.addEventListener('click', () => {
        let term =  input.value || 'JavaScript';
        let searchUrl = url + term
        console.log(searchUrl)
         fetch(searchUrl)
          .then(res => res.json())
          .then(data => {
              maker(data.query.search)
          })
    })

    const maker = (content) => {
         content.forEach(lineItem =>{
             const div = document.createElement('div')
                     div.innerHTML += `<h3><a href="https://en.wikipedia.org/wiki?curid=${lineItem.pageid}" target="_blank">${lineItem.title}</a></h3>`
                div.innerHTML += `<h3>title ${lineItem.title}</h3>`
                output.append(div)
         })
    }        