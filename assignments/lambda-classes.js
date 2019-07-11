// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}`
    }
};

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.favLanguage = instructorAttrs.favLanguage;
        this.specialty = instructorAttrs.specialty;
        this.skillLevel = instructorAttrs.skillLevel;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perect score on ${subject}`
    }
};

class Student extends Person {
    constructor(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.
}


const kasit = new Student({
    name: 'Kasit',
    location: 'Thailand',
    age: 22
})

const tim = new Instructor({
    name: 'Timothy',
    location: 'USA',
    age: 26,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    skillLevel: 100
})