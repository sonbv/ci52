import {} from "./Documents.js";
class EBook extends Documents {
  discount;
  constructor(id, name, author, price, publishDate, discount) {
    super(id, name, author, price, publishDate);
    this.discount = discount;
  }
  get info() {
    return `Đây là tác phẩm ${this.name} của tác giá ${this.author}. Tác phẩm này được xuất bản ngày ${this.publishDate}, Ebook của tác phẩm này có giá ${${this.price} * ${this.discount}}`
  }
}
let e1 = new EBook('e1', `Harry Potter`, `J K Rowling`, 120, '20/10/2004', 10%);
let e2 = new EBook('e2', `Con hủi`, 'Amy', 83, '23/06/1976', 15%)

console.log(e1);
console.log(e2);
