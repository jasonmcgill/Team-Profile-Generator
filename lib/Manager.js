const Employee = require('./Employee');
const inquirer = require('inquirer');

//questions on the manager needs to have answers for
const questions = [{
    type: 'input',
    name: 'phone',
    message: 'Please enter managers office phone number (required)',
    validate: managerPhoneInput => {
        if (managerPhoneInput) {
            return true;
        } else {
            console.log("Please enter managers office phone number");
            return false;
        }
    }
}]

class Manager extends Employee {
    constructor() {
        super()
        //overrides employee role to Manager
        this.role = 'Manager'
    }

    initManager() {
        return new Promise((resolve, reject) => {
            this.initEmployee().then(() => {
                inquirer
                    .prompt(questions)
                    .then(answer => {
                        this.officeNumber = answer.phone
                        resolve();
                    })
                    .catch(reject)
            })
        })
    }
}



module.exports = Manager;