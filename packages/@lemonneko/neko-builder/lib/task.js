"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = exports.ResolveDependenciesTask = exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var ResolveDependenciesTask = /** @class */ (function (_super) {
    __extends(ResolveDependenciesTask, _super);
    function ResolveDependenciesTask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'resolveDependencies';
        _this.category = 'dependencies';
        _this.description = 'download dependencies jar to cache.';
        _this.action = function () {
            if (!_this.project) {
                throw Error('project is undefined.');
            }
            if (_this.project.repositories.length == 0) {
                throw Error('please define repositories to search artifact');
            }
            _this.project.dependencies.forEach(function (dependency) {
                console.log(dependency);
            });
        };
        return _this;
    }
    return ResolveDependenciesTask;
}(Task));
exports.ResolveDependenciesTask = ResolveDependenciesTask;
function task(name, action) {
    return new /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = name;
            _this.category = 'other';
            _this.description = 'no description';
            _this.action = action;
            return _this;
        }
        return class_1;
    }(Task));
}
exports.task = task;
