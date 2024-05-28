function validateForm() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Vui lòng điền đầy đủ tên đăng nhập và mật khẩu.");
        return false;
    }
    // Hiển thị thông báo thành công
    alert("Đăng nhập thành công!");
    return true;
}