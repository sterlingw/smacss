var Promise  = require("es6-promise").Promise,
    SMACSS   = require("./dist/smacss.js"),
    program  = require('commander'),
    inquirer = require("inquirer"),
    smacss   = new SMACSS();


var scaffoldChoices = [
    { name: "base", checked: true },
    { name: "layout", checked: true },
    { name: "modules", checked: true },
    { name: "states", checked: true },
    { name: "themes", checked: true },
    { name: "utilities", checked: true }
];


program.on('scaffold', function(){
    inquirer.prompt([{
        type: "checkbox",
        message: "Select what directories you want scaffolded",
        name: "scaffold",
        choices: scaffoldChoices,
        validate: function(answer) {
            if (answer.length < 1) {
                return "You must choose at least one directory.";
            }
        return true;
        }
    }], function(answers) {
        smacss.createDirs(answers.scaffold).then(function(){
            console.log("Done.".green);
        }, function(err){
            if (err) { throw err; }
        });
    });
});


program.on('destroy', function(){
    inquirer.prompt([{
        type: "confirm",
        message: "This will remove all SMACSS directories. Are you sure?",
        name: "bool",
        validate: function(answer) {
            return true;
        }
    }], function(answer) {
        if (answer.bool) {
            console.log("\nDestroying...\n".red);
        } else {
            console.log("\nCancelling destroy.\n".green);
        }
    });
});


program.parse(process.argv);