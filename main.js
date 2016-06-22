var args = require('./args');
var fs = require('fs');
var endOfLine = require('os').EOL;

var arguments ={

}
args.load(arguments);

var command = arguments.commands[0].name;
var parameter =arguments.commands[0].parameter;

fs.appendFile('message.txt', 'data to append', + endOfLine, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
