var html = require('choo/html')
var Button = require('../components/button')
var TITLE = 'Begin'
module.exports = view

var button = new Button ()

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
  <body class="sans-serif pa3">
    <h1>Begin met een risico analyse </h1>
    ${button.render(state, emit)}

  </body>
    
  `
}