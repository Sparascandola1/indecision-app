var nameVar = 'Salvatore';
var nameVar = 'Sal';
console.log('nameVar', nameVar);

let nameLet = 'Bob';
nameLet = 'Bill';
console.log('nameLet', nameLet);

const nameConst = 'Jack';
console.log('nameConst', nameConst);

const fullName = 'Salvatore Parascandola';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);