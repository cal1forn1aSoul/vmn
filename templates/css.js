exports.style = fontName => {
  return `@import url('https://fonts.googleapis.com/css?family=${fontName}&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: '${fontName}', sans-serif;
}
`;
};
