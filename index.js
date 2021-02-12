const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const managers = [];
const engineers = [];
const interns = [];

const questions = [
    {
        type: "checkbox",
        name: "role",
        message: "What is your employee's role?",
        choices:
            [
                "Manager",
                "Enginner",
                "Intern",
            ]
    },
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: 'input',
        name: 'officenumber',
        message: "What is the manager's office number?",
        when: (data) => (data.role).includes("Manager"),
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub name?",
        when: (data) => (data.role).includes("Engineer"),
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend?",
        when: (data) => (data.role).includes("Intern"),
    },
    {
        type: 'confirm',
        name: 'adding',
        message: "Would you like to add another employee?"
    },
]
function test() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        if ((data.role).includes('Manager')) {
            managers.push(new Manager(data.name, data.id, data.email, data.officenumber));
            console.log(managers);
        } else if ((data.role).includes('Engineer')) {
            engineers.push(new Engineer(name, id, email, github));
        } else {
            interns.push(new Intern(name, id, email, school));
        }
        if (data.adding === true) {
            test();
        }
    });
}
test()


