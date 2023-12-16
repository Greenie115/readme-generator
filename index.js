const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'What is the title of your project?',
    'Describe the project',
    'How does the user instal this project?',
    'How would the user use this project?',
    'Is there a license required? If so, which one?',
    'How cna someone contribute to your codebase?',
    'How would the user run tests on the project?',
    'Is there anything else the user should know about the project?'
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
