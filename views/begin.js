var html = require('choo/html')
var Button = require('../components/button')
var TITLE = 'Begin'
module.exports = view

var button = new Button ()

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
  <body>
    <h1>Begin met een risico analyse </h1>
    <section class="case1">

    </section>
    <section class="case2">


    </section>

    <section class="begin_button">
       ${button.render(state, emit, "Begin nieuwe risico analyse","form")}
    </section>
  </body>
    
  `
}