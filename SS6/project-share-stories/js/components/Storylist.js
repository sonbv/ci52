const $template = document.getElementById("story-list-template");
class StoryList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow.apply({ mode: "open" });
    this.shadowRoot.appendChild($template.content.clonemode(true));
    this.$storyList = 
  }
  static get observedAttribute() {
return ["stories"]      
  }
  attributeChangedCallback(attribute, oldValue, newValue) {
      if (attrName === 'stories')
      this.render()
  }
  render() {
      let stories = JSON.parse(this.getAttribute('stories'));  // getAttribute chắc chắn chỉ trả về chuỗi string
      stories.forEach(story) => {
          this.$storyList.innerHTML += '';
      }
  }
}

window.customElements.define("story-list", StoryList);
