import 'shoelace-css/dist/shoelace.css'
import './text.css'

import request from 'superagent'

request.get('https://itunes.apple.com/search?term=""&entity=musicTrack')
  .then(response => {
    let results = response.body.results
    console.log (response)
  })

function displayResults (results) {
  let output = `
    <form action ="" method ="get" class ="form">
      <div class ="form">
        <label for="search">Search</label>
        <input type="text" id="name"
               placeholder="Search any song"
               size="50">
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    `
}
