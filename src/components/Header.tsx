import { useTheme } from "../hooks/useTheme";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

interface HeaderProps {
  name: string;
  nameItems: Array<string>;
}

export default function Header({ name, nameItems }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="max-w-[1450px] grid grid-cols-[1fr_auto_1fr] items-center m-auto mt-5">
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
          className={`rounded-full border p-1 cursor-pointer transition-transform duration-300 hover:scale-105
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme hover:text-SecondaryDarkTheme after:bg-SecondaryDarkTheme"
            : "text-BackgroundDarkTheme hover:text-SecondaryLightTheme after:bg-SecondaryLightTheme"
        }`}
        >
          {theme === "dark" ? (
            <IoMoonOutline className="w-6 h-6 text-secondary" />
          ) : (
            <IoSunnyOutline className="w-6 h-6 text-secondary" />
          )}
        </button>
      </div>
    </header>
  );
}
