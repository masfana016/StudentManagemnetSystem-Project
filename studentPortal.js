"use strict";
class Course {
    constructor(name, courseCode, credits) {
        this.name = name;
        this.courseCode = courseCode;
        this.credits = credits;
    }
}
;
class Student {
    constructor(name) {
        this.name = name;
        this.studentId = this.generateStudentID();
        this.courseEnrolled = [];
        this.balance = 0;
    }
    generateStudentID() {
        // Generate a 5-digit unique student ID
        return Math.floor(Math.random() * 100000).toString();
    }
    enroll(course) {
        this.courseEnrolled.push(course);
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Student ${this.name} paid ${amount} tuition`);
    }
    showStatus() {
        console.log(`Student ${this.name} has ${this.courseEnrolled.length} courses enrolled`);
        this.courseEnrolled.forEach((course) => {
            console.log(`Student ${this.name} is enrolled in ${course.name} (${course.courseCode})`);
        });
        console.log(`student ID: ${this.studentId}`);
        console.log(`Balance: ${this.balance}`);
    }
}
;
class studentManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudents(student) {
        this.students.push(student);
    }
    enrollStudent(student, course) {
        student.enroll(course);
        student.balance += course.credits * 100; // Assuming 1000 per credits
    }
    displayStudentStatus(student) {
        student.showStatus();
    }
}
;
const system = new studentManagementSystem();
const course1 = new Course("CS101", "Introduction to Computer Science", 3);
const course2 = new Course("ENG201", "English Composition", 4);
const student1 = new Student("John Doe");
const student2 = new Student("Jane Smith");
console.log(system.addStudents(student1));
console.log(system.addStudents(student2));
system.enrollStudent(student1, course1);
system.enrollStudent(student1, course2);
system.enrollStudent(student2, course1);
student1.payTuition(700);
student2.payTuition(300);
system.displayStudentStatus(student1);
system.displayStudentStatus(student2);
