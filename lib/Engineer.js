const Employee = require('./Employee');
const inquirer = require('inquirer');

//questions for only the engineer
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


//extends employee constructor to engineer
class Engineer extends Employee {
    constructor() {
        super()
        //overrides employee role to engineer
        this.role = 'Engineer';
    }
// sets up new engineer 
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

