var html = require('choo/html')
var ChooComponent = require('choo/component')
var Form1 = require('../components/Form1')
var Button = require('../components/button')


var button = new Button ()
var form1 = new Form1 ()
module.exports = function (state, emit) {
  return html `

  <body class="welkom">
  <section>
 
    <h1>Risico analyse app</h1>
        <p>
          Vul hier het formulier in
        </p>
    </section>
        <section class="risico-analyse">
          ${form1.render(state, emit)}
        </section>
    <section>
         ${button.render(state, emit,"Toon rapport","result")}
    </section>
    <section class="result">
       <h2>Risico Percentage: ${state.percentage} % </h2>
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