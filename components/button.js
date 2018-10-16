var ChooComponent = require('choo/component')
var html = require('choo/html')
var buttontext = "Nieuwe risico analyse"

module.exports = class Button extends ChooComponent {
    constructor() {
        super()
    }
    createElement() {
        return html `
        <body>
        
    <div class="flex justify-start">
      <div class="w-25 pa3 mr2">
      <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white">
            <a href="/"> Nieuwe risico analyse </a>
          </button>
      </div>
    
       </body> `
    }
    update(state, emit) {
        
    }

}