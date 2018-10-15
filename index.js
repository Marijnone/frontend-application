var css = require('sheetify')
var choo = require('choo')
var data = require('./assets/data')
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

app.use(require('./stores/answers'))
app.use(require('./stores/clicks'))
//add data to the app, and create an empty state
app.use((state, emitter) => {
  state.data = data
  console.log(state.data);
  
})

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))
app.route('/form',require('./views/form'))

module.exports = app.mount('body') //load the content on the DOM
