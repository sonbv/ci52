import fakeData from "../../data/fakeData.js";

const $template = document.getElementById("index-screen");

class IndexScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$storyList = this.shadowRoot.getElementById("story-list");
  }

  connectedCallback() {
    this.loadStories();
    // this.render();
  }
  async loadStories() {
    let result = await firebase.firestore().collection("stories");
    console.log(getDataFromDocs(result.docs));
    this.storiesData = getDataFromDocs(result.docs).map(function(storyData) {
        let result = await firebase.firestore().collection('users').doc(storyData.owner).get()

        let user = getDataFromDoc(result)

        // thay đổi lại owner của story từ id -> tên
        storyData.owner = user.name;
    })

    // nhớ: có async luôn trả về promise

    
    this.render();
    // vì đã gọi ở trên nên thôi ko gọi nữa
  }

  render() {
    // this.$storyList.setAttribute("stories", JSON.stringify(fakeData));
    this.$storyList.setAttribute("stories", JSON.stringify(this.storiesData));
  }
}

window.customElements.define("index-screen", IndexScreen);
