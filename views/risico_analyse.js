var html = require('choo/html')
var ChooComponent = require('choo/component')
var name = 'Marijn'
var Form1 = require('../components/Form1')

var form1 = new Form1 ()
module.exports = function (state, emit) {
  return html `
  <body>
  <form>
   <li><a href="./">main</a></li>

   <section class="form">
   ${form1.render(state, emit)}
   </section>

 
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