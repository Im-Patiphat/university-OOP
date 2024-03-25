class University {
    name = "";
    location = "";
    departments = [];
    students = [];
    professors = [];
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
    addDepartment(department) {
        this.departments.push(department)
    }
    addStudent(student) {
        this.students.push(student)
    }
    addProfessor(professor) {
        this.professors.push(professor)
    }
    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getDepartments() {
        let department = "";
        for (let i = 0; i < this.departments.length; i++) {
            department += this.departments[i].name + ", "

        } return department

    }
    getStudents() {
        let student = "";
        for (let i = 0; i < this.students.length; i++) {
            student += this.students[i].name + ", "

        } return student
    }
    getProfessors() {
        let professor = "";
        for (let i = 0; i < this.professors.length; i++) {
            professor += this.professors[i].name + ", "

        } return professor
    }
    toString() {
        return `University: ${this.name}, \n\tLocation: ${this.location},\n\tDepartment: ${this.getDepartments()}\n\tStudent: ${this.getStudents()}\n\tProfessor: ${this.getProfessors()}\n`
    }
}
//------------- Department
class Department {
    name = "";
    courses = [];
    students = [];
    professors = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    addStudent(student) {
        this.students.push(student)
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    addProfessor(professor) {
        this.professors.push(professor)
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getCourses() {
        return this.courses.length
    }

    getStudents() {
        let student = "";
        for (let i = 0; i < this.students.length; i++) {
            student += this.students[i].name + ", "

        } return student
    }
    getProfessors() {
        let professor = "";
        for (let i = 0; i < this.professors.length; i++) {
            professor += this.professors[i].name + ", "

        } return professor
    }
    toString() {
        return `Department: ${this.name},\n\tCourse: ${this.getCourses()}\n\tStudent: ${this.getStudents()}\n\tProfessor: ${this.getProfessors()}\n`
    }
}
class Course {
    code = "";
    title = "";
    professor = null;
    students = [];
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
    addStudent(student) {
        this.students.push(student)
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    setProfessor(professor) {
        this.professor = professor
    }
    getStudents() {
        let student = "";
        for (let i = 0; i < this.students.length; i++) {
            student += this.students[i].name + ", "

        } return student
    }
    getProfessor() {
        return this.professor
    }
    toString() {
        return `Course: ${this.code} - ${this.title},\n\tProfessor: ${this.getProfessor().name},\n\tStudent: ${this.getStudents()}\n`
    }
}
//----------PerSon
class Person {
    name = "";
    address = "";
    email = "";
    constructor(name, address, email) {
        this.name = name;
        this.address = address;
        this.email = email;
    }
    toString() {
        return `Person: ${this.name}, ${this.address}, ${this.email}`
    }
}

//-------------Student
class Student extends Person {
    studentId = "";
    year = 0;
    courses = [];
    constructor(name, address, email, studentId, year) {
        super(name, address, email);
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(course) {
        this.courses.push(course)
    }
    dropCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let course = "";
        for (let i = 0; i < this.courses.length; i++) {
            course += this.courses[i].title + ", "

        } return course
    }

    toString() {
        return `Student: ${this.name}, Student ID: ${this.studentId}, Year: ${this.year},\n\tCourses: ${this.getCourses()}\n`
    }
}
class Professor extends Person {
    staffId = "";
    courses = [];
    constructor(name, address, email, staffId) {
        super(name, address, email)
        this.staffId = staffId;
    }
    teachCourse(course) {
        this.courses.push(course)
    }
    stopTeachingCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let course = "";
        for (let i = 0; i < this.courses.length; i++) {
            course += this.courses[i].title + ", "

        } return course
    }
    toString() {
        return `Professor: ${this.name}, Staff ID: ${this.staffId},\n\tCourses: ${this.getCourses()}\n`
    }
}
main = () => {
    const university = new University("Nakhon Pathom Rajabhat Universitys", "85 Malaiman Road, Nakhon Pathom, Thailand");

    const computer_science = new Department("Computer Science");
    const software_engineering = new Department("Software Engineering");
    //----------- add Department to University
    university.addDepartment(computer_science);
    university.addDepartment(software_engineering);

    const course1 = new Course("CS101", "Introduction to Programming");
    const course2 = new Course("SE101", "Introduction of Database Design");

    //--------- add Course to Department
    computer_science.addCourse(course1);
    software_engineering.addCourse(course2)

    const person1 = new Person("Bob", "Bob House", "bob@gmail.com");
    const person2 = new Person("Alice", "Alice House", "alice@gmail.com");
    const person3 = new Person("Dr. Worachet Uttha", "Worachet House", "Worachet@gmail.com");
    const person4 = new Person("Dr. Udsanee Pakdeetrakulwong", "Bob House", "bob@gmail.com");

    const alice = new Student(person2.name, person2.address, person2.email, "S001", 1);
    const bob = new Student(person1.name, person1.address, person1.email, "S002", 2);
    const worachet = new Professor(person3.name, person3.address, person3.email, "P001");
    const udsanee = new Professor(person4.name, person4.address, person4.email, "P002")

    //--------- add Professor to University
    university.addProfessor(worachet);
    university.addProfessor(udsanee);

    //--------- add Student to University
    university.addStudent(alice);
    university.addStudent(bob);

    //--------- add Professor to Department
    computer_science.addProfessor(worachet);
    software_engineering.addProfessor(udsanee);

    //--------- add Student to Department
    computer_science.addStudent(alice);
    software_engineering.addStudent(bob);

    //--------- add Student to Course
    course1.addStudent(alice);
    course2.addStudent(bob);

    //--------- set Professor to Course
    course1.setProfessor(worachet);
    course2.setProfessor(udsanee);

    //----------- Student Register
    alice.registerCourse(course1)
    bob.registerCourse(course2)

    //----------- Professor Teach Course
    worachet.teachCourse(course1);
    udsanee.teachCourse(course2);

    university.removeDepartment(software_engineering)

    console.log(university.toString());
    console.log(computer_science.toString());
    console.log(software_engineering.toString());
    console.log(course1.toString());
    console.log(course2.toString());
    console.log(alice.toString());
    console.log(bob.toString());
    console.log(worachet.toString());
    console.log(udsanee.toString());
    console.log(`Student In The University: `);
    for (let i = 0; i < university.students.length; i++) {
        let studentAll = university.students[i].toString();
        console.log(`\t${studentAll}`);
    }
    console.log(`Professor In The University: `);
    for (let i = 0; i < university.professors.length; i++) {
        let professorAll = university.professors[i].toString();
        console.log(`\t${professorAll}`);
    }
    console.log(`Department In The University: `);
    for (let i = 0; i < university.departments.length; i++) {
        let departmentAll = university.departments[i].toString();
        console.log(`\t${departmentAll}`);
    }



}
main()