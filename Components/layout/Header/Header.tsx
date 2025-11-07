import Image from "next/image";
import ThemeToggle from "../../ui/ThemeToggle";
import logo from "@/public/brand/logo_horizontal.svg";
import Link from "next/link";

type TNavLink = {
  id: string;
  url: string;
  text: string;
  style?: string;
};

const NavLinks: TNavLink[] = [
  {
    id: "0",
    url: "#about",
    text: "About us",
  },
  {
    id: "1",
    url: "#ourMission",
    text: "Mission",
  },
  {
    id: "2",
    url: "#projects",
    text: "Projects",
  },
];

const Header = () => {
  return (
    <header>
      <nav className="navbar p-8 fixed top-0 z-50 bg-base-100/80 backdrop-blur">
        <div className="flex-1">
          <Link href="/">
            <Image src={logo} alt="OpenFly" width={150} height={100} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={link.style ?? "btn btn-lg btn-ghost"}
            >
              {link.text}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
