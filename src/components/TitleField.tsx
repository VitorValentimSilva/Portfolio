import { useTheme } from "../hooks/useTheme";

interface TitleFieldProps {
  title: string;
  description?: string;
}

export default function TitleField({ title, description }: TitleFieldProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
      <h2
        className={`inline-block text-3xl font-bold border-b-4 pb-4 text-center md:text-5xl
        ${
          theme === "dark" ? "text-PrimaryDarkTheme" : "text-PrimaryLightTheme"
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-center text-base px-6 md:w-2xl md:text-lg
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme/60"
            : "text-BackgroundDarkTheme/60"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
