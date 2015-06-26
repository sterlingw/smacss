var fs = require("fs");

/**
 *
 */
class SMACSS {


    constructor(args) {
        
    }


    scaffold() {
        this.create("base");
        this.create("config");
        this.create("layout");
        this.create("modules");
        this.create("theme");
    }


    destroy() {
        // use FS to remove dir
    }


    create(dir) {
        fs.mkdir(dir);
    }


};

export default SMACSS;