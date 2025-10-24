import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Translation } from '../types';
import { LogoIcon } from './Icons';

interface AuthProps {
    t: Translation;
}

const Auth: React.FC<AuthProps> = ({ t }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      // FIX: The `AuthError` object from Supabase has a `message` property, not `error_description`.
      alert(error.message);
    }
    setLoading(false);
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      // FIX: The `AuthError` object from Supabase has a `message` property, not `error_description`.
      alert(error.message);
    } else {
        alert(t.magicLinkSent);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto animate-fadeInUp">
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-black/5 dark:border-white/10">
            <div className="flex flex-col items-center mb-6">
                <LogoIcon size={40} />
                <h1 className="text-2xl font-bold text-center mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] dark:from-[var(--accent-color-dark)] dark:to-[var(--gradient-to)]">
                  {t.authHeader}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-1">{t.authPrompt}</p>
            </div>
            <form onSubmit={handleLogin}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t.emailLabel}
                        </label>
                        <input
                            id="email"
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                           {t.passwordLabel}
                        </label>
                        <input
                            id="password"
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            required
                            minLength={6}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-6 space-y-3">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] disabled:opacity-50 transition"
                    >
                        {loading ? t.signingIn : t.signIn}
                    </button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500">{t.authPromptLogin}</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleSignup}
                        disabled={loading}
                        className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] disabled:opacity-50 transition"
                    >
                         {loading ? t.signingUp : t.signUp}
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Auth;