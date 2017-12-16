const fs = require('fs');
const path = require('path');
const helpers = require('../helpers');
const config = require('../../config');

module.exports = (entity, name, options) => {
  console.log(options);
// loading settings
  const rc = helpers.fileExists(config.rcName) 
    ? helpers.readRC(config.rcName)
    : null;

  if (!rc) {
    console.log(chalk.red('Error! rc file not found!'));
    process.exit();
  }

  const createPath = rc[entity];

  if (!createPath) {
    console.log(`no creation path for ${entity}. check your settings`);
    process.exit();
  }

  if (!helpers.directoryExists(createPath)) {
    const entityPath = path.resolve(process.cwd(), createPath)
    fs.mkdirSync(entityPath);
  }
  
  const folder = path.resolve(process.cwd(), createPath, `${name}`);
  fs.mkdirSync(folder);

  const fullPath = path.resolve(folder, `${name}.js`);
  const snippetPath = path.resolve(process.cwd(), `./.snippets/${entity}.js`);

  const snippet = fs.readFileSync(snippetPath, { encoding: 'utf8' });

  const file = snippet.replace(/%name%/g, name);

  const index = path.resolve(folder, `index.js`);
  const exportLine = `export { default as ${name}} from './${name}';\n`

  fs.writeFile(fullPath, file, () => console.log(`${name}.js created!`));

  if (options.c) {
    const fullPath = path.resolve(folder, `${name}Container.js`);
    const snippetPath = path.resolve(process.cwd(), `./.snippets/container.js`);
    const snippet = fs.readFileSync(snippetPath, { encoding: 'utf8' });
    const file = snippet.replace(/%name%/g, name);
    const exportLine = `export { default as ${name}} from './${name}Container';\n`
    
    fs.writeFile(fullPath, file, () => console.log(`${name}Container.js created!`));
    fs.writeFile(index, exportLine, () => console.log('index.js created!'));
  } else {
    fs.writeFile(index, exportLine, () => console.log('index.js created!'));
  }
}