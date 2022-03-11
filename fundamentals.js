// declare a variable using let and const

const name = "Adir";
let season = "winter";
season = "summer";

//Conditions
// 6 basic conditions : >, < , === ,<= , >=
//multiple conditions : $$ , ||

if (name === "Adir" || season === "summer") {

}

else if (name === "Adir") {
    
}

else {
    
}

//Array declare
// index, length, push,pop

const numbers = [11, 12, 14, 15, 15];
numbers[0] = 22;

// For loop iteration
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

//Function

function sum(number1, number2) {
    return number1 + number2;
}

const output = sum(101, 11);
console.log(output);

//Object : 3 ways to access by property names

const student = {
    name: 'Afsana Ara',
    age: 22,
    movies : ['friends', 'dark knight']
}

const herAge = 'age';

console.log(student.name); // direct by property name
console.log(student['movies']); // access via property name string
console.log(student[herAge]); // access via property name in a variable