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

  // add animal
  emitter.on('addAnswer', function (answer) {
    const {type, value} = answer;
    console.log('answer emitted', answer);
    var obj = {type: type, value: value}
    state.answers.push(obj)
    
    emitter.emit('render')

  })
})

app.use(require('./stores/clicks'))


app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))
app.route('/form',require('./views/form'))

module.exports = app.mount('body') //load the content on the DOM
