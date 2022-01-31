// import intern constructor
const Intern = require('../lib/Intern');

test('Intern', () => {
    const intern = new Intern('Jackeline', '90', 'jackietest@testmail.com', 'Northwestern University');
    // gets intern name
    it('getName = name', () => {
        expect(intern.getName()).toEqual('Jackeline');
    })
    // gets intern id
    it('getId = id', () => {
        expect(intern.getId()).toEqual('90');
    })
    // gets intern email
    it('getEmail = email', () => {
        expect(intern.getEmail()).toEqual('jackietest@testmail.com');
    })
    // gets intern school
    it('getSchool = school', () => {
        expect(intern.getSchool()).toEqual('Northwestern University');
    })
});