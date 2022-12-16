
"use strict"

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  promote(newJobTitle , newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate
  }

  getIntro() {
    let intro = `Hi! I'm ${this.fullName()} and I am a ${this.jobTitle}.`;
    return intro;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

console.log(`Employee ${employee1.fullName()} created`);
console.log("-----------------------------------");

console.log(`Job title is ${employee1.jobTitle}`);
console.log("-----------------------------------");

console.log(`Pay rate is $${employee1.payRate}`);
console.log("-----------------------------------");

console.log(employee1.getIntro());
console.log("-----------------------------------");

employee1.promote("Sr. Graphic Artist", 46.75);

console.log(`Job title is ${employee1.jobTitle}`);
console.log("-----------------------------------");

console.log(`Pay rate is $${employee1.payRate}`);
console.log("-----------------------------------");

console.log(employee1.getIntro());

console.log("-----------------------------------");
console.log("-----------------------------------");
console.log("-----------------------------------");

let employee2 = new Employee(2, "Will", "A", "Artist", 42.00);

console.log(`Employee ${employee2.fullName()} created`);
console.log("-----------------------------------");

console.log(`Job title is ${employee2.jobTitle}`);
console.log("-----------------------------------");

console.log(`Pay rate is $${employee2.payRate}`);
console.log("-----------------------------------");

console.log(employee2.getIntro());
console.log("-----------------------------------");

employee2.promote("Sr. Artist", 50.00);

console.log(`Job title is ${employee2.jobTitle}`);
console.log("-----------------------------------");

console.log(`Pay rate is $${employee2.payRate}`);
console.log("-----------------------------------");

console.log(employee2.getIntro());