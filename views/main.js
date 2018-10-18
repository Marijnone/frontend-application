var html = require('choo/html')
var Form1 = require('../components/Form1')
var Button = require('../components/button')
var TITLE = 'test-choo - main'

module.exports = view

var form1 = new Form1 ()
var button = new Button ()
function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  // console.log(state.answers);  

  return html`

  <body class="welkom">
    <li><a href="./form">form</a></li>
      <section class="fl mw6 w-50-m w-third-l pa3">
          <h1>Risico analyse</h1>

          <p>
            Vul hier de vragen lijst in
          </p>
      </section>
          <section class="form">
            ${form1.render(state, emit)}
          </section>
      <section>
           ${button.render(state, emit,"Toon risico","result")}
      </section>
      </main>
    </body>`



  function handleClick () {
    emit('clicks:add', 1)
  }
  
  
  
}
