var fs = require("fs");

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
        dirArray.map(function(dir){
            this.createDir(dir).then(function(dirName){
                console.log("Created " + dirName + "...");
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