const Employee = require('./Employee');
const inquirer = require('inquirer');

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



class Intern extends Employee {
   
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

