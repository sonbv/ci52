import Document from "./Document.js";

export default class DocumentCase extends Document {
  id;
  name;
  documents;
  owner;
  dateModified;
  constructor(name, owner) {
    this.id = uuid.v4();
    this.name = name;
    this.owner = owner;
    this.documents = [];
    this.dateModified = new Date().toISOString;
  }
  addDocument(document) {
    if (document instanceof Document) {
      this.documents.push(document);
    } else {
      console.log("truyền tham số linh tinh");
    }
  }

  // cach 1 find
  findDocument(name) {
    let result = [];
    for (let document of this.documents) {
      if (document.name == name) {
        result.push(document);
      }
    }

    return result;

    //  cach 2

    //   let result = this.documents.filter(function(document) {
    //     return document.name == name;
    // });
    // return result;
  }
  showDocuments() {
    this.documents.forEach(function (document) {
      console.log(document.info);
    });
  }

  deleteDocument(id) {
    let foundIndex = -1;
    for (let i = 0; i < document.length; i++) {
      if (this.documents[i].id == id) {
        foundIndex = i;
      }
    }

    // cach 2
    // let foundIndex = this.documents.findIndex(function (document) {
    //   return document.id == id;
    // });

    if (foundIndex >= 0) {
      this.documents[i].splice(foundIndex, 1);
    }
  }
  updateDocument(id, data) {
    let found = this.documents.find(function (document) {
      return document.id == id;

      // neu ko tim dc se tra ve null, tim duoc thi tra ve gia tri dau tien tim thay
    });
    if (foundIndex >= 0) {
      this.documents.splice(foundIndex, 1);
    }
  }

  updateDocument(id, data) {
    let found = this.documents.find(function (document) {
      return document.iid == id;
    });

    if (found != null) {
      found.info = data;
    }
  }
}
