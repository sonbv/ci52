export default class Contact {
  name;
  numberPhone;
  address;
  email;
  constructor(name, numberPhone, address, email) {
    this.name = name;
    this.numberPhone = numberPhone;
    this.address = address;
    this.email = email;
  }
}

showInfo() {
    console.log(`
    Name: ${this.name}
    Number Phone: ${this.numberPhone}
    Address: ${this.address}
    Email: ${this.email}
    `)
    set sName(name) {
        this.name = name;
    }
    set sEmail(email) {
        this.email = email;
    }
    set sNumberPhone(numberPhone) {
        this.numberPhone = numberPhone;
    }
    set sAddress(address) {
        this.address = address;
    }
}

