// import helloByEastLaos from ".hello.js";
// helloByEastLaos();

import "./MemeContainer.js";

// phương thức đc gọi khi web compent được sinh ra 
connectedCallback() {
    console.log('vừa có 1 cái meme được tạo')
}
// attributeChangedCallback(name, oldValue, newValue) {} được gọi khi thuộc tính của component thay đổi
// mất đi được gọi khi component mất đi
disconnectedCallback() {
    console.log('vừa có 1 meme bị xóa đi do quá nhảm')
} 
