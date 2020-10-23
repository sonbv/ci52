// let n = [1, 9, 4, 7, 5, 10]

// console.log('In ra các phần tử chẵn và xếp theo thứ tự tăng dần')


// dùng vòng lặp
// for (let i=0 ; i<n.length; i += 2) {
//     if (n[i] % 2 == 0) {

//     }

//     let y = n[i]
//     i += 2
//     console.log(y);
// }

// không dùng vòng lặp


// cho biến x, giá trị đầu vào của x có thể là 0 hoặc 1.
// Không sử dụng if ... else, switch .... case  hãy in ra màn hình
//1. nếu là 1, i  true, lad 0 in false
//2. nếu là 1, in ra 0, nếu là 0- in ra 1

// let x = Number(prompt('Hãy nhập vào số 0 hoặc 1'))
// function test1(x) {
//     // return x == 0
//     console.log(x == 0)
// }
// function test2(x) {
//     // return !x
//     console.log(1 - x)
// }


// qui ước đặt DOM có tiền tố $
let $no = document.getElementById('no')
let $answer = document.getElementById('answers')



// thêm hàm xử lí
// $no.addEventListener('mouseenter', function () {
//     alert('bb')
// });


//ghi đè sự kiện onmouseenter 
$no.onmouseenter = function () {
$answer.classList.toggle('revert');
}


/// position: absolute
// top:
// left:
// opacity:

// $no.removeEventListener('mouseenter');










