const { exec } = require('child_process');
const { writeFile } = require('fs');

const index =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="index.js" defer></script>
  <title>Document</title>
</head>
<body>
    
</body>
</html>`;

exec('touch index.js style.css');
writeFile('./index.html', index, err => err ? console.log(err) : null);