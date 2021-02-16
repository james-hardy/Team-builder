// const inquirer = require('inquirer');
// const fs = require('fs');

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (this.name === undefined || this.id === undefined || this.email === undefined) {
        throw new Error("No Parameters Given");
    };
        if (typeof this.name !== "string") {
            throw new Error("Expected a string");
        };
        // if (typeof this.id !== "number") {
        //     throw new Error ("Expected a number");
        // };
        if (typeof this.email !== "string") {
            throw new Error ("Expected a string");
        };


    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;


    
//     printInfo() {
//         console.log(`This employees name is ${this.name}.`);
//         console.log(`This employess ID is ${this.id}.`);
//         console.log(`This employees email is ${this.email}.`);
//     };
//     constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     };
// };

