const Employee = require("./Employee");
// const card = require("../templates/Cards");

// extends employee to manager
class Manager extends Employee {
   constructor(name, id, email, officeNumber) {
      super(name, id, email, officeNumber);
      this.officeNumber = officeNumber;
   }

   getOfficeNumber() {
      return this.officeNumber;
   }

   getRole() {
      return "Manager";
   }
}

module.exports = Manager;