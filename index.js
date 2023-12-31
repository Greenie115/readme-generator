const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const license = require('./utils/generateMarkdown')

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
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do any test need to be ran?'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please enter your GitHub username for user to find you'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email can users contact you on? '
    }
]

function writeFile(fileName, data) {
    let fileContent = generateMarkdown(data)
    license(data)
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
            console.log('There was an error, please check your project')
        }
        console.log('README created!')
    })
}

function init() {
    inquirer.prompt(questions)
        .then((res) => {
            writeFile('README.md', res)
        }
        )
}


init();
