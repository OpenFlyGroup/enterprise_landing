"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function CookieConsent() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => { // eslint-disable-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => { // eslint-disable-line react-hooks/set-state-in-effect
    if (mounted) {
      const consent = localStorage.getItem("cookieConsent");
      setShowBanner(!consent);
    }
  }, [mounted]);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-base-100 border-t border-base-300 shadow-lg"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-base-content/80 text-sm md:text-base max-w-2xl">
                {t("cookieConsent.message")}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={declineCookies}
                  className="btn btn-outline btn-sm md:btn-md"
                >
                  {t("cookieConsent.decline")}
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn btn-primary btn-sm md:btn-md"
                >
                  {t("cookieConsent.accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}