import React, { useState, useEffect } from 'react';
import { UsersIcon, DollarSignIcon } from './Icons';
import { Translation } from '../types';

interface AnimatedNumberProps {
  value: number;
  isCurrency?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, isCurrency = false }) => {
  const formattedValue = isCurrency ? value.toLocaleString() : value.toString();
  return (
    <span key={value} className="animate-numberFlip inline-block">
      {formattedValue}
    </span>
  );
};

interface ActivityTickerProps {
  t: Translation;
}

const ActivityTicker: React.FC<ActivityTickerProps> = ({ t }) => {
  const [activity, setActivity] = useState({ subs: 127, savings: 2540 });

  useEffect(() => {
    let timeoutId: number;
    const updateActivity = () => {
      setActivity(prev => ({
        subs: prev.subs + Math.floor(Math.random() * 2) + 1,
        savings: prev.savings + (Math.floor(Math.random() * 40) + 10),
      }));
      const randomInterval = Math.random() * (12000 - 4000) + 4000;
      timeoutId = window.setTimeout(updateActivity, randomInterval);
    };

    timeoutId = window.setTimeout(updateActivity, Math.random() * 5000 + 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex items-center justify-center md:justify-end space-x-4 text-xs">
      <div className="flex items-center space-x-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="font-semibold">{t.liveActivity}</span>
      </div>
      <div className="flex items-center space-x-1.5">
        <UsersIcon size={16} className="text-[var(--accent-color)]" />
        <span><AnimatedNumber value={activity.subs} /> <span>{t.activeSubs}</span></span>
      </div>
      <div className="flex items-center space-x-1.5">
        <DollarSignIcon size={16} className="text-green-500" />
        <span>{t.totalSavings}:</span>
        <span className="font-mono">$<AnimatedNumber value={activity.savings} isCurrency /></span>
      </div>
    </div>
  );
};

export default ActivityTicker;