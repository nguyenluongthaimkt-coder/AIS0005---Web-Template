import { Translation } from "./types";

const en: Translation = {
  // Header
  facebookAria: "Facebook Profile",
  phoneAria: "Telephone/Zalo",
  telegramAria: "Telegram Profile",
  backToTopAria: "Back to top",
  scrollToTopAria: "Scroll to top",
  settingsAria: "Open settings",

  // ThemeToggle & Controller
  toggleThemeAria: "Toggle theme",
  appearanceSettingsAria: "Appearance",
  themeLabel: "Theme",
  lightTheme: "Light",
  darkTheme: "Dark",
  accentColorLabel: "Accent Color",

  // LanguageSwitcher
  language: "Language",

  // Footer
  copyright: (year) => `© ${year} AuraTech. All rights reserved.`,
  contactUs: "Contact Us",

  // TopBar
  yourSession: "Your Session",
  ipAddress: "IP",
  sessionTime: "Time",
  liveActivity: "Live Activity",
  activeSubs: "Active Subs",
  totalSavings: "Total Savings",

  // Auth
  authHeader: "Welcome to AuraTech",
  authPrompt: "Sign in to your account to continue.",
  authPromptLogin: "Don't have an account?",
  emailLabel: "Email address",
  passwordLabel: "Password",
  signIn: "Sign In",
  signUp: "Sign Up",
  signOut: "Sign Out",
  signingIn: "Signing In...",
  signingUp: "Signing Up...",
  magicLinkSent: "Check your email for the login link!",
  signInToContinue: "Sign in to continue",
  signInToCheckout: "Please sign in to proceed to checkout.",
  cancel: "Cancel",

  // Cart
  addToCart: "Add to Cart",
  addedToCart: "Added ✓",
  shoppingCart: "Shopping Cart",
  yourCart: "Your Cart",
  emptyCart: "Your cart is empty",
  emptyCartPrompt: "Looks like you haven't added anything to your cart yet.",
  subtotal: "Subtotal",
  total: "Total",
  quantity: "Qty",
  remove: "Remove",
  continueShopping: "Continue Shopping",
  checkout: "Checkout",

  // Checkout
  checkoutTitle: "Checkout",
  orderSummary: "Order Summary",
  confirmPurchase: "Confirm Purchase",
  purchaseSuccessful: "Purchase Successful!",
  purchaseSuccessfulMessage: "Thank you for your order. A confirmation has been sent to your email.",
  close: "Close",

  // Product Modal
  productDetails: "Product Details",

  // Account Modal
  accountSettings: "Account Settings",
  profile: "Profile",
  password: "Password",
  updateProfile: "Update Profile",
  fullName: "Full Name",
  websiteLabel: "Website",
  addressLabel: "Address",
  cityLabel: "City",
  countryLabel: "Country",
  update: "Update",
  updating: "Updating...",
  profileUpdated: "Profile updated successfully!",
  changePassword: "Change Password",
  newPassword: "New Password",
  confirmNewPassword: "Confirm New Password",
  passwordUpdated: "Password updated successfully!",
  passwordsDoNotMatch: "Passwords do not match.",
};

const vi: Translation = {
  // Header
  facebookAria: "Hồ sơ Facebook",
  phoneAria: "Điện thoại/Zalo",
  telegramAria: "Hồ sơ Telegram",
  backToTopAria: "Quay về đầu trang",
  scrollToTopAria: "Cuộn lên đầu trang",
  settingsAria: "Mở cài đặt",

  // ThemeToggle & Controller
  toggleThemeAria: "Chuyển đổi giao diện",
  appearanceSettingsAria: "Giao diện",
  themeLabel: "Giao diện",
  lightTheme: "Sáng",
  darkTheme: "Tối",
  accentColorLabel: "Màu nhấn",

  // LanguageSwitcher
  language: "Ngôn ngữ",

  // Footer
  copyright: (year) => `© ${year} AuraTech. Đã đăng ký bản quyền.`,
  contactUs: "Liên hệ",

  // TopBar
  yourSession: "Phiên của bạn",
  ipAddress: "IP",
  sessionTime: "Thời gian",
  liveActivity: "Hoạt động trực tiếp",
  activeSubs: "Gói đang hoạt động",
  totalSavings: "Tổng tiết kiệm",
  
  // Auth
  authHeader: "Chào mừng đến với AuraTech",
  authPrompt: "Đăng nhập để tiếp tục.",
  authPromptLogin: "Chưa có tài khoản?",
  emailLabel: "Địa chỉ email",
  passwordLabel: "Mật khẩu",
  signIn: "Đăng nhập",
  signUp: "Đăng ký",
  signOut: "Đăng xuất",
  signingIn: "Đang đăng nhập...",
  signingUp: "Đang đăng ký...",
  magicLinkSent: "Kiểm tra email của bạn để lấy liên kết đăng nhập!",
  signInToContinue: "Đăng nhập để tiếp tục",
  signInToCheckout: "Vui lòng đăng nhập để tiến hành thanh toán.",
  cancel: "Hủy",

  // Cart
  addToCart: "Thêm vào giỏ",
  addedToCart: "Đã thêm ✓",
  shoppingCart: "Giỏ hàng",
  yourCart: "Giỏ hàng của bạn",
  emptyCart: "Giỏ hàng của bạn đang trống",
  emptyCartPrompt: "Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.",
  subtotal: "Tạm tính",
  total: "Tổng cộng",
  quantity: "SL",
  remove: "Xóa",
  continueShopping: "Tiếp tục mua sắm",
  checkout: "Thanh toán",

  // Checkout
  checkoutTitle: "Thanh toán",
  orderSummary: "Tóm tắt đơn hàng",
  confirmPurchase: "Xác nhận mua hàng",
  purchaseSuccessful: "Mua hàng thành công!",
  purchaseSuccessfulMessage: "Cảm ơn bạn đã đặt hàng. Một xác nhận đã được gửi đến email của bạn.",
  close: "Đóng",

  // Product Modal
  productDetails: "Chi tiết sản phẩm",

  // Account Modal
  accountSettings: "Cài đặt tài khoản",
  profile: "Hồ sơ",
  password: "Mật khẩu",
  updateProfile: "Cập nhật hồ sơ",
  fullName: "Họ và tên",
  websiteLabel: "Trang web",
  addressLabel: "Địa chỉ",
  cityLabel: "Thành phố",
  countryLabel: "Quốc gia",
  update: "Cập nhật",
  updating: "Đang cập nhật...",
  profileUpdated: "Hồ sơ đã được cập nhật thành công!",
  changePassword: "Đổi mật khẩu",
  newPassword: "Mật khẩu mới",
  confirmNewPassword: "Xác nhận mật khẩu mới",
  passwordUpdated: "Mật khẩu đã được cập nhật thành công!",
  passwordsDoNotMatch: "Mật khẩu không khớp.",
};

const th: Translation = {
  // Header
  facebookAria: "โปรไฟล์ Facebook",
  phoneAria: "โทรศัพท์/Zalo",
  telegramAria: "โปรไฟล์ Telegram",
  backToTopAria: "กลับไปด้านบน",
  scrollToTopAria: "เลื่อนไปด้านบนสุด",
  settingsAria: "เปิดการตั้งค่า",

  // ThemeToggle & Controller
  toggleThemeAria: "สลับธีม",
  appearanceSettingsAria: "ลักษณะ",
  themeLabel: "ธีม",
  lightTheme: "สว่าง",
  darkTheme: "มืด",
  accentColorLabel: "สีเน้น",

  // LanguageSwitcher
  language: "ภาษา",

  // Footer
  copyright: (year) => `© ${year} AuraTech. สงวนลิขสิทธิ์`,
  contactUs: "ติดต่อเรา",

  // TopBar
  yourSession: "เซสชันของคุณ",
  ipAddress: "IP",
  sessionTime: "เวลา",
  liveActivity: "กิจกรรมสด",
  activeSubs: "สมาชิใช้งานอยู่",
  totalSavings: "ยอดประหยัดทั้งหมด",

  // Auth
  authHeader: "ยินดีต้อนรับสู่ AuraTech",
  authPrompt: "ลงชื่อเข้าใช้บัญชีของคุณเพื่อดำเนินการต่อ",
  authPromptLogin: "ไม่มีบัญชี?",
  emailLabel: "ที่อยู่อีเมล",
  passwordLabel: "รหัสผ่าน",
  signIn: "ลงชื่อเข้าใช้",
  signUp: "ลงทะเบียน",
  signOut: "ออกจากระบบ",
  signingIn: "กำลังลงชื่อเข้าใช้...",
  signingUp: "กำลังลงทะเบียน...",
  magicLinkSent: "ตรวจสอบอีเมลของคุณสำหรับลิงค์เข้าสู่ระบบ!",
  signInToContinue: "ลงชื่อเข้าใช้เพื่อดำเนินการต่อ",
  signInToCheckout: "กรุณาลงชื่อเข้าใช้เพื่อดำเนินการชำระเงิน",
  cancel: "ยกเลิก",

  // Cart
  addToCart: "เพิ่มในรถเข็น",
  addedToCart: "เพิ่มแล้ว ✓",
  shoppingCart: "ตะกร้าสินค้า",
  yourCart: "รถเข็นของคุณ",
  emptyCart: "รถเข็นของคุณว่างเปล่า",
  emptyCartPrompt: "ดูเหมือนว่าคุณยังไม่ได้เพิ่มอะไรลงในรถเข็นของคุณ",
  subtotal: "ยอดรวม",
  total: "ทั้งหมด",
  quantity: "จำนวน",
  remove: "ลบ",
  continueShopping: "เลือกซื้อต่อ",
  checkout: "ชำระเงิน",

  // Checkout
  checkoutTitle: "ชำระเงิน",
  orderSummary: "สรุปคำสั่งซื้อ",
  confirmPurchase: "ยืนยันการสั่งซื้อ",
  purchaseSuccessful: "สั่งซื้อสำเร็จ!",
  purchaseSuccessfulMessage: "ขอบคุณสำหรับการสั่งซื้อของคุณ. การยืนยันถูกส่งไปยังอีเมลของคุณแล้ว",
  close: "ปิด",

  // Product Modal
  productDetails: "รายละเอียดสินค้า",

    // Account Modal
  accountSettings: "ตั้งค่าบัญชี",
  profile: "โปรไฟล์",
  password: "รหัสผ่าน",
  updateProfile: "อัปเดตโปรไฟล์",
  fullName: "ชื่อเต็ม",
  websiteLabel: "เว็บไซต์",
  addressLabel: "ที่อยู่",
  cityLabel: "เมือง",
  countryLabel: "ประเทศ",
  update: "อัปเดต",
  updating: "กำลังอัปเดต...",
  profileUpdated: "อัปเดตโปรไฟล์สำเร็จแล้ว!",
  changePassword: "เปลี่ยนรหัสผ่าน",
  newPassword: "รหัสผ่านใหม่",
  confirmNewPassword: "ยืนยันรหัสผ่านใหม่",
  passwordUpdated: "อัปเดตรรหัสผ่านสำเร็จแล้ว!",
  passwordsDoNotMatch: "รหัสผ่านไม่ตรงกัน",
};


export const translations = { en, vi, th };

export const languageOptions = [
    { id: 'en', name: 'English' },
    { id: 'vi', name: 'Tiếng Việt' },
    { id: 'th', name: 'ไทย' },
];