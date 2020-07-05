const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern {
    constructor() {
        this.name = getName();
        this.id = getId();
        this.email = getEmail();
        this.role = getRole();

        this.school = getSchool();
    }

    getRole() {
        return 'intern';
    }

    getSchool() {
        inquirer
            .prompt({
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
            })
    }
}

Intern.prototype = Object.create(Employee.prototype)

module.exports = Intern;