const Employee = require('../lib/Employee');
const Engineer = require('../lib/Intern');

test('creates employee object', () => {
    const Engineer = new Employee();

    expect(Engineer.name).toBe(expect.any(String));
    expect(Engineer.id).toBe(expect.any(Number));
    expect(Engineer.email).toBe(expect.any(String));
    expect(Engineer.role).toBe(expect.any(String));
    expect(Engineer.school).toBe(expect.any(String))
})