import { useTheme } from "../hooks/useTheme";
import { IoCode, IoHeartOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
import { SOCIAL_LINKS } from "../utils/socialLinks";

interface FooterProps {
  name: string;
  description: string;
}

export default function Footer({ name, description }: FooterProps) {
  const { theme } = useTheme();

  return (
    <footer
      className={` border-t
      ${
        theme === "dark"
          ? "border-t-BackgroundLightTheme"
          : "border-t-BackgroundDarkTheme"
      }`}
    >
      <section className="max-w-[1450px] w-full mx-auto">
        <div
          className={`grid grid-cols-3 items-center py-6 border-b 
          ${
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

          <SocialLinks socialLinks={SOCIAL_LINKS} />

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
        </div>

        <div className="flex items-center justify-center py-6">
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
        </div>
      </section>
    </footer>
  );
}
