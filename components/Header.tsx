import React, { useContext, useState, useRef, useEffect } from 'react';
import TopBar from './TopBar';
import SettingsController from './SettingsController';
import { LogoIcon, LogOutIcon, ShoppingCartIcon, UserIcon } from './Icons';
import { Translation } from '../types';
import { translations } from '../translations';
import { CartContext } from '../context/CartContext';
import type { Session } from '@supabase/supabase-js';

interface HeaderProps {
  theme: 'light' | 'dark';
  t: Translation;
  language: keyof typeof translations;
  setLanguage: (lang: keyof typeof translations) => void;
  colorScheme: 'blue' | 'rose';
  setColorScheme: (scheme: 'blue' | 'rose') => void;
  session: Session | null;
  handleSignOut: () => void;
  onCartClick: () => void;
  onSignInClick: () => void;
  onAccountClick: () => void;
}

const UserMenu: React.FC<{session: Session, t: Translation, onAccountClick: () => void, handleSignOut: () => void}> = 
({ session, t, onAccountClick, handleSignOut }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const userEmail = session.user.email || '';
    const userInitial = userEmail.charAt(0).toUpperCase();

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color-dark)] transition-colors"
            >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex items-center justify-center text-white font-bold text-xs">
                    {userInitial}
                </div>
                <span className="hidden sm:inline max-w-[120px] truncate">{userEmail}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 z-50 animate-fadeIn">
                    <div className="p-2">
                        <button
                            onClick={() => { onAccountClick(); setIsOpen(false); }}
                            className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors"
                        >
                            <UserIcon size={16} />
                            <span>{t.accountSettings}</span>
                        </button>
                        <div className="my-1 border-t border-black/10 dark:border-white/10"></div>
                        <button
                            onClick={handleSignOut}
                            className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm rounded-md text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
                        >
                            <LogOutIcon size={16} />
                            <span>{t.signOut}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ theme, t, language, setLanguage, colorScheme, setColorScheme, session, handleSignOut, onCartClick, onSignInClick, onAccountClick }) => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm">
      <TopBar t={t} />
      <div className="container mx-auto px-4 py-2 md:py-0 h-auto md:h-20 flex flex-wrap md:flex-nowrap justify-between items-center">
        
        <div className="flex items-center space-x-1 md:space-x-2 md:flex-1 md:justify-start">
          <a href="https://facebook.com/thainguyeninfi" target="_blank" rel="noopener noreferrer" aria-label={t.facebookAria} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="https://zalo.me/0938618875" target="_blank" rel="noopener noreferrer" aria-label={t.phoneAria} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg">
            <img src="https://i.postimg.cc/T1hP9NLm/Zalo-2.png" alt="Zalo" className="w-5 h-5" />
          </a>
          <a href="https://t.me/thainguyeninfi" target="_blank" rel="noopener noreferrer" aria-label={t.telegramAria} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-5 h-5" />
          </a>
        </div>
        
        <div className="w-full order-first md:w-auto md:order-none md:flex-1 flex justify-center items-center pb-2 md:pb-0 border-b md:border-b-0 border-slate-200 dark:border-slate-700/50 mb-2 md:mb-0">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              role="button"
              aria-label={t.backToTopAria}
            >
              <LogoIcon />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] dark:from-[var(--accent-color-dark)] dark:to-[var(--gradient-to)]">
                AuraTech
              </span>
            </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3 md:flex-1 md:justify-end">
          <button 
            onClick={onCartClick}
            className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`${t.shoppingCart} (${totalItems} items)`}
          >
            <ShoppingCartIcon size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-xs font-bold text-white shadow-sm animate-fadeIn">
                {totalItems}
              </span>
            )}
          </button>
          
          {session ? (
            <UserMenu session={session} t={t} onAccountClick={onAccountClick} handleSignOut={handleSignOut} />
          ) : (
             <button 
                onClick={onSignInClick}
                className="px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
            >
                {t.signIn}
            </button>
          )}

          <SettingsController
            theme={theme}
            colorScheme={colorScheme}
            setColorScheme={setColorScheme}
            language={language}
            setLanguage={setLanguage}
            t={t}
          />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
