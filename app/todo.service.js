"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_todos_1 = require("./mock-todos");
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.getTodos = function () {
        return Promise.resolve(mock_todos_1.TODOS);
    };
    TodoService.prototype.getTodo = function (id) {
        return this.getTodos()
            .then(function (todos) { return todos.find(function (todo) { return todo.id === id; }); });
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map