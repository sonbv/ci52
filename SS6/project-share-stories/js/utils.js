export function checkInputWrapperValue($inputWrapper, condition, message) {
  let value = $inputWrapper.value;
  if (condition(value)) {
    $inputWrapper.error = message;
  } else {
    $inputWrapper.error = "";
  }
}
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validateStrongPassword(pwString) {
  var strength = 0;

  strength += /[A-Z]+/.test(pwString) ? 1 : 0;
  strength += /[a-z]+/.test(pwString) ? 1 : 0;
  strength += /[0-9]+/.test(pwString) ? 1 : 0;
  strength += /[\W]+/.test(pwString) ? 1 : 0;

  return strength >= 4;
  //   switch (strength) {
  //     case 3:
  //       // its's medium!
  //       break;
  //     case 4:
  //       // it's strong!
  //       break;
  //     default:
  //       // it's weak!
  //       break;
  //   }
}

export function md5(string) {
  return CryptoJS.MD5(string).toString();
}

// 1 hàm để lưu trạng thái người dùng khi đăng nhập
export function makeAuth() {
  localStorage.setItem("current-user", JSON.stringify(user));
}
// 1 để check người dùng đã đăng nhập hay chưa, nếu có thì lấy ra thông tin của người dùng
export function auth() {
  return JSON.parse(localStorage.getItem("current-user"));
}
