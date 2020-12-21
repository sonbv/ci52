// có 2 thực thể
// người liên hệ
// danh bạ: quản lí người liên hệ với các chức năng yêu cầu

import Contacts from "./module/Contacts.js";

let contactOfHanh = new Contacts();

contactOfHanh.addContatc("Hanh", "0967034056")

contactOfHanh.showContact();

contactOfHanh.editContact("0967034056") {email: "mehkgf@gmaiil.com"}