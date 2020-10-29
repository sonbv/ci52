import {} from "./Document.js";
class HardCopy extends Document {
  source;
  constructor(id, name, author, price, publishDate, source) {
    super(id, name, author, price, publishDate);
    this.source = source;
  }
  get info() {
    return `Đây là tác phẩm ${this.name} của tác giá ${this.author}. Tác phẩm này được xuất bản ngày ${this.publishDate}, có giá ${this.price}đ. Tác phẩm được sao chép một số nội dung từ ${this.source}.`;
  }
}

let h1 = new HardCopy(
  `h1`,
  `Lang Gia Bảng`,
  "Thiên Mặc",
  50,
  "13/06/2016",
  "truyền thuyết"
);

let h2 = new HardCopy("h2", `Ma thổi đèn`, "KQ", 75, "09/08/2009", "NXB TQ");

console.log(h1);
console.log(h2);
