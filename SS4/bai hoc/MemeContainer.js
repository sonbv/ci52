const $template = document.getElementById("meme-container-template");
class MemeContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.ShadowRoot.appendChild($template.content.cloneNode(true));
  }
}


// xet nhung thuoc tinh anh huong den noi dung
static get observeAttribute() {
  return['name', 'date-modified', 'image', 'description']
}


connectedCallback() {
  console.log("Vua co 1 mem duoc tao ra");
}

attributeChangedCallback(attrName, oldValue, newValue) {
  console.log(attrName, newValue);
  if(attrName == 'name') {
this.shadowRoot.querrySelector('meme-name').innerHTML =  newValue;
  } else if(attrName = 'date-modified') {
    this.shadowRoot.querrySelector('meme-date-modified').innerHTML =  newValue;

  } else if(attrName = 'image') {
    this.shadowRoot.querrySelector('meme-photo').src =  image;

  } else if(attrName = 'description') {
    this.shadowRoot.querrySelector('meme-description').innerHTML =  newValue;

  }
}
// tạo custom element

window.customElement.define("meme-container", MemeContainer);
