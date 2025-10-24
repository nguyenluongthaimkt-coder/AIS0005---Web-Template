import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Auth from './components/Auth';
import ProductList from './components/ProductList'; // Import the new component
import { useLocalStorage } from './hooks/useLocalStorage';
import { translations } from './translations';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import type { Session } from '@supabase/supabase-js';

const SupabaseNotConfigured: React.FC = () => (
  <div className="flex flex-col justify-center items-center text-center flex-grow animate-fadeIn bg-amber-100 dark:bg-amber-900/30 p-8 rounded-lg border border-amber-300 dark:border-amber-700">
    <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-300">Supabase Not Configured</h2>
    <p className="mt-4 text-lg text-amber-800 dark:text-amber-400">
      To enable authentication and product listing, you need to configure your Supabase credentials.
    </p>
    <p className="mt-2">Please update the following file with your project's URL and anon key:</p>
    <p className="mt-2 font-mono bg-amber-200 dark:bg-gray-700 p-2 rounded text-sm text-amber-900 dark:text-amber-200">
      lib/supabase.ts
    </p>
  </div>
);


export default function App() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'dark');
  const [colorScheme, setColorScheme] = useLocalStorage<'blue' | 'rose'>('colorScheme', 'blue');
  const [language, setLanguage] = useLocalStorage<keyof typeof translations>('language', 'en');
  const [session, setSession] = useState<Session | null>(null);
  
  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('theme-blue', 'theme-rose');
    root.classList.add(`theme-${colorScheme}`);
  }, [colorScheme]);

  const t = translations[language];

  const handleSignOut = async () => {
    if (!isSupabaseConfigured) return;
    await supabase.auth.signOut();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans flex flex-col">
      <Header 
        theme={theme}
        t={t}
        language={language}
        setLanguage={setLanguage}
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        session={session}
        handleSignOut={handleSignOut}
      />

      <main className="container mx-auto px-4 py-8 flex-grow flex justify-center items-center">
        {!isSupabaseConfigured ? (
          <SupabaseNotConfigured />
        ) : !session ? (
          <Auth t={t} />
        ) : (
          <ProductList /> // Replace PlaceholderContent with ProductList
        )}
      </main>
      
      <Footer t={t} />

      <ScrollToTopButton t={t} />
    </div>
  );
}