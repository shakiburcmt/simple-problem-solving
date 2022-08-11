const array = [99, 40, 5, 50, 81, 70, 95, 65];
let newArray = [];
for (let i = 0; i <= array.length; i++) {
    const notun = array[i];
    if (notun > 80) {
        newArray.push(notun);
    }


}
console.log(newArray);