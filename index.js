const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/generatePage")
//global array for employee objects
let employees = []

//recursively calls checkIfAnother
function addEmployees() {
    return new Promise((resolve, reject) => {
        //checks if they need to add another employee
        checkIfAnother().then(answer => {
                if (answer.shouldAskForAnotherEmployee) {
                    //when they need to add another employee it asks which kind
                    inquirer
                        .prompt({
                            type: 'list',
                            name: 'whichEmployee',
                            message: 'Which type of employee do you need to add?',
                            choices: ["Engineer", "Intern"]
                        }).then(answer => {
                            if (answer.whichEmployee === 'Engineer') {
                                //if they select engineer, create new engineer
                                const engineer = new Engineer();
                                // run through the questions
                                engineer.initEngineer().then(() => {
                                    //push the object to the array
                                    employees.push(engineer)
                                    //calls its self to rerun the check
                                    addEmployees().then(() => {
                                        resolve();
                                    })
                                })
                            } else {
                                //if they select Intern create new intern
                                const intern = new Intern();
                                //run through the questions
                                intern.initIntern().then(() => {
                                    //push intern object to array
                                    employees.push(intern)
                                    //calls itself to rerun the check
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