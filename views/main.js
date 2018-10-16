var html = require('choo/html')
var Form1 = require('../components/Form1')
var TITLE = 'test-choo - main'

module.exports = view

var form1 = new Form1 ()

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  console.log(state.answers);

  return html`

  <body class="sans-serif pa3">
    <li><a href="./form">form</a></li>
      <section class="fl mw6 w-50-m w-third-l pa3">
          <h1>Welkom</h1>

          <p>
            
          </p>
      </section>
      <section class="fl mw6 w-50-m w-third-l pa3">
          <p>Number of clicks stored: ${state.totalClicks}</p>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Emit a click event
          </button>
          </section>

     
      

      ${form1.render(state, emit)}

      
      </main>
      

    </body>`



  function handleClick () {
    emit('clicks:add', 1)
  }
  
  
  
}
