# Aster

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)

## Installation

npm install -g aster-cli

.asterrc - json file with your project structure.
Put in root of your project.

```
{
  "page": "./src/pages",
  "component": "./src/components"
}
```

Put your project snippets (component.js and container.js) in .snippets folder
You can use %name% as variable for file name.

## Usage

aster create page Home

Files will be created in page folder (.asterrc)
all %name% in snippets will be replaced with "Home"

## Support

Please [open an issue](https://github.com/RocketSc/aster-cli/issues/new) for support.
