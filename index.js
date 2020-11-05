#! /usr/bin/env node
const { exec } = require('child_process');
const { writeFile } = require('fs');

let fileName = process.argv.slice(2)[0];
// let title = fileName.slice(0,1).toUpperCase() + fileName.slice(1);

const index = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="index.js" defer></script>
  <title>${fileName}</title>
</head>
<body>
    
</body>
</html>`;

async function generateProject() {
  await exec(`mkdir ${fileName}`);
  await exec(`touch ${fileName}/index.js ${fileName}/style.css`);
  await writeFile(`./${fileName}/index.html`, index, err => (err ? console.log(err) : null));
}

generateProject();