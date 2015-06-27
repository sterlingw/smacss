var Promise  = require("es6-promise").Promise,
    SMACSS   = require("./dist/smacss.js"),
    program  = require('commander'),
    inquirer = require("inquirer"),
    smacss   = new SMACSS();


var scaffoldChoices = [
    { name: "base", checked: false },
    { name: "layout", checked: false },
    { name: "modules", checked: false },
    { name: "states", checked: false },
    { name: "themes", checked: false },
    { name: "utilities", checked: false },
    { name: "utilities/lib", checked: false }
];


program.on('scaffold', function(){
    console.log("");
    console.log("Make sure you're in the correct directory.".red);
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