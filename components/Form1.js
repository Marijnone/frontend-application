var ChooComponent = require('choo/component')
var html = require('choo/html')

module.exports = class Select extends ChooComponent {
    constructor() {

        super()

    }
    createElement(state, emit) {
        // console.log(state)
        return html `
        <form>
             ${state.data.type.map(type =>{

                return html `
                <div>
                <div>${type.name}</div>
                ${type.selects.map(select =>{
                    return html `
                    <div>
                        <label for=${select.name}>${select.name}</label>
                        <select class="answers" id=${select.name} onchange=${addAnswer}>
                            ${select.options.map(option =>{
                                return html `
                                    <option> ${option.name}</option>
                                `
                            })}
                        </select>
                    
                    </div>
                    `
                })}
                <div/>
                `

        })}
        </form>
        `
        function addAnswer(e){
            e.preventDefault();
            var selectedOption = document.querySelectorAll('.answers')
            var selectedValues = []
            selectedOption.forEach(function(select){
              var selectedValue = select.value
              var question = select.name
              selectedValues.push({type: question, value: selectedValue})
              })
            emit('answers:add', selectedValues)
            console.log(state.answers);
            
            }

    }
    update(state, emit) {
        return true //depends the update function
    }
}