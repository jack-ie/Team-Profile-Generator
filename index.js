// Importing modules
var inquirer = require('inquirer');
const fs = require('fs');

// profiles
const Employee = require('./lib/Employee')
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
        type: "list",
        name: "role",
        message: "Which employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

// manager questions
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter managers name",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter managers id",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter managers email",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter managers office phone number",
    },
];