const fs = require('fs');
const path = require('path');

module.exports =  (rootPath, folderPath, fileName) => {
  console.log(rootPath, folderPath, fileName);
  const fullPath = path.resolve(rootPath, folderPath, `${fileName}.js`);
  const snippetPath = path.resolve(process.cwd(), `./.snippets/component.js`);
  const snippet = fs.readFileSync(snippetPath, { encoding: 'utf8' });
  const file = snippet.replace(/%name%/g, fileName);

  fs.writeFile(fullPath, file, () => console.log(`${fileName}.js created!`));
}