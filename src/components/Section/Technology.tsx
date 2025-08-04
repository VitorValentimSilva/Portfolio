import type { ReactElement } from "react";
import { useTheme } from "../../hooks/useTheme";
import TitleField from "../TitleField";
import * as motion from "motion/react-client";

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
      className={`flex flex-col items-center gap-15 mt-16 pt-12 pb-18 shadow-xl
      ${
        theme === "dark"
          ? "bg-BackgroundDarkTheme/40 shadow-BackgroundLightTheme/25"
          : "bg-BackgroundLightTheme/40 shadow-BackgroundDarkTheme/25"
      }`}
    >
      <TitleField
        title="Tecnologias"
        description="Domino um conjunto diversificado de tecnologias modernas para criar soluções completas e eficientes"
      />

      <div className="flex items-center flex-wrap gap-8 justify-between px-6 max-w-[1498px] w-full">
        {infoTechnology.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`rounded-3xl py-6 flex gap-6 flex-col items-center justify-between
                        w-full md:h-[260px] md:max-w-[300px]
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme/80"
                : "bg-BackgroundLightTheme/80"
            }`}
          >
            <div
              className={`rounded-xl p-3.5 md:p-4 shadow-xl 
              ${theme === "dark" ? item.iconClassDark : item.iconClassLight}`}
            >
              {item.icon}
            </div>

            <p
              className={`text-base font-semibold md:text-lg
              ${
                theme === "dark"
                  ? "text-BackgroundLightTheme"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              {item.title}
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              {item.information.map((tech, idxTech) => (
                <button
                  key={idxTech}
                  className={`border rounded-full px-5 py-1.5 text-sm font-semibold transition-transform duration-300 hover:scale-105 md:text-base
                  ${
                    theme === "dark"
                      ? "border-AccentDarkTheme/20 text-AccentDarkTheme/80 bg-PrimaryLightTheme/20 hover:bg-PrimaryDarkTheme/40"
                      : "border-AccentLightTheme/20 text-AccentLightTheme bg-PrimaryDarkTheme/50 hover:bg-PrimaryLightTheme/40"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
