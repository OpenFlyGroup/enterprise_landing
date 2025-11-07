import Image from "next/image";
import logo from "@/public/brand/logo_horizontal.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-8 bg-base-100 text-base-content">
      <aside>
        <Image src={logo} width={150} height={80} alt="OpenFly" />
        <p>Tools for a conscious life</p>
      </aside>
      <div>
        <p>© 2025 OpenFly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
