var ChooComponent = require('choo/component')
var html = require('choo/html')

module.exports = class Button extends ChooComponent {
    constructor() {
        super()
    }
    createElement(state, emit, label, route) {
        return html `
        <body>
        
      <div>
             <button>
                 <a href="/${route}">${label}</a>
            </button>
      </div>
    
       </body> `
    }
    update(state, emit) {
        
    }

}