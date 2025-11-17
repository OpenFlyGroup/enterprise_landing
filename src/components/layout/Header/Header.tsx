"use client";
import Image from "next/image";
import logo from "@/public/brand/logo_horizontal.svg";
import Link from "next/link";
import ThemeToggle from "@/src/shared/ui/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type TNavLink = {
  id: string;
  url: string;
  text: string;
};

const NavLinks: TNavLink[] = [
  { id: "0", url: "#about", text: "About us" },
  { id: "1", url: "#ourMission", text: "Mission" },
  { id: "2", url: "#projects", text: "Projects" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="navbar px-4 md:px-8 bg-base-100/80 backdrop-blur-lg border-b border-base-200/50">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="OpenFly"
              width={150}
              height={100}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="btn btn-ghost btn-lg text-base font-medium transition-colors"
            >
              {link.text}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-square"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-lg border-b border-base-300 shadow-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-2">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="py-3 px-4 text-lg font-medium rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
