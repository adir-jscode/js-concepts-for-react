const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// Template String

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} alos liked movies ${student.movies[0]}`;
console.log(about);

//Arrow Function

const getFifteen = () => 15;
const addFifty = (num) => num + 50;
const isEven = (num) => num % 2 == 0;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
const doSum = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//Spread Operator

const newNumber = [...numbers];

//create a new array from an older array and add an element
const currentNumbers = [...numbers, 77];
numbers.push(88);
newNumber.push(99);
console.log(currentNumbers);

console.log(newNumber);