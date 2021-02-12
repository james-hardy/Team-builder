// const inquirer = require('inquirer');
// const fs = require('fs');

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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


    // if (typeof name !== "string" || !name.trim().lenght) {
    //     throw new Error("Extpected a name");
    // };
    // if (typeof id !=="number" || isNaN(id) || id < 0) {
    //     throw new Error("Expected paramater 'id' to be a non-negative number");
    // };

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

