import DSKH from "./Contact.js"

export default class Contacts {
    lists = [];
    constructor(lists) {
        this.lists = lists;
    }
    addContact(name,numberPhone,address = "", email = "") {
        if(name.trim() === "" || numberPhone.length != 10 || isNaN(Number(numberPhone))) {
            return;
            // return "vui long nhap dung du lieu"
            // return "Input Invalid"
            // khi return o dau thi chuong trinh dung o day, ke ca trong vong lap
        }
let contact = new Contact(name, numberPhone, address, email);
this.lists.push(contact);

    }
    editContact(numberPhone, contact) {
       let index = this.lists.findIndex(function(contact) {
            return contact.numberPhone === numberPhone;
        })

        // /* contact ={
            // name: Hanh
            // numberphone: "8943849"

        }
        // function duoi dang parameter goi la 1 callback
        if(index != -1) {
if ("name" in contact) {
    this.lists[index].sName = contact.name;
}  if ("numberPhone" in contact) {
this.lists[index].sNumberPhone = contact.numberPhone;
} if ("email" in contact) {
    this.lists[index].sEmail = contact.email;
}  if ("address" in contact) {
    this.lists[index].sAddress = contact.address;
}    }
    }
    }
}

deleteContact(numberPhone) {
this.lists = this.lists.BiquadFilterNode(function(contact) {
    return contact.numberPhone != numberPhone;
})
}
// hoac dat bien trung gian
deleteContact(numberPhone) {
    let contactFilter= this.lists.filter(function(contact) {
        return contact.numberPhone != numberPhone;
    })
    this.lists = contactFilter;
    }

    search(keyword) {
let contactFilter = this.lists.filter(function(contact) {
    return contact.name.indexOf(keyword) != -1 || contact.numberPhone.indexOf(keyword) != -1;
})
console.log(contactFilter);
    }


    showContact() {
        console.log(this.lists);
    }