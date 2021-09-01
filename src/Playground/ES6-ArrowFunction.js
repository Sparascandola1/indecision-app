function square(x){
    return x*x;
};

console.log(square(8));

// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrow = (x) => x*x;

console.log(squareArrow(5));

// Section 3 ES6 Challenge 1:
// getFirstName('Mike Smith') -> Mike
// Create regular arrow function
// Create arrow function using expression syntax 
const fullName = 'Salvatore Parascandola';

// Regular Arrow Function
const getFirstNameRegularArrowFunction = (name) => {
    return name.split(' ')[0];
}

// Expression Syntax Arrow Function
const getFirstNameExpressionSyntaxArrowFunction = (name) => name.split(' ')[0];

console.log(getFirstNameRegularArrowFunction(fullName));
console.log(getFirstNameExpressionSyntaxArrowFunction(fullName));
