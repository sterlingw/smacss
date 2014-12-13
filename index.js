module.exports = function () {
  var fs = require('fs');

  // Create folders
  // ========================

  // Base
  fs.mkdir('base');

  fs.writeFile('./base/_index.scss', '// Imports of base', function (err) {
    console.log('Created base...');
  });

  // Layout
  fs.mkdir('layout');

  fs.writeFile('layout/_index.scss', '// Imports of layout', function (err) {
    console.log('Created layout...');
  });

  // Modules
  fs.mkdir('modules');

  fs.writeFile('modules/_index.scss', '// Imports of modules', function (err) {
    console.log('Created modules...');
  });

  // Themes
  fs.mkdir('themes');

  fs.writeFile('themes/_index.scss', '// Imports of themes', function (err) {
    console.log('Created themes...');
  });

  // States
  fs.mkdir('states');

  fs.writeFile('states/_index.scss', '// Imports of states', function (err) {
    console.log('Created states...');
  });

  // Themes
  fs.mkdir('themes');

  fs.writeFile('themes/_index.scss', '// Imports of themes', function (err) {
    console.log('Created themes...');
  });

  // Utilities
  fs.mkdir('utilities');

  fs.writeFile('utilities/_index.scss', '// Imports of utilities', function (err) {
    console.log('Created base...');
  });

  // Utilites/Lib
  fs.mkdir('utilities/lib/');

  fs.writeFile('utilities/lib/_index.scss', '// Imports of utilities/lib', function (err) {
    console.log('Created utilities/lib...');
  });

  // App.scss
  fs.writeFile('app.scss', '// Imports of each directory', function (err) {
    console.log('Created app.scss...');
  });


  return 'Scaffolding...';
};
