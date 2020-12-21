import { checkInputWrapperValue, md5 } from "../utils.js";
const $template = document.getElementById("login-form-template");
class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$loginForm = this.shadowRoot.getElementById("login-form");
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
  }
  connectedCallback() {
    this.$formLogin.onSubmit = async (event) => {
      event.preventDefault(); // nhằm chặn chuyển hướng
      let email = this.$email.value;
      let password = this.$password.value;

      let isPassed =
        // check dữ liệu vừa lấy
        checkInputWrapperValue(
          this.$email,
          function (value) {
            return value == "";
          },
          "Nhập vào email"
        ) &
        checkInputWrapperValue(
          this.$email,
          function (value) {
            return !validateEmail(value);
          },
          "Email không hợp lệ"
        ) &
        checkInputWrapperValue(
          this.$password,
          function (value) {
            return value == "";
          },
          "Nhập vào mật khẩu"
        );
      if (isPassed) {
        // alert("Đăng nhập thành công");

        // kiểm tra thông tin trong cơ sở dữ liệu
        let result = await firebase
          .firestore()
          .collection("users")
          .where("email", "==", email)
          .where("password", "==", md5(password))
          .get();
        if (result.empty) {
          alert("Email hoặc mật khẩu không chính xác");
        } else {
          // alert("Đăng nhập thành công");
          // chuyển trang khi đăng nhập thành công
          router.navigate("/index");
        }
      }
    };
  }
}

window.customElements.define("login-form", LoginForm);
