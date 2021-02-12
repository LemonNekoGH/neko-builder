"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isId = exports.compile = void 0;
function isId(str) {
    var regexp = /([a-zA-Z]+(.[a-zA-Z]+)*:){2}.+$/;
    return str.match(regexp).length != 0;
}
exports.isId = isId;
function compile(id, group, name, version) {
    if (id && isId(id)) {
        var arr = id.split(':');
        return {
            type: "compile",
            group: arr[0],
            name: arr[1],
            version: arr[2]
        };
    }
    if (group && name && version) {
        return {
            type: "compile",
            group: group, name: name, version: version
        };
    }
    throw Error('config error');
}
exports.compile = compile;
