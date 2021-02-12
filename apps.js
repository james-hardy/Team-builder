const Manager = require('lib/manager.js');
const Enginner = require('lib/engineer.js');
const Intern = require('lib/Intern.js')
const Inquirer = require('inquirer');
const path = require('path');
const fs = require ('fs');
const util = require ('util');

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('lib/htmlRenderer');
const Employee = require('lib/Employee');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');

const qustions = [
    {name: 'name', message: "What is the employee's name?"},
    {name: 'id', message: "What is the employee's ID?"},
    {name: 'email', message: "What is the employee's email?"},
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];

const questionsForManager = [
    {name: 'officenumber', message: "What is the manager's office number?"},
];

const questionsForEngineer = [
    {name: 'github', message: "What is the engineer's GitHub name?"},
];

const questionsForIntern = [
    {name: 'school', message: "What is the intern's school name?"},
];

const confirm = [
    {
        type: 'confirm',
        name: 'adding',
        message: "Would you like to add another employee?"
    },
];

const init = async () => {
    const employees = [];
    let addMore = true;

    while (addMore) {
        const {name, id, email, role} = await inquirer.prompt(questions);
        if (role === 'Manager') {
            const {officeNumber} = await inquirer.prompt(questionsForManager);
            employees.push(new Manager(name, id, email, officeNumber));
        } else if (role === 'Engineer') {
            const {github} = await inquirer.prompt(questionsForEngineer);
            employees.push(new Engineer(name, id, email, github));
        } else {
            const {school} = await inquirer.prompt(questionsForIntern);
            employees.push(new Intern(name, id, email, school));
        }

        const {adding} = await inquirer.prompt(confirm);
        
        addMore = adding;
    };

    const html = render(employees);

    if (!fs.existsSync(outputPath)) {
        const error = await mkdirAsync(OUTPUT_DIR);
        error && console.error(error);
    };

    const error = await writeFileAsync(outputPath, html);
    error && console.error(error);
};

init();



