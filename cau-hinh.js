// CẤU HÌNH CHO WEB TỰ HỌC TIẾNG ANH
// Dán các giá trị lấy từ Firebase (Project settings > Your apps > SDK setup and configuration) vào giữa các dấu ngoặc kép.
// Để trống thì web vẫn chạy ở chế độ khách (không có đăng nhập Google, không có AI).
window.CAU_HINH = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  appCheck: {
    // Khóa reCAPTCHA Enterprise (bước 4 trong hướng dẫn). Firebase AI Logic tự bật App Check,
    // nên thiếu khóa này thì đăng nhập và lưu tiến độ vẫn chạy nhưng AI bị chặn.
    // Có khóa thì App Check bật ngay khi mở web, nên bật được "Enforce" cho cả Cloud Firestore (chặn kẻ gian dùng khóa web).
    recaptchaEnterpriseKey: "6LcpFhsuAAAAAFHGseP7J33s574yD4IktZDN5I1c"
  },
  baoMat: {
    // Chính sách bảo mật nội dung (chặn mã lạ chèn vào trang). Chỉ đổi thành false nếu đăng nhập Google bị lỗi lạ.
    csp: true
  },
  ai: {
    // Mô hình Gemini dùng cho AI (thử lần lượt). Để nguyên nếu không chắc.
    models: ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite"],
    // Đặt off: true để tắt mọi tính năng AI.
    off: false
  }
};
