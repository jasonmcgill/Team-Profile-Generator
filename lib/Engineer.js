const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer {
    constructor() {
        this.name = getName();
        this.id = getId();
        this.email = getEmail();
        this.role = getRole();

        this.gitHub = getGitHub();
    }

    getRole() {
        return 'Engineer'
    }

    getGitHub() {
        inquirer
            .prompt({
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
            })
    }
}

Engineer.prototype = Object.create(Employee.prototype)

module.exports = Engineer;