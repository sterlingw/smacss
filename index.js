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
    { name: "utilities", checked: true },
    { name: "utilities/lib", checked: true }
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



program.parse(process.argv);