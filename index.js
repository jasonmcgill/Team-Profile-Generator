const inquirer = require("inquirer");
const fs = require("fs");

function checkIfAnother() {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'checkIfAnother',
            message: 'Would you like to add another employee? ',
            default: false
        })
        .then(answer => {
            if (answer) {
                // new Employee
            } else {
                // fs write file html
            }
        })
}
// function to initialize program
function init() {
    this.employees = []

    console.log(`
    ===========================
    Hi! Lets generate a team profile!
    ===========================
    `);


};


// function call to initialize program
init();

module.exports = checkIfAnother;