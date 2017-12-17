const fs = require('fs');
const path = require('path');
const directoryExists = require('./directoryExists');

module.exports = (rootPath, name) => {
  if (!directoryExists(rootPath)) {
    fs.mkdirSync(rootPath);
  }

  return name.split('/').reduce( (accumulator, folder) => {
    const currentFolder = `${accumulator}/${folder}`;

    const folderPath = path.resolve(rootPath, currentFolder);
    if (!directoryExists(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    return currentFolder;
  }, '.' )
}