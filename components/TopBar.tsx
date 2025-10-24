import React from 'react';
import SessionInfo from './SessionInfo';
import ActivityTicker from './ActivityTicker';
import { Translation } from '../types';

interface TopBarProps {
    t: Translation;
}

const TopBar: React.FC<TopBarProps> = ({ t }) => {
    return (
        <div className="bg-slate-100 dark:bg-black/20 text-gray-600 dark:text-gray-400 animate-fadeInDown border-b border-black/5 dark:border-white/5">
            <div className="container mx-auto px-4 py-2 md:py-0 md:h-8 flex flex-col md:flex-row justify-between items-center">
                {/* On mobile, add padding-bottom and a border to create space and a visual line */}
                <div className="w-full md:w-auto pb-1.5 md:pb-0 border-b border-slate-200 dark:border-white/10 md:border-none">
                    <SessionInfo t={t} />
                </div>
                {/* On mobile, add padding-top */}
                <div className="w-full md:w-auto pt-1.5 md:pt-0">
                    <ActivityTicker t={t} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;