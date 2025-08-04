import { IoCode, IoHeartOutline } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import SocialLinks from "../SocialLinks";
import { SOCIAL_LINKS } from "../../utils/socialLinks";

interface FooterProps {
  name: string;
  description: string;
}

export default function Footer({ name, description }: FooterProps) {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t md:px-6
      ${
        theme === "dark"
          ? "border-t-BackgroundLightTheme/50 bg-BackgroundDarkTheme/50"
          : "border-t-BackgroundDarkTheme/50 bg-BackgroundLightTheme/50"
      }`}
    >
      <section className="max-w-[1450px] w-full mx-auto">
        <div
          className={`grid grid-cols-1 items-center py-4 border-b md:grid-cols-3 md:py-6
          ${
            theme === "dark"
              ? "border-b-BackgroundLightTheme/70"
              : "border-b-BackgroundDarkTheme/70"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-1 mb-4 md:block md:flex-row md:space-y-0 md:space-x-4 md:mb-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`cursor-pointer text-xl font-bold transition-transform duration-300 hover:scale-105 md:text-2xl
              ${
                theme === "dark"
                  ? "text-PrimaryDarkTheme"
                  : "text-PrimaryLightTheme"
              }`}
            >
              {name}
            </button>
            <p
              className={`text-sm md:text-base
              ${
                theme === "dark"
                  ? "text-SurfaceLightTheme"
                  : "text-SurfaceDarkTheme"
              }`}
            >
              {description}
            </p>
          </div>

          <SocialLinks socialLinks={SOCIAL_LINKS} />

          <div className="flex flex-col items-center tex-center m-auto mt-4 md:items-end md:text-right md:m-0">
            <p
              className={`flex items-center gap-1.5 text-sm md:texte-base ${
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
              className={`text-muted-foreground text-xs md:text-sm ${
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`cursor-pointer border rounded-full px-5 py-1 font-semibold transition-transform duration-300 hover:scale-105 md:px-8 md:py-2
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
