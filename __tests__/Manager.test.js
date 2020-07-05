const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates employee object', () => {
    const Manager = new Employee();

    expect(Manager.name).toBe(expect.any(String));
    expect(Manager.id).toBe(expect.any(Number));
    expect(Manager.email).toBe(expect.any(String));
    expect(Manager.role).toBe(expect.any(String));
    expect(Manager.officeNumber).toBe(expect.any(Number))
})
