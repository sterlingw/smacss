var smacss = require('./smacss.js');
var fs = require('fs');


// Create folders
// ========================


// Base
smacss.create('base', 'base/_index.scss');

// Layout
smacss.create('layout', 'layout/_index.scss');

// Modules
smacss.create('modules', 'modules/_index.scss');

// Themes
smacss.create('themes', 'themes/_index.scss');

// States
smacss.create('states', 'states/_index.scss');

// Themes
smacss.create('themes', 'themes/_index.scss');

// Utilities
smacss.create('utilities', 'utilities/_index.scss');

// Utilites/Lib
smacss.create('utilities/lib/', 'utilities/lib/_index.scss');

// App.scss
fs.writeFile('app.scss', '// Imports of each directory', function (err) {
  console.log('Created app.scss...');
});


console.log('Scaffolding...');
