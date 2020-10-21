let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = Number(prompt('Nhập vào số bất kì'));
let i;
let j;
let k;
for (let i = 0, j = 0; i<n.length, j<n.length, i<j ; i++, j++) {
    k = n[i] + n[j]
    if (k == x) {
        console.log(n.indexOf(i), n.indexOf(j));
    }
}
