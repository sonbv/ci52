2
// bài 
class Company {
    name;
    establishedDate;
    country;
    businessType;
    employee =[];
    constructor(name, establishedDate, country, businessType, employee) {
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employee = employee;
    }
    // addEmployee(employee) {

    // }
    addAllEmployee() {
        this.employee.forEach(function(employees,index) {
            console.log(`${index + 1} . ${employees.name} . ${employees.age} . ${employees.sex} . ${employees.address}`)
        })
    }
    showCEO() {
        // console.log("CEO");
        this.employee.forEach(functioin())
    }
    showManagers() {
        console.log("Manager");

    }
    showStaff() {
        console.log("Staff");
    }
    }


class Employee {
    name;
    sex;
    age;
    address;
    constructor(name, sex, age, address) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.address = address;
    }
    about() {
        console.log(`My name is ${name}. I'm a ${sex}, ${age} years old. I live at ${address}.`)
    }
}

class CEO extends Employee {
    strategy;
    constructor(name, sex, age, address, strategy) {
        super(name, sex, age, address);
        this.strategy = strategy;
    }
}
class Manager extends Employee {
    managementStyle;
    constructor(name, sex, age, address, managementStyle) {
        super(name, sex, age, address);
        this.managementStyle = managementStyle;
    }
}
class Staff extends Employee {
    experience;
    constructor(name, sex, age, address, experience) {
        super(name, sex, age, address);
        this.experience = experience;
    }
}

let company = new Company (`SON Co,. Ltd`, `20/10/2020`, `Vietnam`, `Ltd Co`, employee);
let ceo = new Ceo(`Nguyễn Vĩnh Thái`, `male`, 28, `23 Hàng Trống`, `Biến khó khăn thành cơ hội`);


console.log(company);
console.log(ceo);



// bài 3

let numbers = prompt('Input number: ');
let arrNumbers = numbers.split(",")