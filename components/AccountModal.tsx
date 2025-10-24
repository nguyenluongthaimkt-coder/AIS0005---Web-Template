import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Translation } from '../types';
import { XIcon } from './Icons';
import type { Session } from '@supabase/supabase-js';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
  session: Session | null;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, t, session }) => {
    const [activeTab, setActiveTab] = useState('profile');
    
    // Profile state
    const [profileLoading, setProfileLoading] = useState(true);
    const [fullName, setFullName] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [profileMessage, setProfileMessage] = useState('');
    
    // Password state
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        if (isOpen && session) {
            getProfile();
            // Reset other states
            setActiveTab('profile');
            setProfileMessage('');
            setPasswordMessage('');
            setPasswordError('');
            setPassword('');
            setConfirmPassword('');
        }
    }, [isOpen, session]);

    const getProfile = async () => {
        if (!session) return;
        setProfileLoading(true);
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select(`full_name, website, address, city, country`)
                .eq('id', session.user.id)
                .single();
            
            if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found, which is fine
                throw error;
            }

            if (data) {
                setFullName(data.full_name || '');
                setWebsite(data.website || '');
                setAddress(data.address || '');
                setCity(data.city || '');
                setCountry(data.country || '');
            } else {
                 // Fallback to user metadata if profile doesn't exist yet
                 setFullName(session.user.user_metadata.full_name || '');
            }

        } catch (error: any) {
            console.error('Error fetching profile:', error.message);
        } finally {
            setProfileLoading(false);
        }
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!session) return;

        setProfileLoading(true);
        setProfileMessage('');
        
        // First, update user metadata in auth.users for consistency (e.g., for header)
        const { error: userError } = await supabase.auth.updateUser({
            data: { full_name: fullName }
        });

        if (userError) {
             setProfileMessage(userError.message);
             setProfileLoading(false);
             return;
        }

        // Then, upsert the complete profile data in the public.profiles table
        const updates = {
            id: session.user.id,
            full_name: fullName,
            website,
            address,
            city,
            country,
            updated_at: new Date().toISOString(),
        };

        const { error: profileError } = await supabase.from('profiles').upsert(updates);

        if (profileError) {
            setProfileMessage(profileError.message);
        } else {
            setProfileMessage(t.profileUpdated);
        }
        setProfileLoading(false);
        setTimeout(() => setProfileMessage(''), 3000);
    };

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError(t.passwordsDoNotMatch);
            return;
        }
        setPasswordLoading(true);
        setPasswordMessage('');
        setPasswordError('');

        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            setPasswordError(error.message);
        } else {
            setPasswordMessage(t.passwordUpdated);
            setPassword('');
            setConfirmPassword('');
        }
        setPasswordLoading(false);
        setTimeout(() => setPasswordMessage(''), 3000);
    };


  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fadeIn"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-modal-title"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out animate-fadeInUp"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 relative">
            <button 
                onClick={onClose} 
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors z-10"
                aria-label={t.close}
            >
                <XIcon size={24} />
            </button>
            <h2 id="account-modal-title" className="text-2xl font-bold text-gray-800 dark:text-gray-100">{t.accountSettings}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{session?.user?.email}</p>

            <div className="border-b border-gray-200 dark:border-gray-700 mt-4">
                <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                    <button onClick={() => setActiveTab('profile')} className={`${activeTab === 'profile' ? 'border-[var(--accent-color)] text-[var(--accent-color)]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors`}>{t.profile}</button>
                    <button onClick={() => setActiveTab('password')} className={`${activeTab === 'password' ? 'border-[var(--accent-color)] text-[var(--accent-color)]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors`}>{t.password}</button>
                </nav>
            </div>

            <div className="mt-6 min-h-[280px]">
                {activeTab === 'profile' && (
                    <form onSubmit={handleProfileUpdate}>
                        <h3 className="text-lg font-medium">{t.updateProfile}</h3>
                        {profileLoading ? (
                           <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading profile...</div>
                        ) : (
                        <div className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.fullName}</label>
                                <input type="text" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.websiteLabel}</label>
                                <input type="url" id="website" value={website} onChange={e => setWebsite(e.target.value)} placeholder="https://..." className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.addressLabel}</label>
                                <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.cityLabel}</label>
                                    <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.countryLabel}</label>
                                    <input type="text" id="country" value={country} onChange={e => setCountry(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="mt-6 flex items-center justify-between">
                            <button type="submit" disabled={profileLoading} className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none disabled:opacity-50">
                                {profileLoading ? t.updating : t.update}
                            </button>
                            {profileMessage && <span className="text-sm text-green-600 dark:text-green-400 animate-fadeIn">{profileMessage}</span>}
                        </div>
                    </form>
                )}
                {activeTab === 'password' && (
                    <form onSubmit={handlePasswordUpdate}>
                        <h3 className="text-lg font-medium">{t.changePassword}</h3>
                         <div className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.newPassword}</label>
                                <input type="password" id="newPassword" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.confirmNewPassword}</label>
                                <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required minLength={6} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent-color)] focus:border-[var(--accent-color)] sm:text-sm" />
                            </div>
                        </div>
                         <div className="mt-6 flex items-center justify-between">
                            <button type="submit" disabled={passwordLoading} className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none disabled:opacity-50">
                                {passwordLoading ? t.updating : t.update}
                            </button>
                             {passwordError && <span className="text-sm text-red-600 dark:text-red-400 animate-fadeIn">{passwordError}</span>}
                            {passwordMessage && <span className="text-sm text-green-600 dark:text-green-400 animate-fadeIn">{passwordMessage}</span>}
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;