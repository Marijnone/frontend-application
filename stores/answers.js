module.exports = answers

function answers (state, emitter) {
  state.answers = []

  emitter.on('DOMContentLoaded', function () {
    emitter.on('answers:add', function (answers) {
      state.answers.push(answers)
      emitter.emit(state.events.RENDER)
    })
  })
}


