const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//Fetch

// fetch(url)
//     .then(res => res.json())
// then(data => console.log(data));

//key,values
const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

//For

const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(number => console.log(number));
numbers.map(number => console.log(number));

//for of on array like object like
//loop on an object using for in

//ADD or REMOVE from array

const products = [
   { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' } 
];

const newProduct = { name: 'webcam', price: 300, brand: 'lal' };

//copy products array and then add new product

const currentProduct = [...products, newProduct];
console.log(currentProduct);

//Create a new array without one specific item
//REMOVE watch means create a new array without watch

const remainingProducts = products.filter(product => product.name !== 'watch');
console.log(remainingProducts);