const fs = require('fs');
const os = require('os');  // main module
const notes = require('./note.js'); // personal module
const _ = require('lodash');  // third party module
const yargs = require('yargs');
var user = os.userInfo();
// console.log(`${notes.age}`);

// var res = notes.addNote(9, -2);
// console.log(res);
// console.log(_.isString('Thom'));

// var filterArray = _.uniq(['Thom', 'Pony', 'Pansy', 'Thom', 1, 2, 2, 3, 4]);
// console.log(filterArray);

// fs.appendFile('greeting.txt', `Hello ${user.username}!`, function(err) {
//   if (err) {
//     console.log('Unable to write to a file');
//   }
// });
const argv = yargs.argv;
var command = process.argv[2];
if (argv._[0] === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (argv._[0] === 'list') {
  notes.getAll();
} else {
  console.log('Not recognized');
}

const chalk = require('chalk');
console.log(chalk.green('Success!'));
