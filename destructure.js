// Array destructure
const number = [433, 65];
const [x, y] = [42, 65];

const [a, b] = number;

function box(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [first, second] = box(30, 38);

console.log(box(50, 55));

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { name, age,salary } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
// const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;