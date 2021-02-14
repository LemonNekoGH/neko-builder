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
exports.CompileJava = void 0;
var task_1 = require("@lemonneko/neko-builder/lib/task");
var CompileJava = /** @class */ (function (_super) {
    __extends(CompileJava, _super);
    function CompileJava() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.action = function () {
        };
        return _this;
    }
    return CompileJava;
}(task_1.Task));
exports.CompileJava = CompileJava;
