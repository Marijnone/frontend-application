var ChooComponent = require('choo/component')
var html = require('choo/html')

module.exports = class Form1 extends ChooComponent {
  constructor() {

    super()

  }
  createElement(state, emit) {
    return html `
    
        <form class="risico">
             ${state.data.type.map(type =>{

                return html `
                <div>
                  <div>${type.name}</div>
                  ${type.selects.map(select =>{
                    // console.log(select) 

                    return html `
                    <div>
                        <label for=${select.name}>${select.name}</label>
                        <select class="answers" data-cat=${select.name} id=${select.name} onchange=${(e)=>addAnswer(e,emit)}> 
                            ${select.options.map(option =>{
                                return html `
                                    <option> ${option.name}</option>
                                `
                            })}
                        </select>
                    </div>
                    `
                  })}
                </div>
                `
               })}
        </form>
        `
  }
  update(state, emit) {
    return false //depends the update function
  }
}

function addAnswer(e, emit) {
  e.preventDefault();
  var selectedOption = document.querySelectorAll('.answers')
  var selectedValues = []
  selectedOption.forEach(function (select) {
    var selectedValue = select.value
    var question =  select.dataset.cat //
    selectedValues.push({
      type: question,
      value: selectedValue
    })
  })
  emit('answers:add', selectedValues)

}