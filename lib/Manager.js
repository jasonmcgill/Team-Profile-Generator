const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager {
    constructor() {
        this.name = getName();
        this.id = getId();
        this.email = getEmail();
        this.role = getRole();

        this.officeNumber = getPhone();
    }

    getRole() {
        return 'Manager';
    }

    getPhone() {
        inquirer
            .prompt({
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
            })
            .then(answer => {
                return answer
            })
    }
}

Manager.prototype = Object.create(Employee.prototype)

module.exports = Manager;