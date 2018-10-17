var ChooComponent = require('choo/component')
var html = require('choo/html')

module.exports = class Button extends ChooComponent {
    constructor() {
        super()
    }
    createElement(state, emit, label) {
        return html `
        <body>
        
    <div class="flex justify-start">
      <div>
      <button>
            <a href="/result">${label}</a>
          </button>
      </div>
    
       </body> `
    }
    update(state, emit) {
        
    }

}