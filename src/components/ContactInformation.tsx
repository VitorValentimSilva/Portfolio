import type { ReactElement } from "react";
import { useTheme } from "../hooks/useTheme";

interface ContactInformationProps {
  icon: ReactElement;
  iconClassDark: string;
  iconClassLight: string;
  title: string;
  description: string;
}

export default function ContactInformation({
  icon,
  iconClassDark,
  iconClassLight,
  title,
  description,
}: ContactInformationProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex gap-5 items-center rounded-2xl p-4
      ${
        theme === "dark"
          ? "bg-BackgroundDarkTheme/80"
          : "bg-BackgroundLightTheme/80"
      }`}
    >
      <div
        className={`rounded-full p-1.5
        ${theme === "dark" ? iconClassDark : iconClassLight}`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h4
          className={`text-xl font-semibold
          ${
            theme === "dark"
              ? "text-BackgroundLightTheme"
              : "text-BackgroundDarkTheme"
          }`}
        >
          {title}
        </h4>

        <p
          className={`text-base
            ${
              theme === "dark"
                ? "text-BackgroundLightTheme/50"
                : "text-BackgroundDarkTheme/50"
            }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
