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
  <div className="flex flex-col justify-center items-center text-center flex-grow animate-fadeIn bg-red-100 dark:bg-red-900/30 p-8 rounded-lg border border-red-300 dark:border-red-700">
    <h2 className="text-2xl font-bold text-red-700 dark:text-red-300">Supabase Not Configured</h2>
    <p className="mt-4 text-lg text-red-800 dark:text-red-400">
      To enable authentication and product listing, you need to configure your Supabase credentials.
    </p>
    <div className="mt-4 text-left bg-red-50 dark:bg-gray-800 p-4 rounded-md text-sm w-full max-w-lg">
      <p className="font-semibold text-gray-800 dark:text-gray-200">Please update the file <code className="bg-red-200 dark:bg-gray-700 p-1 rounded">lib/supabase.ts</code> with your project's URL and anon key.</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">You need to replace these placeholder values:</p>
      <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-900 rounded overflow-x-auto text-xs">
        <code>
          const supabaseUrl = 'YOUR_SUPABASE_URL';<br/>
          const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
        </code>
      </pre>
    </div>
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