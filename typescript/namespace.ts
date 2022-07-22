export namespace Employee {
    export function name() : string {
        return "John";
    }

    export function age() : number {
        return 10;
    } 
}

console.log(Employee.name());
