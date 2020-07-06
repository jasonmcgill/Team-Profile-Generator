const Manager = require('../lib/Manager');
const inquirer = require("inquirer");

jest.mock('inquirer')

let answers = {
    email: 'some@example.com',
    name: 'Jason',
    id: 45646,
    officeNumber: 801-867-5309
}

test('creates employee object', () => {
    const manager = new Manager();

    inquirer.prompt = jest.fn().mockResolvedValue(answers);

    return manager.initManager().then(() => {

        expect(manager.name).toBe(answers.name);
        expect(manager.id).toBe(answers.id);
        expect(manager.email).toBe(answers.email);
        expect(manager.role).toBe('Manager');
        expect(manager.officeNumber).toBe(answers.phone)
    })
})
