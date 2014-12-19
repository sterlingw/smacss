var fs = require('fs');

    // Create folder and _index.scss file
    exports.create = function(directory, filepath) {
        var comment = '// Imports of ' + ' ' + directory + '...';

        fs.mkdir(directory);

        fs.writeFile(filepath, comment, function (err) {
            console.log('Created ' + 'directory' + '...');
        });
    };

