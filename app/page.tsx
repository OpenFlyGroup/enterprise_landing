"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect user's preferred language
    const userLanguage = navigator.language.startsWith('ru') ? 'ru' : 'en';
    router.replace(`/${userLanguage}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}