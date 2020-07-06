const inquirer = require("inquirer");
//questions that get asked for all types of employees
const employeeQuestions = [
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

//parent class of all employees
class Employee {
    constructor() {
        //default set to employee
        this.role = 'Employee';
    }

    initEmployee() {
        return new Promise((resolve, reject) => {
            inquirer
                .prompt(employeeQuestions)
                .then(answer => {
                    this.name = answer.name;
                    this.id = answer.id;
                    this.email = answer.email
                    resolve();
                })
                .catch(err => {
                    reject (err)
                })
        })


    }
}

module.exports = Employee;