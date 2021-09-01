const user = {

    name: 'Sal',
    cities: ['Rio Rancho', 'Lemoore', 'Chandler'], 
    printPlacesLived() {
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Section 3 ES6 Challenge 2:
// New const multiplier
// Numbers - array of numbers
// Multiply by - single number
// Multiply - return a new array where the numbers have been multiplied
const multiplier = {

    numbers: [10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}; 

console.log(multiplier.multiply());



