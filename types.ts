export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  long_description?: string;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

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
  signInToContinue: string;
  signInToCheckout: string;
  cancel: string;

  // Cart
  addToCart: string;
  addedToCart: string;
  shoppingCart: string;
  yourCart: string;
  emptyCart: string;
  emptyCartPrompt: string;
  subtotal: string;
  total: string;
  quantity: string;
  remove: string;
  continueShopping: string;
  checkout: string;

  // Checkout
  checkoutTitle: string;
  orderSummary: string;
  confirmPurchase: string;
  purchaseSuccessful: string;
  purchaseSuccessfulMessage: string;
  close: string;

  // Product Modal
  productDetails: string;

  // Account Modal
  accountSettings: string;
  profile: string;
  password: string;
  updateProfile: string;
  fullName: string;
  websiteLabel: string;
  addressLabel: string;
  cityLabel: string;
  countryLabel: string;
  update: string;
  updating: string;
  profileUpdated: string;
  changePassword: string;
  newPassword: string;
  confirmNewPassword: string;
  passwordUpdated: string;
  passwordsDoNotMatch: string;
};