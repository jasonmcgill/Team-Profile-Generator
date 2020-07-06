const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/generatePage")
let employees = []

//recursively calls checkIfAnother
function addEmployees() {
    return new Promise((resolve, reject) => {
        checkIfAnother().then(answer => {
                if (answer.shouldAskForAnotherEmployee) {
                    inquirer
                        .prompt({
                            type: 'list',
                            name: 'whichEmployee',
                            message: 'Which type of employee do you need to add?',
                            choices: ["Engineer", "Intern"]
                        }).then(answer => {
                            if (answer.whichEmployee === 'Engineer') {
                                const engineer = new Engineer();
                                engineer.initEngineer().then(() => {
                                    employees.push(engineer)
                                    addEmployees().then(() => {
                                        resolve();
                                    })
                                })
                            } else {
                                const intern = new Intern();
                                intern.initIntern().then(() => {
                                    employees.push(intern)
                                    addEmployees().then(() => {
                                        resolve();
                                    })
                                });
                            }
                        })
                } else {
                    //this resolves the addEmployee chain
                    resolve();
                }
            })
            .catch(reject);
    })
}

//asks if they need to add another employee
function checkIfAnother() {
    return inquirer
        .prompt({
            type: 'confirm',
            name: 'shouldAskForAnotherEmployee',
            message: 'Would you like to add another employee? ',
            default: false
        })
}

// function to write README file
function writeToFile(fileName, markdown) {
    fs.writeFile(fileName, markdown, err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`
            ===========================
            Successfully wrote File!
            ===========================
            `)
        }
    });
}

// function to initialize program
function init() {
    

    console.log(`
    ===========================
    Hi! Lets generate a team profile!
    ===========================
    `);
    // starts everything off by asking the new manager questions
    const manager = new Manager();
    manager.initManager().then(() => {
        // pushes manager data back to employees array
        employees.push(manager)
        // adds more employees
        addEmployees().then(() => {
            //write file
            let generated = generatePage(employees)
            let filename ='./dist/index.html'
            writeToFile(filename, generated)
        })
    })
};


// function call to initialize program
init();