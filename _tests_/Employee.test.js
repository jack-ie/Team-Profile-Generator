// Importing Employee constructor
const Employee = require('../lib/Employee');

// Creates employee object 
test('Employee Object', ()=>{
    const employee = new Employee('Jackeline', '90', 'jackietest@testmail.com');
    it('getName = name', ()=>{
        expect(employee.getName()).toEqual('Jackeline');
    })
    it("getID = id", () => {
        expect(employee.getId()).toEqual('90');
      })
      it("getEmail = email", () => {
        expect(employee.getEmail()).toEqual('jackietest@testmail.com');
      })
});