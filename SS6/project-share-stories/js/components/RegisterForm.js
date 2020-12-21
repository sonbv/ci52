import { checkInputWrapperValue } from "./utils.js";
import { validateEmail, validateStrongPassword, md5 } from "../utils.js";
const $template = document.getElementById("register-form-template");
class RegisterForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$registerForm = this.shadowRoot.getElementById("register-form");
    console.log(this);
    this.$name = this.shadowRoot.getElementById("name");
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
    this.$passwordConfirmation = this.shadowRoot.getElementById(
      "password-confirmation"
    );
  }
  //khi register form được thêm/ cho vào cây DOM Tree thì gọi phương thức này
  connectedCallback() {
    this.$registerForm.onsubmit = async (event) => {
      event.preventDefault();
      console.log("submit form đăng ký");

      let name = this.$name.value;
      let email = this.$email.value;
      let password = this.$password.value;
      let passwordConfirmation = this.$passwordConfirmation.value;
      let ispassed =
        checkInputWrapperValue(
          this.$name,
          function (value) {
            return value == "";
          },
          "Nhập vào tên"
        ) &
        checkInputWrapperValue(
          this.$email,
          function (value) {
            return value == "" || !validateEmail(value);
          },
          "Nhập vào email"
        ) &
        checkInputWrapperValue(
          this.$password,
          function (value) {
            return value == "" || !validateStrongPassword(value);
          },
          "Mật khẩu không hợp lệ"
        ) &
        checkInputWrapperValue(
          this.$passwordConfirmation,
          function (value) {
            return value == "" || !value == password;
          },
          "Nhập lại đúng mật khẩu"
        );
      if (isPassed) {
        // alert("Đăng kí thành công");
        // thực hiện check email trùng
        let result = await firebase
          .firestore()
          .collection("users")
          .where("email", "==", email)
          .get();
        console.log(result);
        if (result.empty) {
          // lưu dữ liệu lại
          await firebase
            .firestore()
            .collection("users")
            .add({ name: name, email: email, password: md5(password) });
          alert("Đăng ký tài khoản thành công");
        } else {
          alert("Email này đã có người sử dụng");
        }
        // nếu ko trùng thì tiến hành lưu trữ dữ liệu
      }

      //   if (name == "") {
      //     this.$name.error = "Nhập vào tên"; // để thông báo lỗi
      //   } else {
      //     this.$name.error = "";
      //   }
      //   if (email == "") {
      //     this.$email.error = "Nhập vào email";
      //   } else {
      //     this.$email.error = "";
      //   }
      //   if (password == "") {
      //     this.$password.error = "Nhập vào password";
      //   } else {
      //     this.$password.error = "";
      //   }
      //   if (passwordConfirmation == "") {
      //     this.$passwordConfirmation.error = "Nhập vào password";
      //   } else {
      //     this.$passwordConfirmation.error = "";
      //   }

      checkInputWrapperValue(
        this.$name,
        function (value) {
          return value == "";
        },
        "Nhập vào tên"
      );
      checkInputWrapperValue(
        this.$email,
        function (value) {
          return value == "" || !validateEmail(value);
        },
        "Nhập vào email"
      );

      checkInputWrapperValue(
        this.$password,
        function (value) {
          return value == "" || !validateStrongPassword(value);
        },
        "Mật khẩu không hợp lệ"
      );

      checkInputWrapperValue(
        this.$passwordConfirmation,
        function (value) {
          return value == "" || !value == password;
        },
        "Xác nhận mật khẩu không hợp lệ"
      );

      //kiểm tra tổng thể

      // kiểm tra dữ liệu
      console.log(this); // vì sao viết được dòng code như thế? viết ntn để làm gì?
      // để lấy kết quả từ input wrapper
      console.log(this.$name.value);
      console.log(this.$email.value);
      console.log(this.$password.value);
      console.log(this.$passwordConfirmation.value);
    };
  }
}
window.customElements.define("register-form", RegisterForm);

// BTVN tìm hiểu về fucntion và arrow fucntion
