var html = require('choo/html')

module.exports = view

function view (state, emit) {
  console.log(state.answers);
  console.log(Object.values(state.answers))
  var risico_percentage = 23

  return html`
    <body>
    <section>
    <h2>Risico percentage: ${risico_percentage} %</h2>

    </section>
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