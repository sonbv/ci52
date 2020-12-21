const $template = document.getElementById("input-wrapper-template");

class InputWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$input = this.shadowRoot.getElementById("input-main");
    this.$error = this.shadowRoot.getElementById("input-error");
  }
  static get observedAttributes() {
    return ["label", "type", "error", "value"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(attrName);
    switch (attrName) {
      case "label":
        this.$input.placeholder = newValue;
        break;

      case "type":
        // this.shadowRoot.getElementById('input-main').placeholder = newValue;
        this.$input.type = newValue;
        break;

      case "error":
        this.$error.innerHTML = newValue;
        break;
      case "value":
        this.$input.value = newValue;
        // this.shaowRoot.getElementById('input-main').placeholder = newValue;

        break;
    }
  }
  get value() {
    return this.$input.value;
  }
  set error(message) {
    this.setAttribute("error", message); // this ở đây là input wrapper, set này là để thay đổi thuộc tính của input wrapper;
  }
}
window.customElements.define("input-wrapper", InputWrapper);
