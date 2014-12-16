module.exports = function () {
  var fs = require('fs');

  // Create folders
  // ========================


  // Create folder and _index.scss file
  function create(directory, filepath) {
    var comment = '// Imports of ' + ' ' + directory + '...';

    fs.mkdir(directory);

    fs.writeFile(filepath, comment, function (err) {
      console.log('Created ' + 'directory' + '...');
    });
  }


  // Base
  create('base', 'base/_index.scss');

  // Layout
  create('layout', 'layout/_index.scss');

  // Modules
  create('modules', 'modules/_index.scss');

  // Themes
  create('themes', 'themes/_index.scss');

  // States
  create('states', 'states/_index.scss');

  // Themes
  create('themes', 'themes/_index.scss');

  // Utilities
  create('utilities', 'utilities/_index.scss');

  // Utilites/Lib
  create('utilities/lib/', 'utilities/lib/_index.scss');

  // App.scss
  fs.writeFile('app.scss', '// Imports of each directory', function (err) {
    console.log('Created app.scss...');
  });


  console.log('Scaffolding...');
};
