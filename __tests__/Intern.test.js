const Intern = require('../lib/Intern');
const inquirer = require("inquirer");

jest.mock('inquirer')

let answers = {
    email: 'some@example.com',
    name: 'Jason',
    id: 45646,
    school: 'U'
}

test('creates intern object', () => {
    const intern = new Intern();
    
    inquirer.prompt = jest.fn().mockResolvedValue(answers);

    return intern.initIntern().then(() =>{
        
        expect(intern.name).toBe(answers.name);
        expect(intern.id).toBe(answers.id);
        expect(intern.email).toBe(answers.email);
        expect(intern.role).toBe('Employee');
        expect(intern.school).toBe(answers.school)
    })
})