// cách 1: khó nhưng cần tìm hiểu thêm

// let data = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//     //   console.log(response);
//   })
//   .then(function (dt) {
//     // console.log(dt);
//     logName(dt);
//   });
// function logName(dt) {
//   dt.forEach(function (user) {
//     console.log(user.name);
//   });
// }

// cách 2: nhanh hơn nhận kết quả cấp tốc
async function getData() {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await fetchData.json();
  console.log(data);
}



//async luôn trả về 1 promise
//json là 1 method nên cần đóng mở ngoặc



getData();

//status: < 400 thường là đúng, >400 thì thường là sai
//ok: true là đúng
// http status code

// thêm để biết
// let a;
// setTimeout(function () {
//   a = 5;
//   function sum() {
//     a = a * 10;
//   }
//   sum();
//   console.log(a);
// }, 1000);
// // console.log(a * 10);

// //có 2 phương thức của promise là .then và .catch
// // fetch cũng là 1 phương thức của promise nên cũng có .then và .catch
// promise có 2 statement là reject hoặc fulfill
