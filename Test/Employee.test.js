const Employee = require('../lib/employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name if provided valid argument", () => {
            const employee = new Employee("JohnDoe", "11", "JohnDoe@test.com");
            expect(employee.name).toEqual("JohnDoe");
            expect(employee.id).toEqual("11");
            expect(employee.email).toEqual("JohnDoe@test.com");
        });

        it("should throw an error if provided no argument", () => {
            const employee = () => new Employee();
            expect(employee).toThrow(Error("No Parameters Given"));
        });

        it("should throw an error if name is not a string", () => {
            const employee = () => new Employee(1,"11","JohnDoe@test.com");
            expect(employee).toThrow(Error("Expected a string"));
        });

        it("should throw an error if id is not a string", () => {
            const employee = () => new Employee("JohnDoe",11,"JohnDoe@test.com");
            expect(employee).toThrow(Error("Expected a string"));
        });

        it("should throw an error if email is not a string", () => {
            const employee = () => new Employee("JohnDoe","11",11);
            expect(employee).toThrow(Error("Expected a string"));
        });
    });
});