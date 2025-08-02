import type { ReactElement } from "react";
import TitleField from "./TitleField";
import { useTheme } from "../hooks/useTheme";

interface InfoItem {
  icon: ReactElement;
  title: string;
  information: Array<string>;
  iconClassDark: string;
  iconClassLight: string;
}

interface TechnologyProps {
  infoTechnology: InfoItem[];
}

export default function Technology({ infoTechnology }: TechnologyProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Tecnologias"
      className={`flex flex-col items-center gap-15 mt-12 py-12
      ${
        theme === "dark"
          ? "bg-BackgroundDarkTheme/40"
          : "bg-BackgroundLightTheme/40"
      }`}
    >
      <TitleField
        title="Tecnologias"
        description="Domino um conjunto diversificado de tecnologias modernas para criar soluções completas e eficientes"
      />

      <div className="flex items-center justify-between max-w-[1450px] w-full">
        {infoTechnology.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-3xl py-6 flex flex-col items-center justify-between
                        max-w-[300px] w-full h-[260px]
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme/80"
                : "bg-BackgroundLightTheme/80"
            }`}
          >
            <div
              className={`rounded-xl p-4 shadow-xl 
                ${theme === "dark" ? item.iconClassDark : item.iconClassLight}`}
            >
              {item.icon}
            </div>

            <p
              className={`text-lg font-semibold
              ${
                theme === "dark"
                  ? "text-BackgroundLightTheme"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              {item.title}
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              {item.information.map((itemInfo, idxInfo) => (
                <button
                  key={idxInfo}
                  className={`border rounded-full px-5 py-1.5 text-base font-semibold transition-transform duration-300 hover:scale-105
                  ${
                    theme === "dark"
                      ? "border-AccentDarkTheme/20 text-AccentDarkTheme/80 bg-PrimaryLightTheme/20 hover:bg-PrimaryDarkTheme/40"
                      : "border-AccentLightTheme/20 text-AccentLightTheme bg-PrimaryDarkTheme/50 hover:bg-PrimaryLightTheme/40"
                  }`}
                >
                  {itemInfo}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
