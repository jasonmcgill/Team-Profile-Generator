const Employee = require('../lib/Employee');
const inquirer = require("inquirer");

jest.mock('inquirer')

//answers to help mock
let answers = {
    email: 'some@example.com',
    name: 'Jason',
    id: 45646,
    gitHub: 'U'
}

test('creates employee object', () => {
    const employee = new Employee();
    //gets the value from the answers object above
    inquirer.prompt = jest.fn().mockResolvedValue(answers);

    return employee.initEmployee().then(() => { 
        
        expect(employee.name).toBe(answers.name);
        expect(employee.id).toBe(answers.id);
        expect(employee.email).toBe(answers.email);
        expect(employee.role).toBe('Employee');
    })
    
})

