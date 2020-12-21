import Document from "./Document.js";

export default class HardCopy extends Document {
  source;
  constructor(name, author, price, publishDate, source) {
    super(name, author, price, publishDate);
    this.source = source;
  }
  get info() {
    return `
Id: ${this.Id}
Name: ${this.name}
Price: ${this.price}
Author: ${this.author}
Publish Date: ${this.publishDate}

`;
  }
}
