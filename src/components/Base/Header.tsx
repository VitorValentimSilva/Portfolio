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
      className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-sm md:px-6
        ${scrolled ? "border-b shadow-lg" : "bg-transparent"}
        ${
          theme === "dark"
            ? "bg-BackgroundDarkTheme/50 border-BackgroundLightTheme/50 shadow-BackgroundLightTheme/15"
            : "bg-BackgroundLightTheme/50 border-BackgroundDarkTheme/50 shadow-BackgroundDarkTheme/15"
        }`}
    >
      <header className="max-w-[1450px] mx-auto flex items-center justify-between py-4 px-4 md:px-0">
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

        <div className="flex gap-2 items-center md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full cursor-pointer border p-1 transition-transform duration-300 hover:scale-105
            ${
              theme === "dark"
                ? "text-BackgroundLightTheme hover:text-SecondaryDarkTheme"
                : "text-BackgroundDarkTheme hover:text-SecondaryLightTheme"
            }`}
          >
            {theme === "dark" ? (
              <IoMoonOutline size={18} />
            ) : (
              <IoSunnyOutline size={18} />
            )}
          </button>

          <button
            className={`text-2xl p-2
            ${
              theme === "dark"
                ? "text-BackgroundLightTheme"
                : "text-BackgroundDarkTheme"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        <nav
          className={`
            fixed top-0 left-0 w-full h-full mt-15 md:mt-0
            transform transition-transform duration-200
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none md:flex
          `}
        >
          <ul
            className={`flex flex-col md:flex-row gap-4 py-3 pl-6 md:p-0 rounded-b-lg
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme md:bg-transparent"
                : "bg-BackgroundLightTheme md:bg-transparent"
            }`}
          >
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

            <li className="hidden md:block">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`rounded-full cursor-pointer border p-1.5 transition-transform duration-300 hover:scale-105
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
