class Course {
    name: string;
    courseCode: string;
    credits: number;
    constructor(name: string, courseCode: string, credits: number) {
        this.name = name;
        this.courseCode = courseCode;
        this.credits = credits;
    }
};

class Student {
    name: string;
    studentId: string;
    courseEnrolled: Course[];
    balance: number;
    constructor(name: string) {
        this.name = name;
        this.studentId = this.generateStudentID();
        this.courseEnrolled = [];
        this.balance = 0;
    }
    private generateStudentID(): string {
        // Generate a 5-digit unique student ID
        return Math.floor(Math.random() * 100000).toString();
    }
    enroll(course:Course):void {
        this.courseEnrolled.push(course);
    }
    viewBalance(): number {
        return this.balance;
    }
    payTuition(amount:number):void {
        this.balance -= amount;
        console.log(`Student ${this.name} paid ${amount} tuition`);
    }
    showStatus():void {
        console.log(`Student ${this.name} has ${this.courseEnrolled.length} courses enrolled`);
        this.courseEnrolled.forEach((course) => {
            console.log(`Student ${this.name} is enrolled in ${course.name} (${course.courseCode})`);
        })
        console.log(`student ID: ${this.studentId}`)
        console.log(`Balance: ${this.balance}`);
        
    }
};

class studentManagementSystem {
    students: Array<Student>;
    constructor() {
        this.students = [];
    }
    addStudents(student: Student): void {
        this.students.push(student);
    }
    enrollStudent(student: Student, course: Course): void {
        student.enroll(course);
        student.balance += course.credits * 100; // Assuming 1000 per credits
    }
    displayStudentStatus(student: Student): void {
        student.showStatus();
    }
};

const system = new studentManagementSystem();

const course1 = new Course("CS101", "Introduction to Computer Science", 3);
const course2 = new Course("ENG201", "English Composition", 4);

const student1 = new Student("John Doe");
const student2 = new Student("Jane Smith");

system.addStudents(student1);
system.addStudents(student2);

system.enrollStudent(student1, course1);
system.enrollStudent(student1, course2);
system.enrollStudent(student2, course1);

student1.payTuition(700);
student2.payTuition(300);

system.displayStudentStatus(student1);
system.displayStudentStatus(student2);




