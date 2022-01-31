// import manager constructor
const Manager = require("../lib/Manager");

test('Manager', () => {
    const manager = new Manager('Jackeline', '90', 'jackietest@testmail.com', '123-456-6789');
    // gets manager name
    it('getName = name', () => {
      expect(manager.getName()).toEqual('Jackeline');
    })
    // gets manager id
    it("getID = id", () => {
      expect(manager.getId()).toEqual('90');
    })
    // gets manager email
    it('getEmail = email', () => {
      expect(manager.getEmail()).toEqual('jackietest@testmail.com');
    })
    // gets manager office number
    it('getOfficeNumber = number', () => {
      expect(manager.getOfficeNumber()).toEqual('123-456-6789');
    })    
  });