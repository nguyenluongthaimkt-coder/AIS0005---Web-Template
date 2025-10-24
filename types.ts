export type Translation = {
  // Header
  facebookAria: string;
  phoneAria: string;
  telegramAria: string;
  backToTopAria: string;
  scrollToTopAria: string;
  settingsAria: string;
  
  // ThemeController
  toggleThemeAria: string;
  appearanceSettingsAria: string;
  themeLabel: string;
  lightTheme: string;
  darkTheme: string;
  accentColorLabel: string;

  // LanguageSwitcher
  language: string;

  // Footer
  copyright: (year: number) => string;
  contactUs: string;

  // TopBar
  yourSession: string;
  ipAddress: string;
  sessionTime: string;
  liveActivity: string;
  activeSubs: string;
  totalSavings: string;
  
  // Auth
  authHeader: string;
  authPrompt: string;
  authPromptLogin: string;
  emailLabel: string;
  passwordLabel: string;
  signIn: string;
  signUp: string;
  signOut: string;
  signingIn: string;
  signingUp: string;
  magicLinkSent: string;
};