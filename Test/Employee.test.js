const Employee = require('Develop/employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name if provided valid argument", () => {
            const employee = new Employee("John Doe");
            expect(employee.name).toEqual("John Doe");
        });
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        });
    });
});