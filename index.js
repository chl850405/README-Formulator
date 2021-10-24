// TODO: Create a function to initialize app
function init() {

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    name:'name',
    message:'What is your name? (Required)',
    validate: user_nameInput => {
        if (user_nameInput) {
        return true;
        } else {
        console.log('Please enter your name!');
        return false;
        }
    }
    },
    {
    type:'input',
    name:'github_username',
    message:'What is your GitHub name? (Required)',
    validate: github_usernameInput => {
        if (github_usernameInput) {
        return true;
        } else {
        console.log('Please enter your GitHub username!');
        return false;
        }
    }
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter your email!');
            return false;
            }
        }
    },
    {
    type:'input',
    name:'title',
    message:'What is the name of your project? (Required)',
    validate: nameInput => {
        if (nameInput) {
        return true;
        } else {
        console.log('Please enter your project name!');
        return false;
        }
    }
    },
    {
    type:'input',
    name:'description',
    message:'Provide a description of the project (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
        return true;
        } else {
        console.log('Please enter your project description!');
        return false;
        }
    }
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
            return true;
            } else {
            console.log('Please provide a step-by-step description of how to get the development environment running.');
            return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples for use. Include screenshots as needed.(Required)',
        validate:usageInput => {
            if (usageInput) {
            return true;
            } else {
            console.log('Please enter instructions and examples for use!');
            return false;
            }
        }
    },
    {
        type:'list',
        name:'license',
        message:'Select which license you used for your project',
        choices:['MIT', 'APACHE2.0', 'None']
    },
    {
        type:'input',
        name:'credits',
        message:'Provide collaborators, third-party assets, or tutorials.(Required)',
        validate:usageInput => {
            if (usageInput) {
            return true;
            } else {
            console.log('Please enter instructions and examples for use!');
            return false;
            }
        }
    },
    {
        type:'input',
        name:'test',
        message:'Write tests for your application, then provide examples on how to run them..(Required)',
        validate:testInput => {
            if (testInput) {
            return true;
            } else {
            console.log('Please enter instructions and examples for use!');
            return false;
            }
        }
    },
    
    
];

inquirer.prompt(questions)
.then(answers => {
    writeToFile('README.md', generateMarkdown(answers))
})
// writeToFile('README.md',)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) throw err;

    console.log('README.md complete! Check out README.md to see the output!');
    });
}

}

// Function call to initialize app
init();

