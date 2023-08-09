//complete this code
class Person {
	constructor(name, age){
		this.name : name;
		this.age: age;
	}
}
get name(){
	this.name 
}
set age(){
	this.age: age;
	
}
class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
const Person = new person("john", 13);
const teacher = new Teacher("akhil", 27);
teacher.teach();

const student = new Student('swati', 18);
student.study();
const student1 = new Student('abha', 20);
student1.study();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
