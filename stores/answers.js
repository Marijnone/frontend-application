module.exports = answers


function answers(state, emitter) {
  state.answers = []

  emitter.on('answers:add', function (answers) {
    console.log("gaat om deze", answers);

    var {
      type,
      value,
      gewicht
    } = answers; //to define the type and value Object.assign(waar het in moet, waar je het uithaalt)
    var obj = {
      type: type,
      value: value
    }

    state.answers.push(obj)

    state.percentage = formula(answers, emitter)
    emitter.emit('render')

    function formula(answers, emitter) { //thanks to Jim for helping me out with the formula
      var gewichten = []
      answers.forEach(function (answer) {
        var gewicht = answer.gewicht
        gewichten.push(gewicht)
      })
       var sum = gewichten.reduce(function (accumulator, currentValue) {
        return Number(accumulator) + Number(currentValue)
      }, 0)
      var percentage = Number((1 / (1 + Math.exp(-1 * (-8.57219 + sum))) * 100).toFixed(2))

      console.log(percentage);
      return percentage
    };

    emitter.emit(state.events.RENDER)
  })
}