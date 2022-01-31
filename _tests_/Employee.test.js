// Importing Employee constructor
const Employee = require('../lib/Employee');

// Creates employee object 
test('Employee Object', () => {
    const employee = new Employee('Jackeline', '90', 'jackietest@testmail.com');
    // gets employee name
    it('getName = name', () => {
        expect(employee.getName()).toEqual('Jackeline');
    })
    // gets employee id
    it('getID = id', () => {
        expect(employee.getId()).toEqual('90');
    })
    // gets employee email
    it('getEmail = email', () => {
        expect(employee.getEmail()).toEqual('jackietest@testmail.com');
    })
});