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
                  <div> <h2>${type.name} </h2> </div>
                     ${type.selects.map(select =>{
                    // console.log(select) 

                    return html `
                      <div class="hidden">
                          <label for=${select.name}>${select.name}</label>
                              <select class="answers" data-cat=${select.name} id=${select.name} onchange=${(e)=>addAnswer(e,emit,state)}> 
                                <option> Niet bekend</option>

                                ${select.options.map(option =>{
                                  return html `
                                    <option data-gewicht=${option.gewicht}>${option.name}</option>
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

function addAnswer(e, emit,state) {
  e.preventDefault();
  var selectedOption = Array.from(document.querySelectorAll('.answers')).filter(function(answer){
    return answer.selectedIndex != 0
  })
  // console.log(selectedOption);
  
  var selectedValues = []
  selectedOption.forEach(function (select) {
    var selectedValue = select.value
    var question =  select.dataset.cat //
    var selectedIndex = select.selectedIndex
    var gewicht =   select[selectedIndex].dataset.gewicht
    console.log(gewicht);
    // console.log(state.data);
    
    
    selectedValues.push({
      type: question,
      value: selectedValue,
      gewicht: gewicht
    })
  })
  console.log(selectedValues);
  
  emit('answers:add', selectedValues)

}