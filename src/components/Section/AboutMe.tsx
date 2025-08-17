import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import TitleField from "../TitleField";

interface InfoItem {
  icon: ReactElement;
  title: string;
  description: string;
  iconClassDark: string;
  iconClassLight: string;
}

interface AboutMeProps {
  text: string[];
  information: InfoItem[];
}

export default function AboutMe({ text, information }: AboutMeProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Sobre"
      className="px-4 max-w-[1450px] mx-auto flex flex-col items-center md:px-6"
    >
      <TitleField title="Sobre Mim" />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20 py-12 w-full">
        <div className="flex-1 flex flex-col gap-6">
          {text.map((item, idx) => (
            <p
              key={idx}
              className={`text-base md:text-lg text-justify 
              ${
                theme === "dark"
                  ? "text-BackgroundLightTheme/90"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-8">
          {information.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex items-center gap-4 rounded-xl p-5 w-full max-w-[700px]
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
                className={`rounded-full p-2.5 animate-pulse shadow-xl 
                ${theme === "dark" ? item.iconClassDark : item.iconClassLight}`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className={`font-semibold text-xl text-justify 
                  ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme"
                      : "text-BackgroundDarkTheme"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-base text-justify 
                  ${
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
