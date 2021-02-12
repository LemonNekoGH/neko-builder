"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jCenter = exports.mavenCentral = exports.maven = void 0;
function maven(url, username, password) {
    return {
        type: "maven",
        url: url,
        username: username,
        password: password
    };
}
exports.maven = maven;
function mavenCentral() {
    return maven("https://repo1.maven.org/maven2/");
}
exports.mavenCentral = mavenCentral;
function jCenter() {
    return maven("https://jcenter.bintray.com/");
}
exports.jCenter = jCenter;
