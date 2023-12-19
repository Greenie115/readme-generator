const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");

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
        message: 'Do any test need to be ran?'
    },
]

function writeFile(fileName, data){
    let fileContent = generateMarkdown(data)
    fs.writeFile(fileName, fileContent, (error) => {
        console.log('README created!')
    })
}

function init() {
    inquirer.prompt(questions)
        .then((res) => {
            writeFile(res)
        }
        )
}


init();
