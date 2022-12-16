
"use strict"

class Person {
    constructor(firstName , lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName , lastName)
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getGrossedPay(hoursWorked) {
        return this.payRate * hoursWorked;
    }
}

//Exercise 1
let p1 = new Person("Willian" , "Arenas");
console.log(p1.getFullName());
console.log("-----------------------------------");


//Exercise 2
let emp1 = new Employee("Willian", "Arenas", 1, "Artist", 20);
console.log(emp1.getFullName());
console.log("-----------------------------------");


//Exercise 3
console.log(`Hello my name is ${emp1.getFullName()} and my gross pay this week is ${emp1.getGrossedPay(40)}`);
console.log("-----------------------------------");


//Exercise 2
let emp2 = new Employee("Something", "Random", 2, "Cashier", 15);
console.log(emp2.getFullName());
console.log("-----------------------------------");


//Exercise 3
console.log(`Hello my name is ${emp2.getFullName()} and my gross pay this week is ${emp2.getGrossedPay(20)}`);
console.log("-----------------------------------");