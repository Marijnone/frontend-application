
module.exports = answers


function answers (state, emitter) {
  state.answers = []

    emitter.on('answers:add', function (answers) {
      console.log("gaat om deze", answers);
      
            var {type, value, gewicht} = answers; //to define the type and value Object.assign(waar het in moet, waar je het uithaalt)
            var obj = {type: type, value: value}
            
            state.answers.push(obj)
 
            state.percentage = formula(answers, emitter)

            // console.log(answers);
            // console.log(value);
            // console.log(gewicht);
            // console.log(state.answers);
            
        
            emitter.emit('render')
        
        function formula (answers, emitter) {
          var gewichten = []
          console.log(answers);
          
          answers.forEach(function(answer){
            // console.log(answer);
            
          })
          };
        
        emitter.emit(state.events.RENDER)
    })



}

