const Employee = require('./Employee');
const inquirer = require('inquirer');


const questions = [{
    type: 'input',
    name: 'gitHub',
    message: 'Please enter their GitHub account: (required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Please enter their GitHub account");
            return false;
        }
    }
}]



class Engineer extends Employee {
   
    initEngineer() {
        return new Promise((resolve, reject) => {
            this.initEmployee().then(() => {
                inquirer
                    .prompt(questions)
                    .then(answer => {
                        this.github = answer.gitHub
                        resolve();
                    })
                    .catch(reject)
            })
        })
    }
}


module.exports = Engineer;

