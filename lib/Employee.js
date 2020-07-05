const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name = getName();
        this.id = getId();
        this.email = getEmail();
        this.role = getRole();
    }

    getName() {
        inquirer
            .prompt({
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
            })
            .then(answer => {
                return answer
            })
    }

    getId() {
        inquirer
            .prompt({
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
            })
            .then(answer => {
                return answer
            })
    }

    getEmail() {
        inquirer
            .prompt({
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
            })
            .then(answer => {
                return answer
            })
    }

    getRole() {
        inquirer
            .prompt({
                type: 'list',
                name: 'role',
                message: 'Select a role',
                choices: ['Engineer', 'Intern']
            })
            .then(answer => {
                return answer
            })
    }
}

module.exports = Employee;