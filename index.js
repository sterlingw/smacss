var Promise  = require("es6-promise").Promise,
    SMACSS   = require("./dist/smacss.js"),
    program  = require('commander'),
    inquirer = require("inquirer"),
    smacss   = new SMACSS();


var scaffoldChoices = [
    { name: "base", checked: true },
    { name: "config", checked: true },
    { name: "layout", checked: true },
    { name: "modules", checked: true },
    { name: "theme", checked: true }
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
        smacss.createDirs(answers.scaffold);
    });
});


program.on('destroy', function(){
    inquirer.prompt([{
        type: "confirm",
        message: "Are you sure you want to destroy the SMACSS directories?",
        name: "bool",
        validate: function(answer) {
            return true;
        }
    }], function(answer) {
        if (answer.bool) {
            console.log("\nDestroying...\n");
        } else {
            console.log("\nCancelling destroy.\n");
        }
    });
});


program.parse(process.argv);