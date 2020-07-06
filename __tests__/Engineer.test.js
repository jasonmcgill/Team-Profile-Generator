const Engineer = require('../lib/Engineer');
const inquirer = require("inquirer");

jest.mock('inquirer')
//answers to help mock
let answers = {
    email: 'some@example.com',
    name: 'Jason',
    id: 45646,
    gitHub: 'githubaccount'
}

test('creates employee object', () => {
    const engineer = new Engineer();
 //gets the value from the answers object above
    inquirer.prompt = jest.fn().mockResolvedValue(answers);

    return engineer.initEngineer().then(() => {
        expect(engineer.name).toBe(answers.name);
        expect(engineer.id).toBe(answers.id);
        expect(engineer.email).toBe(answers.email);
        expect(engineer.role).toBe('Engineer');
        expect(engineer.github).toBe(answers.gitHub);
    })
})