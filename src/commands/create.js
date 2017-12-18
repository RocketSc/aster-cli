const fs = require('fs');
const path = require('path');
const config = require('../../config');
const getRootPath = require('../helpers/getRootPath');
const createFolderPath = require('../helpers/createFolderPath');
const createFile = require('../helpers/createFile');

module.exports = (entity, name, options) => {
// loading settings
  const rootPath = getRootPath(entity);
  const folderPath = createFolderPath(rootPath, name);

  const fileName = name.split('/').pop();

  createFile(rootPath, folderPath, fileName, fileName, 'component');

  const index = path.resolve(rootPath, folderPath, `index.js`);

  if (options.c) {
    createFile(rootPath, folderPath, fileName, `${fileName}Container`, 'container');
    const exportLine = `export { default as ${name} } from './${fileName}Container';\n`
    fs.writeFile(index, exportLine, () => console.log('index.js created!'));
  } else {
    const exportLine = `export { default as ${name} } from './${name}';\n`
    fs.writeFile(index, exportLine, () => console.log('index.js created!'));
  }
}