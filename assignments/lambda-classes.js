// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.location = attrs.location;
        this.age = attrs.age;
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
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `These are ${this.name}'s favorite subjects: ${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
};

class PM extends Instructor {
    constructor(PMAttrs) {
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
};


const josh = new Instructor({
    name: 'Josh Knell',
    location: 'USA',
    age: 38,
    favLanguage: 'JavaScript',
    specialty: [
        'Banjo',
        'Hmong'
    ],
    skillLevel: 10000
})

const kasit = new Student({
    name: 'Kasit',
    location: 'Thailand',
    age: 22,
    className: 'WEBPT 8',
    favSubjects: [
        'HTML',
        'CSS',
        'Javascript'
    ]
})

const tim = new PM({
    name: 'Timothy Shores',
    location: 'USA',
    age: 26,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    skillLevel: 1000,
    gradClassName: 'WEB15',
    favInstructor: 'Keiran'
})

console.log(tim.debugsCode(kasit, 'react'));
console.log(josh.specialty);
console.log(kasit.listsSubjects());
console.log(tim.grade(kasit, 'Javascript'));