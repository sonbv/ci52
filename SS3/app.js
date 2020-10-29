// cài đặt các class

// vehicle:
// name
// speed
// brand
// about (): in ra console "Phương tiện 'name' chạy với tốc độ ''

// car kế thừa Vehicle:

// Bike kế thừa Vehicle

// Plane kế thừa Vehicle:

//




class Bike extends Vehicle {
  static Wheels = 2;
}

class Plane extends Vehicle {
  static Wheels = 12;
}


/// static: ko cần khởi tạo đối tượng từ class mà đã sử dụng được phương thức đó

// non-static: cần khởi tạo đối tượng từ class mới sử dụng được phương thức.

// getter, setter là 2 phương thức đặc biệt
// get trả lại (return) giá trị mình cần

// setter đổi sang giá trị mình muốn.

//module: 1 chương trình js để giải quyết 1 vđ nào đó.
// có thể import/ export. 

import {helloByJapanese, helloByVietnamese} from "./hello.js"

helloByJapanese();
helloByVietnamese();

// qui ước tên file trùng tên class

