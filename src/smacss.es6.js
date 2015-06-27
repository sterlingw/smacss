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

        return new Promise((resolve, reject)=>{
            dirArray.map((dir, i)=>{

                // Create utilities before utilities/lib if utilities isn't checked
                if (dir == "utilities/lib") {
                    if (dirArray.indexOf("utilities") == -1) {
                        console.log("Created " + "utilitites".green + "...")
                        self.createDir("utilities").then(()=>{}), (err)=>{
                            if (err) { throw err; }
                        });
                    }
                }

                self.createDir(dir).then((dirName)=>{
                    console.log("Created " + dirName.green + "...");

                    if (i == dirArray.length - 1) {
                        resolve();
                    }
                }, (err)=>{
                    reject(err);
                });
            });
        });
    }


};

export default SMACSS;