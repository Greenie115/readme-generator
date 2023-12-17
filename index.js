const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you instal the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell people how to use your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project need?',
        choices: ['MIT', 'Apache', 'GPL', 'No license needed']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How cna other contribute to your project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'do any test need to be ran?'
    }
    
];


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
