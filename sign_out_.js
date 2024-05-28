function validateRegistrationForm() {
    var name = document.forms["registration"]["name"].value;
    var email = document.forms["registration"]["email"].value;
    var password = document.forms["registration"]["password"].value;
    var confirmPassword = document.forms["registration"]["confirm_password"].value;
    
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Vui lòng điền đầy đủ tất cả các trường.");
        return false;
    }
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return false;
    }
    
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}