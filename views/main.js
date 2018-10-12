var html = require('choo/html')

var TITLE = 'test-choo - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  console.log(state); 

  
  return html`

    <body>
    <li><a href="./form">form</a></li>
      <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>4.</h2>

          <p>
            So far we've provided you with one base view, <a
            href="/oh-no">one fallback view</a>, and one store. This serves
            as an example. A place to start from. It's your project now, so
            go ahead and delete them once you know how they work.
          </p>

          <p>Number of clicks stored: ${state.totalClicks}</p>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Emit a click event
          </button>

      <p> Antwoorden: ${state.answers}</p>    
      

      </main>
      

    </body>`



  function handleClick () {
    emit('clicks:add', 1)
  }
  
  
}
