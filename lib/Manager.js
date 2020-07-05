const Employee = require('./Employee');
const inquirer = require('inquirer');

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
        this.role = 'Manager'
    }

    initManager() {
        this.initEmployee().then(() => {
            inquirer
                .prompt(questions)
                .then(answer => {
                    console.log(answer)
                })
        })

        // this.officeNumber = getPhone();
    }

}



module.exports = Manager;