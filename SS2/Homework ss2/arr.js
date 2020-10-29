// bài 3

let numbers = prompt('Input number: ');
if (numbers == "") {
    alert('hãy nhập số')
}


let arrNumbers = numbers.split(",").map(function (num) {
    return Number(num)
});

let check = {};
for (let i = 0; i < arrNumbers.length; i++) {
    if (!check[arrNumbers[i]]) {
        check[arrNumbers[i]] = 1;
    } else {
        check[arrNumbers[i]]++;
    }
}
console.log(check);

for (const number in check) {
    if (check[number] === 1) {
        console.log(number)
    }
}
// console.log(arrNumbers)