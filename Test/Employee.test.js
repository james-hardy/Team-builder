const Employee = require('../lib/employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name if provided valid argument", () => {
            const employee = new Employee("John Doe", 11, "johndoe@test.com");
            expect(employee.name).toEqual("John Doe");
            expect(employee.id).toEqual(11);
            expect(employee.email).toEqual("johndoe@test.com");
        });
        it("should throw an error if provided no arguments", () => {
            const employee = () => new Employee();
            expect(employee).toThrow(Error("No Parameters Given"));
        });

        it("should throw an error if name is not a string", () => {
            const employee = () => new Employee();
            expect(employee).toThrow(Error("Expected a string"));
        });

        it("should throw an error if id is not a number", () => {
            const employee = () => new Employee();
            expect(employee).toThrow(Error("Expected a number"));
        });

        it("should throw an error if email is not a string", () => {
            const employee = () => new Employee();
            expect(employee).toThrow(Error("Expected a string"));
        });
    });
});