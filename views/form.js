var html = require('choo/html')
var ChooComponent = require('choo/component')
var name = 'Marijn'

module.exports = function (state, emit) {
  return html `
  <body>
  <form>
   <li><a href="./">main</a></li>

    <label for="geslacht">geslacht</label>
    <select class="form"  id="geslacht" name="geslacht">
    <option value="man">man</option>
    <option value="vrouw">vrouw</option>
   </select>

    <label for="leeftijdKind">Leeftijd van het kind</label>
      <select class="form" id="leeftijdKind" name="leeftijdKind">
  
       <option value="0 tot 4 jaar">0 tot 4 jaar</option>
       <option value="4 tot 8 jaar">4 tot 8 jaar</option>
       <option value="8 tot 12 jaar">8 tot 12 jaar</option>
       <option value="12 tot 16 jaar">12 tot 16 jaar</option>
       <option value="16 tot 18 jaar">16 tot 18 jaar</option>
   
         </select>
         <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${addAnswer}>
            Submit data
          </button>
    </form>
    <p class="test">
     
      
       <li>${state.answers} </li>
      
    </p>    

 
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