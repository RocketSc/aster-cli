const fs = require('fs');

module.exports = directory => {
  try {
    return fs.statSync(directory).isDirectory();
  } catch (error) {
    return false;
  }
}