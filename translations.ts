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
};


export const translations = { en, vi, th };

export const languageOptions = [
    { id: 'en', name: 'English' },
    { id: 'vi', name: 'Tiếng Việt' },
    { id: 'th', name: 'ไทย' },
];