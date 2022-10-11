// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
// var licenseID = '';

// TODO: Create an array of questions for user input

const generateReadme = ({title, description, instructions, information, guidelines, test, license, Github, email }) =>
`#${title}
##License
*${license}
##Description
*${description}
##Instructions
*${instructions}
##Usage information
*${information}
##Contribution guidelines
*${guidelines}
##Test instructions
*${test}
##Questions:
*Github: https://www.github.com/${Github}
*email: ${email}`




inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Installation instructions',
    },
    {
      type: 'input',
      name: 'information',
      message: 'Usage information',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Contribution guidelines',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Test instructions',
    },
    {
      type: 'list',
      message: 'License:',
      name: 'license',
      choices: ['Apache', 'Boost', 'BSD-3-clause', 'MIT']
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address'
    }
  ])

//   inquirer
//     .prompt(questions)

 


.then((answers) => {
    // function renderLicenseBadge(answers) {
        // var licenseID = answers.license;
        // console.log(licenseID);
        if (answers.license = 'Apache') {
            answers.license = 'Apache [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        }if (answers.license = 'Boost') {
            answers.license = 'Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        }if (answers.license = 'BSD-3-clause') {
            answers.license = 'BSD-3-clause [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        }if (answers.license = 'MIT') {
            answers.license = 'MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        };


    
    
    const readmeContent = generateReadme(answers);

    
    
    fs.writeFile(`README.md`, readmeContent, (err) =>
        err ? console.log(err) : console.log(`README file successfully created!`)

    );
});
    



  // TODO: Create a function to write README file


// TODO: Create a function to initialize app

// function init() {}

// Function call to initialize app

// init();
