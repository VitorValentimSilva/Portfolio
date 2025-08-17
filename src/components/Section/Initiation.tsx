import { IoArrowDown } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import SocialLinks from "../SocialLinks";
import { SOCIAL_LINKS } from "../../utils/socialLinks";

interface InitiationProps {
  name: string;
  description: string;
  technology: string[];
}

export default function Initiation({
  name,
  description,
  technology,
}: InitiationProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Início"
      className="flex flex-col items-center justify-center gap-11 h-[755px] md:h-[850px] px-4"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl md:text-7xl text-center font-bold">
          <span
            className={`${
              theme === "dark"
                ? "text-BackgroundLightTheme"
                : "text-BackgroundDarkTheme"
            }`}
          >
            Olá, eu sou o
          </span>
          <br />
          <span
            className={`${
              theme === "dark"
                ? "text-PrimaryDarkTheme/80"
                : "text-PrimaryLightTheme"
            }`}
          >
            {name}
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl w-full max-w-[600px] text-center ${
            theme === "dark"
              ? "text-SurfaceLightTheme"
              : "text-SurfaceDarkTheme"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {technology.map((item, idx) => (
          <button
            key={idx}
            className={`border rounded-full px-4 py-1.5 text-sm md:text-base font-semibold transition-transform duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-AccentDarkTheme/20 text-AccentDarkTheme/80 bg-PrimaryLightTheme/20 hover:bg-PrimaryDarkTheme/40"
                : "border-AccentLightTheme/20 text-AccentLightTheme bg-PrimaryDarkTheme/50 hover:bg-PrimaryLightTheme/40"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() =>
            document
              .getElementById("Projetos")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className={`inline-flex items-center gap-2 rounded-xl px-5 py-2 font-semibold transition-transform duration-300 hover:scale-105 ${
            theme === "dark"
              ? "bg-BackgroundDarkTheme/80 text-PrimaryDarkTheme hover:bg-SecondaryDarkTheme/80 hover:text-BackgroundDarkTheme"
              : "bg-BackgroundLightTheme text-PrimaryLightTheme hover:bg-SecondaryLightTheme/80 hover:text-BackgroundLightTheme"
          }`}
        >
          Ver Projetos
          <IoArrowDown />
        </button>
        <button
          onClick={() =>
            document
              .getElementById("Contato")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className={`rounded-xl px-5 py-2 font-semibold transition-transform duration-300 hover:scale-105 ${
            theme === "dark"
              ? "bg-BackgroundDarkTheme/40 text-SecondaryDarkTheme/90 hover:bg-AccentDarkTheme/70 hover:text-BackgroundLightTheme"
              : "bg-BackgroundLightTheme/60 text-SecondaryLightTheme hover:bg-AccentLightTheme/70 hover:text-BackgroundDarkTheme"
          }`}
        >
          Entre em Contato
        </button>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          <SocialLinks socialLinks={SOCIAL_LINKS} />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <IoArrowDown
          size={26}
          className={`animate-bounce ${
            theme === "dark"
              ? "text-BackgroundLightTheme/60"
              : "text-BackgroundDarkTheme/70"
          }`}
        />
      </div>
    </section>
  );
}
