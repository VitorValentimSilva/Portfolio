import { MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";
import { SunIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  name: string;
  nameItems: Array<string>;
}

export default function Header({ name, nameItems }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="max-w-7xl flex items-center justify-between m-auto mt-4">
      <button
        onClick={() => "#"}
        className={`cursor-pointer text-2xl font-bold transition-transform duration-300 hover:scale-105
        ${
          theme === "dark" ? "text-PrimaryDarkTheme" : "text-PrimaryLightTheme"
        }`}
      >
        {name}
      </button>

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

      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={`rounded-full border p-1 cursor-pointer transition-transform duration-300 hover:scale-105
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme hover:text-SecondaryDarkTheme after:bg-SecondaryDarkTheme"
            : "text-BackgroundDarkTheme hover:text-SecondaryLightTheme after:bg-SecondaryLightTheme"
        }`}
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6 text-secondary" />
        ) : (
          <MoonIcon className="w-6 h-6 text-secondary" />
        )}
      </button>
    </header>
  );
}
