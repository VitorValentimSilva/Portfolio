import { IoArrowDown } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import SocialLinks from "../SocialLinks";
import { SOCIAL_LINKS } from "../../utils/socialLinks";

interface InitiationProps {
  name: string;
  description: string;
  technology: Array<string>;
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
      className="flex flex-col items-center justify-center gap-11 h-[850px]"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-7xl text-center font-bold">
          <span
            className={`${
              theme === "dark"
                ? "text-BackgroundLightTheme"
                : "text-BackgroundDarkTheme"
            }`}
          >
            Olá, eu sou o
          </span>
          <br />{" "}
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
          className={`text-2xl w-[600px] text-center
          ${
            theme === "dark"
              ? "text-SurfaceLightTheme"
              : "text-SurfaceDarkTheme"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center gap-6">
        {technology.map((item, idx) => (
          <button
            key={idx}
            className={`border rounded-full px-5 py-2 text-base font-semibold transition-transform duration-300 hover:scale-105
            ${
              theme === "dark"
                ? "border-AccentDarkTheme/20 text-AccentDarkTheme/80 bg-PrimaryLightTheme/20 hover:bg-PrimaryDarkTheme/40"
                : "border-AccentLightTheme/20 text-AccentLightTheme bg-PrimaryDarkTheme/50 hover:bg-PrimaryLightTheme/40"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6">
        <button
          className={`inline-flex items-center gap-3 cursor-pointer rounded-xl px-5 py-2
                      transition-transform duration-300 hover:scale-105 font-semibold
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme/80 text-PrimaryDarkTheme hover:bg-SecondaryDarkTheme/80 hover:text-BackgroundDarkTheme"
                : "bg-BackgroundLightTheme text-PrimaryLightTheme hover:bg-SecondaryLightTheme/80 hover:text-BackgroundLightTheme"
            }`}
        >
          Ver Projetos
          <IoArrowDown />
        </button>
        <button
          className={`cursor-pointer rounded-xl px-5 py-2 transition-transform duration-300 hover:scale-105 font-semibold
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme/40 text-SecondaryDarkTheme/90 hover:bg-AccentDarkTheme/70 hover:text-BackgroundLightTheme"
                : "bg-BackgroundLightTheme/60 text-SecondaryLightTheme hover:bg-AccentLightTheme/70 hover:text-BackgroundDarkTheme"
            }`}
        >
          Entre em Contato
        </button>
      </div>

      <SocialLinks socialLinks={SOCIAL_LINKS} />

      <div className="flex justify-center">
        <IoArrowDown
          size={26}
          className={`mt-4 animate-bounce
            ${
              theme === "dark"
                ? "text-BackgroundLightTheme/60"
                : "text-BackgroundDarkTheme/70"
            }`}
        />
      </div>
    </section>
  );
}
