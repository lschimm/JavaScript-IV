// CODE here for your Lambda Classes



class Person {
    constructor(att1){
        this.name = att1.name
        this.age = att1.age
        this.location = att1.location
    }
    speak() {
        return `Hello, my  is ${this.name}. I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(att2){
        super (att2)
        this.specialty = att2.specialty
        this.favLanguage = att2.favLanguage
        this.catchPhrase = att2.catchPhrase
    }
    demo(){
        return `Today we are learning about ${this.favSubject}`
    }
    grade(){
        return `${student.name} receives a perfect score on $this.favSubject}`
    }
}

class Student extends Instructor{
    constructor (att3){
        super(att3)
        this.previousBackground = att3.previousBackground
        this.className - att3.className
        this.favSubject = att3.favSubject
    }
    listSubjects() {
        return `${this.favSubject}`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.favSubject}`
    }
    sprintchallenge() {
        return `${this.name} has begun sprint challenge on ${this.favSubject}`
    }
}

class ProjectManager extends Student {
        constructor (att4) {
            super(att4)
            this.gradClassName = att4.gradClassName
            this.favInstructor = att4.favInstructor
        }
    standUp() {
        return `${this.name} announces to ${this.channel}, standy times!`
    }
    debugsCode() {
        `${this.name} debugs {this.favSubject}`
    }
}





//======= Objects

// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });
//   ```


const henry = new Person({
    name: 'Henry',
    location: 'Seoul',
    age: 27,
    favLanguage: 'Python',
    specialty: 'Eating well',
    catchPhrase: 'There is always time to eat.',
    favSubject: 'Lunch'
});


const tai = new ProjectManager({
    name: 'Tai',
    location: 'Mobile',
    age: 31,
    favLanguage: 'Enigma Code',
    specialty: 'Building gundams',
    catchPhrase: "I don't know.",
    favSubject: 'anything but math'
})

const theDude = new Student({
    name: 'The Dude',
    location: 'LA',
    age: 69,
    favLanguage: 'None',
    specialty: 'Relaxing',
    catchPhrase: "That's just, like, your opinion, man.",
    favSubject: 'Free study period'
})

const scott = new Instructor ({
    name: 'Scott Pilgrim',
    location: 'Toronto',
    age: 23,
    favLanguage: 'Love, lol',
    specialty: 'Being incredibly awkward',
    catchPhrase: 'An epic of epic epicness',
    favSubject: 'Music'
})


    console.log(henry.location);
    console.log(theDude.catchPhrase); 
    console.log(scott.favLanguage);
    console.log(henry.speak());
    console.log(scott.demo())
    console.log(theDude.listSubjects())
    console.log(theDude.sprintchallenge())
    console.log()
    console.log()