var html = require('choo/html')
var ChooComponent = require('choo/component')
var Form1 = require('../components/Form1')
var Button = require('../components/button')


var button = new Button ()
var form1 = new Form1 ()
module.exports = function (state, emit) {
  return html `
  <body class="welkom">
  <li><a href="./risico_analyse">form</a></li> 
  <section>
 
    <h1>Risico analyse</h1>
        <p>
          Vul hier de formulier in
        </p>
    </section>
        <section class="form">
          ${form1.render(state, emit)}
        </section>
    <section>
         ${button.render(state, emit,"Toon risico")}
    </section>
    </main>
  </body>`
  //function to select value
  function addAnswer(e) {
    e.preventDefault();
    var selectedOption = document.querySelectorAll('.form')
    var selectedValues = []
    selectedOption.forEach(function (select) {
      var selectedValue = select.value
      var question = select.name
      selectedValues.push({
        type: question,
        value: selectedValue
      })
    })
    emit('answers:add', selectedValues)
    console.log(state.answers);

  }
}