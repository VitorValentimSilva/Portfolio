import type { ReactElement } from "react";
import { useTheme } from "../hooks/useTheme";

interface ContactInformationProps {
  icon: ReactElement;
  iconClassDark: string;
  iconClassLight: string;
  title: string;
  description: string;
  href: string;
}

export default function ContactInformation({
  icon,
  iconClassDark,
  iconClassLight,
  title,
  description,
  href,
}: ContactInformationProps) {
  const { theme } = useTheme();

  return (
    <a
      className={`cursor-pointer flex gap-5 items-center rounded-2xl p-4 transition-transform duration-300 hover:scale-105
      ${
        theme === "dark"
          ? "bg-BackgroundDarkTheme/80"
          : "bg-BackgroundLightTheme/80"
      }`}
      target="_blank"
      href={href}
    >
      <div
        className={`rounded-full p-1.5
        ${theme === "dark" ? iconClassDark : iconClassLight}`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h4
          className={`text-lg font-semibold md:text-xl
          ${
            theme === "dark"
              ? "text-BackgroundLightTheme"
              : "text-BackgroundDarkTheme"
          }`}
        >
          {title}
        </h4>

        <p
          className={`text-sm md:text-base
          ${
            theme === "dark"
              ? "text-BackgroundLightTheme/50"
              : "text-BackgroundDarkTheme/50"
          }`}
        >
          {description}
        </p>
      </div>
    </a>
  );
}
