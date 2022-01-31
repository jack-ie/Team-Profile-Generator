// import engineer constructor
const Engineer = require('../lib/Engineer');

test('Engineer', () => {
    const engineer = new Engineer('Jackeline', '90', 'jackietest@testmail.com', 'mygithub');
    // gets engineer name
    it('getName = name', () => {
        expect(engineer.getName()).toEqual('Jackeline');
    })
    // gets engineer id
    it('getID = id', () => {
        expect(engineer.getId()).toEqual('90');
    })
    // gets engineer email
    it('getEmail = email', () => {
        expect(engineer.getEmail()).toEqual('jackietest@testmail.com');
    })
    // gets engineer github username
    it('getGithub = github', () => {
        expect(engineer.getGithub()).toEqual('mygithub');
    })
});