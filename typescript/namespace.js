"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee;
(function (Employee) {
    function name() {
        return "John";
    }
    Employee.name = name;
    function age() {
        return 10;
    }
    Employee.age = age;
})(Employee = exports.Employee || (exports.Employee = {}));
console.log(Employee.name());
