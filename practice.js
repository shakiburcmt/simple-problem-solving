// let a = 'ejif';
// a = 'fe';
// const f = false;
// console.log(a);

// //const a = 7;
// for (let i = 1; i <= 19; i += 2) {
//     console.log(i);
// }


// let frome = 7;
// while (frome <= 19) {
//     console.log(frome);
//     frome += 2;
// }


// const array = ['shakib', 3, 4, 'ayesha', 'umme'];
// for (let i = 0; i < array.length; i++) {
//     const arr = array[i];
//     console.log(arr);
// }


const arra = ['shakib', 3, 4, 'ayesha', 'umme'];
console.log(arra.length);
const abc = arra.splice(4, 4, '333');
console.log(arra);

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}
const result = multiply(4, 6, 2);
console.log(result);


const myObject = {
    name: 'Shakib',
    age: 24,
    height: 5
}
myObject.name = "Sizan";
console.log(myObject);