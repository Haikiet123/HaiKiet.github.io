document.getElementById("loginBtn").addEventListener("click", function () {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
        return;
    }

    if (username === "HaiKiet" && password === "12345") {
        alert("Đăng nhập thành công! Chuyển hướng...");
        window.location.href = "../Formtrangchu/index.html"; // Thay đổi đường dẫn trang đích
    } else {
        alert("Sai tài khoản hoặc mật khẩu! Vui lòng thử lại.");
    }
});
