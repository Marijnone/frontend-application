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

app.use(require('./stores/answers'))
app.use(require('./stores/clicks'))


app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))
app.route('/form',require('./views/form'))

module.exports = app.mount('body') //load the content on the DOM
