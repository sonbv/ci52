import {} from "./Documents.js";
class EBook extends Documents {
  discount;
  constructor(id, name, author, price, publishDate, discount) {
    super(id, name, author, price, publishDate);
    this.discount = discount;
  }
  get info() {
    return `Đây là tác phẩm ${this.name} của tác giá ${
      this.author
    }. Tác phẩm này được xuất bản ngày ${
      this.publishDate
    }, Ebook của tác phẩm này có giá ${this.price * (1 - this.discount)}`;
  }
}
let e1 = new EBook("e1", `Harry Potter`, `J K Rowling`, 120, "20/10/2004", 0.1);
let e2 = new EBook("e2", `Con hủi`, "Amy", 83, "23/06/1976", 0.15);
let e3 = new EBook("2", "hà. nội", 24, "23/04/2009", 0.8);

console.log(e1);
console.log(e2);
