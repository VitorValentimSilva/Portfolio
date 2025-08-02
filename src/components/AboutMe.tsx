import type { ReactElement } from "react";
import { useTheme } from "../hooks/useTheme";
import * as motion from "motion/react-client";
import TitleField from "./TitleField";

interface InfoItem {
  icon: ReactElement;
  title: string;
  description: string;
  iconClassDark: string;
  iconClassLight: string;
}

interface AboutMeProps {
  text: Array<string>;
  information: InfoItem[];
}

export default function AboutMe({ text, information }: AboutMeProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Sobre"
      className="max-w-[1450px] flex flex-col items-center m-auto"
    >
      <TitleField title="Sobre Mim" />

      <div className="flex items-center justify-between gap-20 py-12">
        <div className="flex flex-col items-center gap-8">
          {text.map((item, idx) => (
            <p
              key={idx}
              className={`text-lg text-justify ${
                theme === "dark"
                  ? "text-BackgroundLightTheme/90"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          {information.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex items-center gap-4 rounded-xl p-5 w-[700px]
                ${
                  theme === "dark"
                    ? "bg-SurfaceDarkTheme"
                    : "bg-SurfaceLightTheme"
                }`}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div
                className={`rounded-full p-2.5 animate-pulse shadow-xl ${
                  theme === "dark" ? item.iconClassDark : item.iconClassLight
                }`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className={`font-semibold text-justify text-xl ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme"
                      : "text-BackgroundDarkTheme"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-justify text-base ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme/70"
                      : "text-BackgroundDarkTheme/80"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
