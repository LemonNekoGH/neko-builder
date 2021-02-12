"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildFileReader = exports.DefaultProject = void 0;
var fs = require("fs");
var path = require("path");
var task_1 = require("./task");
var exceptions_1 = require("./exceptions");
var DefaultProject = /** @class */ (function () {
    function DefaultProject() {
        this.name = 'undefined';
        this.group = 'undefined';
        this.tasks = [];
        this.version = 'undefined';
        this.dependencies = [];
        this.repositories = [];
        this.init();
    }
    DefaultProject.prototype.init = function () {
        var _this = this;
        this.tasks.push(new task_1.ResolveDependenciesTask());
        this.tasks.forEach(function (task) {
            task.project = _this;
        });
    };
    return DefaultProject;
}());
exports.DefaultProject = DefaultProject;
var BuildFileReader = /** @class */ (function () {
    function BuildFileReader() {
    }
    BuildFileReader.readDefault = function () {
        if (fs.existsSync(path.resolve('neko-builder.config.js'))) {
            return this.readFromFile('neko-builder.config.js');
        }
        return new DefaultProject();
    };
    BuildFileReader.resolve = function (filePath) {
        var obj = require(filePath);
        var project = new DefaultProject();
        if (obj.name && typeof obj.name === 'string') {
            project.name = obj.name;
        }
        if (obj.version && typeof obj.version === 'string') {
            project.version = obj.version;
        }
        if (obj.tasks && typeof obj.tasks === 'object') {
            project.tasks.push(obj.tasks);
        }
        if (obj.group && typeof obj.group === 'string') {
            project.group = obj.group;
        }
        if (obj.dependencies && typeof obj.dependencies === 'object') {
            project.dependencies.push(obj.dependencies);
        }
        if (obj.repositories && typeof obj.repositories === 'object') {
            project.repositories.push(obj.dependencies);
        }
        return project;
    };
    BuildFileReader.readFromFile = function (filePath) {
        var configPath = path.resolve(filePath);
        if (fs.existsSync(configPath)) {
            return this.resolve(configPath);
        }
        else {
            throw new exceptions_1.IOException("file not found: " + configPath);
        }
    };
    return BuildFileReader;
}());
exports.BuildFileReader = BuildFileReader;
