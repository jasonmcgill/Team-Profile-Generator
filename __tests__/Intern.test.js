const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates employee object', () => {
    const Intern = new Employee();

    expect(Intern.name).toBe(expect.any(String));
    expect(Intern.id).toBe(expect.any(Number));
    expect(Intern.email).toBe(expect.any(String));
    expect(Intern.role).toBe(expect.any(String));
    expect(Intern.school).toBe(expect.any(String))
})