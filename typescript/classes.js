"use strict";
// class Employee {
//     name: string;
//     age: number;
exports.__esModule = true;
//     constructor(name: string,age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     /**
//      * this method returns employee information
//      * 
//      * @returns string 
//      */
//     details() : string {
//         return `name: ${this.name} and age: ${this.age}`;        
//     }
// }
// const emp = new Employee("fasdfsadf",20);
// console.log(emp.details());
// inheritance
// class Parent {
//     protected name: string;
//     protected age: number;
//     public details(): string {
//         return `name: ${this.name} and age: ${this.age}`;
//     }
// }
// const p = new Parent();
// console.log(p.details());
// class Child extends Parent {
//     constructor(name: string, age: number) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
//     details() : string {
//         return `name: ${this.name} and age: ${this.age}`;
//     }
// }
// class Child1 extends Child {
//     details() : string {
//         return `name: ${this.name} and age: ${this.age}`;
//     }
// }
// let child = new Child("fdsafdadsf",12);
// console.log(child.details());
// abstract
// abstract class Parent {
//     protected name: string;
//     abstract details(): string;
//     public noAbastract() : string {
//         return "Non abstract method";
//     }
// }
// class Child extends Parent {
//     constructor(name: string) {
//         super()
//         this.name = name;
//     }
//     public details() : string { 
//         return `name: ${this.name}`;
//     }
// }
// const child = new Child("fdsafasfsadf");
// console.log(child.noAbastract());
// console.log(child.details());
// Interface
// interface Parent1{ 
//     //properties
//     name: string;
//     age: number;
//     // methods
//     details(): string;
// }
// interface Parent2{ 
//     //properties
//     name1: string;
//     age1: number;
//     // methods
//     details1(): string;
// }
// class Child implements Parent1,Parent2{ 
//     public name: string;
//     public age: number;
//     public name1: string;
//     public age1: number;
//     public details(): string {
//         return `name: ${this.name}`;
//     }
//     public details1(): string {
//         return `name: ${this.name}`;
//     }
// }
// static
// class Employee {
//     static fullName : string = "fsafasdf"
//     static details() : string {
//         return "Employee details";
//     }
// }
// console.log(Employee.fullName);
// console.log(Employee.details());
// Generics
// function fun () : number  {
//     console.log("fdsafsafsaf");
//     return 10;
// }
// fun();
var exportImport_1 = require("./exportImport");
console.log((0, exportImport_1["default"])());
