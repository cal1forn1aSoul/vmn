#! /usr/bin/env node
const { exec } = require('child_process');
const { writeFile } = require('fs');
const { index } = require('./templates/html');
const { style } = require('./templates/css');

let folderName = process.argv.slice(2)[0];
let openEditor = process.argv.slice(2)[1];

async function generateProject() {
  try {
    exec(`mkdir ${folderName}`);
    exec(`touch ${folderName}/index.js`);
    generateFile(folderName, 'index.html', index(folderName));
    generateFile(folderName, 'style.css', style('Muli'));
    
    if (openEditor === '-o') {
      exec(`code ${folderName}`);
    }
    
    console.log('Successfully created a vanilla project setup.');
  } catch (err) {
    console.log(err);
  }
}

function generateFile(folderName, fileName, data) {
  try {
    writeFile(`${folderName}/${fileName}`, data, err => (err ? console.log(err) : null));
  } catch (err) {
    console.log(err);
  }
}

generateProject();
