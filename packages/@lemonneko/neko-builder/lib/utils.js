"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyUtil = void 0;
var path = require("path");
var DependencyUtil = /** @class */ (function () {
    function DependencyUtil() {
    }
    DependencyUtil.getRepoBaseName = function (dependency, repo) {
        var baseName = repo.url;
        if (!baseName.endsWith('/')) {
            baseName += '/';
        }
        baseName += dependency.group.replace('.', '/') + '/';
        baseName += dependency.name + '/';
        baseName += dependency.version + '/';
        baseName += dependency.name + '-' + dependency.version;
        return baseName;
    };
    DependencyUtil.getLocalCacheBaseName = function (dependency) {
        var baseName = process.env.HOME + path.sep;
        baseName += dependency.group.replace('.', path.sep) + path.sep;
        baseName += dependency.name + path.sep;
        baseName += dependency.version + path.sep;
        baseName += dependency.name + '-' + dependency.version;
        return baseName;
    };
    return DependencyUtil;
}());
exports.DependencyUtil = DependencyUtil;
