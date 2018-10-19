# Risico taxatie app

Risico taxatie app is a tool developed voor [Garage2020](http://www.garage2020.nl/). It makes it possible for youth workers to fill in a form and quickly get back risk result.

[demo](https://risico-taxatie.netlify.com/)

  - Powered by Choo.io 
  - Vanilla javascript
  
### Installation

  navigate to your terminal and run 
  ```sh
  $ git clone https://github.com/Marijnone/frontend-application.git
  ```

The app was build with [create-choo-app](https://github.com/choojs/create-choo-app) this makes  development alot easier and quicker. After cloning make sure to install all the dependencies.

```sh
$ cd frontend-application
$ npm install
$ npm run start
```
### Commands
Using the development enviorment for more info about create choo app checkout [create-choo-app](https://github.com/choojs/create-choo-app)

Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
 
### Todos
 - Make fully responsive
 - Add a CMS to save users and let them build accounts

## Process (Dutch)

### Keuze van het framework
Choo.io was mijn 3rde keuze het is een zeer minimalistisch framework. Het framework heeft een totale grote van 4kb en de doc leek op het eerste gezicht zeer uitgebreid.Ik ben begonnen met het downloaden van de create choo app. Dit is een soort CLI tool die het mogelijk maakt om zonder al te veel te configureren een Choo app te maken. Dus zonder browserify, of folder structuur op te zetten. Dit wordt door de tool allemaal gedaan. Nu dit was gedaan kon ik beginnen met het maken van de app.
### Leermomenten
Deze twee weken heb ik meer geleerd dan ik ooit had gehoopt. Aan het begin was ik zeer overrompelt door de documentatie en de verschillende termen als: emitters, components, stores, states. Ik kende deze termen nog niet en door de overvloed aan informatie vond ik het lastig om te beginnen. 

##### Components & template literals:
Components: Hier had ik wel eerder van gehoord maar niet eerder gebruikt. Ik had direct een button component geprobeerd te maken.  Dit lukte maar begreep niet waarom je dit zou doen. Ik heb mij eerst ingelezen over het maken van classes met JS via [deze](https://www.youtube.com/watch?v=2ZphE5HcQPQ) tutorial. Het duurde bij mij erg lang voordat ik echt doorhad hoe dit nou werkte en wat de kracht hier nou van is. Gelukkig was er een [doc](https://github.com/choojs/nanocomponent) beschikbaar vanuit Choo over  components.
###### Progressie:
ik had een button gemaakt en heb deze gerenderd en dit werkte. Maar dit was totaal niet dynamisch het ik wilde graag een button die ik kon aanpassen met aan de hand van de parameters die ik hem meegeef. In het begin was dit alleen de tekst van in de button, hierna heb ik ook de route dynamisch kunnen maken. Hieronder is te zien hoe het gebruik van template literals iets dynamisch kan worden. Na dit toe te passen werd mij het principe van template literals direct een stuk duidelijker.
```javascript
var ChooComponent = require('choo/component')
var html = require('choo/html')

module.exports = class Button extends ChooComponent {
    constructor() {
        super()
    }
    createElement(state, emit, label, route) { //nieuwe parameters
        return html `
        <body>
             <div>
                 <button>
                     <a href="/${route}">${label}</a> // gebruik van parameters
                 </button>
            </div>
       </body> `
    }
    update(state, emit) {
    }
}
${button.render(state, emit,"Toon risico","result")} //Hiermee wordt de button aangeroepen en gevuld met het label:Toon risico en de route:result. 
```
##### State
De start Choo app liet een start pagina zien waar het principe state zeer simpel was uitgelegd een state is een klein stukje geheugen die door de gehele app zichtbaar zijn. Dit principe leek aan het begin makkelijk maar ik begreep toch nog niet helemaal hoe dit nuttig zou kunnen zijn. En hoe dit in de praktijk toepasbaar zou kunnen zijn. Later in de app bleek het zeer handig om dit te gebruiken bij het opslaan van de vragen in het formulier. Door dit in een state te doen kon ik dit printen in de console en later over verschillende paginas zichtbaar maken. Hieronder een lege state hierin worden de antwoorden opgeslagen en beschikbaar door de gehele app.
```javascript
state.answers = []
```

##### Emitter
De emitter werkt als een soort console.log elke functie in choo heeft een emitter. Met emit kan je events triggeren, en met emit.on kan je loggen welke functie er wordt uitgevoerd dit was bij het uitvoeren van de functie die de antwoorden opslaat hierna was dat ook direct duidelijk.
```javascript
  emitter.on('answers:add', function (answers) {
```
##### Javascript kennis

Aangezien Choo veel werkt met vanila javascript heb ik erg veel geleerd over javascript in het algemeen. En over specefieke functies.

de functie map() een functie die aan de hand van een parameter door een array gaat en hier de aangegeven aarde terug geeft in dit geval.
```javascript
 ${state.data.type.map(type =>{
    return html `
```
De functie Reduce() andere array method die ik zeer complex vond maar na wat uitleg toch wel duidelijk werd bij het berekenen van het percentage. De methode runt een functie over elk element in de array, hierna reduced hij er een waarde van.

License
----

MIT
