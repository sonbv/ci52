export class Documents {
  id;
  name;
  author;
  price;
  publishDate;
  constructor(id, name, author, price, publishDate) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.publishDate = publishDate;
  }
  get info() {
    return `Đây là tác phẩm ${this.name} của tác giá ${this.author}. Tác phẩm này được xuất bản ngày ${this.publishDate}, có giá ${this.price}đ.`;
  }
  
  set info(data) {
    let data = {};
    this.id = data.id;
    this.name = data.name;
    this.author = data.author;
    this.price = data.price;
    this.publishDate = data.publishDate;
  }
}
console.log(Documents.info);
