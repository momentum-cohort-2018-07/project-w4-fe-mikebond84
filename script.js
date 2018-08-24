import 'shoelace-css/dist/shoelace.css'
import './text.css'

import request from 'superagent'

request.get('https://itunes.apple.com/search?term=""&entity=musicTrack')
  .then(response => {
    let results = response.body
    console.log (response)
  })

function displayResults (results) {
  let output = []
  var array = output
}
//   array.forEach(function() {
//   document.getElementById("search").innerHTML = array
//   console.log(results)
// })
