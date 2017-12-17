const fs = require('fs');

module.exports = fileName => {
  const file = fs.readFileSync(fileName, { encoding: 'utf8' });
  const settings = JSON.parse(file);

  return settings;
};
