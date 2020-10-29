// ƒlet input = prompt('Nhập vào dãy số: ');
// let nums = input.split(',').map(function(item));
// let result = [];
// for (let num of nums) {
//     result.push(Number(num))
// }

// let nums = input.split
// console.log(result);




// // ví dụ về map
// // let arr = [1, 2, 3, 4, 5, 6];
// // let result = arr.map(function(item) {
// //     return item * item
// // });

// // let result = [];
// // for (let item of arr) {
// //     result.push(item * item);
// // }


// /// viết chương trình quản lí tủ sách cá nhận

// // phân tích: tạo 1 tủ sách
// // thêm, bớt, sửa sách vào tủ

// // hãy lập 1 danh sách người yêu cũ và người mình thích
// // có 3 đối tượng: danh sách, người yêu cũ, người mình thích

// // class - object

// // class: bản thiết kế để taoj 1 đối tượng
// // object: đối tượng cụ thể tạo từ class

// class Person {
//     name;
//     age;
//     address;
//     sex;
//     status;
//     // constructor: 1 phương thức đặt biệt được gọi khi gọi new Person () được gọi
//     constructor(name, age, address, sex, status) {
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//         this.address = address;
//         this.status = status;
//         console.log(this)
//     }

//     // khai báo phương thức cho class, phải khai báo trong classs, nhớ ko có function phía trước

//     run() {
//         console.log(`I'm running`);
//     }

//     walk() {
//         console.log(`I'm walking`);
//     }

//     goto(destination) {
//         console.log(`I'm going to ${destination}`);
//     }

//     calculateSum(a, b) {
//         console.log(`${a} + ${b} = ${a + b}`);
//     }

//     introduce() {
//         console.log(`
//         Xin chào mọi người,
//         Mình là ${this.name},
//         Mình năm nay ${this.age} tuổi,
//         Quê mình ở ${this.address}.`)
//     }
// }



// let hoangAnh = new Person('hoanh anh', 20, 'Bắc Giang', 'nam', false);
// // console.log(hoangAnh);
// hoangAnh.goto('Quất Lâm');
// hoangAnh.introduce();


// class Animal {
//     name;
//     gender;
//     species;
//     color;
//     legs;

// constructor (name, gender, species, color, legs) {
//     this.name = name;
//     this.gender = gender;
//     this.species = species;
//     this.color = color;
//     this.legs = legs;
// }
// }

// let lu = new Animal('Lu', 'male', 'bulldog', 'brown', 'long');
// let ki = new Animal('Ki', 'male', 'corgi', 'white', 'short');
// let milk = new Animal('Milk', 'female', 'cho co', 'black', 'short');
// console.log(lu)
// console.log(ki);
// console.log(milk);


// // let long = new Person();

// // long.name = "Long";
// // long.age = 20;
// // long.address = "Hà Nội";
// // long.sex = "nam";
// // long.status = true;
// // console.log(long);

// // let vinh = new Person();
// // vinh.name = "Vinh";
// // vinh.age = 21;
// // vinh.address = "Hà Nội";
// // vinh.sex = "nam";
// // vinh.status = true;
// // console.log(vinh);


// // kế thừa

// class Person {
//     name;
//     age;
//     sex;
//     slogan;

//     constructor(name, age, sex, slogan) {
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//         this.slogan = slogan;
//     }
// }

// class GoodBoy extends Person {
//     poor;
// constructor(name, age, sex, slogan, poor) {
//     super(name, age, sex, slogan);
//     // bắt buộc phải có, dùng để gọi phương thức ở class cha để sử dụng, cách dùng tương tự callback
//     this.poor = poor;
// }
// }

// let long = new GoodBoy ('Long', 20, 'nam', 'Em ăn cơm chưa?', 'rớt mồng tơi')
// console.log(long);

// class BigCityBoy extends Person {
//     rich;
//     constructor(name, age, sex, slogan, rich) {
//         super(name, age, sex, slogan);
//         this.rich = rich;
//     }
// }

// hãy cài đặt các class sau:

// Person
// 

class Person {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    speak() {

    }
}

class Boy extends Person {
    sex;
    strength;
    hit;
    constructor(name, age, address, strength) {
        super(name, age, address),
        this.sex = 'male';
        this.strength = strength;
    }
    hit() {

    }
}

class Girl extends Person {
    sex = 'female';
    beauty;
    constructor (name, age, address, sex, beauty) {
        super(name, age, address);
        this.sex = sex;
        this.beauty = beauty;
    }
    cook() {
    }
}

class GoodBoy extends Boy {
    poor;
    constructor()
}


// tính đa hình