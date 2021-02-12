const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const intern = require('./lib/intern');

const employees = [];

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
        name: "username",
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
]

const questionsForManager = [
    {
        type: 'input',
        name: 'officenumber', 
        message: "What is the manager's office number?"
    },
];

const questionsForEngineer = [
    {
        type: 'input',
        name: 'github', 
        message: "What is the engineer's GitHub name?"
    },
];

const questionsForIntern = [
    {
        type: 'input',
        name: 'school', 
        message: "What is the intern's school name?"
    },
];

const confirm = [
    {
        type: 'confirm',
        name: 'adding',
        message: "Would you like to add another employee?"
    },
]

    let role = data.role;
    let name = data.username;
    let id = data.id;
    let email = data.email;
    let managerNumber = data.officenumber;
    let engineerGithub = data.github;
    let internSchool = data.school;

    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

    function init() {
        inquirer.prompt(questions).then(inquirerResponses) => {
            console.log("Generate Team HTML...");
            writeToFile("team.html",generatehtml({...inquirerResponses}));
        }
    }

    init();



// const init = async () => {
//     const employees = [];
//     let addMore = true;

//     while (addMore) {
//         const {name, id, email, role} = await inquirer.prompt(questions);
//         if (role === 'Manager') {
//             const {officeNumber} = await inquirer.prompt(questionsForManager);
//             employees.push(new Manager(name, id, email, officeNumber));
//         } else if (role === 'Engineer') {
//             const {github} = await inquirer.prompt(questionsForEngineer);
//             employees.push(new Engineer(name, id, email, github));
//         } else {
//             const {school} = await inquirer.prompt(questionsForIntern);
//             employees.push(new Intern(name, id, email, school));
//         }

//         const {adding} = await inquirer.prompt(confirm);
        
//         addMore = adding;

//         fs.writeFile(`team.html`, blankHtml, (err) =>
//         err ? console.log(err) : console.log("it worked"));
//     };
// };




// const init = async () => {
//     const employees = [];
//     let addMore = true;

//     while (addMore) {
//         const {name, id, email, role} = await inquirer.prompt(questions);
//         if (role === 'Manager') {
//             const {officeNumber} = await inquirer.prompt(questionsForManager);
//             employees.push(new Manager(name, id, email, officeNumber));
//         } else if (role === 'Engineer') {
//             const {github} = await inquirer.prompt(questionsForEngineer);
//             employees.push(new Engineer(name, id, email, github));
//         } else {
//             const {school} = await inquirer.prompt(questionsForIntern);
//             employees.push(new Intern(name, id, email, school));
//         }

//         const {adding} = await inquirer.prompt(confirm);
        
//         addMore = adding;
//     };
// inquirer.prompt([
    
//     {
//         type: "checkbox",
//         name: "role",
//         message: "What is your role",
//         choices: [
//             "Employee",
//             "Enginner",
//             "Intern",
//         ]
//     },
//     {
//         type: "input",
//         name: "username",
//         message: "What is your name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is your ID?"
//     },
    // {
    //     type: "input",
    //     name: "email",
    //     message: "What is your email?"
    // }

// ]).then((data) => {
//     console.log(data);
//     let userName = data.username;
//     let id = data.id;
//     let email = data.email;

//     let blankHtml =
//         `
//         <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <!-- Link to bootstrap -->
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
//     <!-- Link to CSS -->
//     <link rel="stylesheet" href="Develop/style.css">
//     <title>Team Builder</title>
// </head>

// <header>Our Team</header>

// <body>
//     <div class="container-fluid">

//         <div class="row">
//             <div class="col-md-4">
//                 <div id="manager"></div>
//                 <div class="card" style="width: 18rem;">
//                 <img src="Develop/icons/employee-icon.jpg" class="card-img-top" alt="Employee Icon">
//                  <div class="card-body">
//                 <h5 class="card-title">Employee Name: ${employee.userName}</h5>
//                 <p class="card-text">Employee Id: ${employee.id}</p>
//                 <h4> Employee email: ${employee.email}</h4>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//             </div>
//             <div class="col-md-4">
//                 <div id="engineer"></div>
//             </div>
//             <div class="col-md-4">
//                 <div id="intern"></div>
//             </div>
//             <div class="col-md-4">
//             </div>
//         </div>
//     </div>

//     <!-- Link to bootstrap -->
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
//         crossorigin="anonymous"></script>
//     <!-- Link to js -->
//     <script rel="textjavascript" src="../index.js"></script>
// </body>

// </html>
//  `;

//     fs.writeFile(`index.html`, blankHtml, (err) =>
//         err ? console.log(err) : console.log("it worked"));
// });