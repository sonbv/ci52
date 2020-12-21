const $template = document.getElementById("story-container-template");

class StoryContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$owner = this.shadowRoot.getElementById("owner");
    this.$dateModified = this.shadowRoot.getElementById("date-modified");
    this.$content = this.shadowRoot.getElementById("content");
    this.$reactionBtns = this.shadowRoot.querySelectorAll(".reaction-btn");
  }

  // khai báo những thuộc tính có ảnh hưởng đến nội dung
  static get observedAttributes() {
    return ["id", "owner", "date-modified", "content"];
  }

  connectedCallback() {
    for (let i = 0; i < this.$reactionBtns.length; i++) {
      this.$reactionBtns[i].onclick = () => {
        this.addReaction(i);
      };
    }
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (attrName) {
      case "owner":
        this.$owner.innerHTML = newValue;
        break;

      case "date-modified":
        this.$dateModified.innerHTML = newValue;
        break;

      case "content":
        this.$content.innerHTML = newValue;
        break;
    }
  }
  addReaction(type) {
    firebase.firestore().collection("reaction").add({});
  }
}

window.customElements.define("story-container", StoryContainer);
