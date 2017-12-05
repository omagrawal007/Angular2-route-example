"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeTask = (function () {
    function EmployeeTask() {
        this.tasks = [{ 'task': 'task1' }, { 'task': 'task2' }, { 'task': 'task3' }, { 'task': 'task4' }, { 'task': 'task5' }];
    }
    return EmployeeTask;
}());
EmployeeTask = __decorate([
    core_1.Component({
        selector: 'employee-task',
        templateUrl: './employee-task.html'
    })
], EmployeeTask);
exports.EmployeeTask = EmployeeTask;
//# sourceMappingURL=employee.task.js.map