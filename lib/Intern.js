const Employee = require('./Employee');
const inquirer = require('inquirer');

//questions only for interns
const questions = [{
    type: 'input',
    name: 'school',
    message: 'Please enter the school attended: (required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Please enter the school attended");
            return false;
        }
    }
}]


//extends employee constructor to intern
class Intern extends Employee {
    constructor() {
        super()
        //overrides employee role to Intern
        this.role = 'Intern';
    }
//sets up a new intern   
    initIntern() {
        return new Promise((resolve, reject) => {
            this.initEmployee().then(() => {
                inquirer
                    .prompt(questions)
                    .then(answer => {
                        this.school = answer.school
                        resolve();
                    })
                    .catch(reject)
            })
        })
    }
}


module.exports = Intern;

