module.exports = answers

function answers (state, emitter) {
  state.answers = []

  emitter.on('DOMContentLoaded', function () {

    emitter.on('answers:add', function (answer) {
      state.answers.length = 0 //to make sure we not add up all the values
        answer.map(answer => {
          // var obj = Object.assign({}, answer)
            var {type, value} = answer; //to define the type and value Object.assign(waar het in moet, waar je het uithaalt)
            var obj = {type: type, value: value}
            state.answers.push(obj)

            
            emitter.emit('render')
        })
        emitter.emit(state.events.RENDER)
    })
  })

}
