const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => path.basename(process.cwd()),

  directoryExists: directory => {
    try {
      return fs.statSync(directory).isDirectory();
    } catch (error) {
      return false;
    }
  },

  fileExists: file => {
    try {
      return fs.statSync(file).isFile();
    } catch (error) {
      return false;
    }
  },

  readRC: fileName => {
    const file = fs.readFileSync(fileName, { encoding: 'utf8' });
    const settings = JSON.parse(file);

    return settings;
  },

  createSnippet: (source, destination, name) => {
    
  }
};