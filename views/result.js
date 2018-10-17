var html = require('choo/html')

module.exports = view

function view (state, emit) {
  console.log(state.answers);
  
  return html`
    <body>

    </body>
  `
  
}