//Person
class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I\'m ${this.name}. `;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

// Student
class Student extends Person {

    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){

        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` My major is ${this.major}.`;
        }

        return description;
    }
}

// Traveler
class Traveler extends Person{

    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let gretting = super.getGreeting();

        if(this.homeLocation){
            gretting += `I am visiting form ${this.homeLocation}!`;
        }

        return gretting;
    }
}

const me = new Traveler('Salvatore Parascandola', 27, 'Chandler, AZ');
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());

