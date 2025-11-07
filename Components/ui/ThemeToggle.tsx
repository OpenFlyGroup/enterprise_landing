// "use client";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <label className="toggle text-base-content">
      <input type="checkbox" value="light" className="theme-controller" />
      <Sun className="swap-on w-5 h-5" />
      <Moon className="swap-off w-5 h-5" />
    </label>
  );
}
