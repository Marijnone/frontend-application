var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} 

//console log emitter for forms
app.use((state,emitter) => {
  emitter.on('click',() => {
      console.log('clicked')
  })
      
})

//Setup state
app.use(function (state, emitter) {
  // initialize state
  state.answers = []

  // add answer
  emitter.on('addAnswer', function (answer) {
    var {type, value} = answer; //to define the type and value
    console.log('answer emitted', answer)
    var obj = {type: type, value: value}
    state.answers.push(obj)
    
    // emitter.emit('render') // tot nu toe onbekende tender functie. uitzetten verhelpt niet onthouden van value

  })
})

app.use(require('./stores/clicks'))
app.use(require('./stores/answers'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))
app.route('/form',require('./views/form'))

module.exports = app.mount('body') //load the content on the DOM
