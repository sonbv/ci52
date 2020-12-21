export default class Document {
  id;
  name;
  author;
  price;
  publishDate;
  constructor(name, author, price, publishDate) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.publishDate = publishDate;
    this.id = uuid.v4();
  }

  // su dung thu vien ben ngoai de tao id tu sinh
  // thu vien cdnjs uuid
  get info() {
    return `
Id: ${this.Id}
Name: ${this.name}
Price: ${this.price}
Author: ${this.author}
Publish Date: ${this.publishDate}
`;
  }

  set info(data) {
    this.name = data.name;
    this.price = data.price;
    this.author = data.author;
    this.publishDate = data.publishDate;
  }
}
