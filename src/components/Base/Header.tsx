import { useEffect, useState } from "react";
import {
  IoMoonOutline,
  IoSunnyOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";

interface HeaderProps {
  name: string;
  nameItems: string[];
}

export default function Header({ name, nameItems }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-sm
        ${scrolled ? "border-b shadow-lg" : "bg-transparent"}
        ${
          theme === "dark"
            ? "bg-BackgroundDarkTheme/50 border-BackgroundLightTheme/50 shadow-BackgroundLightTheme/15"
            : "bg-BackgroundLightTheme/50 border-BackgroundDarkTheme/50 shadow-BackgroundDarkTheme/15"
        }`}
    >
      <header className="max-w-[1450px] mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* LOGO */}
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-2xl font-bold transition-transform duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "text-PrimaryDarkTheme"
                  : "text-PrimaryLightTheme"
              }`}
          >
            {name}
          </button>
        </div>

        {/* HAMBURGUER (mobile) */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* NAV LINKS */}
        <nav
          className={`
            fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40
            transform transition-transform duration-200
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:bg-transparent md:backdrop-blur-none md:flex
          `}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-0">
            {nameItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg relative inline-block hover:after:w-full
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:h-[2px] after:w-0 after:transition-all after:duration-300
                    ${
                      theme === "dark"
                        ? "text-BackgroundLightTheme hover:text-AccentDarkTheme after:bg-AccentDarkTheme"
                        : "text-BackgroundDarkTheme hover:text-AccentLightTheme after:bg-AccentLightTheme"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
            {/* THEME TOGGLE */}
            <li>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`rounded-full border p-1.5 transition-transform duration-300 hover:scale-105
                  ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme hover:text-SecondaryDarkTheme"
                      : "text-BackgroundDarkTheme hover:text-SecondaryLightTheme"
                  }`}
              >
                {theme === "dark" ? (
                  <IoMoonOutline size={20} />
                ) : (
                  <IoSunnyOutline size={20} />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
