console.log("Router");
var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on("/sign-up", function () {
    console.log("Đăng ký");
    document.getElementById("mainBody").innerHTML =
      "<register-form></register-form>";
  })
  .resolve();

router
  .on("/sign-in", function () {
    console.log("Đăng nhập");
    document.getElementById("mainBody").innerHTML = "<login-form></login-form>";
  })
  .resolve();
router
  .notFound(function () {
    document.getElementById("mainBody").innerHTML = "Đường dẫn không tồn tại";
  })
  .resolve();
router
  .on(function () {
    router.navigate("/sign-in");
  })
  .resolve();
  router.on('./index', function() {
    // router.navigate("/sign-in");
    document.getElementById('mainBody').innerHTML = "index-screen"
  })
