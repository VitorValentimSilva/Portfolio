import type { ReactElement } from "react";
import { useTheme } from "../hooks/useTheme";

interface SubTitleFieldProps {
  icon?: ReactElement;
  iconClassDark?: string;
  iconClassLight?: string;
  title: string;
}

export default function SubTitleField({
  icon,
  title,
  iconClassDark,
  iconClassLight,
}: SubTitleFieldProps) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <p className={` ${theme === "dark" ? iconClassDark : iconClassLight}`}>
        {icon}
      </p>

      <h4
        className={`text-xl md:text-3xl font-bold
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme"
            : "text-BackgroundDarkTheme"
        }
      `}
      >
        {title}
      </h4>
    </div>
  );
}
