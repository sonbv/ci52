const $template=document.getElementById("manga-book-block-template")
class Mangabookblock extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
    static get observerAttributes(){
        console.log("observerAttributes");
        return ["image","title","date","price","amount"]
    }
    connectedCallback(){
        console.log("im love")
    }
     attributeChangedCallback( attrName,newValue){
         if(attrName=="image"){
             this.shadowRoot.querySelector("img").src=newValue
         }else if(attrName=="title"){
             this.shadowRoot.querySelector(title-text).content=newValue
         }else if(attrName=="price"){
             this.shadowRoot.querySelector(price-text).content=newValue
         }else if(attrName=="date"){
            this.shadowRoot.querySelector(date-text).content=newValue
        }else if(attrName=="amount"){
            this.shadowRoot.querySelector(amount-text).content=newValue
        }
     }
}
window.customElements.define("manga-book-block",Mangabookblock)