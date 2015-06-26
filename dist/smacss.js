"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");

/**
 *
 */

var SMACSS = (function () {
    function SMACSS(args) {
        _classCallCheck(this, SMACSS);
    }

    _createClass(SMACSS, [{
        key: "createDir",

        /**
         *
         */
        value: function createDir(dir) {
            return new Promise(function (resolve, reject) {
                fs.mkdir(dir, function () {
                    resolve(dir);
                });
            });
        }
    }, {
        key: "createDirs",

        /**
         *
         */
        value: function createDirs(dirArray) {
            dirArray.map(function (dir) {
                this.createDir(dir).then(function (dirName) {
                    console.log("Created " + dirName + "...");
                });
            });
        }
    }, {
        key: "removeDir",

        /**
         *
         */
        value: function removeDir(dir) {}
    }]);

    return SMACSS;
})();

;

exports["default"] = SMACSS;
module.exports = exports["default"];