#!/usr/bin/env node
// const chalk       = require('chalk');
const minimist = require('minimist');
// const clear       = require('clear');

const commands = {
  create: require('./src/commands/create'),
}

// clear();
// console.log(
//   chalk.white(
//     figlet.textSync('Aster', { horizontalLayout: 'full' })
//   )
// );

// parsing arguments
// aster create page
const argv = minimist(process.argv.slice(2));

const { _ : commandLine, ...options } = argv;

const [command, entity, name] = commandLine;

try {
  commands[command](entity, name, options);
} catch (error) {
  console.log(error);
}

