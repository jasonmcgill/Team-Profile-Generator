const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.role).toBe(expect.any(String));
})

