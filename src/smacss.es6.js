var fs     = require("fs"),
    color  = require('colors');

/**
 *
 */
class SMACSS {


    constructor(args) {
        
    }


    /**
     *
     */
    createDir(dir) {
        return new Promise(function(resolve, reject){
            fs.mkdir(dir, function(){
                resolve(dir);
            });
        });
    }


    /**
     *
     */
    createDirs(dirArray) {
        let createDir = this.createDir;

        dirArray.map(function(dir){
            createDir(dir).then(function(dirName){
                console.log("Created " + dirName.green + "...");
            });
        });
    }


    /**
     *
     */
    removeDir(dir) {

    }


};

export default SMACSS;