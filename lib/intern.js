const Employee = require("./Employee");

// extends employee constructor for intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;