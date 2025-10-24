import React from 'react';
import TopBar from './TopBar';
import SettingsController from './SettingsController';
import { LogoIcon, LogOutIcon } from './Icons';
import { Translation } from '../types';
import { translations } from '../translations';
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
}

const Header: React.FC<HeaderProps> = ({ theme, t, language, setLanguage, colorScheme, setColorScheme, session, handleSignOut }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm">
      <TopBar t={t} />
      <div className="container mx-auto px-4 py-2 md:py-0 h-auto md:h-20 flex flex-wrap md:flex-nowrap justify-between items-center">
        
        {/* Left: Socials */}
        <div className="flex items-center space-x-1 md:space-x-2 md:flex-1 md:justify-start">
          <a
            href="https://facebook.com/thainguyeninfi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.facebookAria}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="w-5 h-5" />
          </a>
          <a
            href="https://zalo.me/0938618875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.phoneAria}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <img src="https://i.postimg.cc/T1hP9NLm/Zalo-2.png" alt="Zalo" className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/thainguyeninfi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.telegramAria}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-5 h-5" />
          </a>
        </div>
        
        {/* Center: Logo */}
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

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 md:space-x-3 md:flex-1 md:justify-end">
          {session && (
            <div className="flex items-center gap-2 text-sm">
                <span className="hidden sm:inline text-gray-600 dark:text-gray-300">{session.user.email}</span>
                 <button 
                    onClick={handleSignOut}
                    title={t.signOut}
                    className="p-1.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-gradient-to-br from-rose-500 to-orange-500 transition-all"
                >
                    <LogOutIcon size={18}/>
                </button>
            </div>
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