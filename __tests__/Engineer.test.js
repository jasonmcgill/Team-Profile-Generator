const Engineer = require('../lib/Engineer');
const inquirer = require("inquirer");

jest.mock('inquirer')

let answers = {
    email: 'some@example.com',
    name: 'Jason',
    id: 45646,
    gitHub: 'U'
}

test('creates employee object', () => {
    const engineer = new Engineer();

    inquirer.prompt = jest.fn().mockResolvedValue(answers);

    return engineer.initEngineer().then(() => {
        expect(engineer.name).toBe(answers.name);
        expect(engineer.id).toBe(answers.id);
        expect(engineer.email).toBe(answers.email);
        expect(engineer.role).toBe('Employee');
        expect(engineer.github).toBe(answers.gitHub);
    })
})