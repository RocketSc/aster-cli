const fs = require('fs');
const path = require('path');
const fileExists = require('./fileExists');
const readRC = require('./readRC');
const config = require('../../config');

module.exports = (entity) => {
  const rc = fileExists(config.rcName) ? readRC(config.rcName) : null;

  if (!rc) {
    console.log(chalk.red('Error! rc file not found!'));
    process.exit();
  }

  const createPath = rc[entity];

  if (!createPath) {
    console.log(`no creation path for ${entity}. check your settings`);
    process.exit();
  }

  return path.resolve(process.cwd(), createPath);
}