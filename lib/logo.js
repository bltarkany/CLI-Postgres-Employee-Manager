const logo = require('asciiart-logo');

// logo configuration
const descrip = `Welcome to Employee Post. A Javascript & Node driven Postgres employee management system!`;

// run logo for intro
//  logo config
const runLogo = () =>
  logo({
    name: 'Employee Post',
    //   options: Soft, Varsity,
    font: 'Varsity',
    lineChars: 10,
    padding: 2,
    margin: 3,
    borderColor: 'grey',
    logoColor: 'bold-green',
    textColor: 'green',
  })
    .emptyLine()
    .center('version 1.0.0')
    .emptyLine()
    .center(descrip)
    .render();

module.exports = { runLogo };
