"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigReader = exports.Config = void 0;
var fs = require("fs");
var path = require("path");
var Config = /** @class */ (function () {
    function Config() {
    }
    return Config;
}());
exports.Config = Config;
var ConfigReader = /** @class */ (function () {
    function ConfigReader() {
    }
    ConfigReader.readConfig = function () {
        return this.readConfigFromFile('neko-builder.config.js');
    };
    ConfigReader.readConfigFromFile = function (filePath) {
        var configPath = path.resolve(filePath);
        if (fs.existsSync(configPath)) {
            return require(configPath);
        }
        else {
            return new Config();
        }
    };
    return ConfigReader;
}());
exports.ConfigReader = ConfigReader;
