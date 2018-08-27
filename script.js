import 'shoelace-css/dist/shoelace.css'
import './text.css'
import request from 'superagent'

getId('search-form').addEventListener('submit', (event) => {
  event.preventDefault()

  let searchResults = getId('search-form')
  searchResults.addEventListener('click', function (event) {
  })
  let searchField = getId('search')
  let searchTerm = window.encodeURIComponent(searchField.value)
  request.get(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song&attribute=artistTerm`)
    .then(response => {
      return JSON.parse(response.text)
    })
    .then(body => {
      let searchResults = body.results
      for (var i = 0; i < body.results.length; i++) {
        let output = getId('output')
        let outputLi = document.createElement('li')
        outputLi.innerText = searchResults[i].trackName
        output.appendChild(outputLi)
      }
    })
})

function getId (id) {
  return document.getElementById(id)
}
