const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const generateHTML = require('./templates/generatehtml');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');


const managers = [];
const engineers = [];
const interns = [];
const employees = [];

const questions = [
    {
        type: "list",
        name: "role",
        message: "What is your employee's role?",
        choices:
            [
                "Manager",
                "Engineer",
                "Intern",
            ]
    },
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
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
        message: "Would you like to add another employee?",
    }
];
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        if ((data.role).includes('Manager')) {
            const newManager = new Manager(data.name, data.id, data.email, data.officenumber);
            managers.push(newManager);
            console.log(managers);
        } else if ((data.role).includes('Engineer')) {
            engineers.push(new Engineer(data.name, data.id, data.email, data.github));
            console.log(engineers)
        } else {
            interns.push(new Intern(data.name, data.id, data.email, data.school));
            console.log(interns);
        }
        if (data.adding === true) {
            init();
        }
        // function writeToFile (fileName, data) {
        //     return fs.writeFile(path.join(process.cwd(),fileName), data);
        // }
        fs.writeFile('index.html', generateHTML(managers, engineers, interns), (err) => 
        err ? console.log(err) : console.log("it worked! Thank God"));
    });
};
init()