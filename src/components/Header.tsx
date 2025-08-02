import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

interface HeaderProps {
  name: string;
  nameItems: Array<string>;
}

export default function Header({ name, nameItems }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-200
        backdrop-blur-sm 
        ${scrolled ? "border-b shadow-lg" : "bg-transparent"}
        ${
          theme === "dark"
            ? "bg-BackgroundDarkTheme/50 border-BackgroundLightTheme/50 shadow-BackgroundLightTheme/15"
            : "bg-BackgroundLightTheme/50 border-BackgroundDarkTheme/50 shadow-BackgroundDarkTheme/15"
        }`}
    >
      <header className="max-w-[1450px] grid grid-cols-[1fr_auto_1fr] items-center m-auto py-4">
        <div className="justify-self-start">
          <button
            onClick={() => "#"}
            className={`cursor-pointer text-2xl font-bold transition-transform duration-300 hover:scale-105
        ${
          theme === "dark" ? "text-PrimaryDarkTheme" : "text-PrimaryLightTheme"
        }`}
          >
            {name}
          </button>
        </div>

        <div className="justify-self-center">
          <nav>
            <ul className="flex items-center gap-8">
              {nameItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item}`}
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
            </ul>
          </nav>
        </div>

        <div className="justify-self-end">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full border p-1.5 cursor-pointer transition-transform duration-300 hover:scale-105
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme hover:text-SecondaryDarkTheme after:bg-SecondaryDarkTheme"
            : "text-BackgroundDarkTheme hover:text-SecondaryLightTheme after:bg-SecondaryLightTheme"
        }`}
          >
            {theme === "dark" ? (
              <IoMoonOutline size={20} />
            ) : (
              <IoSunnyOutline size={20} />
            )}
          </button>
        </div>
      </header>
    </div>
  );
}
