import React from 'react';
import { Translation } from '../types';
import { GdprShieldIcon, ShieldLockIcon } from './Icons';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="mt-16 py-8 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm mb-6">
            <p>{t.copyright(new Date().getFullYear())}</p>
            <span className="hidden sm:inline text-gray-400 dark:text-gray-600">|</span>
            <a href="mailto:support@auratech.dev" className="hover:text-[var(--accent-color)] transition-colors">{t.contactUs}</a>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
            <h4 className="text-xs uppercase font-semibold tracking-wider mb-4 text-gray-500 dark:text-gray-500">Security & Compliance</h4>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
                <div title="Secure Sockets Layer/Transport Layer Security" className="flex items-center space-x-2 filter grayscale opacity-70">
                    <ShieldLockIcon size={18} />
                    <span className="text-xs font-medium">Secure SSL/TLS</span>
                </div>
                <div title="General Data Protection Regulation Compliant" className="flex items-center space-x-2 filter grayscale opacity-70">
                    <GdprShieldIcon size={18} />
                    <span className="text-xs font-medium">GDPR Compliant</span>
                </div>
                 <div title="Powered by Amazon Web Services" className="flex items-center space-x-2 filter grayscale opacity-70">
                    <span className="text-xs font-medium">Powered by AWS</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;