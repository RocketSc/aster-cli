const fs = require('fs');
const path = require('path');

module.exports =  (rootPath, folderPath, name, fileName, snippetName) => {
  console.log(rootPath, folderPath, fileName);
  const fullPath = path.resolve(rootPath, folderPath, `${fileName}.js`);
  const snippetPath = path.resolve(process.cwd(), `./.snippets/${snippetName}.js`);
  const snippet = fs.readFileSync(snippetPath, { encoding: 'utf8' });
  const file = snippet.replace(/%name%/g, name);

  fs.writeFile(fullPath, file, () => console.log(`${fileName}.js created!`));
}