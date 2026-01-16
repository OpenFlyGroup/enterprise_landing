"use client";
import Image from "next/image";
import logo from "@/public/brand/logo_horizontal.svg";
import { Link } from "@/src/i18n/routing";
import ThemeToggle from "@/src/shared/ui/ThemeToggle";
import LanguageToggle from "@/src/shared/ui/LanguageToggle";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type TNavLink = {
  id: string;
  url: string;
  text: string;
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for background
      setScrolled(currentScrollY > 20);

      // Visibility state for hiding/showing
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLinks: TNavLink[] = [
    { id: "0", url: "/#about", text: t("aboutUs") },
    { id: "1", url: "/#ourMission", text: t("mission") },
    { id: "2", url: "/#projects", text: t("navProjects") },
    // { id: "3", url: "/#charity", text: t("charity.sectionTitle") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
        scrolled ? "py-4" : "py-8"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="mx-auto max-w-7xl relative flex items-center justify-between">
        <div className="shrink-0">
          <Link href="/" className="flex items-center group">
            <Image
              src={logo}
              alt="OpenFly"
              width={130}
              height={80}
              className="h-7 w-auto md:h-8 group-hover:scale-105 transition-transform"
              priority
            />
          </Link>
        </div>
        <div
          className={`glass rounded-full p-1 flex items-center justify-between shadow-2xl transition-all duration-300 self-center ${
            scrolled ? "bg-base-100/90" : "bg-base-100/40"
          }`}
        >
          <div className="hidden md:flex items-center gap-2">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest opacity-60 hover:opacity-100 hover:bg-base-content/5 transition-all"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-base-content/5 transition-colors"
              aria-label={mobileMenuOpen ? t("close") : t("menu")}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 bg-base-100/98 backdrop-blur-2xl md:hidden flex flex-col pt-32 px-6 h-screen"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-10 -z-10" />

            <div className="flex flex-col gap-6">
              {NavLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.url}
                    className="text-5xl font-black uppercase tracking-tighter hover:text-primary transition-colors flex items-center justify-between group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.text}</span>
                    <X className="w-8 h-8 opacity-0 group-hover:opacity-100 -rotate-45 transition-all text-primary" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-12 flex flex-col gap-8 pt-8 border-t border-base-content/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold opacity-40 uppercase tracking-widest text-xs">
                  Settings
                </span>
                <div className="flex items-center gap-4">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-bold opacity-30 uppercase tracking-[0.2em]">
                <span>OpenFly &copy; 2026</span>
                <span>Siberia with Love</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
