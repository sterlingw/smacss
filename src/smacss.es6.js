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
        let self = this;

        return new Promise(function(resolve, reject){
            dirArray.map(function(dir, i){
                self.createDir(dir).then(function(dirName){
                    console.log("Created " + dirName.green + "...");

                    if (i == dirArray.length - 1) {
                        resolve();
                    }
                }, function(err){
                    reject(err);
                });
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