// var obj = {
//   name: 'Thom'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj)

// var personString = '{"name": "Thom", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
const originalNoteString = '{"name": "Thom", "age": 25}';

fs.writeFileSync('notes.json', originalNoteString);
var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.name);