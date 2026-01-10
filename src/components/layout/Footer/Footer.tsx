"use client";

import Image from "next/image";
import logo from "@/public/brand/logo_horizontal.svg";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer-padding bg-base-100 border-t border-base-content/5">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <aside className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={logo}
              width={140}
              height={70}
              alt="OpenFly"
              className="opacity-80 hover:opacity-100 transition-opacity mb-4"
            />
            <p className="text-base-content/50 font-medium max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>
          </aside>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex gap-6 mb-6">
              <a
                href="https://github.com/OpenFlyGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest"
              >
                GitHub
              </a>
            </div>
            <p className="text-sm text-base-content/40">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
