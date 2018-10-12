var ChooComponent = require('choo/component')
var html = require('choo/html')

module.exports = class Sum extends ChooComponent{
    constructor (){
        super()
    }
    createElement () {
        return html`
        <p> Dit is een test of het component werkt</p>
        <button>Hi</button>

        `
    }
    update()
}