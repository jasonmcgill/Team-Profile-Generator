const inquirer = require('inquirer');

const questions = [{
        type: 'input',
        name: 'managerName',
        message: 'Enter team managers name (required)',
        validate: managerInput => {
            if (managerInput) {
                return true;
            } else {
                console.log('Please enter the team managers name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter managers employee ID (required)',
        validate: managerIdInput => {
            if(managerIdInput) {
                return true;
            } else {
                console.log('Please enter your Employee ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter managers email address (required)',
        validate: managerEmailInput => {
            if(managerEmailInput) {
                return true;
            } else {
                console.log("Please enter the managers email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerPhone',
        message: 'Please enter managers office phone number (required)',
        validate: managerPhoneInput => {
            if(managerPhoneInput) {
                return true;
            } else {
                console.log("Please enter managers office phone number");
                return false;
            }
        }
    }
]