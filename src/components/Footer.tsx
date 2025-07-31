import type { JSX } from "react";
import { useTheme } from "../hooks/useTheme";
import { IoCode, IoHeartOutline } from "react-icons/io5";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

interface FooterProps {
  name: string;
  description: string;
  socialLinks: SocialLink[];
}

export default function Footer({
  name,
  description,
  socialLinks,
}: FooterProps) {
  const { theme } = useTheme();

  return (
    <footer>
      <section className="max-w-7xl w-full mx-auto">
        <section
          className={`grid grid-cols-3 items-center py-6 border-b  ${
            theme === "dark"
              ? "border-b-BackgroundLightTheme"
              : "border-b-BackgroundDarkTheme"
          }`}
        >
          <div className="flex-row items-center justify-center">
            <button
              onClick={() => "#"}
              className={`cursor-pointer text-2xl font-bold transition-transform duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "text-PrimaryDarkTheme"
                  : "text-PrimaryLightTheme"
              }`}
            >
              {name}
            </button>
            <p
              className={`texte-base ${
                theme === "dark"
                  ? "text-SurfaceLightTheme"
                  : "text-SurfaceDarkTheme"
              }`}
            >
              {description}
            </p>
          </div>

          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((item, index) => (
              <button
                key={index}
                className={`rounded-full p-2.5 cursor-pointer transition-transform duration-300 hover:scale-105
                ${
                  theme === "dark"
                    ? "bg-BackgroundDarkTheme text-BackgroundLightTheme hover:bg-PrimaryDarkTheme"
                    : "bg-BackgroundLightTheme text-BackgroundDarkTheme hover:bg-PrimaryLightTheme"
                }`}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-end text-right">
            <p
              className={`flex items-center gap-1.5 text-base ${
                theme === "dark"
                  ? "text-BackgroundLightTheme"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              Feito com{" "}
              <IoHeartOutline
                className={`h-4 w-4 ${
                  theme === "dark"
                    ? "text-PrimaryDarkTheme"
                    : "text-PrimaryLightTheme"
                }`}
              />{" "}
              e{" "}
              <IoCode
                className={`h-4 w-4 ${
                  theme === "dark"
                    ? "text-SecondaryDarkTheme"
                    : "text-SecondaryLightTheme"
                }`}
              />
            </p>
            <p
              className={`text-sm text-muted-foreground ${
                theme === "dark"
                  ? "text-BackgroundLightTheme"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              © 2025 {name}. Todos os direitos reservados.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center py-6">
          <button
            className={`cursor-pointer border rounded-full px-8 py-2 font-semibold transition-transform duration-300 hover:scale-105 
            ${
              theme === "dark"
                ? "text-AccentDarkTheme border-AccentDarkTheme hover:bg-AccentDarkTheme hover:text-BackgroundLightTheme"
                : "text-AccentLightTheme border-AccentLightTheme hover:bg-AccentLightTheme hover:text-BackgroundDarkTheme"
            }`}
          >
            Voltar ao Topo
          </button>
        </section>
      </section>
    </footer>
  );
}
