var fs = require('fs');


/**
 * Creates a folder and _index.scss file for a SMACSS structure using filesystem.
 *
 * @param {string} directory - name of the directory you want to create e.g. modules
 * @param {string} filepath - filepath for _index.scss
 */
exports.create = function(directory, filepath) {
    var comment = '// Imports of ' + ' ' + directory + '...';

    fs.mkdir(directory);

    fs.writeFile(filepath, comment, function (err) {
        console.log('Created ' + 'directory' + '...');
    });
};

