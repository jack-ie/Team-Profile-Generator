// Importing modules
const inquirer = require('inquirer');
const fs = require('fs');

// profiles
// const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// js file generating html
const generateHTML = require('./src/generateHTML');

// cards generated for roles
const engineerCard = require('./src/generateHTML').engineerCard
const internCard = require('./src/generateHTML').internCard
const managerCard = require('./src/generateHTML').managerCard

// team array
const teamArray = [];

// role questions
const roleQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'Please select employee to add',
        choices: ['Manager', 'Engineer', 'Intern'],
    }
];

// manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter managers id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter managers email',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter managers office phone number',
    },
];

// engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter engineers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter engineers id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter engineers email',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter engineers Github username',
    },
];

// intern questions
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter interns name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter interns id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter interns email',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter interns school name',
    },
];

// option to add more employees
function initAdd() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'addTeam',
        message: 'Add more team members?',
        default: true,
    }])
        .then((answer) => {
            if (answer.addTeam) {
                init();
            }
        })
}

// function runs questions
function init() {
    inquirer.prompt(roleQuestions).then((roleAnswers) => {
        if (roleAnswers.role === "Manager") {
            console.log(roleAnswers.role)

            inquirer.prompt(managerQuestions).then((managerAnswers) => {
                const htmlManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
                employeeCards.push(managerCard(htmlManager));
                initAdd()
            });
        } else if (roleAnswers.role === "Engineer") {
            console.log(roleAnswers.role)

            inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
                const htmlEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
                employeeCards.push(engineerCard(htmlEngineer));
                initAdd()
            });
        } else if (roleAnswers.role === "Intern") {
            console.log(roleAnswers.role)
            
            inquirer.prompt(internQuestions).then((internAnswers) => {
                const htmlIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                employeeCard.push(internCard(htmlIntern));
                initAdd()
            });
        }
    });
}
init();

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log('Your team profile has been created. Please see index.html')
        }
    })
};

// invoke app
// addManager()
//     .then(addEmployee)
//     .then(teamArray => {
//         return generateHTML(teamArray);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .catch(err => {
//         console.log(err);
//     });
