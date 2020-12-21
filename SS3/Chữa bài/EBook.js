import Document from "./Document.js";

export default class EBook extends Document {
    discount;
    constructor(name, author, price, publishDate, discount) {
        super(name, author, price, publishDate);
        this.discount = discount;
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