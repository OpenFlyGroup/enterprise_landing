"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/src/i18n/routing';
import { motion } from 'motion/react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: 'en' | 'ru') => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="relative inline-flex bg-base-content/5 rounded-full p-1 cursor-pointer select-none">
      <motion.div
        className="absolute h-full top-0 bg-primary/20 rounded-full"
        initial={false}
        animate={{
          left: locale === 'en' ? '0%' : '50%',
          width: '50%'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      
      <button
        onClick={() => handleLanguageChange('en')}
        className={`relative z-10 px-4 py-1.5 text-xs font-black transition-colors ${
          locale === 'en' ? 'text-primary' : 'text-base-content/50 hover:text-base-content/80'
        }`}
      >
        EN
      </button>
      
      <button
        onClick={() => handleLanguageChange('ru')}
        className={`relative z-10 px-4 py-1.5 text-xs font-black transition-colors ${
          locale === 'ru' ? 'text-primary' : 'text-base-content/50 hover:text-base-content/80'
        }`}
      >
        RU
      </button>
    </div>
  );
}