const inquirer = require("inquirer");
const employeeQuestions = [{
        type: 'text',
        name: 'name',
        message: 'What is the name? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the name')
                return false
            }
        }
    },
    {
        type: 'text',
        name: 'name',
        message: 'What is the name? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the name')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID (required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter employee ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee Email (required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter employee email');
                return false;
            }
        }
    }
]


class Employee {
    constructor() {
        this.role = 'employee';
    }

    initEmployee() {
        inquirer
            .prompt(employeeQuestions)
            .then(answer => {
                console.log(answer);
                this.name = answer.name;
                this.id = answer.id;
                this.email = answer.email
            })

    }
}

module.exports = Employee;