const arr = [99, 40, 5, 100, 50, 81, 70, 95, 65];
let newArray = [];
for (let i = 0; i <= arr.length; i++) {
    const notun = arr[i];
    if (notun > 80) {
        newArray.push(notun);
    }


}
console.log(newArray);

function bigName(fromFriends) {
    let longName = [0];
    for (let i = 0; i < fromFriends.length; i++) {
        const friend = fromFriends[i];
        if (friend.length > longName.length) {
            longName = friend;
        }
    }
    return longName;
}
const array = bigName(['Shakib', 'Shakibur', 'Umme', 'Nadia', 'Ayesha', 'Mim', 'Mari']);
console.log(array);




