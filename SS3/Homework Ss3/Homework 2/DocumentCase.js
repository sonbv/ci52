import {} from "./Documents";

class DocumentCase {
  id;
  name;
  documents = [];
  owner;
  dateModified;
  constructor(id, name, documents, owner, dateModified) {
    this.id = id;
    this.name = name;
    this.documents = documents;
    this.owner = owner;
    this.dateModified = dateModified;
  }
  addDocument(document) {
    this.documents = documents.push(Documents);
  }
}
