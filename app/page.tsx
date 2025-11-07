import BetaForm from "@/src/Components/BetaForm";
import Features from "@/src/Components/Features";
import Hero from "@/src/Components/Hero";
import ThemeToggle from "@/src/Components/ThemeToggle";

export default function Home() {
  return (
    <>
      <nav className="navbar fixed top-0 z-50 bg-base-100/80 backdrop-blur">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-xl">
            OpenFly
          </a>
        </div>
        <div className="flex-none gap-2">
          <a href="#beta" className="btn btn-ghost">
            Бета
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <BetaForm />
      </main>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold">OpenFly</p>
          <p>Инструменты для осознанной жизни</p>
        </div>
        <div>
          <p>© 2025 OpenFly. Все права защищены.</p>
          <p className="link">support@openfly.app</p>
        </div>
      </footer>
    </>
  );
}
