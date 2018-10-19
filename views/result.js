var html = require('choo/html')
var Button = require('../components/button')

module.exports = view

function view (state, emit) {

var button = new Button ()

console.log("result",state.answers);
  return html`
    <body>
      <section>
        <h2>Risico percentage: ${state.percentage} %</h2>

      </section>
      ${button.render(state, emit,"download rapport als pdf","#")} 

    ${state.answers.map(answer=>{
      return html`
      <div>
        <h2>${answer.type}</h2>
          <p class="${answer.value === "Niet bekend" ? "answerRed" : null}">${answer.value}</p>
      </div>
      
      `
    })}
    </body>
  `
  
}